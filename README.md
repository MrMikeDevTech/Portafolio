# MrMikeDev Studio — Portfolio

Portfolio de Diego Emmanuel Rodriguez Ruvalcaba, construido con Astro, Tailwind CSS v4 e internacionalización ES/EN nativa.

## Stack

- [Astro](https://astro.build) 7, `output: 'static'`
- Tailwind CSS v4 vía `@tailwindcss/vite` (sin CDN, sin `tailwind.config.js` — tokens en `src/styles/global.css`, incluyendo paleta clara y oscura)
- Adapter `@astrojs/vercel` para deploy en Vercel
- Bun como package manager

## Estructura

```
public/                 Assets estáticos: logo.webp, foto.webp, favicon.webp/.ico, cv-en.pdf, cv-es.pdf
src/
  data/data.ts          Contenido editable: perfil, redes, proyectos, timeline, servicios, stack, rutas de CV
  i18n/ui.ts            Diccionario de labels de interfaz (EN/ES)
  i18n/utils.ts         Helpers de i18n (getLangFromUrl, useTranslations, otherLang)
  styles/global.css     Tokens de Tailwind v4, paleta clara/oscura, scroll suave
  layouts/BaseLayout.astro
  components/           Nav, Hero, About, Services, Projects, ProjectModal, Timeline, Stack, Contact, Footer
  pages/
    en/index.astro      Ruta /en/
    es/index.astro      Ruta /es/
    404.astro
astro.config.mjs        i18n routing, adapter de Vercel, plugin de Tailwind, redirect / -> /en
```

## Comandos

| Comando             | Acción                                                  |
| ------------------- | -------------------------------------------------------- |
| `bun install`       | Instala dependencias                                     |
| `bun run dev`        | Servidor local en `localhost:4321`                       |
| `bun run build`      | Build de producción en `./dist/`                          |
| `bun run preview`    | Sirve el build localmente antes de desplegar              |
| `bunx astro check`   | Type-check completo (recomendado antes de cada deploy)    |

## Funcionalidad

- **Idiomas**: rutas `/en/` y `/es/` generadas de forma estática (SSG), con redirect automático de `/` a `/en`. El selector de idioma en el nav navega entre rutas conservando el contexto.
- **Tema claro/oscuro**: toggle persistente vía `localStorage`, con paleta clara y oscura completas (no solo cambia el ícono).
- **Scroll suave**: habilitado globalmente (`scroll-behavior: smooth`), respeta `prefers-reduced-motion`.
- **CV dinámico**: el botón "Download CV"/"Descargar CV" apunta a `/cv-en.pdf` o `/cv-es.pdf` según el idioma activo.
- **Contacto**: el formulario no tiene backend — al enviar, arma un `mailto:` con asunto y cuerpo prellenados a partir de los campos (nombre, correo, mensaje), dirigido a `profile.email`.
- **Modal de proyectos**: carrusel de imágenes y ficha técnica poblados en build time desde `data.ts` (sin duplicar contenido en JS).

## Editar contenido

Todo el contenido del portfolio (perfil, redes sociales, proyectos, timeline/educación, servicios, stack tecnológico y rutas de los CV) vive tipado en `src/data/data.ts`. Los textos fijos de interfaz (labels de nav, botones, encabezados) están en `src/i18n/ui.ts`. No es necesario tocar los componentes `.astro` para actualizar contenido.

## Pendientes antes de ir a producción

- **`astro.config.mjs`**: el campo `site` tiene un valor placeholder (`https://portfolio.vercel.app`). Reemplázalo por el dominio real una vez que Vercel asigne la URL (o tu dominio custom) — se usa para `canonical`, `hreflang` y Open Graph.
- **`src/data/data.ts`**: `profile.email` (`kalkent987@gmail.com`) y el correo del ícono `mail` en `profile.socials` (`diego.rodriguez9332@alumnos.udg.mx`) son dos direcciones distintas — el formulario de contacto, el Hero y el Footer usan `profile.email`; confirma cuál quieres como principal y unifica si corresponde.

## Deploy en Vercel

No se requiere `vercel.json`. Conecta el repositorio en Vercel (detecta Astro y Bun automáticamente por `bun.lock`) o corre `vercel deploy` desde la raíz del proyecto.
