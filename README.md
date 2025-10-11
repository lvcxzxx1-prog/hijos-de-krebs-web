# Hijos de Krebs – Plan de diseño web

Este documento define el esquema base, la estructura de navegación y las recomendaciones de implementación para el sitio web "Hijos de Krebs", una plataforma educativa enfocada en material didáctico riguroso de ciencias para estudiantes preuniversitarios y universitarios en Perú.

## Objetivos del sitio
- Presentar el proyecto con un estilo científico elegante y cercano.
- Promocionar y vender material educativo digital (PDFs, recursos visuales, clases y asesorías).
- Potenciar la captación de leads mediante boletín de correo y canales sociales.
- Facilitar la conversión a través de llamadas a la acción claras e integración con pasarelas de pago locales.

## Público objetivo
- Estudiantes de 15 a 28 años interesados en carreras de ciencias de la salud y STEM (UNMSM, UNSAAC, UNI, etc.).
- Buscan recursos actualizados, didácticos y personalizados.
- Alta afinidad a redes sociales (Instagram, TikTok) y apps de mensajería (WhatsApp).

## Identidad visual sugerida
- **Paleta**: base de neutros cálidos (marfil, gris piedra) con acentos terracota, verde salvia o mostaza.
- **Tipografías**:
  - Titulares: serif elegante o manuscrita moderna (Playfair Display, Cormorant, Dancing Script).
  - Cuerpo: sans-serif legible (Lato, Work Sans, Source Sans Pro).
- **Elementos gráficos**: ilustraciones botánicas vintage, diagramas anatómicos estilizados, texturas tipo papel reciclado o pizarras, iconografía lineal.
- **Estilo**: minimalista cálido con equilibrio entre nostalgia académica (máquinas de escribir, cuadernos) y componentes digitales (gradientes suaves, microinteracciones).

## Arquitectura de información
1. **Inicio – "Laboratorio de ideas"**
   - Hero con titular inspirador, CTA primario ("Explora nuestros recursos") y CTA secundario ("Agenda una asesoría").
   - Video corto o animación sutil mostrando fragmentos de clases.
   - Sección de valor diferencial (metodología, rigor, enfoque humano).
   - Destacados de productos (PDF premium, paquete de infografías, sesiones 1:1).
   - Bloque de testimonios rotatorio.
   - Suscripción al boletín con incentivo (mini guía gratuita).
   - Logos de medios o instituciones si existen.

2. **Tienda – "Colección de saberes"**
   - Filtros por categoría: Biología, Anatomía, Fisiología, Química, Asesorías.
   - Tarjetas de producto con mockups de PDFs, badges de "Más vendido" o "Nuevo".
   - Integración con pasarelas (MercadoPago, Yape/Plin, PagoEfectivo) mediante botones de pago o enlaces externos.
   - CTA fija "Necesitas algo personalizado? Agenda tu sesión".

3. **Acerca de – "Historia de laboratorio"**
   - Narrativa del creador, formación académica y propósito.
   - Línea de tiempo con hitos (fundación, lanzamientos, alianzas).
   - Fotografías estilo documental en ambiente de estudio.

4. **Blog – "Cuadernos de Krebs"**
   - Artículos divulgativos con etiquetas por disciplina.
   - Bloques destacados para posts populares y series temáticas.
   - Opción de compartir en redes y captar suscriptores al final de cada entrada.

5. **Testimonios – "Voces en Resonancia"**
   - Carrusel o mosaico de estudiantes con citas y calificaciones.
   - Video-testimonios opcionales incrustados desde YouTube/Drive.

6. **Contacto – "Conecta con el laboratorio"**
   - Formulario breve (nombre, correo, mensaje, checkbox para boletín).
   - Botones directos a WhatsApp (API wa.me), Instagram, TikTok, Facebook.
   - Información de correo y horarios de atención.

7. **Footer**
   - Enlaces rápidos, políticas, términos, datos de facturación.
   - Repetir CTA de suscripción y redes sociales.

## Flujo de navegación sugerido
- Menú superior fijo con llamadas claras a Inicio, Tienda, Blog, Asesorías (CTA destacado), Acerca, Testimonios y Contacto.
- Botón CTA permanente en header y secciones clave.
- Breadcrumbs en tienda y blog para navegación jerárquica.
- Footer con enlaces secundarios y formulario compacto de boletín.

## Funcionalidades clave
- Integración de tienda digital para PDFs con descarga automática tras pago.
- Sistema de reservas de asesorías (sincrónico con Zoom/Google Meet) vía formularios de booking (Calendly gratuito o TidyCal) embebidos.
- Pasarela de pago local (MercadoPago Checkout Pro/QR) y opción de wallets peruanas mediante links de pago.
- Captación de leads con formularios MailerLite, Brevo o Mailchimp (planes gratuitos) integrados mediante embed.
- SEO básico (metadescripciones, títulos personalizados, blog optimizado).
- Analítica con Google Analytics 4 y píxel de Facebook para remarketing.

## Recomendaciones de plataformas y plantillas
- **Wix**: plantilla gratuita "Online Store - Minimal Shop" o "Academic Portfolio" como base. Permite Wix Stores, pagos con MercadoPago (habilitado en LATAM) y diseño responsive con editor drag & drop.
- **WordPress.com (plan gratuito + plugins freemium)**:
  - Tema recomendado: "Astra" o "Neve" (versiones free) con starter sites educativos.
  - Plugins: WooCommerce (para PDFs), WooCommerce MercadoPago, WPForms Lite (contacto), MailPoet o Mailchimp for WP (boletín).
- **Tiendanube**: ideal para tienda centralizada, usar plantilla "Livia" o "Idea"; habilitar secciones de contenido mediante páginas personalizadas y conectar pasarelas locales.
- **Payhip**: para venta de descargables y suscripciones, personalización básica con tipografías y fondos propios, integración con newsletters.
- **Notion + Super.so**: útil para blog y landing informativa; complementarlo con links externos a tienda (Payhip/Tiendanube) para pagos.

## Wireframe conceptual por sección
- **Hero**: fondo con textura ligera, overlay translúcido, titular grande en serif, subtítulo sans-serif, dos CTAs contrastados.
- **Destacados**: tarjetas con imagen simulada (mockup PDF) y botón "Agregar al carrito".
- **Metodología**: layout de tres columnas con iconos lineales (microscopio, ADN, corazón anatómico).
- **Testimonios**: carrusel con citas sobre tarjetas de papel envejecido.
- **Blog**: rejilla tipo revista con portada ilustrada y extracto de 80 palabras.
- **Contacto**: bloque dividido; izquierda texto y redes, derecha formulario sobre fondo oscuro con campos claros.

## Copys y CTAs sugeridos
- Titular principal: "Donde la ciencia se explica con rigor y corazón".
- Subtítulo: "Recursos didácticos y asesorías personalizadas para futuros profesionales de la salud".
- CTAs alternativos: "Comienza a estudiar hoy", "Reserva tu asesoría", "Descarga la guía gratuita".

## Estrategia de contenidos
- Blog con series: "Mitos del cuerpo humano", "Química en 5 minutos", "Ruta preuniversitaria".
- Newsletter mensual: tips de estudio, calendario de clases, descuentos.
- Testimonios destacados en redes incrustadas (posts de Instagram, videos de TikTok).

## Próximos pasos
1. Seleccionar plataforma según prioridad (si tienda + asesorías: Wix o WordPress; si solo descargables: Payhip + Notion).
2. Definir paleta exacta en Coolors y descargar assets (mockups, texturas).
3. Crear wireframes rápidos en herramientas gratuitas (Figma free) antes de implementar.
4. Configurar dominios y SSL mediante la plataforma elegida.
5. Redactar textos definitivos y recopilar testimonios reales.

Este plan proporciona una guía clara para construir el sitio sin necesidad de programar, manteniendo coherencia visual y enfoque comercial para "Hijos de Krebs".
