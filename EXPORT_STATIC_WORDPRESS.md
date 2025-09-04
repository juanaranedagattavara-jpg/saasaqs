# 📦 Export Estático y Migración WordPress - QSP SaaS

## 🚀 Export Estático (Next.js)

### Configuración para Export Estático

1. **Actualizar next.config.ts**:
```typescript
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  // Deshabilitar API routes para export estático
  experimental: {
    appDir: true
  }
}

export default nextConfig
```

2. **Comando de Build**:
```bash
npm run build
```

3. **Resultado**: Carpeta `out/` con archivos estáticos listos para hosting

### Hosting Estático Recomendado

- **Vercel**: `vercel --prod`
- **Netlify**: Drag & drop de carpeta `out/`
- **GitHub Pages**: Push a branch `gh-pages`
- **AWS S3**: Upload de carpeta `out/`

## 🔄 Migración a WordPress

### Estrategia de Migración

#### Opción 1: Tema Personalizado WordPress

1. **Crear tema hijo**:
```php
// style.css
/*
Theme Name: QSP SaaS Child
Template: qsp-saas
Version: 1.0.0
*/

@import url("../qsp-saas/style.css");
```

2. **Estructura de archivos**:
```
wp-content/themes/qsp-saas/
├── style.css
├── index.php
├── functions.php
├── page-dashboard.php
├── page-reportes.php
├── template-parts/
│   ├── header.php
│   ├── footer.php
│   ├── sidebar.php
│   └── components/
│       ├── kpi-card.php
│       ├── trend-chart.php
│       └── top-table.php
├── assets/
│   ├── css/
│   ├── js/
│   └── images/
└── inc/
    ├── customizer.php
    └── widgets.php
```

#### Opción 2: Plugin Personalizado

1. **Crear plugin**:
```php
<?php
/**
 * Plugin Name: QSP SaaS Dashboard
 * Description: Dashboard de comercio exterior
 * Version: 1.0.0
 */

// Prevenir acceso directo
if (!defined('ABSPATH')) {
    exit;
}

// Incluir archivos del plugin
require_once plugin_dir_path(__FILE__) . 'includes/class-qsp-dashboard.php';

// Inicializar plugin
function qsp_saas_init() {
    new QSP_Dashboard();
}
add_action('plugins_loaded', 'qsp_saas_init');
```

### Conversión de Componentes

#### 1. KpiCard (React → PHP)
```php
// template-parts/components/kpi-card.php
function render_kpi_card($data) {
    $icon_class = get_icon_class($data['icon']);
    $change_class = get_change_class($data['changeType']);
    
    echo '<div class="kpi-card">';
    echo '<div class="kpi-header">';
    echo '<h3>' . esc_html($data['title']) . '</h3>';
    echo '<i class="' . $icon_class . '"></i>';
    echo '</div>';
    echo '<div class="kpi-value">' . esc_html($data['value']) . '</div>';
    echo '<div class="kpi-change ' . $change_class . '">';
    echo '<span>' . ($data['changeType'] === 'increase' ? '+' : '') . $data['change'] . '%</span>';
    echo '<span class="period">' . esc_html($data['period']) . '</span>';
    echo '</div>';
    echo '</div>';
}
```

#### 2. TrendChart (Recharts → Chart.js)
```javascript
// assets/js/dashboard.js
function renderTrendChart(data) {
    const ctx = document.getElementById('trendChart').getContext('2d');
    
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: data.map(item => item.month),
            datasets: [
                {
                    label: 'Exportaciones',
                    data: data.map(item => item.exportaciones),
                    borderColor: '#00c2b8',
                    backgroundColor: 'rgba(0, 194, 184, 0.1)',
                    tension: 0.4
                },
                {
                    label: 'Importaciones',
                    data: data.map(item => item.importaciones),
                    borderColor: '#d4a253',
                    backgroundColor: 'rgba(212, 162, 83, 0.1)',
                    tension: 0.4
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'top',
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        callback: function(value) {
                            return '$' + value + 'M';
                        }
                    }
                }
            }
        }
    });
}
```

### Base de Datos WordPress

#### 1. Tablas Personalizadas
```sql
-- Tabla de KPIs
CREATE TABLE wp_qsp_kpis (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    value VARCHAR(50) NOT NULL,
    change DECIMAL(5,2) NOT NULL,
    change_type ENUM('increase', 'decrease', 'neutral') NOT NULL,
    period VARCHAR(100) NOT NULL,
    icon VARCHAR(50) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Tabla de Reportes
CREATE TABLE wp_qsp_reports (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    type ENUM('exportaciones', 'importaciones', 'saldo', 'productos', 'paises') NOT NULL,
    period VARCHAR(100) NOT NULL,
    status ENUM('completed', 'processing', 'failed') DEFAULT 'processing',
    download_url VARCHAR(500),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

#### 2. Custom Post Types
```php
// functions.php
function qsp_register_post_types() {
    register_post_type('qsp_report', array(
        'labels' => array(
            'name' => 'Reportes',
            'singular_name' => 'Reporte'
        ),
        'public' => true,
        'has_archive' => true,
        'supports' => array('title', 'editor', 'custom-fields'),
        'menu_icon' => 'dashicons-chart-line'
    ));
}
add_action('init', 'qsp_register_post_types');
```

### APIs WordPress

#### 1. REST API Endpoints
```php
// functions.php
function qsp_register_api_routes() {
    register_rest_route('qsp/v1', '/dashboard', array(
        'methods' => 'GET',
        'callback' => 'qsp_get_dashboard_data',
        'permission_callback' => '__return_true'
    ));
    
    register_rest_route('qsp/v1', '/reports', array(
        'methods' => 'GET',
        'callback' => 'qsp_get_reports',
        'permission_callback' => '__return_true'
    ));
}
add_action('rest_api_init', 'qsp_register_api_routes');

function qsp_get_dashboard_data($request) {
    $kpis = get_option('qsp_kpis', array());
    $trend_data = get_option('qsp_trend_data', array());
    
    return new WP_REST_Response(array(
        'success' => true,
        'data' => array(
            'kpis' => $kpis,
            'trendData' => $trend_data
        )
    ), 200);
}
```

### Migración de Estilos

#### 1. CSS Personalizado
```css
/* style.css */
:root {
    --qsp-bg: #0b0f14;
    --qsp-panel: #10161e;
    --qsp-ink: #e9eef5;
    --qsp-muted: #9fb1c4;
    --qsp-brand: #00c2b8;
    --qsp-accent: #d4a253;
    --qsp-radius: 1rem;
}

.qsp-dashboard {
    background-color: var(--qsp-bg);
    color: var(--qsp-ink);
    min-height: 100vh;
}

.qsp-kpi-card {
    background-color: var(--qsp-panel);
    border-radius: var(--qsp-radius);
    padding: 1.5rem;
    border: 1px solid rgba(255, 255, 255, 0.1);
}

.qsp-kpi-value {
    font-size: 2rem;
    font-weight: 700;
    color: var(--qsp-ink);
    margin: 0.5rem 0;
}
```

### Plugins Recomendados

1. **Advanced Custom Fields (ACF)**: Para campos personalizados
2. **Custom Post Type UI**: Para tipos de contenido
3. **WP REST API**: Para APIs
4. **Chart.js**: Para gráficos
5. **Bootstrap**: Para grid system

### Plan de Migración Paso a Paso

#### Fase 1: Setup WordPress
1. Instalar WordPress
2. Crear tema hijo
3. Configurar estructura de archivos
4. Migrar estilos CSS

#### Fase 2: Componentes
1. Convertir componentes React a PHP
2. Implementar JavaScript para interactividad
3. Configurar Chart.js para gráficos
4. Crear shortcodes para componentes

#### Fase 3: Datos
1. Crear tablas personalizadas
2. Migrar datos mock
3. Configurar APIs REST
4. Implementar CRUD operations

#### Fase 4: Funcionalidades
1. Sistema de reportes
2. Formularios de contacto
3. Dashboard interactivo
4. Optimización SEO

### Comandos de Migración

```bash
# 1. Exportar datos de Next.js
npm run build
cp -r out/ ../wordpress-migration/

# 2. Convertir componentes
node scripts/convert-components.js

# 3. Generar archivos PHP
node scripts/generate-php-templates.js

# 4. Optimizar imágenes
npm run optimize-images
```

### Consideraciones Técnicas

#### Ventajas de WordPress
- ✅ CMS completo
- ✅ SEO nativo
- ✅ Plugins extensos
- ✅ Comunidad grande
- ✅ Hosting económico

#### Desventajas
- ❌ Menos performance
- ❌ Más complejidad
- ❌ Dependencias PHP
- ❌ Menos flexibilidad

#### Recomendación
- **MVP**: Mantener Next.js
- **Escalabilidad**: Migrar a WordPress
- **Híbrido**: Next.js + WordPress API

### URLs de Referencia

- **WordPress Codex**: https://codex.wordpress.org/
- **REST API**: https://developer.wordpress.org/rest-api/
- **Custom Post Types**: https://developer.wordpress.org/themes/functionality/custom-post-types/
- **Chart.js**: https://www.chartjs.org/
- **ACF**: https://www.advancedcustomfields.com/
