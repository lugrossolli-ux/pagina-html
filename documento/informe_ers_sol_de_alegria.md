# Especificación de Requisitos de Software Sol de Alegría Eventos

## Propuesta previa de requisitos para la Evaluación 1 - Full Stack 2

Asignatura: Full Stack 2

Integrantes:

Franco Sepúlveda

Luis Andrés Grossolli

## 1. Presentación del proyecto

En este informe presentamos la propuesta de requisitos para una tienda online de Sol de Alegría Eventos. El objetivo de esta primera entrega es demostrar la estructura, navegación, diseño y validaciones JavaScript de la tienda y su vista administrativa.

Para armar esta propuesta usamos el proyecto frontend pagina-html como base principal. También consideramos el repositorio soldealegria-sepulveda-pedraza-lisboa-003D como contexto de continuidad, ya que contiene un backend desarrollado para el mismo caso. En esta primera entrega el foco está en construir y documentar las vistas frontend, dejando la conexión con el backend como una mejora posterior.

### Empresa en la que se basa el proyecto

Sol de Alegría es una empresa de eventos infantiles que organiza celebraciones y ofrece servicios complementarios. El sistema se basa en este negocio para gestionar clientes, catálogo, eventos, cotizaciones, inventario, personal y agenda. En el frontend actual esta idea se representa con servicios de eventos, packs, DJs, música, sonido, iluminación, animación.

## 2. Problema que queremos resolver

Actualmente la información de una empresa de eventos puede quedar repartida entre páginas, mensajes y registros manuales. Eso dificulta mostrar servicios, recibir datos de clientes y mantener la información ordenada.

Con Sol de Alegría buscamos reunir esa información en un solo sitio. El usuario podrá revisar servicios y eventos, mientras que el administrador tendrá una vista distinta para revisar la información del negocio.

## 3. Objetivo general

Desarrollar un frontend para una empresa de eventos, con navegación entre sus páginas, formularios con validaciones básicas y vistas administrativas y de staff.

## 4. Objetivos específicos

- Mostrar los servicios, eventos, packs y temáticas que ofrece la empresa.

- Permitir que un usuario ingrese al sitio mediante un acceso de demostración.

- Mostrar los servicios de eventos, incluyendo DJ, música, animación, sonido, iluminación.

- Mostrar imágenes y controles de música para los perfiles de DJ.

- Mostrar una vista administrativa con clientes, eventos, cotizaciones y personal mediante datos de ejemplo.

- Incluir una vista de staff con eventos asignados, agenda e inventario como complemento del caso.

- Usar validaciones en JavaScript para mejorar los formularios del prototipo.

- Dejar documentada una posible conexión futura con el backend oficial, sin hacerla parte obligatoria de esta primera entrega.

## 5. Alcance de la primera versión

La primera versión considera un frontend estático adaptado al rubro de eventos. Incluye navegación entre páginas, formularios de demostración, vistas de usuario, administración y staff. Algunas funciones de la pauta, como el carrito, el catálogo dinámico y los mantenedores de productos y usuarios, quedan pendientes.

Incluye:

- Página de inicio con la identidad de Sol de Alegría.

- Registro y acceso de demostración.

- Vistas de Nosotros, blogs y contacto.

- Vistas de eventos, servicios y temáticas.

- Perfiles de DJ con imagen y muestras de música.

- Vista informativa de los servicios de eventos.

- Detalle informativo de un evento.

- Vistas de administración para clientes, eventos, cotizaciones y personal, usando datos de ejemplo.

- Vistas de staff con eventos asignados, agenda e inventario como complemento del caso.

Para esta versión no se implementan carrito de compras, catálogo dinámico de productos, mantenedores de productos y usuarios, pagos reales, una aplicación móvil, integración productiva con WhatsApp, conexión con el backend ni una transmisión de audio en vivo.

## 6. Usuarios del sistema

- Visitante: puede recorrer las paginas publicas y conocer los servicios.

- Cliente: puede registrarse, usar el acceso de demostración y recorrer las vistas públicas.

- Administrador: puede revisar clientes, eventos, cotizaciones y personal desde la vista administrativa.

- Staff o trabajador: puede revisar eventos asignados, agenda e inventario como complemento del caso.

- DJ: es una especialidad del personal relacionada con música, sonido y presentación.

- Animador, chef y técnico de montaje: son especialidades que pueden asignarse según las necesidades del evento.

En el backend oficial se usan principalmente los roles ADMIN, CLIENTE y TRABAJADOR. Por eso, DJ se plantea como una especialidad de personal dentro de TRABAJADOR, registrada mediante el tipo de personal y relacionada con la disponibilidad y las asignaciones.

## 7. Navegación y pantallas

### Área pública y de cliente

Inicio, solicitud de evento, detalle de evento, contacto, Nosotros, blogs, perfiles de DJ, login y registro. El carrito y el catálogo de productos todavía no están implementados.

### Area de administracion

Inicio, clientes, eventos, cotizaciones y personal. Estas vistas usan datos estáticos de demostración.

### Área de staff

Vistas de staff con eventos asignados, agenda e inventario, consideradas como complemento del caso.

## 8. Requerimientos funcionales y estado actual

Los siguientes puntos corresponden a la pauta y no todos están implementados en el prototipo actual.

RF-01. El sitio debe permitir registrar usuarios con los campos solicitados por la pauta.

RF-02. El sitio debe incluir un formulario de inicio de sesión con validaciones de correo y contraseña.

RF-03. El sitio debe tener una página principal navegable, con logo, información de la tienda, productos y footer.

RF-04. El sitio debe listar productos mediante JavaScript, mostrando imagen, nombre y precio.

RF-05. El sitio debe permitir abrir el detalle de un producto y añadirlo al carrito.

RF-06. El sitio debe incluir una vista de contacto con nombre, correo y comentario.

RF-07. El administrador debe contar con una vista para listar y mantener productos y usuarios.

RF-08. El formulario de producto debe validar código, nombre, descripción, precio, stock, stock crítico, categoría e imagen según corresponda.

RF-09. El formulario de usuario debe validar RUN, nombre, apellidos, correo, fecha de nacimiento, tipo de usuario, región, comuna y dirección.

RF-10. El carrito debe permitir agregar productos y conservar sus datos utilizando localStorage.

RF-11. Las vistas deben incluir navegación mediante hipervínculos, botones, menús y barras laterales.

RF-12. Los formularios deben mostrar mensajes de error o sugerencias personalizados.

RF-13. El administrador debe poder acceder solamente a las funciones que correspondan a su rol.

RF-14. El diseño debe mantenerse consistente y adaptarse a distintos tamaños de pantalla.

RF-15. El proyecto debe utilizar una hoja de estilos CSS externa y personalizada.

RF-16. El proyecto debe mantener el trabajo versionado en GitHub con commits identificables.

RF-17. El sistema debe mostrar mensajes de error, confirmación o estado para orientar al usuario.

RF-18. El equipo debe documentar los requerimientos y decisiones principales en el ERS.

## 9. Validaciones y reglas de negocio

### Registro e inicio de sesión

En la pauta, el inicio de sesión debe validar que el correo sea obligatorio, tenga un máximo de 100 caracteres y pertenezca a los dominios @duoc.cl, @profesor.duoc.cl o @gmail.com. La contraseña es obligatoria y debe tener entre 4 y 10 caracteres. En el prototipo actual el acceso funciona como demostración por roles y el registro valida solo que el correo no esté vacío y que la contraseña tenga entre 4 y 10 caracteres. Los dominios y el máximo de caracteres todavía están pendientes.

### Contacto

La pauta solicita nombre obligatorio y máximo de 100 caracteres; correo máximo de 100 caracteres y restringido a los dominios indicados; y comentario obligatorio con máximo de 500 caracteres. La vista actual solo muestra un mensaje genérico al registrar y todavía no aplica estas reglas completas.

### Productos y carrito

La pauta solicita cargar productos desde un arreglo JavaScript y guardar el carrito en localStorage. Esta funcionalidad todavía no está implementada en el frontend actual y queda pendiente.

### Administrador: producto y usuario

La pauta solicita validaciones para crear o editar productos y usuarios. En productos se consideran código, nombre, descripción, precio, stock, stock crítico, categoría e imagen. En usuarios se consideran RUN, datos personales, correo, rol, región, comuna y dirección. El frontend actual todavía no tiene esos mantenedores ni sus validaciones.

### Contexto del caso

Los perfiles de DJ, música, animación y catering son una adaptación del caso de eventos. Ayudan a darle identidad al proyecto, pero no reemplazan los requisitos principales de la pauta. En el frontend actual se muestran como contenido informativo y demostrativo.

## 10. Requerimientos no funcionales

- La interfaz debe adaptarse a computador, tablet y celular.

- Las páginas deben mantener una apariencia coherente usando CSS externo.

- Los formularios deben mostrar mensajes entendibles y controles fáciles de usar.

- Las vistas principales deben poder recorrerse sin backend en modo demostrativo.

- La posible conexión futura con el backend se considera una mejora posterior y no un requisito funcional de esta entrega.

- La primera entrega debe poder demostrarse desde el frontend, aunque todavía no esté conectada a servicios externos.

- Los roles deben reflejarse en la navegación y en las vistas disponibles; la autenticación real queda como mejora posterior.

- El trabajo debe conservar trazabilidad mediante GitHub, commits, tablero y pruebas.

- Las imágenes y recursos de audio deben tener créditos y permisos revisados antes de publicar.

## 11. Información principal del sistema

En el frontend actual la información se representa con páginas y datos de ejemplo de usuarios y clientes, eventos, cotizaciones, personal y servicios. El backend oficial sí contiene entidades de catálogo, productos, packs y eventos, pero todavía no está conectado al frontend.

El flujo principal es: Visitante -> Páginas públicas -> Solicitud o detalle de evento. En paralelo, Administrador -> Clientes, eventos, cotizaciones y personal; Staff -> Eventos asignados, agenda e inventario.

Los servicios de DJ, sonido, iluminación, animación y catering se muestran como parte del contexto visual de la tienda de eventos.

## 12. Relación entre los dos proyectos

### Proyecto frontend actual

El proyecto pagina-html muestra la experiencia visual en HTML, CSS y JavaScript. Tiene login, registro, área de usuario, área de administración y área de staff. También contiene las vistas de solicitud, blogs, contacto, eventos, perfiles de DJ y reproducción de audio.

En este momento funciona principalmente como prototipo: varios datos están escritos directamente en las páginas y la navegación por rol es demostrativa.

### Backend oficial del proyecto

El backend oficial se menciona como continuidad del proyecto y posible fuente de datos para una próxima etapa. En esta Evaluación 1 no se exige conectarlo ni implementar sus microservicios dentro del frontend.

La relación propuesta es que pagina-html sea la capa de presentación y que el backend oficial pueda utilizarse en una etapa posterior. Para esta entrega se prioriza demostrar la estructura, navegación, diseño y validaciones JavaScript solicitadas.

## 13. Requisitos implementados

La pauta pide una tienda básica con HTML, CSS y JavaScript, navegación, formularios, validaciones y una vista administrativa. El prototipo actual aborda parte de esos puntos con páginas HTML, CSS externo, navegación, formularios, validación básica y vistas de administración. La adaptación al negocio usa eventos, servicios y perfiles de DJ como contexto. El carrito, el catálogo dinámico y los mantenedores de productos y usuarios todavía no están implementados.

El proyecto cumple o aborda los puntos principales de esta manera:

- HTML: páginas separadas y estructura de contenido para cada rol.

- Navegación: menús laterales, enlaces, botones y acceso entre vistas.

- CSS: archivos externos y estilos compartidos.

- JavaScript: validación básica en registro, mensajes simples, navegación, controles de música y cambio de tema en algunas vistas.

- Formularios: registro, acceso de demostración, contacto y solicitud de evento. No hay mantenedores administrativos de producto y usuario en el frontend actual.

- Administrador: clientes, eventos, cotizaciones y personal con datos de ejemplo.

- Repositorio: proyectos versionados con GitHub y trabajo distribuido entre los integrantes.

## 14. Criterios de aceptación

- Un visitante puede recorrer las paginas publicas y conocer los servicios.

- Un usuario puede registrarse y usar el acceso de demostración por roles. El registro muestra mensajes para algunos datos incorrectos, pero las validaciones completas de la pauta siguen pendientes.

- La tienda permite visualizar servicios de DJ, sonido, iluminación, animación, catering y temáticas como parte del contexto del negocio.

- El administrador puede revisar listas de clientes, eventos, cotizaciones y personal.

- Las vistas de staff se presentan como una extensión del caso, pero no son el foco de la Evaluación 1.

- El registro muestra mensajes para algunos datos incorrectos y las vistas de contacto y solicitud muestran una confirmación genérica. Las reglas completas todavía están pendientes.

- La solución de esta primera entrega demuestra navegación, formularios, vistas administrativas y el contexto de eventos y DJs. El carrito, el catálogo de productos y los mantenedores de productos y usuarios quedan como pendientes.

- Cada funcionalidad importante puede relacionarse con una prueba, captura o video.

## 15. Riesgos y mejoras pendientes

- El frontend pagina-html y el backend oficial están en proyectos separados. Para esta evaluación solo se documenta la relación entre ambos; la autenticación real y el consumo de endpoints quedan para una etapa posterior.

- Algunas vistas aun tienen datos fijos y deben reemplazarse por consultas a la API.

- DJ se maneja como una especialidad de personal. La interfaz ya muestra imágenes y muestras de música, pero la disponibilidad y la asignación definitiva deben salir del backend.

- Las validaciones completas de login y contacto, junto con los mantenedores de productos y usuarios, deben completarse para cumplir completamente la pauta.

- Se deben revisar los permisos de las evidencias y agregar capturas o videos faltantes.

## 16. Conclusión

Con esta propuesta la pauta de tienda online se adapta al caso de Sol de Alegría. La entrega actual se concentra en construir un frontend navegable y visualmente coherente, con formularios, validación JavaScript básica, vistas de usuario, administración de eventos y servicios de staff. Los servicios de DJ, sonido, iluminación, animación y catering aportan el contexto del negocio. El carrito, el catálogo dinámico y los mantenedores de productos y usuarios quedan como trabajo pendiente.

El frontend actual permite demostrar la propuesta visual y el recorrido de las vistas de eventos. El backend enlazado queda como una continuación posible, pero no es necesario terminar su integración para cumplir esta primera entrega.

