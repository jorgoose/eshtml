// src/lib/attributeData.ts

export type AttributeDefinition = {
  eshtml: string;
  html: string;
  description: string;
  elements?: string[];
  values?: string[];
  example?: {
    eshtml: string;
    html: string;
  };
};

export const attributeData: Record<string, AttributeDefinition> = {
  acepta: {
    eshtml: 'acepta',
    html: 'accept',
    description: 'Lista de tipos que acepta el servidor, típicamente un tipo de archivo.',
    elements: ['formulario', 'entrada'],
    example: {
      eshtml: '<entrada tipo="archivo" acepta=".jpg,.png">',
      html: '<input type="file" accept=".jpg,.png">'
    }
  },

  acción: {
    eshtml: 'acción', 
    html: 'action',
    description: 'La URL del programa que procesa la información enviada a través del formulario.',
    elements: ['formulario'],
    example: {
      eshtml: '<formulario acción="/enviar">...</formulario>',
      html: '<form action="/submit">...</form>'
    }
  },

  ancho: {
    eshtml: 'ancho',
    html: 'width',
    description: 'Especifica el ancho del elemento.',
    elements: ['lienzo', 'marcol', 'img', 'entrada', 'objeto', 'video'],
    example: {
      eshtml: '<img fte="imagen.jpg" ancho="500">',
      html: '<img src="image.jpg" width="500">'
    }
  },

  alto: {
    eshtml: 'alto',
    html: 'height',
    description: 'Especifica la altura del elemento.',
    elements: ['lienzo', 'marcol', 'img', 'entrada', 'objeto', 'video'],
    example: {
      eshtml: '<img fte="imagen.jpg" alto="300">',
      html: '<img src="image.jpg" height="300">'
    }
  },

  clase: {
    eshtml: 'clase',
    html: 'class',
    description: 'Se usa frecuentemente con CSS para dar estilo a elementos con propiedades comunes.',
    elements: ['Global'],
    example: {
      eshtml: '<div clase="contenedor">...</div>',
      html: '<div class="container">...</div>'
    }
  },

  columnas: {
    eshtml: 'columnas',
    html: 'cols',
    description: 'Define el número de columnas en un área de texto (áreatexto).',
    elements: ['áreatexto'],
    example: {
      eshtml: '<áreatexto columnas="50"></áreatexto>',
      html: '<textarea cols="50"></textarea>'
    }
  },

  deshabilitado: {
    eshtml: 'deshabilitado',
    html: 'disabled',
    description: 'Indica si el usuario puede interactuar con el elemento.',
    elements: ['botón', 'campogrupo', 'entrada', 'opcióngrupo', 'opción', 'selección', 'áreatexto'],
    example: {
      eshtml: '<botón deshabilitado>No disponible</botón>',
      html: '<button disabled>Not available</button>'
    }
  },

  enlace: {
    eshtml: 'enlace',
    html: 'href',
    description: 'La URL del recurso enlazado.',
    elements: ['a', 'área', 'base', 'enlace'],
    example: {
      eshtml: '<a enlace="/página">Ir a página</a>',
      html: '<a href="/page">Go to page</a>'
    }
  },

  fte: {
    eshtml: 'fte',
    html: 'src',
    description: 'La URL del contenido incrustable.',
    elements: ['audio', 'img', 'entrada', 'script', 'fuente', 'video'],
    example: {
      eshtml: '<img fte="imagen.jpg" ta="Mi imagen">',
      html: '<img src="image.jpg" alt="My image">'
    }
  },

  marcado: {
    eshtml: 'marcado',
    html: 'checked',
    description: 'Indica si el elemento debe estar marcado al cargar la página.',
    elements: ['entrada'],
    example: {
      eshtml: '<entrada tipo="casilla" marcado>',
      html: '<input type="checkbox" checked>'
    }
  },

  máximo: {
    eshtml: 'máximo',
    html: 'max',
    description: 'Indica el valor máximo permitido.',
    elements: ['entrada', 'medidor', 'progreso'],
    example: {
      eshtml: '<entrada tipo="número" máximo="100">',
      html: '<input type="number" max="100">'
    }
  },

  método: {
    eshtml: 'método',
    html: 'method',
    description: 'Define qué método HTTP usar al enviar el formulario. Puede ser GET (predeterminado) o POST.',
    elements: ['formulario'],
    values: ['get', 'post'],
    example: {
      eshtml: '<formulario método="post">',
      html: '<form method="post">'
    }
  },

  nombre: {
    eshtml: 'nombre',
    html: 'name',
    description: 'Nombre del elemento. Por ejemplo, usado por el servidor para identificar campos en envíos de formularios.',
    elements: ['botón', 'formulario', 'campogrupo', 'marcol', 'entrada', 'objeto', 'salida', 'selección', 'áreatexto'],
    example: {
      eshtml: '<entrada nombre="usuario">',
      html: '<input name="user">'
    }
  },

  requerido: {
    eshtml: 'requerido',
    html: 'required',
    description: 'Indica si este elemento es obligatorio de rellenar o no.',
    elements: ['entrada', 'selección', 'áreatexto'],
    example: {
      eshtml: '<entrada tipo="texto" requerido>',
      html: '<input type="text" required>'
    }
  },

  tipo: {
    eshtml: 'tipo',
    html: 'type',
    description: 'Define el tipo del elemento.',
    elements: ['botón', 'entrada', 'enlace', 'script', 'fuente', 'estilo'],
    example: {
      eshtml: '<entrada tipo="texto">',
      html: '<input type="text">'
    }
  },

  valor: {
    eshtml: 'valor',
    html: 'value',
    description: 'Define un valor predeterminado que se mostrará en el elemento al cargar la página.',
    elements: ['botón', 'datos', 'entrada', 'li', 'medidor', 'opción', 'progreso'],
    example: {
      eshtml: '<entrada tipo="texto" valor="Valor predeterminado">',
      html: '<input type="text" value="Default value">'
    }
  },

  autofoco: {
    eshtml: 'autofoco',
    html: 'autofocus',
    description: 'El elemento debe ser enfocado automáticamente cuando se carga la página.',
    elements: ['botón', 'entrada', 'selección', 'áreatexto'],
    example: {
      eshtml: '<entrada tipo="texto" autofoco>',
      html: '<input type="text" autofocus>'
    }
  },

  autoreproducir: {
    eshtml: 'autoreproducir',
    html: 'autoplay',
    description: 'El audio o video debe reproducirse tan pronto como sea posible.',
    elements: ['audio', 'video'],
    example: {
      eshtml: '<video fte="video.mp4" autoreproducir>',
      html: '<video src="video.mp4" autoplay>'
    }
  },

  lugar: {
    eshtml: 'lugar',
    html: 'placeholder',
    description: 'Proporciona un texto de sugerencia al usuario sobre lo que puede ingresar en el campo.',
    elements: ['entrada', 'áreatexto'],
    example: {
      eshtml: '<entrada tipo="texto" lugar="Escribe aquí...">',
      html: '<input type="text" placeholder="Type here...">'
    }
  },

  longitudmáxima: {
    eshtml: 'longitudmáxima',
    html: 'maxlength',
    description: 'Define el número máximo de caracteres permitidos en el elemento.',
    elements: ['entrada', 'áreatexto'],
    example: {
      eshtml: '<entrada tipo="texto" longitudmáxima="50">',
      html: '<input type="text" maxlength="50">'
    }
  },

  múltiple: {
    eshtml: 'múltiple',
    html: 'multiple',
    description: 'Indica si se pueden ingresar múltiples valores en una entrada de tipo email o archivo.',
    elements: ['entrada', 'selección'],
    example: {
      eshtml: '<entrada tipo="archivo" múltiple>',
      html: '<input type="file" multiple>'
    }
  },

  soloLectura: {
    eshtml: 'soloLectura',
    html: 'readonly',
    description: 'Indica si el elemento puede ser editado por el usuario.',
    elements: ['entrada', 'áreatexto'],
    example: {
      eshtml: '<entrada tipo="texto" soloLectura valor="No editable">',
      html: '<input type="text" readonly value="Not editable">'
    }
  },

  seleccionado: {
    eshtml: 'seleccionado',
    html: 'selected',
    description: 'Define un valor que estará seleccionado al cargar la página.',
    elements: ['opción'],
    example: {
      eshtml: '<opción valor="1" seleccionado>Opción 1</opción>',
      html: '<option value="1" selected>Option 1</option>'
    }
  },

  tamaño: {
    eshtml: 'tamaño',
    html: 'size',
    description: 'Define el ancho del elemento en píxeles o en número de caracteres.',
    elements: ['entrada', 'selección'],
    example: {
      eshtml: '<entrada tipo="texto" tamaño="30">',
      html: '<input type="text" size="30">'
    }
  },

  paso: {
    eshtml: 'paso',
    html: 'step',
    description: 'Especifica el intervalo entre números válidos en una entrada numérica.',
    elements: ['entrada'],
    example: {
      eshtml: '<entrada tipo="número" paso="0.5">',
      html: '<input type="number" step="0.5">'
    }
  }
};