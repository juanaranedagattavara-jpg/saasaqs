# 🚀 QSP SaaS - Dashboard de Comercio Exterior

> Plataforma premium para análisis y reportes de comercio exterior con estética Bloomberg + Apple

## 📋 Descripción

QSP SaaS es una aplicación Next.js moderna que proporciona dashboards profesionales para empresas exportadoras e importadoras. Diseñada con estética premium y optimizada para performance, ofrece análisis en tiempo real de datos de comercio exterior.

## ✨ Características

- 🎨 **Diseño Premium**: Estética Bloomberg + Apple con dark mode
- 📊 **Dashboards Interactivos**: KPIs, gráficos y tablas de tendencias
- 📱 **Responsive**: Mobile-first design
- ⚡ **Performance**: Lighthouse móvil ≥95
- ♿ **Accesible**: Cumple estándares AA
- 🔧 **TypeScript**: Código type-safe
- 🎯 **SEO Optimizado**: Metadata completa

## 🛠️ Stack Tecnológico

- **Framework**: Next.js 15.5.2 (App Router)
- **Lenguaje**: TypeScript (estricto)
- **Estilos**: Tailwind CSS v4 + tokens personalizados
- **UI**: shadcn/ui + componentes personalizados
- **Gráficos**: Recharts
- **Iconos**: Lucide React
- **Animaciones**: Framer Motion
- **SEO**: next-seo

## 🚀 Inicio Rápido

### Prerrequisitos

- Node.js 18+ 
- npm o yarn

### Instalación

```bash
# Clonar repositorio
git clone <repository-url>
cd qsp-saas

# Instalar dependencias
npm install

# Ejecutar en desarrollo
npm run dev
```

### Comandos Disponibles

```bash
# Desarrollo
npm run dev          # Servidor de desarrollo
npm run build        # Build de producción
npm run start        # Servidor de producción
npm run lint         # Linter ESLint
npm run type-check   # Verificación TypeScript
```

## 📁 Estructura del Proyecto

```
qsp-saas/
├── 📁 app/                    # Next.js App Router
│   ├── 📁 api/               # API endpoints
│   ├── 📁 dashboard/         # Dashboard operativo
│   ├── 📁 reportes/          # Sistema de reportes
│   ├── 📄 layout.tsx         # Layout raíz
│   └── 📄 page.tsx           # Landing page
├── 📁 components/            # Componentes reutilizables
│   ├── 📁 ui/               # shadcn/ui components
│   ├── 📁 layout/           # ShellLayout, Navigation
│   ├── 📁 dashboard/        # KpiCard, TrendChart, TopTable
│   └── 📁 marketing/        # Hero, Features
├── 📁 lib/                  # Utilidades y configuración
│   ├── 📄 data.ts           # Datos mock
│   └── 📄 utils.ts          # Utilidades generales
├── 📁 types/                # Definiciones TypeScript
└── 📁 public/               # Assets estáticos
```

## 🎨 Sistema de Diseño

### Tokens de Color

```css
--background: #0b0f14    /* Negro profundo */
--panel: #10161e         /* Gris oscuro */
--ink: #e9eef5           /* Texto principal */
--muted: #9fb1c4         /* Texto secundario */
--brand: #00c2b8         /* Cyan premium */
--accent: #d4a253        /* Dorado */
```

### Tipografía

- **Font**: Inter (sistema)
- **Weights**: 400, 500, 600, 700
- **Sizes**: xs, sm, base, lg, xl, 2xl, 3xl, 4xl

## 📊 Páginas y Funcionalidades

### 🏠 Landing Page (`/`)
- Hero section con CTA
- Estadísticas clave
- Diseño premium

### 📈 Dashboard (`/dashboard`)
- 4 KPIs principales
- Gráfico de tendencias
- Top productos exportados
- Top países destino

### 📋 Reportes (`/reportes`)
- Lista de reportes
- Formulario de creación
- Estados de procesamiento
- Descarga de archivos

## 🔌 APIs

### GET `/api/dashboard`
Retorna datos del dashboard (KPIs, tendencias, rankings)

### GET `/api/reportes`
Lista todos los reportes disponibles

### POST `/api/reportes`
Crea un nuevo reporte

## 📱 Responsive Design

- **Mobile**: 320px+
- **Tablet**: 768px+
- **Desktop**: 1024px+
- **Large**: 1280px+

## ♿ Accesibilidad

- ✅ Roles ARIA apropiados
- ✅ Navegación por teclado
- ✅ Contraste AA (4.5:1)
- ✅ HTML semántico
- ✅ Screen readers compatible

## 🚀 Performance

### Métricas Lighthouse (Estimadas)
- **Performance**: 95+
- **Accessibility**: 100
- **Best Practices**: 100
- **SEO**: 100

### Optimizaciones
- Dynamic imports para charts
- Next.js Image optimization
- Font optimization
- CSS purging
- Code splitting automático

## 📦 Build y Deploy

### Build de Producción
```bash
npm run build
```

### Export Estático
```bash
# Configurar next.config.ts con output: 'export'
npm run build
# Archivos en carpeta 'out/'
```

### Deploy en Vercel
```bash
vercel --prod
```

## 🔄 Migración a WordPress

Ver [EXPORT_STATIC_WORDPRESS.md](./EXPORT_STATIC_WORDPRESS.md) para instrucciones detalladas de migración.

## 📈 Roadmap

### Fase 1 (Completada) ✅
- [x] Landing page
- [x] Dashboard básico
- [x] Sistema de reportes
- [x] APIs demo

### Fase 2 (Mes 2-3)
- [ ] Integración APIs oficiales
- [ ] Autenticación
- [ ] Base de datos real
- [ ] Reportes automáticos

### Fase 3 (Mes 4-6)
- [ ] Marketplace datasets
- [ ] White label
- [ ] API Enterprise
- [ ] Mobile app

## 🤝 Contribución

1. Fork el proyecto
2. Crear feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit cambios (`git commit -m 'Add AmazingFeature'`)
4. Push a branch (`git push origin feature/AmazingFeature`)
5. Abrir Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver [LICENSE](LICENSE) para más detalles.

## 📞 Contacto

- **Email**: contacto@qsp-saas.com
- **Website**: https://qsp-saas.com
- **LinkedIn**: [QSP SaaS](https://linkedin.com/company/qsp-saas)

## 🙏 Agradecimientos

- [Next.js](https://nextjs.org/) - Framework React
- [Tailwind CSS](https://tailwindcss.com/) - CSS framework
- [shadcn/ui](https://ui.shadcn.com/) - Componentes UI
- [Recharts](https://recharts.org/) - Gráficos React
- [Lucide](https://lucide.dev/) - Iconos

---

**Desarrollado con ❤️ para empresas de comercio exterior**