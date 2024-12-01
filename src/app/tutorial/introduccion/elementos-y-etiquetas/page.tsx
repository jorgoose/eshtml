// src/app/tutorial/introduccion/elementos-y-etiquetas/page.tsx
'use client';

import { useState } from 'react';
import { Nav } from '@/components/Nav';
import CodeEditor from '@/components/CodeEditor';
import LineNumbers from '@/components/LineNumbers';
import Link from 'next/link';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function ElementosEtiquetas() {
  const [basicExample] = useState({
    eshtml: `<p>Este es un párrafo de texto.</p>`,
    html: `<p>Este es un párrafo de texto.</p>`
  });

  const [examples] = useState({
    eshtml: `<ld>
  <el>Primer elemento</el>
  <el>Segundo elemento</el>
</ld>

<lo>
  <el>Primer elemento</el>
  <el>Segundo elemento</el>
</lo>`,
    html: `<ul>
  <li>Primer elemento</li>
  <li>Segundo elemento</li>
</ul>

<ol>
  <li>Primer elemento</li>
  <li>Segundo elemento</li>
</ol>`
  });

  return (
    <div className="min-h-screen bg-[#111827]">
      <Nav />
      <div className="bg-orange-500/10 border-b border-orange-500/20">
        <div className="max-w-[800px] mx-auto px-6 py-2 text-sm text-orange-300">
          Lección 5 de 24
        </div>
      </div>
      
      <div className="flex pt-16">
        <div className="flex-1">
          <div className="max-w-[800px] mx-auto px-6 md:px-8 py-12 md:py-16">
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
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="rounded-xl overflow-hidden shadow-2xl bg-gray-950/50 backdrop-blur-sm border border-gray-800/50">
                  <div className="bg-gray-950/80 border-b border-gray-800 px-4 py-3">
                    <span className="text-gray-300 text-sm font-medium">EsHTML</span>
                  </div>
                  <div className="bg-gray-900/50 flex">
                    <LineNumbers count={basicExample.eshtml.split('\n').length} />
                    <CodeEditor code={basicExample.eshtml} readOnly={true} />
                  </div>
                </div>

                <div className="rounded-xl overflow-hidden shadow-2xl bg-gray-950/50 backdrop-blur-sm border border-gray-800/50">
                  <div className="bg-gray-950/80 border-b border-gray-800 px-4 py-3">
                    <span className="text-gray-300 text-sm font-medium">HTML</span>
                  </div>
                  <div className="bg-gray-900/50 flex">
                    <LineNumbers count={basicExample.html.split('\n').length} />
                    <CodeEditor code={basicExample.html} readOnly={true} />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
                <div className="bg-gray-800/50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-white mb-2">Etiqueta de Apertura</h3>
                  <p className="text-gray-300">
                    <code className="text-orange-400">&lt;p&gt;</code> dice &quot;aquí empieza un párrafo&quot;
                  </p>
                </div>

                <div className="bg-gray-800/50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-white mb-2">Etiqueta de Cierre</h3>
                  <p className="text-gray-300">
                    <code className="text-orange-400">&lt;/p&gt;</code> dice &quot;aquí termina el párrafo&quot;
                  </p>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-white mt-8 mb-4">Elementos Comunes</h2>
              <p className="text-lg text-gray-300 mb-4">
                Aquí hay algunos elementos que usarás frecuentemente:
              </p>

              <div className="rounded-xl overflow-hidden shadow-2xl bg-gray-950/50 backdrop-blur-sm border border-gray-800/50">
                <div className="bg-gray-950/80 border-b border-gray-800 px-4 py-3">
                  <span className="text-gray-300 text-sm font-medium">Elementos Básicos</span>
                </div>
                <div className="bg-gray-900/50 flex">
                  <LineNumbers count={examples.eshtml.split('\n').length} />
                  <CodeEditor code={examples.eshtml} readOnly={true} />
                </div>
              </div>

              <div className="space-y-4 mt-8">
                <div className="bg-gray-800/50 p-4 rounded-lg">
                  <p className="text-gray-300">
                    • Todo lo que va entre <code className="text-orange-400">&lt;e1&gt;</code> y <code className="text-orange-400">&lt;/e1&gt;</code> será un título grande
                  </p>
                </div>
                <div className="bg-gray-800/50 p-4 rounded-lg">
                  <p className="text-gray-300">
                    • Todo lo que va entre <code className="text-orange-400">&lt;p&gt;</code> y <code className="text-orange-400">&lt;/p&gt;</code> será un párrafo de texto
                  </p>
                </div>
                <div className="bg-gray-800/50 p-4 rounded-lg">
                  <p className="text-gray-300">
                    • Una <code className="text-orange-400">&lt;lista&gt;</code> puede contener varios <code className="text-orange-400">&lt;elemento&gt;</code>
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="rounded-xl overflow-hidden shadow-2xl bg-gray-950/50 backdrop-blur-sm border border-gray-800/50">
                  <div className="bg-gray-950/80 border-b border-gray-800 px-4 py-3">
                    <span className="text-gray-300 text-sm font-medium">EsHTML</span>
                  </div>
                  <div className="bg-gray-900/50 flex">
                    <LineNumbers count={examples.eshtml.split('\n').length} />
                    <CodeEditor code={examples.eshtml} readOnly={true} />
                  </div>
                </div>

                <div className="rounded-xl overflow-hidden shadow-2xl bg-gray-950/50 backdrop-blur-sm border border-gray-800/50">
                  <div className="bg-gray-950/80 border-b border-gray-800 px-4 py-3">
                    <span className="text-gray-300 text-sm font-medium">HTML</span>
                  </div>
                  <div className="bg-gray-900/50 flex">
                    <LineNumbers count={examples.html.split('\n').length} />
                    <CodeEditor code={examples.html} readOnly={true} />
                  </div>
                </div>
              </div>

              <div className="space-y-4 mt-8">
                <div className="bg-gray-800/50 p-4 rounded-lg">
                  <p className="text-gray-300">
                    • <code className="text-orange-400">&lt;lista-desordenada&gt;</code> se convierte en <code className="text-blue-400">&lt;ul&gt;</code> (lista sin números)
                  </p>
                </div>
                <div className="bg-gray-800/50 p-4 rounded-lg">
                  <p className="text-gray-300">
                    • <code className="text-orange-400">&lt;lista-ordenada&gt;</code> se convierte en <code className="text-blue-400">&lt;ol&gt;</code> (lista numerada)
                  </p>
                </div>
                <div className="bg-gray-800/50 p-4 rounded-lg">
                  <p className="text-gray-300">
                    • <code className="text-orange-400">&lt;elemento&gt;</code> se convierte en <code className="text-blue-400">&lt;li&gt;</code> (elemento de lista)
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
