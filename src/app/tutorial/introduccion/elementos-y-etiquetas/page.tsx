// src/app/tutorial/introduccion/elementos-y-etiquetas/page.tsx
'use client';

import { useState, useMemo } from 'react';
import { Nav } from '@/components/Nav';
import CodeEditor from '@/components/CodeEditor';
import LineNumbers from '@/components/LineNumbers';
import Link from 'next/link';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { EsHTMLTranspiler } from 'html-es';

function CodeWithPreview({ code }: { code: string }) {
  const transpiler = useMemo(() => new EsHTMLTranspiler(), []);
  const html = useMemo(() => transpiler.transpile(code), [code]);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
      {/* EsHTML Section */}
      <div className="rounded-xl overflow-hidden shadow-2xl bg-gray-950/50 backdrop-blur-sm border border-gray-800/50">
        <div className="bg-gray-950/80 border-b border-gray-800 px-4 py-3">
          <span className="text-gray-300 text-sm font-medium">EsHTML</span>
        </div>
        <div className="bg-gray-900/50 flex">
          <LineNumbers count={code.split('\n').length} />
          <CodeEditor code={code} readOnly={true} />
        </div>
      </div>

      {/* HTML Section */}
      <div className="rounded-xl overflow-hidden shadow-2xl bg-gray-950/50 backdrop-blur-sm border border-gray-800/50">
        <div className="bg-gray-950/80 border-b border-gray-800 px-4 py-3">
          <span className="text-gray-300 text-sm font-medium">HTML</span>
        </div>
        <div className="bg-gray-900/50 flex">
          <LineNumbers count={html.split('\n').length} />
          <CodeEditor code={html} readOnly={true} />
        </div>
      </div>

      {/* Preview Section */}
      <div className="rounded-xl overflow-hidden shadow-2xl bg-gray-950/50 backdrop-blur-sm border border-gray-800/50">
        <div className="bg-gray-950/80 border-b border-gray-800 px-4 py-3">
          <div className="flex items-center space-x-2">
            <div className="flex space-x-1.5">
              <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
            </div>
            <div className="ml-4 bg-gray-900/80 rounded-md px-3 py-1.5">
              <span className="text-gray-400 text-xs">Vista Previa</span>
            </div>
          </div>
        </div>
        <div className="bg-white h-[200px] overflow-auto shadow-inner">
          <iframe
            srcDoc={html}
            title="Preview"
            className="w-full h-full"
          />
        </div>
      </div>
    </div>
  );
}

export default function ElementosEtiquetas() {
  const [basicExample] = useState({
    eshtml: `<e1>Este es un título grande</e1>
<p>Este es un párrafo de texto.</p>`,
    html: `<h1>Este es un título grande</h1>
<p>Este es un párrafo de texto.</p>`
  });

  return (
    <div className="min-h-screen bg-[#111827]">
      <Nav />
      <div className="bg-orange-500/10 border-b border-orange-500/20 pt-16">
        <div className="max-w-[1200px] mx-auto px-4 py-2 text-sm text-orange-300">
          Lección 5 de 24
        </div>
      </div>
      
      <div className="flex pt-16">
        <div className="flex-1">
          <div className="max-w-[1200px] mx-auto px-4 md:px-8 py-12 md:py-16">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Elementos y Etiquetas
            </h1>
            
            <div className="space-y-6">
              <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-700/50">
                <p className="text-lg text-gray-300">
                  En una página web, usamos <span className="text-orange-400">elementos</span> para mostrar diferentes tipos de contenido (como títulos, párrafos o imágenes). Cada elemento se marca con <span className="text-orange-400">etiquetas</span> que indican dónde empieza y dónde termina.
                </p>
              </div>

              <h2 className="text-2xl font-bold text-white mt-8 mb-4">Anatomía de un Elemento</h2>
              <div className="bg-gray-800/50 p-6 rounded-lg">
                <p className="text-gray-300 mb-4">Un elemento tiene tres partes:</p>
                <ul className="space-y-3 text-gray-300">
                  <li>• Una <span className="text-orange-400">etiqueta de apertura</span> que indica dónde empieza: <code className="text-orange-400">&lt;etiqueta&gt;</code></li>
                  <li>• El <span className="text-orange-400">contenido</span> que quieres mostrar</li>
                  <li>• Una <span className="text-orange-400">etiqueta de cierre</span> que indica dónde termina: <code className="text-orange-400">&lt;/etiqueta&gt;</code></li>
                </ul>
              </div>

              <h2 className="text-2xl font-bold text-white mt-8 mb-4">Un Ejemplo Simple</h2>
              <p className="text-lg text-gray-300 mb-4">Elementos básicos en EsHTML:</p>
              <CodeWithPreview
                code={basicExample.eshtml}
              />

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
                <div className="bg-gray-800/50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-white mb-2">Etiqueta de Apertura</h3>
                  <p className="text-gray-300">
                    <code className="text-orange-400">&lt;e1&gt;</code> indica &quot;aquí empieza un título principal&quot;
                  </p>
                </div>

                <div className="bg-gray-800/50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-white mb-2">Contenido</h3>
                  <p className="text-gray-300">
                    <code className="text-orange-400">Este es un título grande</code> es el texto que se mostrará en la página
                  </p>
                </div>

                <div className="bg-gray-800/50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-white mb-2">Etiqueta de Cierre</h3>
                  <p className="text-gray-300">
                    <code className="text-orange-400">&lt;/e1&gt;</code> indica &quot;aquí termina el título principal&quot;
                  </p>
                </div>
              </div>

              <div className="mt-12 flex justify-between">
                <Link
                  href="/tutorial/introduccion/estructura-basica"
                  className="inline-flex items-center px-6 py-3 text-gray-300 hover:text-white"
                >
                  <ChevronLeft className="mr-2 w-5 h-5" />
                  <span>Anterior: Estructura Básica</span>
                </Link>
                <Link
                  href="/tutorial/texto/parrafos"
                  className="inline-flex items-center px-6 py-3 bg-orange-500 text-white font-semibold rounded-md hover:bg-orange-600 transition-colors"
                >
                  <span>Siguiente: Trabajando con Párrafos</span>
                  <ChevronRight className="ml-2 w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
