// src/app/tutorial/introduccion/que-es-html/page.tsx
'use client';

import { useState } from 'react';
import { Nav } from '@/components/Nav';
import CodeEditor from '@/components/CodeEditor';
import LineNumbers from '@/components/LineNumbers';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

export default function QueEsHTML() {
  const [exampleCode] = useState(`<!DOCTYPE html>
<html>
  <head>
    <title>Mi Página de Gatos</title>
  </head>
  <body>
    <h1>¡Me Encantan los Gatos!</h1>
    <p>Los gatos son mascotas maravillosas.</p>
  </body>
</html>`);

  return (
    <div className="min-h-screen bg-[#111827]">
      <Nav />
      {/* Progress indicator */}
      <div className="bg-orange-500/10 border-b border-orange-500/20 pt-16">
        <div className="max-w-[800px] mx-auto px-6 py-2 text-sm text-orange-300">
          Lección 1 de 24
        </div>
      </div>
      
      <div className="flex pt-16">
        <div className="flex-1">
          <div className="max-w-[800px] mx-auto px-6 md:px-8 py-12 md:py-16">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-6">
              ¿Qué es HTML?
            </h1>
            
            <div className="space-y-6">
              {/* Simple analogy */}
              <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-700/50">
                <p className="text-lg text-gray-300">
                  Imagina que estás construyendo una casa 🏠. HTML es como los planos que indican dónde van las paredes, ventanas y puertas. En una página web, HTML nos dice dónde va cada parte del contenido.
                </p>
              </div>

              <p className="text-lg text-gray-300">
                HTML es el lenguaje que usamos para crear páginas web. Es como darle instrucciones a tu computadora para mostrar:
              </p>

              {/* Visual examples with icons */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-gray-800/50 p-4 rounded-lg flex items-center space-x-4">
                  <span className="text-2xl">📝</span>
                  <span className="text-gray-300">Texto y títulos</span>
                </div>
                <div className="bg-gray-800/50 p-4 rounded-lg flex items-center space-x-4">
                  <span className="text-2xl">🖼️</span>
                  <span className="text-gray-300">Imágenes</span>
                </div>
                <div className="bg-gray-800/50 p-4 rounded-lg flex items-center space-x-4">
                  <span className="text-2xl">🔗</span>
                  <span className="text-gray-300">Enlaces a otras páginas</span>
                </div>
                <div className="bg-gray-800/50 p-4 rounded-lg flex items-center space-x-4">
                  <span className="text-2xl">📋</span>
                  <span className="text-gray-300">Formularios</span>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-white mt-8 mb-4">
                Un Ejemplo Simple
              </h2>

              <p className="text-lg text-gray-300 mb-4">
                Mira este ejemplo de una página web simple sobre gatos:
              </p>

              <div className="rounded-xl overflow-hidden shadow-2xl bg-gray-950/50 backdrop-blur-sm border border-gray-800/50 mb-8">
                <div className="bg-gray-950/80 border-b border-gray-800 px-4 py-3">
                  <span className="text-gray-300 text-sm font-medium">Ejemplo de HTML</span>
                </div>
                <div className="bg-gray-900/50 flex">
                  <LineNumbers count={exampleCode.split('\n').length} />
                  <CodeEditor code={exampleCode} readOnly={true} />
                </div>
              </div>

              <p className="text-lg text-gray-300">
                Pronto veremos cómo escribir esto en español usando EsHTML, ¡así podrás concentrarte en aprender a crear páginas web sin tener que aprender nuevo vocabulario en inglés al mismo tiempo!
              </p>

              <div className="mt-12 flex justify-end">
                <Link
                  href="/tutorial/introduccion/que-es-eshtml"
                  className="inline-flex items-center px-6 py-3 bg-orange-500 text-white font-semibold rounded-md hover:bg-orange-600 transition-colors"
                >
                  <span>Siguiente: ¿Qué es EsHTML?</span>
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