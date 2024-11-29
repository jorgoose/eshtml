// src/app/docs/referencia/sintaxis/page.tsx
'use client';
import Link from 'next/link';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Nav } from '@/components/Nav';
import { DocsSidebar } from '@/components/DocsSidebar';
import CodeEditor from '@/components/CodeEditor';
import LineNumbers from '@/components/LineNumbers';

const examples = {
  element: {
    eshtml: `<p>Este es un párrafo en EsHTML.</p>`,
    html: `<p>Este es un párrafo en HTML.</p>`
  },
  tag: {
    eshtml: `<e1>Encabezado Nivel 1</e1>`,
    html: `<h1>Encabezado Nivel 1</h1>`
  },
  attribute: {
    eshtml: `<img fte="imagen.jpg" ta="Descripción de la imagen">`,
    html: `<img src="imagen.jpg" alt="Descripción de la imagen">`
  },
  nesting: {
    eshtml: `<lista>
  <elemento>Item 1</elemento>
  <elemento>Item 2</elemento>
</lista>`,
    html: `<ul>
  <li>Item 1</li>
  <li>Item 2</li>
</ul>`
  },
  selfClosing: {
    eshtml: `<entrada tipo="texto" nombre="usuario">`,
    html: `<input type="text" name="usuario">`
  }
};

function CodeExample({ eshtml, html }: { eshtml: string; html: string }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 not-prose mb-8">
      <div className="rounded-xl overflow-hidden shadow-2xl bg-gray-950/50 backdrop-blur-sm border border-gray-800/50">
        <div className="bg-gray-950/80 border-b border-gray-800">
          <div className="px-4 py-3 bg-gray-900/80">
            <span className="text-gray-300 text-sm font-medium">EsHTML</span>
          </div>
        </div>
        <div className="bg-gray-900/50 flex overflow-x-auto">
          <LineNumbers count={eshtml.split('\n').length} />
          <CodeEditor code={eshtml} readOnly={true} />
        </div>
      </div>

      <div className="rounded-xl overflow-hidden shadow-2xl bg-gray-950/50 backdrop-blur-sm border border-gray-800/50">
        <div className="bg-gray-950/80 border-b border-gray-800">
          <div className="px-4 py-3 bg-gray-900/80">
            <span className="text-gray-300 text-sm font-medium">HTML</span>
          </div>
        </div>
        <div className="bg-gray-900/50 flex overflow-x-auto">
          <LineNumbers count={html.split('\n').length} />
          <CodeEditor code={html} readOnly={true} />
        </div>
      </div>
    </div>
  );
}

export default function SintaxisPage() {
  return (
    <div className="min-h-screen bg-[#111827]">
      <Nav />
      <div className="flex pt-16">
        <DocsSidebar activePath="/docs/referencia/sintaxis" />

        <div className="flex-1 md:ml-64">
          <div className="max-w-[1200px] mx-auto">
            <div className="px-4 md:px-16 py-8 md:py-12 mt-12 md:mt-0">
              <div className="flex items-center text-sm text-gray-400 mb-8 overflow-x-auto">
                <Link href="/docs" className="hover:text-white whitespace-nowrap">Docs</Link>
                <ChevronRight className="w-4 h-4 mx-2 flex-shrink-0" />
                <Link href="/docs/referencia" className="hover:text-white whitespace-nowrap">Referencia</Link>
                <ChevronRight className="w-4 h-4 mx-2 flex-shrink-0" />
                <span className="text-white whitespace-nowrap">Sintaxis</span>
              </div>

              <article className="prose prose-invert max-w-4xl">
                <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Sintaxis de EsHTML</h1>
                <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-8">
                  EsHTML sigue la estructura y reglas de HTML, pero con etiquetas y atributos en español.
                  En esta guía, aprenderás los conceptos básicos para escribir documentos EsHTML válidos.
                </p>

                <h2 className="text-2xl font-bold text-white mt-12 mb-4">¿Qué es un Elemento?</h2>
                <p className="text-gray-300 mb-4">
                  Un elemento es la unidad básica de un documento EsHTML. Representa una parte del contenido,
                  como un párrafo, una imagen o un enlace.
                </p>
                <CodeExample eshtml={examples.element.eshtml} html={examples.element.html} />

                <h2 className="text-2xl font-bold text-white mt-12 mb-4">Entendiendo las Etiquetas</h2>
                <p className="text-gray-300 mb-4">
                  Las etiquetas definen el inicio y el fin de un elemento. Una etiqueta de apertura <code>&lt;etiqueta&gt;</code> 
                  &nbsp;y una etiqueta de cierre <code>&lt;/etiqueta&gt;</code> encierran el contenido del elemento.
                </p>
                <CodeExample eshtml={examples.tag.eshtml} html={examples.tag.html} />

                <h2 className="text-2xl font-bold text-white mt-12 mb-4">Usando Atributos</h2>
                <p className="text-gray-300 mb-4">
                  Los atributos proporcionan información adicional sobre un elemento. Se colocan dentro de la
                  etiqueta de apertura y siguen el formato <code>atributo=&quot;valor&quot;</code>.
                </p>
                <CodeExample eshtml={examples.attribute.eshtml} html={examples.attribute.html} />

                <h2 className="text-2xl font-bold text-white mt-12 mb-4">Anidación de Elementos</h2>
                <p className="text-gray-300 mb-4">
                  Los elementos pueden contener otros elementos, creando una estructura jerárquica.
                  Es importante cerrar las etiquetas en el orden correcto.
                </p>
                <CodeExample eshtml={examples.nesting.eshtml} html={examples.nesting.html} />

                <h2 className="text-2xl font-bold text-white mt-12 mb-4">Etiquetas Auto-cerradas</h2>
                <p className="text-gray-300 mb-4">
                  Algunos elementos no contienen contenido y se denominan auto-cerrados. En EsHTML y HTML,
                  estos elementos se pueden escribir sin una etiqueta de cierre explícita.
                </p>
                <CodeExample eshtml={examples.selfClosing.eshtml} html={examples.selfClosing.html} />

                <h2 className="text-2xl font-bold text-white mt-12 mb-4">Reglas Importantes</h2>
                <ul className="text-gray-300 space-y-2">
                  <li>Las etiquetas siempre van entre &lt; y &gt;.</li>
                  <li>Las etiquetas de cierre incluyen una barra diagonal: &lt;/etiqueta&gt;.</li>
                  <li>Los atributos van en la etiqueta de apertura.</li>
                  <li>Los valores de los atributos van entre comillas.</li>
                  <li>Mantén una indentación consistente para mejorar la legibilidad.</li>
                </ul>

                <div className="mt-12 border-t border-gray-800/50 pt-8">
                  <div className="flex justify-between">
                    <Link 
                      href="/docs/introduccion/aprendizaje-y-practica"
                      className="text-orange-500 hover:text-orange-400 flex items-center gap-1"
                    >
                      <ChevronLeft className="w-4 h-4" /> Aprendizaje y Práctica
                    </Link>
                    <Link 
                      href="/docs/referencia/etiquetas"
                      className="text-orange-500 hover:text-orange-400 flex items-center gap-1"
                    >
                      Referencia de Etiquetas <ChevronRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}