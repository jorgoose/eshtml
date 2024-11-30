// src/app/tutorial/introduccion/que-es-html/page.tsx
'use client';

import { useState } from 'react';
import { Nav } from '@/components/Nav';
import CodeEditor from '@/components/CodeEditor';
import LineNumbers from '@/components/LineNumbers';
import Link from 'next/link';

export default function QueEsHTML() {
  const [exampleCode] = useState(`<html>
<head>
  <title>Mi Primera Página Web</title>
</head>
<body>
  <e1>¡Hola, Mundo!</e1>
  <p>Este es mi primer documento EsHTML.</p>
</body>
</html>`);

  return (
    <div className="min-h-screen bg-[#111827]">
      <Nav />
      <div className="flex pt-16">
        <div className="flex-1">
          <div className="max-w-[800px] mx-auto px-6 md:px-8 py-12 md:py-16">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-6">
              ¿Qué es HTML?
            </h1>
            <p className="text-lg text-gray-300 mb-6">
              HTML (HyperText Markup Language) es el lenguaje estándar para crear páginas web. Define la estructura y el contenido de una página web utilizando una serie de elementos representados por etiquetas.
            </p>

            <h2 className="text-2xl font-bold text-white mt-8 mb-4">
              ¿Qué es EsHTML?
            </h2>
            <p className="text-lg text-gray-300 mb-6">
              EsHTML es una versión de HTML con etiquetas y atributos en español. Facilita el aprendizaje y uso del lenguaje para hispanohablantes, manteniendo la misma funcionalidad que HTML estándar.
            </p>

            <h2 className="text-2xl font-bold text-white mt-8 mb-4">
              Un Documento EsHTML Simple
            </h2>
            <p className="text-lg text-gray-300 mb-4">
              A continuación, se muestra un ejemplo básico de un documento EsHTML:
            </p>

            <div className="rounded-xl overflow-hidden shadow-2xl bg-gray-950/50 backdrop-blur-sm border border-gray-800/50 mb-8">
              <div className="bg-gray-950/80 border-b border-gray-800 px-4 py-3">
                <span className="text-gray-300 text-sm font-medium">Ejemplo de Código EsHTML</span>
              </div>
              <div className="bg-gray-900/50 flex">
                <LineNumbers count={exampleCode.split('\n').length} />
                <CodeEditor code={exampleCode} readOnly={true} />
              </div>
            </div>

            <p className="text-lg text-gray-300 mb-6">
              Este código define la estructura básica de una página web utilizando EsHTML. En las siguientes lecciones, exploraremos cada parte en detalle.
            </p>

            <div className="mt-12">
              <h2 className="text-2xl font-bold text-white mb-4">Próximos Pasos</h2>
              <p className="text-lg text-gray-300 mb-6">
                Ahora que tienes una idea general de qué es HTML y EsHTML, avanzaremos para crear tu primer documento EsHTML y entender su estructura.
              </p>
              <Link
                href="/tutorial/introduccion/primer-documento"
                className="inline-flex items-center px-6 py-3 bg-orange-500 text-white font-semibold rounded-md hover:bg-orange-600 transition-colors"
              >
                Siguiente: Tu Primer Documento EsHTML
              </Link>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}