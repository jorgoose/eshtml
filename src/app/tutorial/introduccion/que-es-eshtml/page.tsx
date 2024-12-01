// src/app/tutorial/introduccion/que-es-eshtml/page.tsx
'use client';

import { useState } from 'react';
import { Nav } from '@/components/Nav';
import CodeEditor from '@/components/CodeEditor';
import LineNumbers from '@/components/LineNumbers';
import Link from 'next/link';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function QueEsEsHTML() {
  const [comparisonCode] = useState({
    eshtml: `<html>
  <cabeza>
    <titulo>Mi Primera Página</titulo>
  </cabeza>
  <cuerpo>
    <e1>¡Bienvenido!</e1>
    <p>Esta es mi primera página web.</p>
  </cuerpo>
</html>`,
    html: `<html>
  <head>
    <title>Mi Primera Página</title>
  </head>
  <body>
    <h1>Welcome!</h1>
    <p>This is my first webpage.</p>
  </body>
</html>`
  });

  return (
    <div className="min-h-screen bg-[#111827]">
      <Nav />
      <div className="bg-orange-500/10 border-b border-orange-500/20">
        <div className="max-w-[800px] mx-auto px-6 py-2 text-sm text-orange-300">
          Lección 2 de 24
        </div>
      </div>
      
      <div className="flex pt-16">
        <div className="flex-1">
          <div className="max-w-[800px] mx-auto px-6 md:px-8 py-12 md:py-16">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-6">
              ¿Qué es EsHTML?
            </h1>
            
            <div className="space-y-6">
              <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-700/50">
                <p className="text-lg text-gray-300">
                  EsHTML te permite escribir páginas web usando etiquetas en español, que luego se convierten automáticamente al HTML estándar que entienden los navegadores. Es como tener un traductor que transforma tu código en español al lenguaje universal de la web. 🔄
                </p>
              </div>

              <h2 className="text-2xl font-bold text-white mt-8 mb-4">
                HTML vs EsHTML
              </h2>

              <p className="text-lg text-gray-300 mb-4">
                Mira la diferencia entre HTML y EsHTML:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* EsHTML Example First */}
                <div className="rounded-xl overflow-hidden shadow-2xl bg-gray-950/50 backdrop-blur-sm border border-gray-800/50">
                  <div className="bg-gray-950/80 border-b border-gray-800 px-4 py-3">
                    <span className="text-gray-300 text-sm font-medium">Tú escribes en EsHTML</span>
                  </div>
                  <div className="bg-gray-900/50 flex">
                    <LineNumbers count={comparisonCode.eshtml.split('\n').length} />
                    <CodeEditor code={comparisonCode.eshtml} readOnly={true} />
                  </div>
                </div>

                {/* HTML Result Second */}
                <div className="rounded-xl overflow-hidden shadow-2xl bg-gray-950/50 backdrop-blur-sm border border-gray-800/50">
                  <div className="bg-gray-950/80 border-b border-gray-800 px-4 py-3">
                    <span className="text-gray-300 text-sm font-medium">Se convierte en HTML</span>
                  </div>
                  <div className="bg-gray-900/50 flex">
                    <LineNumbers count={comparisonCode.html.split('\n').length} />
                    <CodeEditor code={comparisonCode.html} readOnly={true} />
                  </div>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-white mt-8 mb-4">
                Beneficios de EsHTML
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-gray-800/50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-white mb-2">Aprende más Rápido 🚀</h3>
                  <p className="text-gray-300">
                    Usa palabras que ya conoces en español mientras aprendes los conceptos fundamentales del desarrollo web.
                  </p>
                </div>

                <div className="bg-gray-800/50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-white mb-2">Sin Cambios en el Navegador 🌐</h3>
                  <p className="text-gray-300">
                    EsHTML se convierte automáticamente a HTML estándar que cualquier navegador puede entender.
                  </p>
                </div>
              </div>

              <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-700/50 mt-8">
                <p className="text-lg text-gray-300">
                  ¿Lo mejor de todo? No necesitas instalar nada especial. Puedes empezar a escribir EsHTML directamente en nuestro editor en línea y ver los resultados al instante.
                </p>
              </div>

              <div className="mt-12 flex justify-between">
                <Link
                  href="/tutorial/introduccion/que-es-html"
                  className="inline-flex items-center px-6 py-3 text-gray-300 hover:text-white"
                >
                  <ChevronLeft className="mr-2 w-5 h-5" />
                  <span>Anterior: ¿Qué es HTML?</span>
                </Link>
                <Link
                  href="/tutorial/introduccion/primer-documento"
                  className="inline-flex items-center px-6 py-3 bg-orange-500 text-white font-semibold rounded-md hover:bg-orange-600 transition-colors"
                >
                  <span>Siguiente: Tu Primer Documento</span>
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