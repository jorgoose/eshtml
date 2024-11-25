// src/lib/tags-data.ts
export type TagDefinition = {
  eshtml: string;
  html: string;
  category: 'structure' | 'text' | 'forms' | 'media' | 'tables' | 'other';
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
  eshtml: {
    eshtml: 'eshtml',
    html: 'html',
    category: 'structure',
    description: 'El elemento raíz que contiene todo el contenido HTML',
    attributes: [{
      name: 'idioma',
      html: 'lang',
      description: 'Especifica el idioma del contenido',
      values: ['es', 'en']
    }],
    example: {
      eshtml: '<eshtml idioma="es">\n  <!-- contenido -->\n</eshtml>',
      html: '<html lang="es">\n  <!-- content -->\n</html>'
    }
  },
  titulo: {
    eshtml: 'título',
    html: 'title',
    category: 'structure',
    description: 'Define el título del documento',
    example: {
      eshtml: '<título>Mi Página</título>',
      html: '<title>Mi Página</title>'
    }
  }
  // Add more tags...
};