# Sitio web del grupo M3BN

Página del **Grupo de Modelado Molecular de Materiales Blandos y Nanoestructurados** (INIFTA · UNLP · CONICET), alojada en GitHub Pages: https://m3bn.github.io

## Estructura del repositorio

```
m3bn.github.io/
├── index.html            # Inicio
├── investigacion.html    # Líneas de investigación
├── miembros.html         # Integrantes y alumni
├── publicaciones.html    # Artículos por año
├── congresos.html        # Charlas y pósters
├── software.html         # Repositorios del grupo
├── contacto.html         # Contacto y convocatorias
├── assets/
│   ├── css/style.css     # Estilos compartidos (paleta y tipografías)
│   ├── js/main.js        # Menú móvil y pestaña activa
│   └── img/              # Fotos y figuras
└── README.md
```

## Cómo editar el contenido

Cada página tiene comentarios `<!-- EDITAR -->` marcando qué reemplazar.
Los casos más frecuentes:

- **Agregar una publicación**: en `publicaciones.html`, copiar un bloque
  `<article class="publicacion">` debajo del año que corresponda.
- **Agregar un miembro**: en `miembros.html`, copiar un bloque
  `<article class="tarjeta miembro">` y subir la foto (cuadrada, ~400×400 px)
  a `assets/img/`.
- **Agregar una presentación**: en `congresos.html`, igual que publicaciones.
  Usar `class="publicacion poster"` para pósters.
- **Novedades de la portada**: editar la sección "Novedades" de `index.html`.

⚠️ El menú de navegación y el footer están repetidos en cada página.
Si se agrega una pestaña nueva, hay que actualizar el `<nav>` en **todos** los HTML.

## Cómo cambiar colores o tipografías

Todo está definido como variables al inicio de `assets/css/style.css`
(sección `:root`). Cambiar un color ahí lo cambia en todo el sitio.

## Publicación

GitHub Pages publica automáticamente la rama `main` de este repositorio
(`m3bn.github.io`). Los cambios tardan 1–2 minutos en verse online.
Se recomienda editar mediante pull requests para que otro miembro revise.
