# QSP SpA - Static Export & Deployment Guide

## 🚀 Build & Export

La aplicación está configurada para exportación estática con Next.js 15.5.2.

### Comandos de Build

```bash
# Instalar dependencias
npm install

# Desarrollo
npm run dev

# Build para producción (genera archivos estáticos)
npm run build

# Export (opcional - ya incluido en build con output: "export")
npm run export
```

### Archivos Generados

Después del build, los archivos estáticos se generan en:
- `out/` - Directorio con todos los archivos estáticos listos para deploy

## 🌐 Deployment Options

### 1. Netlify (Recomendado)

#### Opción A: Deploy desde Git
1. Conecta tu repositorio GitHub/GitLab a Netlify
2. Configuración automática:
   - **Build command**: `npm run build`
   - **Publish directory**: `out`
   - **Node version**: `18` o superior

#### Opción B: Deploy Manual
1. Ejecuta `npm run build`
2. Sube la carpeta `out/` completa a Netlify
3. Configura redirects en `public/_redirects`:
   ```
   /*    /index.html   200
   ```

#### Configuración Netlify (`netlify.toml`)
```toml
[build]
  command = "npm run build"
  publish = "out"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200

[build.environment]
  NODE_VERSION = "18"
```

### 2. Vercel

#### Deploy Automático
1. Conecta repositorio a Vercel
2. Vercel detecta automáticamente Next.js
3. Configuración recomendada:
   - **Framework Preset**: Next.js
   - **Build Command**: `npm run build`
   - **Output Directory**: `out`
   - **Install Command**: `npm install`

#### Deploy Manual
```bash
# Instalar Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
```

### 3. Hostinger

#### Via File Manager
1. Ejecuta `npm run build`
2. Sube todo el contenido de `out/` al directorio `public_html`
3. Configura `.htaccess` para SPA routing:
   ```apache
   RewriteEngine On
   RewriteCond %{REQUEST_FILENAME} !-f
   RewriteCond %{REQUEST_FILENAME} !-d
   RewriteRule . /index.html [L]
   ```

#### Via FTP/SFTP
1. Usa cliente FTP (FileZilla, WinSCP)
2. Sube archivos de `out/` a `public_html/`
3. Mantén estructura de carpetas

### 4. GitHub Pages

#### Configuración
1. Crea archivo `.github/workflows/deploy.yml`:
   ```yaml
   name: Deploy to GitHub Pages
   
   on:
     push:
       branches: [ main ]
   
   jobs:
     deploy:
       runs-on: ubuntu-latest
       steps:
         - uses: actions/checkout@v3
         - uses: actions/setup-node@v3
           with:
             node-version: '18'
         - run: npm install
         - run: npm run build
         - uses: peaceiris/actions-gh-pages@v3
           with:
             github_token: ${{ secrets.GITHUB_TOKEN }}
             publish_dir: ./out
   ```

2. Habilita GitHub Pages en Settings > Pages
3. Selecciona "GitHub Actions" como source

## ⚙️ Configuración Técnica

### Next.js Config
```typescript
// next.config.ts
const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};
```

### Características del Build
- ✅ **Static Export**: Genera archivos HTML estáticos
- ✅ **Image Optimization**: Deshabilitada para compatibilidad
- ✅ **Trailing Slash**: URLs con `/` al final
- ✅ **SEO Ready**: Sitemap y robots.txt incluidos
- ✅ **Performance**: Optimizado para carga rápida

## 📁 Estructura de Archivos

```
out/
├── index.html              # Página principal
├── dashboard/
│   └── index.html          # Dashboard
├── planes/
│   └── index.html          # Planes y precios
├── reportes/
│   └── index.html          # Reportes
├── _next/                  # Assets optimizados
├── robots.txt              # SEO
├── sitemap.xml             # SEO
└── og/                     # Open Graph images
```

## 🔧 Troubleshooting

### Error: "export const dynamic not configured"
- Asegúrate de agregar `export const dynamic = 'force-static';` en rutas API

### Error: "Images not loading"
- Verifica que `images.unoptimized: true` esté en next.config.ts

### Error: "404 on refresh"
- Configura redirects para SPA routing en tu hosting

### Error: "Build fails"
- Verifica que no hay rutas API dinámicas
- Asegúrate de que todas las rutas tengan `dynamic = 'force-static'`

## 🚀 Performance Tips

1. **CDN**: Usa Cloudflare o similar para assets estáticos
2. **Compression**: Habilita gzip/brotli en el servidor
3. **Caching**: Configura headers de cache apropiados
4. **Monitoring**: Usa Google Analytics o similar

## 📞 Soporte

Para problemas de deployment:
1. Verifica logs del build
2. Revisa configuración del hosting
3. Confirma que todos los archivos se subieron correctamente

---

**¡Listo para deploy!** 🎉