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
    description: 'Define el número de columnas en un áreatexto.',
    elements: ['áreatexto'],
    example: {
      eshtml: '<áreatexto columnas="50"></áreatexto>',
      html: '<textarea cols="50"></textarea>'
    }
  }
}