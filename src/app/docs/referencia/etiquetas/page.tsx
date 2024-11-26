// src/app/docs/referencia/etiquetas/page.tsx
'use client';
import Link from 'next/link';
import { ChevronRight, Search } from 'lucide-react';
import { Nav } from '@/components/Nav';
import { DocsSidebar } from '@/components/DocsSidebar';
import { tagData, TagDefinition } from '@/lib/tagData';
import { removeAccents } from '@/lib/utils';
import { useState } from 'react';

// Update type definition
type Category = {
  title: string;
  tags: TagDefinition[];
}

// Update organizeTagsByCategory function
const organizeTagsByCategory = (): Category[] => {
  const categories: Record<string, TagDefinition[]> = {
    'Raíz Principal': [], // Main root
    'Metadatos del Documento': [], // Document metadata
    'Raíz de Sección': [], // Sectioning root
    'Secciones de Contenido': [], // Content sectioning
    'Contenido de Texto': [], // Text content
    'Semántica de Texto en Línea': [], // Inline text semantics
    'Imagen y Multimedia': [], // Image and multimedia
    'Contenido Incrustado': [], // Embedded content
    'Scripting': [], // Scripting
    'Ediciones Demarcadas': [], // Demarcating edits
    'Contenido de Tabla': [], // Table content
    'Formularios': [], // Forms
    'Elementos Interactivos': [], // Interactive elements
    'SVG y MathML': [], // SVG and MathML
    'Otros': [] // Other
  };

  Object.entries(tagData).forEach(([, tag]) => {
    switch(tag.category) {
      case 'Main root':
        categories['Raíz Principal'].push(tag);
        break;
      case 'Document metadata':
        categories['Metadatos del Documento'].push(tag);
        break;
      case 'Sectioning root':
        categories['Raíz de Sección'].push(tag);
        break;
      case 'Content sectioning':
        categories['Secciones de Contenido'].push(tag);
        break;
      case 'Text content':
        categories['Contenido de Texto'].push(tag);
        break;
      case 'Inline text semantics':
        categories['Semántica de Texto en Línea'].push(tag);
        break;
      case 'Image and multimedia':
        categories['Imagen y Multimedia'].push(tag);
        break;
      case 'Embedded content':
        categories['Contenido Incrustado'].push(tag);
        break;
      case 'Scripting':
        categories['Scripting'].push(tag);
        break;
      case 'Demarcating edits':
        categories['Ediciones Demarcadas'].push(tag);
        break;
      case 'Table content':
        categories['Contenido de Tabla'].push(tag);
        break;
      case 'Forms':
        categories['Formularios'].push(tag);
        break;
      case 'Interactive elements':
        categories['Elementos Interactivos'].push(tag);
        break;
      case 'SVG and MathML':
        categories['SVG y MathML'].push(tag);
        break;
      default:
        categories['Otros'].push(tag);
    }
  });

  return Object.entries(categories)
    .filter(([, tags]) => tags.length > 0)
    .map(([title, tags]) => ({
      title,
      tags
    }));
};

export default function EtiquetasPage() {
  const tagCategories = organizeTagsByCategory();
  const [searchQuery, setSearchQuery] = useState('');

  // Filter categories and their tags based on search
  const filteredCategories = tagCategories.map(category => ({
    ...category,
    tags: category.tags.filter(tag => {
      const searchTerms = searchQuery.toLowerCase();
      return (
        tag.eshtml.toLowerCase().includes(searchTerms) ||
        tag.html.toLowerCase().includes(searchTerms) ||
        tag.description.toLowerCase().includes(searchTerms)
      );
    })
  })).filter(category => category.tags.length > 0);

  return (
    <div className="min-h-screen bg-[#111827]">
      <Nav />
      <div className="flex pt-16">
        <DocsSidebar activePath="/docs/referencia/etiquetas" />

        <div className="flex-1 ml-64">
          <div className="max-w-[1200px] mx-auto">
            <div className="px-16 py-12">
              {/* Breadcrumb stays the same */}
              <div className="flex items-center text-sm text-gray-400 mb-8">
                <Link href="/docs" className="hover:text-white">Docs</Link>
                <ChevronRight className="w-4 h-4 mx-2" />
                <Link href="/docs/referencia" className="hover:text-white">Referencia</Link>
                <ChevronRight className="w-4 h-4 mx-2" />
                <span className="text-white">Etiquetas</span>
              </div>

              <article className="prose prose-invert max-w-4xl">
                <div className="mb-12">
                  <h1 className="text-4xl font-bold text-white mb-6">Referencia de elementos EsHTML</h1>
                  <p className="text-xl text-gray-300 leading-relaxed mb-4">
                    Esta página enumera todos los elementos de EsHTML, que se crean usando etiquetas, junto con sus equivalentes en HTML estándar en inglés.
                  </p>
                  <p className="text-xl text-gray-300 leading-relaxed mb-12">
                    Están agrupados por función para ayudarte a encontrar fácilmente lo que buscas.
                  </p>
                </div>

                <div className="flex justify-between items-center mb-8">
                  <div className="relative w-full max-w-md">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input 
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="Buscar etiquetas..."
                      className="w-full pl-10 pr-4 py-2 bg-gray-900/50 border border-gray-800/50 rounded-lg text-gray-300 placeholder-gray-500 focus:outline-none focus:border-orange-500/50"
                    />
                  </div>
                </div>

                {filteredCategories.map((category) => (
                  <div key={category.title} className="mb-12">
                    <h2 className="text-2xl font-semibold text-white mb-6">{category.title}</h2>
                    <div className="grid grid-cols-1 gap-4 not-prose">
                      {category.tags.map((tag) => (
                        <Link
                          key={tag.eshtml}
                          href={`/docs/referencia/etiquetas/${removeAccents(tag.eshtml)}`}
                          className="block bg-gray-900/50 rounded-lg border border-gray-800/50 hover:border-orange-500/50 transition-colors p-4"
                        >
                          <div className="flex items-start">
                            <div>
                              <h3 className="text-lg font-medium text-white mb-1">
                                <code className="text-orange-400">&lt;{tag.eshtml}&gt;</code>
                                <span className="mx-2 text-gray-500">→</span>
                                <code className="text-blue-400">&lt;{tag.html}&gt;</code>
                              </h3>
                              <p className="text-gray-300 text-sm">{tag.description}</p>
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </article>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}