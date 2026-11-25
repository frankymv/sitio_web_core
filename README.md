# NEXORA Digital — sitio corporativo Next.js

Plantilla en español para una empresa de consultoría tecnológica. Incluye:
- Landing responsive con servicios, portafolio, clientes, videos, testimonios, FAQ y contacto.
- Formulario conectado a Supabase (tabla `contact_messages`).
- Panel de administración con inicio de sesión y CRUD básico para proyectos, clientes, testimonios, videos y preguntas frecuentes.
- Contenido de demostración cuando todavía no se configura Supabase.

## 1. Requisitos
- Node.js 20.9 o superior.
- Proyecto gratuito o de pago en Supabase.

## 2. Instalar
```bash
npm install
cp .env.example .env.local
npm run dev
```
En Windows PowerShell:
```powershell
Copy-Item .env.example .env.local
```
Completa en `.env.local`:
- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`

## 3. Crear la base de datos
Abre Supabase → SQL Editor y ejecuta `supabase/schema.sql`.

## 4. Crear el usuario administrador
En Supabase → Authentication → Users → Add user, crea el correo y contraseña del administrador. Luego entra a:
`http://localhost:3000/admin/login`

**Importante:** restringe la creación de usuarios desde Authentication (desactiva el registro público) y crea administradores manualmente. Para producción, fortalece las políticas RLS usando una tabla/claim de roles; la política incluida considera administrador a cualquier usuario autenticado y es adecuada solo para una instalación privada de un único administrador.

## 5. Personalizar la marca
Busca y reemplaza `NEXORA` / `NEXORA Digital` en:
- `src/components/Navbar.tsx`
- `src/app/page.tsx`
- `src/app/admin/login/page.tsx`
- `src/app/admin/page.tsx`
- `src/app/layout.tsx`

Cambia colores en `src/app/globals.css` y `tailwind.config.ts`. El nombre, los textos, los servicios, los proyectos y los testimonios de ejemplo son demostrativos; reemplázalos por información real.

## 6. Videos
En el panel de administración agrega un video con URL de inserción, por ejemplo:
`https://www.youtube.com/embed/ID_DEL_VIDEO`
No uses la URL normal de reproducción (`watch?v=`) en `embed_url`.

## 7. Publicación
Puedes desplegar en Vercel conectando el repositorio Git. Configura las mismas variables de entorno en Project → Settings → Environment Variables y ejecuta el despliegue.

## Estructura
```text
src/
  app/
    api/contact/route.ts
    admin/login/page.tsx
    admin/page.tsx
    globals.css
    layout.tsx
    page.tsx
  components/
    ContactForm.tsx
    Navbar.tsx
  lib/
    content.ts
    supabase.ts
supabase/schema.sql
```

## Pendientes recomendados antes de producción
- Reemplazar textos, clientes y proyectos de muestra por casos autorizados.
- Configurar dominio, correo transaccional y política de privacidad.
- Implementar autorización por roles en RLS, protección anti-spam/rate limit y validación server-side robusta.
- Añadir gestión de mensajes recibidos, imágenes con Supabase Storage y SEO/social metadata específicos.
