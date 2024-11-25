// src/lib/tagData.ts

export type TagDefinition = {
  eshtml: string;
  html: string;
  category:
    | "Main root"
    | "Document metadata"
    | "Sectioning root"
    | "Content sectioning"
    | "Text content"
    | "Inline text semantics"
    | "Image and multimedia"
    | "Embedded content"
    | "Scripting"
    | "Demarcating edits"
    | "Table content"
    | "Forms"
    | "Interactive elements"
    | "SVG and MathML"
    | "Other";
  description: string;
  attributes?: {
    name: string;
    html: string;
    description: string;
    values?: string[];
  }[];
  example?: {
    eshtml: string;
    html: string;
  };
};

export const tagData: Record<string, TagDefinition> = {
  // Main root
  eshtml: {
    eshtml: "eshtml",
    html: "html",
    category: "Main root",
    description:
      "Representa el elemento raíz de un documento HTML. Todos los demás elementos deben ser descendientes de este elemento.",
    attributes: [
      {
        name: "idioma",
        html: "lang",
        description: "Especifica el idioma del contenido.",
        values: ["es", "en", "fr", "de", "it"],
      },
    ],
    example: {
      eshtml: `<eshtml idioma="es">
  <cabecera>
    <título>Mi Página</título>
  </cabecera>
  <cuerpo>
    <!-- Contenido -->
  </cuerpo>
</eshtml>`,
      html: `<html lang="es">
  <head>
    <title>Mi Página</title>
  </head>
  <body>
    <!-- Contenido -->
  </body>
</html>`,
    },
  },

  // Document metadata
  cabecera: {
    eshtml: "cabecera",
    html: "head",
    category: "Document metadata",
    description:
      "Contiene información de metadatos sobre el documento, como su título y enlaces a scripts y hojas de estilo.",
    example: {
      eshtml: `<cabecera>
  <título>Mi Página</título>
  <meta charset="UTF-8">
</cabecera>`,
      html: `<head>
  <title>Mi Página</title>
  <meta charset="UTF-8">
</head>`,
    },
  },
  título: {
    eshtml: "título",
    html: "title",
    category: "Document metadata",
    description:
      "Define el título del documento que se muestra en la barra de título del navegador o en la pestaña de la página.",
    example: {
      eshtml: "<título>Mi Página</título>",
      html: "<title>Mi Página</title>",
    },
  },
  meta: {
    eshtml: "meta",
    html: "meta",
    category: "Document metadata",
    description:
      "Representa metadatos que no pueden ser expresados usando otros elementos meta-relacionados.",
    attributes: [
      {
        name: "charset",
        html: "charset",
        description: "Declara la codificación de caracteres del documento.",
      },
      {
        name: "nombre",
        html: "name",
        description: "Especifica el nombre del metadato.",
      },
      {
        name: "contenido",
        html: "content",
        description: 'Proporciona el valor asociado al atributo "name".',
      },
    ],
    example: {
      eshtml: '<meta charset="UTF-8">',
      html: '<meta charset="UTF-8">',
    },
  },
  enlace: {
    eshtml: "enlace",
    html: "link",
    category: "Document metadata",
    description:
      "Especifica relaciones entre el documento actual y un recurso externo.",
    attributes: [
      {
        name: "rel",
        html: "rel",
        description: "Especifica la relación con el documento vinculado.",
      },
      {
        name: "href",
        html: "href",
        description: "Especifica la URL del recurso vinculado.",
      },
    ],
    example: {
      eshtml: '<enlace rel="stylesheet" href="estilos.css">',
      html: '<link rel="stylesheet" href="estilos.css">',
    },
  },
  estilo: {
    eshtml: "estilo",
    html: "style",
    category: "Document metadata",
    description:
      "Contiene información de estilo para un documento o parte del mismo.",
    attributes: [
      {
        name: "tipo",
        html: "type",
        description:
          'Especifica el tipo de lenguaje de estilo (por defecto "text/css").',
      },
    ],
    example: {
      eshtml: `<estilo>
  cuerpo { color: azul; }
</estilo>`,
      html: `<style>
  body { color: blue; }
</style>`,
    },
  },
  base: {
    eshtml: "base",
    html: "base",
    category: "Document metadata",
    description:
      "Especifica la URL base a utilizar para todas las URLs relativas en un documento.",
    attributes: [
      {
        name: "href",
        html: "href",
        description: "Especifica la URL base para el documento.",
      },
    ],
    example: {
      eshtml: '<base href="https://ejemplo.com/">',
      html: '<base href="https://example.com/">',
    },
  },

  // Sectioning root
  cuerpo: {
    eshtml: "cuerpo",
    html: "body",
    category: "Sectioning root",
    description:
      'Representa el contenido principal de un documento HTML. Solo puede haber un elemento "cuerpo" en un documento.',
    example: {
      eshtml: `<cuerpo>
  <p>Contenido principal de la página.</p>
</cuerpo>`,
      html: `<body>
  <p>Contenido principal de la página.</p>
</body>`,
    },
  },

  // Content sectioning
  artículo: {
    eshtml: "artículo",
    html: "article",
    category: "Content sectioning",
    description:
      "Representa una composición autónoma en un documento, página o aplicación, destinada a ser distribuida o reutilizada independientemente.",
    example: {
      eshtml: `<artículo>
  <e1>Título del Artículo</e1>
  <p>Contenido del artículo.</p>
</artículo>`,
      html: `<article>
  <h1>Article Title</h1>
  <p>Article content.</p>
</article>`,
    },
  },
  sección: {
    eshtml: "sección",
    html: "section",
    category: "Content sectioning",
    description:
      "Representa una sección genérica de un documento, como un grupo de contenido temático.",
    example: {
      eshtml: `<sección>
  <e2>Subtítulo</e2>
  <p>Contenido de la sección.</p>
</sección>`,
      html: `<section>
  <h2>Subtitle</h2>
  <p>Section content.</p>
</section>`,
    },
  },
  pie: {
    eshtml: "pie",
    html: "footer",
    category: "Content sectioning",
    description:
      "Representa un pie de página para su sección más cercana, que suele contener información sobre el autor, derechos de autor o enlaces relacionados.",
    example: {
      eshtml: `<pie>
  <p>&copy; 2023 Mi Sitio Web</p>
</pie>`,
      html: `<footer>
  <p>&copy; 2023 My Website</p>
</footer>`,
    },
  },
  aparte: {
    eshtml: "aparte",
    html: "aside",
    category: "Content sectioning",
    description:
      "Representa una sección de una página que consiste en contenido que es tangencialmente relacionado con el contenido alrededor del apartado.",
    example: {
      eshtml: `<aparte>
  <p>Este es un dato interesante.</p>
</aparte>`,
      html: `<aside>
  <p>This is an interesting fact.</p>
</aside>`,
    },
  },
  dirección: {
    eshtml: "dirección",
    html: "address",
    category: "Content sectioning",
    description:
      "Indica que el HTML contenido proporciona información de contacto para una persona o personas, o para una organización.",
    example: {
      eshtml: `<dirección>
  <p>Contacto: info@ejemplo.com</p>
</dirección>`,
      html: `<address>
  <p>Contact: info@example.com</p>
</address>`,
    },
  },
  encabezado: {
    eshtml: "encabezado",
    html: "header",
    category: "Content sectioning",
    description:
      "Representa contenido introductorio, típicamente un grupo de ayudas de navegación o introducción.",
    example: {
      eshtml: `<encabezado>
  <nav>
    <enlace href="/">Inicio</enlace>
  </nav>
</encabezado>`,
      html: `<header>
  <nav>
    <a href="/">Home</a>
  </nav>
</header>`,
    },
  },
  e1: {
    eshtml: "e1",
    html: "h1",
    category: "Content sectioning",
    description:
      "Encabezado de nivel 1, utilizado para títulos principales en la jerarquía de contenido.",
    example: {
      eshtml: "<e1>Título Principal</e1>",
      html: "<h1>Main Title</h1>",
    },
  },
  e2: {
    eshtml: "e2",
    html: "h2",
    category: "Content sectioning",
    description: "Encabezado de nivel 2, utilizado para secciones.",
    example: {
      eshtml: "<e2>Subtítulo</e2>",
      html: "<h2>Subtitle</h2>",
    },
  },
  e3: {
    eshtml: "e3",
    html: "h3",
    category: "Content sectioning",
    description: "Encabezado de nivel 3, utilizado para subsecciones.",
    example: {
      eshtml: "<e3>Subsubtítulo</e3>",
      html: "<h3>Subsubtitle</h3>",
    },
  },
  e4: {
    eshtml: "e4",
    html: "h4",
    category: "Content sectioning",
    description: "Encabezado de nivel 4.",
    example: {
      eshtml: "<e4>Encabezado Nivel 4</e4>",
      html: "<h4>Heading Level 4</h4>",
    },
  },
  e5: {
    eshtml: "e5",
    html: "h5",
    category: "Content sectioning",
    description: "Encabezado de nivel 5.",
    example: {
      eshtml: "<e5>Encabezado Nivel 5</e5>",
      html: "<h5>Heading Level 5</h5>",
    },
  },
  e6: {
    eshtml: "e6",
    html: "h6",
    category: "Content sectioning",
    description: "Encabezado de nivel 6.",
    example: {
      eshtml: "<e6>Encabezado Nivel 6</e6>",
      html: "<h6>Heading Level 6</h6>",
    },
  },
  grupoe: {
    eshtml: "grupoe",
    html: "hgroup",
    category: "Content sectioning",
    description:
      "Representa un encabezado agrupado con cualquier contenido secundario, como subtítulos, un título alternativo o un eslogan.",
    example: {
      eshtml: `<grupoe>
  <e1>Título Principal</e1>
  <e2>Subtítulo</e2>
</grupoe>`,
      html: `<hgroup>
  <h1>Main Title</h1>
  <h2>Subtitle</h2>
</hgroup>`,
    },
  },
  principal: {
    eshtml: "principal",
    html: "main",
    category: "Content sectioning",
    description:
      "Representa el contenido dominante del cuerpo de un documento. El área de contenido principal consiste en contenido que está directamente relacionado con o expande el tema central de un documento, o la funcionalidad central de una aplicación.",
    example: {
      eshtml: `<principal>
  <p>Contenido principal del documento.</p>
</principal>`,
      html: `<main>
  <p>Main content of the document.</p>
</main>`,
    },
  },
  nav: {
    eshtml: "nav",
    html: "nav",
    category: "Content sectioning",
    description:
      "Representa una sección de una página cuyo propósito es proporcionar enlaces de navegación, ya sea dentro del documento actual o a otros documentos.",
    example: {
      eshtml: `<nav>
  <enlace href="/">Inicio</enlace>
  <enlace href="/acerca">Acerca</enlace>
</nav>`,
      html: `<nav>
  <a href="/">Home</a>
  <a href="/about">About</a>
</nav>`,
    },
  },
  buscar: {
    eshtml: "buscar",
    html: "search",
    category: "Content sectioning",
    description:
      "Representa una parte que contiene un conjunto de controles de formulario u otro contenido relacionado con la realización de una operación de búsqueda o filtrado.",
    example: {
      eshtml: `<buscar>
  <formulario acción="/buscar" método="get">
    <entrada tipo="text" nombre="q" />
    <botón tipo="submit">Buscar</botón>
  </formulario>
</buscar>`,
      html: `<search>
  <form action="/search" method="get">
    <input type="text" name="q" />
    <button type="submit">Search</button>
  </form>
</search>`,
    },
  },

  // Text content
  p: {
    eshtml: "p",
    html: "p",
    category: "Text content",
    description: "Representa un párrafo de texto.",
    example: {
      eshtml: "<p>Este es un párrafo en EsHTML.</p>",
      html: "<p>Este es un párrafo en HTML.</p>",
    },
  },
  div: {
    eshtml: "div",
    html: "div",
    category: "Text content",
    description:
      "Un contenedor genérico para contenido de flujo, que no otorga ningún significado específico al contenido.",
    example: {
      eshtml: `<div class="contenedor">
  <p>Texto dentro de un div.</p>
</div>`,
      html: `<div class="contenedor">
  <p>Texto dentro de un div.</p>
</div>`,
    },
  },
  citabloque: {
    eshtml: "citabloque",
    html: "blockquote",
    category: "Text content",
    description: "Indica que el texto contenido es una cita extendida.",
    attributes: [
      {
        name: "citar",
        html: "cite",
        description: "URL de la fuente de la cita.",
      },
    ],
    example: {
      eshtml:
        '<citabloque citar="https://ejemplo.com">Esta es una cita.</citabloque>',
      html: '<blockquote cite="https://example.com">This is a quote.</blockquote>',
    },
  },
  dd: {
    eshtml: "dd",
    html: "dd",
    category: "Text content",
    description:
      "Proporciona la descripción, definición o valor para el término precedente en una lista de descripción.",
    example: {
      eshtml:
        "<dl>\n  <dt>HTML</dt>\n  <dd>Lenguaje de marcado para documentos web.</dd>\n</dl>",
      html: "<dl>\n  <dt>HTML</dt>\n  <dd>Markup language for web documents.</dd>\n</dl>",
    },
  },
  dl: {
    eshtml: "dl",
    html: "dl",
    category: "Text content",
    description:
      "Representa una lista de descripción. Contiene términos y descripciones.",
    example: {
      eshtml: "<dl>\n  <dt>Término</dt>\n  <dd>Descripción</dd>\n</dl>",
      html: "<dl>\n  <dt>Term</dt>\n  <dd>Description</dd>\n</dl>",
    },
  },
  dt: {
    eshtml: "dt",
    html: "dt",
    category: "Text content",
    description: "Especifica un término en una lista de descripción.",
    example: {
      eshtml: "<dt>HTML</dt>",
      html: "<dt>HTML</dt>",
    },
  },
  figura: {
    eshtml: "figura",
    html: "figure",
    category: "Text content",
    description:
      "Representa contenido autocontenido, opcionalmente con una leyenda.",
    example: {
      eshtml: `<figura>
  <imagen src="foto.jpg" alt="Una foto" />
  <piefigura>Descripción de la foto</piefigura>
</figura>`,
      html: `<figure>
  <img src="foto.jpg" alt="A photo" />
  <figcaption>Description of the photo</figcaption>
</figure>`,
    },
  },
  piefigura: {
    eshtml: "piefigura",
    html: "figcaption",
    category: "Text content",
    description:
      "Representa una leyenda o descripción para el contenido de su elemento figura padre.",
    example: {
      eshtml: "<piefigura>Descripción de la figura</piefigura>",
      html: "<figcaption>Figure description</figcaption>",
    },
  },
  hr: {
    eshtml: "hr",
    html: "hr",
    category: "Text content",
    description:
      "Representa un cambio temático entre elementos a nivel de párrafo.",
    example: {
      eshtml: "<p>Sección 1</p>\n<hr />\n<p>Sección 2</p>",
      html: "<p>Section 1</p>\n<hr />\n<p>Section 2</p>",
    },
  },
  lo: {
    eshtml: "lo",
    html: "ol",
    category: "Text content",
    description: "Representa una lista ordenada de elementos.",
    example: {
      eshtml:
        "<lo>\n  <el>Primer elemento</el>\n  <el>Segundo elemento</el>\n</lo>",
      html: "<ol>\n  <li>First item</li>\n  <li>Second item</li>\n</ol>",
    },
  },
  ld: {
    eshtml: "ld",
    html: "ul",
    category: "Text content",
    description: "Representa una lista no ordenada de elementos.",
    example: {
      eshtml: "<ld>\n  <el>Elemento</el>\n  <el>Otro elemento</el>\n</ld>",
      html: "<ul>\n  <li>Item</li>\n  <li>Another item</li>\n</ul>",
    },
  },
  el: {
    eshtml: "el",
    html: "li",
    category: "Text content",
    description:
      "Representa un elemento en una lista. Debe estar contenido en un elemento padre lo, ld o menú.",
    example: {
      eshtml: "<el>Elemento de lista</el>",
      html: "<li>List item</li>",
    },
  },
  menú: {
    eshtml: "menú",
    html: "menu",
    category: "Text content",
    description:
      "Representa una lista no ordenada de elementos, semánticamente equivalente a ld.",
    example: {
      eshtml: "<menú>\n  <el>Opción 1</el>\n  <el>Opción 2</el>\n</menú>",
      html: "<menu>\n  <li>Option 1</li>\n  <li>Option 2</li>\n</menu>",
    },
  },
  pre: {
    eshtml: "pre",
    html: "pre",
    category: "Text content",
    description:
      "Representa texto preformateado que se debe presentar exactamente como está escrito.",
    example: {
      eshtml: "<pre>\nTexto\n  con formato\n    preservado\n</pre>",
      html: "<pre>\nText\n  with format\n    preserved\n</pre>",
    },
  },
  // ... Add more text content tags

  c: {
    eshtml: "c",
    html: "q",
    category: "Inline text semantics",
    description: "Define una cita corta. Los navegadores normalmente insertan comillas alrededor de la cita automáticamente.",
    example: {
      eshtml: "<p>Él dijo <c>Hola Mundo</c>.</p>",
      html: "<p>He said <q>Hello World</q>.</p>",
    },
  },

  // Image and multimedia
  audio: {
    eshtml: "audio",
    html: "audio",
    category: "Image and multimedia",
    description: "Embebe contenido de sonido en documentos.",
    attributes: [
      {
        name: "controles",
        html: "controls",
        description: "Muestra controles de reproducción.",
      },
      {
        name: "src",
        html: "src",
        description: "Especifica la ruta del archivo de audio.",
      },
    ],
    example: {
      eshtml: '<audio src="sonido.mp3" controles></audio>',
      html: '<audio src="sonido.mp3" controls></audio>',
    },
  },
  area: {
    eshtml: "area",
    html: "area",
    category: "Image and multimedia",
    description:
      "Define un área dentro de un mapa de imagen que tiene áreas clicables predefinidas.",
    attributes: [
      {
        name: "forma",
        html: "shape",
        description: "Especifica la forma del área.",
        values: ["rect", "circle", "poly", "default"],
      },
      {
        name: "coords",
        html: "coords",
        description: "Especifica las coordenadas del área.",
      },
      {
        name: "href",
        html: "href",
        description: "Especifica la URL del enlace.",
      },
      {
        name: "alt",
        html: "alt",
        description: "Proporciona texto alternativo para el área.",
      },
    ],
    example: {
      eshtml:
        '<mapa nombre="mapa"><area forma="rect" coords="34,44,270,350" href="https://ejemplo.com" alt="Ejemplo"></mapa>',
      html: '<map name="map"><area shape="rect" coords="34,44,270,350" href="https://example.com" alt="Example"></map>',
    },
  },
  img: {
    eshtml: "img",
    html: "img",
    category: "Image and multimedia",
    description: "Incorpora una imagen en el documento.",
    attributes: [
      {
        name: "src",
        html: "src",
        description: "Especifica la ruta de la imagen.",
      },
      {
        name: "alt",
        html: "alt",
        description:
          "Proporciona texto alternativo si la imagen no se puede mostrar.",
      },
    ],
    example: {
      eshtml: '<img src="foto.jpg" alt="Descripción de la imagen" />',
      html: '<img src="photo.jpg" alt="Image description" />',
    },
  },
  mapa: {
    eshtml: "mapa",
    html: "map",
    category: "Image and multimedia",
    description: "Define un mapa de imagen (una área de enlace clicable).",
    attributes: [
      {
        name: "nombre",
        html: "name",
        description: "Especifica el nombre del mapa de imagen.",
      },
    ],
    example: {
      eshtml:
        '<mapa nombre="mapa"><area forma="rect" coords="34,44,270,350" href="https://ejemplo.com" alt="Ejemplo"></mapa>',
      html: '<map name="map"><area shape="rect" coords="34,44,270,350" href="https://example.com" alt="Example"></map>',
    },
  },
  track: {
    eshtml: "track",
    html: "track",
    category: "Image and multimedia",
    description:
      "Se usa como hijo de los elementos de medios, audio y video. Permite especificar pistas de texto temporizadas.",
    attributes: [
      {
        name: "kind",
        html: "kind",
        description: "Especifica el tipo de pista de texto.",
        values: [
          "subtitles",
          "captions",
          "descriptions",
          "chapters",
          "metadata",
        ],
      },
      {
        name: "src",
        html: "src",
        description: "Especifica la URL de la pista de texto.",
      },
      {
        name: "srclang",
        html: "srclang",
        description: "Especifica el idioma de la pista de texto.",
      },
      {
        name: "label",
        html: "label",
        description: "Proporciona un título para la pista de texto.",
      },
    ],
    example: {
      eshtml:
        '<video src="video.mp4" controles><track kind="subtitles" src="subtitulos.vtt" srclang="es" label="Español"></video>',
      html: '<video src="video.mp4" controls><track kind="subtitles" src="subtitles.vtt" srclang="en" label="English"></video>',
    },
  },
  video: {
    eshtml: "video",
    html: "video",
    category: "Image and multimedia",
    description:
      "Embebe un reproductor de medios que soporta la reproducción de video en el documento.",
    attributes: [
      {
        name: "src",
        html: "src",
        description: "Especifica la ruta del archivo de video.",
      },
      {
        name: "controles",
        html: "controls",
        description: "Muestra controles de reproducción.",
      },
    ],
    example: {
      eshtml: '<video src="video.mp4" controles></video>',
      html: '<video src="video.mp4" controls></video>',
    },
  },

  // Embedded content
  empotrar: {
    eshtml: "empotrar",
    html: "embed",
    category: "Embedded content",
    description:
      "Embebe contenido externo en el punto especificado del documento.",
    attributes: [
      {
        name: "src",
        html: "src",
        description: "Especifica la URL del recurso embebido.",
      },
      {
        name: "tipo",
        html: "type",
        description: "Especifica el tipo de contenido embebido.",
      },
    ],
    example: {
      eshtml: '<embed src="archivo.swf" tipo="application/x-shockwave-flash">',
      html: '<embed src="file.swf" type="application/x-shockwave-flash">',
    },
  },
  fencedframe: {
    eshtml: "fencedframe",
    html: "fencedframe",
    category: "Embedded content",
    description:
      "Representa un contexto de navegación anidado, similar a iframe pero con más características de privacidad nativas.",
    example: {
      eshtml: '<fencedframe src="https://ejemplo.com"></fencedframe>',
      html: '<fencedframe src="https://example.com"></fencedframe>',
    },
  },
  marcol: {
    eshtml: "marcol",
    html: "iframe",
    category: "Embedded content",
    description:
      "Representa un contexto de navegación anidado, embebiendo otra página HTML en la actual.",
    attributes: [
      {
        name: "src",
        html: "src",
        description: "Especifica la URL de la página embebida.",
      },
      {
        name: "ancho",
        html: "width",
        description: "Especifica el ancho del marcol.",
      },
      {
        name: "alto",
        html: "height",
        description: "Especifica la altura del marcol.",
      },
    ],
    example: {
      eshtml:
        '<marcol src="https://ejemplo.com" ancho="600" alto="400"></marcol>',
      html: '<iframe src="https://example.com" width="600" height="400"></iframe>',
    },
  },
  objeto: {
    eshtml: "objeto",
    html: "object",
    category: "Embedded content",
    description:
      "Representa un recurso externo, que puede ser tratado como una imagen, un contexto de navegación anidado, o un recurso manejado por un plugin.",
    attributes: [
      {
        name: "datos",
        html: "data",
        description: "Especifica la URL del recurso embebido.",
      },
      {
        name: "tipo",
        html: "type",
        description: "Especifica el tipo de contenido embebido.",
      },
    ],
    example: {
      eshtml: '<objeto datos="archivo.pdf" tipo="application/pdf"></objeto>',
      html: '<object data="file.pdf" type="application/pdf"></object>',
    },
  },
  portal: {
    eshtml: "portal",
    html: "portal",
    category: "Embedded content",
    description:
      "Permite la incrustación de otra página HTML en la actual para habilitar una navegación más fluida a nuevas páginas.",
    example: {
      eshtml: '<portal src="https://ejemplo.com"></portal>',
      html: '<portal src="https://example.com"></portal>',
    },
  },
  fuente: {
    eshtml: "fuente",
    html: "source",
    category: "Embedded content",
    description:
      "Especifica múltiples recursos de medios para el elemento picture, el elemento audio o el elemento video.",
    attributes: [
      {
        name: "srcset",
        html: "srcset",
        description: "Especifica la URL de la imagen a usar.",
      },
      {
        name: "media",
        html: "media",
        description:
          "Especifica las condiciones bajo las cuales se debe usar la imagen.",
      },
    ],
    example: {
      eshtml:
        '<imagen><fuente media="(min-width: 800px)" srcset="grande.jpg"><img src="pequeño.jpg" alt="Descripción de la imagen"></imagen>',
      html: '<picture><source media="(min-width: 800px)" srcset="large.jpg"><img src="small.jpg" alt="Image description"></picture>',
    },
  },
  imagen: {
    eshtml: "imagen",
    html: "picture",
    category: "Embedded content",
    description: "Define una imagen o ilustración.",
    example: {
      eshtml: `<imagen>
  <fuente media="(min-width: 800px)" srcset="imagen-grande.jpg" />
  <fuente media="(min-width: 450px)" srcset="imagen-mediana.jpg" />
  <fuente srcset="imagen-pequeña.jpg" />
  <imagen src="imagen-pequeña.jpg" alt="Descripción de la imagen" />
</imagen>`,
      html: `<picture>
  <source media="(min-width: 800px)" srcset="large-image.jpg" />
  <source media="(min-width: 450px)" srcset="medium-image.jpg" />
  <source srcset="small-image.jpg" />
  <img src="small-image.jpg" alt="Image description" />
</picture>`,
    },
  },

  // Forms
  formulario: {
    eshtml: "formulario",
    html: "form",
    category: "Forms",
    description:
      "Representa una sección de un documento que contiene controles interactivos para enviar información.",
    attributes: [
      {
        name: "acción",
        html: "action",
        description: "Especifica dónde enviar los datos del formulario.",
      },
      {
        name: "método",
        html: "method",
        description: "Especifica el método HTTP a utilizar.",
        values: ["get", "post"],
      },
    ],
    example: {
      eshtml: `<formulario acción="/enviar" método="post">
  <entrada tipo="texto" nombre="usuario" />
  <botón tipo="submit">Enviar</botón>
</formulario>`,
      html: `<form action="/enviar" method="post">
  <input type="text" name="usuario" />
  <button type="submit">Enviar</button>
</form>`,
    },
  },

  entrada: {
    eshtml: "entrada",
    html: "input",
    category: "Forms",
    description:
      "Crea un control interactivo para ingresar datos en un formulario.",
    attributes: [
      {
        name: "tipo",
        html: "type",
        description: "Especifica el tipo de control.",
        values: [
          "text",
          "password",
          "email",
          "number",
          "checkbox",
          "radio",
          "submit",
          "reset",
        ],
      },
      {
        name: "nombre",
        html: "name",
        description: "Nombre del control, usado al enviar el formulario.",
      },
      {
        name: "valor",
        html: "value",
        description: "Valor inicial del control.",
      },
    ],
    example: {
      eshtml: '<entrada tipo="email" nombre="correo" />',
      html: '<input type="email" name="correo" />',
    },
  },

  botón: {
    eshtml: "botón",
    html: "button",
    category: "Forms",
    description:
      "Representa un botón clickable, utilizado para enviar formularios o interactuar con la página.",
    attributes: [
      {
        name: "tipo",
        html: "type",
        description: "Define el comportamiento del botón.",
        values: ["button", "submit", "reset"],
      },
    ],
    example: {
      eshtml: '<botón tipo="submit">Enviar</botón>',
      html: '<button type="submit">Enviar</button>',
    },
  },

  datalist: {
    eshtml: "datalist",
    html: "datalist",
    category: "Forms",
    description:
      "Contiene un conjunto de elementos opción que representan las opciones permitidas o recomendadas disponibles para elegir dentro de otros controles.",
    example: {
      eshtml: `<entrada tipo="text" list="opciones">
<datalist id="opciones">
  <opción valor="Opción 1"></opción>
  <opción valor="Opción 2"></opción>
</datalist>`,
      html: `<input type="text" list="options">
<datalist id="options">
  <option value="Option 1"></option>
  <option value="Option 2"></option>
</datalist>`,
    },
  },

  campo: {
    eshtml: "campo",
    html: "fieldset",
    category: "Forms",
    description:
      "Se usa para agrupar varios controles y etiquetas dentro de un formulario web.",
    example: {
      eshtml: `<campo>
  <leyenda>Información Personal</leyenda>
  <entrada tipo="text" nombre="nombre" />
  <entrada tipo="email" nombre="correo" />
</campo>`,
      html: `<fieldset>
  <legend>Personal Information</legend>
  <input type="text" name="name" />
  <input type="email" name="email" />
</fieldset>`,
    },
  },

  etiqueta: {
    eshtml: "etiqueta",
    html: "label",
    category: "Forms",
    description:
      "Representa una etiqueta para un elemento en una interfaz de usuario.",
    example: {
      eshtml: `<etiqueta for="nombre">Nombre:</etiqueta>
<entrada tipo="text" id="nombre" nombre="nombre" />`,
      html: `<label for="name">Name:</label>
<input type="text" id="name" name="name" />`,
    },
  },

  leyenda: {
    eshtml: "leyenda",
    html: "legend",
    category: "Forms",
    description:
      "Representa una leyenda para el contenido de su elemento campo padre.",
    example: {
      eshtml: `<campo>
  <leyenda>Información Personal</leyenda>
  <entrada tipo="text" nombre="nombre" />
  <entrada tipo="email" nombre="correo" />
</campo>`,
      html: `<fieldset>
  <legend>Personal Information</legend>
  <input type="text" name="name" />
  <input type="email" name="email" />
</fieldset>`,
    },
  },

  medidor: {
    eshtml: "medidor",
    html: "meter",
    category: "Forms",
    description:
      "Representa un valor escalar dentro de un rango conocido o un valor fraccional.",
    attributes: [
      {
        name: "min",
        html: "min",
        description: "El valor mínimo del rango.",
      },
      {
        name: "max",
        html: "max",
        description: "El valor máximo del rango.",
      },
      {
        name: "valor",
        html: "value",
        description: "El valor actual del medidor.",
      },
    ],
    example: {
      eshtml: '<medidor min="0" max="100" valor="70">70%</medidor>',
      html: '<meter min="0" max="100" value="70">70%</meter>',
    },
  },

  grupoopc: {
    eshtml: "grupoopc",
    html: "optgroup",
    category: "Forms",
    description: "Crea un grupo de opciones dentro de un elemento seleccionar.",
    attributes: [
      {
        name: "etiqueta",
        html: "label",
        description: "Proporciona una etiqueta para el grupo de opciones.",
      },
    ],
    example: {
      eshtml: `<seleccionar>
  <grupoopc etiqueta="Frutas">
    <opción valor="manzana">Manzana</opción>
    <opción valor="naranja">Naranja</opción>
  </grupoopc>
</seleccionar>`,
      html: `<select>
  <optgroup label="Fruits">
    <option value="apple">Apple</option>
    <option value="orange">Orange</option>
  </optgroup>
</select>`,
    },
  },

  opción: {
    eshtml: "opción",
    html: "option",
    category: "Forms",
    description:
      "Se usa para definir un elemento contenido en un seleccionar, un grupoopc o un datalist.",
    attributes: [
      {
        name: "valor",
        html: "value",
        description: "El valor de la opción.",
      },
    ],
    example: {
      eshtml: '<opción valor="manzana">Manzana</opción>',
      html: '<option value="apple">Apple</option>',
    },
  },

  salida: {
    eshtml: "salida",
    html: "output",
    category: "Forms",
    description:
      "Elemento contenedor en el que un sitio o aplicación puede inyectar los resultados de un cálculo o el resultado de una acción del usuario.",
    example: {
      eshtml: '<salida nombre="resultado">0</salida>',
      html: '<output name="result">0</output>',
    },
  },

  progreso: {
    eshtml: "progreso",
    html: "progress",
    category: "Forms",
    description:
      "Muestra un indicador que muestra el progreso de una tarea, típicamente mostrado como una barra de progreso.",
    attributes: [
      {
        name: "valor",
        html: "value",
        description: "El valor actual del progreso.",
      },
      {
        name: "max",
        html: "max",
        description: "El valor máximo del progreso.",
      },
    ],
    example: {
      eshtml: '<progreso valor="70" max="100">70%</progreso>',
      html: '<progress value="70" max="100">70%</progress>',
    },
  },

  seleccionar: {
    eshtml: "seleccionar",
    html: "select",
    category: "Forms",
    description: "Representa un control que proporciona un menú de opciones.",
    example: {
      eshtml: `<seleccionar>
  <opción valor="manzana">Manzana</opción>
  <opción valor="naranja">Naranja</opción>
</seleccionar>`,
      html: `<select>
  <option value="apple">Apple</option>
  <option value="orange">Orange</option>
</select>`,
    },
  },

  áreatexto: {
    eshtml: "áreatexto",
    html: "textarea",
    category: "Forms",
    description:
      "Representa un control de edición de texto de varias líneas, útil cuando se desea permitir a los usuarios ingresar una cantidad considerable de texto libre.",
    example: {
      eshtml:
        '<áreatexto nombre="comentarios" filas="4" columnas="50"></áreatexto>',
      html: '<textarea name="comments" rows="4" cols="50"></textarea>',
    },
  },

  // Table content
  tabla: {
    eshtml: "tabla",
    html: "table",
    category: "Table content",
    description: "Define una tabla para mostrar datos en filas y columnas.",
    example: {
      eshtml: `<tabla>
  <thead>
    <tr>
      <th>Nombre</th>
      <th>Edad</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Ana</td>
      <td>30</td>
    </tr>
  </tbody>
</tabla>`,
      html: `<table>
  <thead>
    <tr>
      <th>Nombre</th>
      <th>Edad</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Ana</td>
      <td>30</td>
    </tr>
  </tbody>
</table>`,
    },
  },
  ft: {
    eshtml: "ft",
    html: "tr",
    category: "Table content",
    description: "Representa una fila en una tabla.",
    example: {
      eshtml: "<ft>\n  <!-- Celdas -->\n</ft>",
      html: "<tr>\n  <!-- Celdas -->\n</tr>",
    },
  },
  ct: {
    eshtml: "ct",
    html: "td",
    category: "Table content",
    description: "Define una celda de datos en una tabla.",
    example: {
      eshtml: "<ct>Datos</ct>",
      html: "<td>Datos</td>",
    },
  },
  et: {
    eshtml: "et",
    html: "th",
    category: "Table content",
    description: "Define una celda de encabezado en una tabla.",
    example: {
      eshtml: "<et>Encabezado</et>",
      html: "<th>Encabezado</th>",
    },
  },
  // ... Add more table tags

  // Interactive elements
  detalles: {
    eshtml: "detalles",
    html: "details",
    category: "Interactive elements",
    description:
      'Crea un widget de divulgación donde la información es visible solo cuando está en un estado "abierto".',
    example: {
      eshtml: `<detalles>
  <resumen>Más información</resumen>
  <p>Contenido detallado.</p>
</detalles>`,
      html: `<details>
  <summary>M��s información</summary>
  <p>Contenido detallado.</p>
</details>`,
    },
  },
  diálogo: {
    eshtml: "diálogo",
    html: "dialog",
    category: "Interactive elements",
    description: "Representa una caja de diálogo o componente interactivo.",
    example: {
      eshtml: `<diálogo abierto>
  <p>Este es un diálogo.</p>
</diálogo>`,
      html: `<dialog open>
  <p>Este es un diálogo.</p>
</dialog>`,
    },
  },
  resumen: {
    eshtml: "resumen",
    html: "summary",
    category: "Interactive elements",
    description:
      'Especifica un resumen o etiqueta para el elemento "detalles".',
    example: {
      eshtml: "<resumen>Detalles</resumen>",
      html: "<summary>Detalles</summary>",
    },
  },
  // ... Add more interactive elements

  // Scripting
  guion: {
    eshtml: "guion",
    html: "script",
    category: "Scripting",
    description: "Utilizado para insertar o referenciar código ejecutable.",
    attributes: [
      {
        name: "tipo",
        html: "type",
        description:
          'Tipo de lenguaje de script (por defecto "text/javascript").',
      },
      {
        name: "src",
        html: "src",
        description: "Especifica la URL del script externo.",
      },
    ],
    example: {
      eshtml: '<guion src="app.js"></guion>',
      html: '<script src="app.js"></script>',
    },
  },
  // ... Add more scripting tags

  // Other elements
  comentario: {
    eshtml: "!-- Esto es un comentario --",
    html: "!-- This is a comment --",
    category: "Other",
    description: "Los comentarios no son procesados y sirven como notas.",
    example: {
      eshtml: "<!-- Comentario en EsHTML -->",
      html: "<!-- Comentario en HTML -->",
    },
  },
  // ... Add more tags as needed
};
