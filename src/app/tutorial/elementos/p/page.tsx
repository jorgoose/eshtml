// src/app/tutorial/elementos/p/page.tsx
'use client';

import { useState } from 'react';
import { TutorialLayout } from '@/components/TutorialLayout';
import CodeEditor from '@/components/CodeEditor';
import LineNumbers from '@/components/LineNumbers';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

export default function Parrafos() {
  const [exampleCode] = useState(`<html>
  <head>
    <title>Párrafos en EsHTML</title>
  </head>
  <body>
    <h1>Mi Página Web</h1>
    
    <p>Este es mi primer párrafo. Aquí puedo escribir todo el texto que quiera.</p>
    
    <p>Este es mi segundo párrafo. Cada párrafo se muestra en una línea separada.</p>
    
    <p>Los párrafos son perfectos para organizar el contenido de tu página web.</p>
  </body>
</html>`);

  return (
    <TutorialLayout activePath="/tutorial/elementos/p" lessonNumber={7} totalLessons={22}>
      <h1 className="text-3xl md:text-4xl font-bold text-white mb-6">
        Párrafos (p)
      </h1>
      
      <div className="space-y-6">
        <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-700/50">
          <p className="text-lg text-gray-300">
            El elemento <code className="text-orange-400">&lt;p&gt;</code> es fundamental para escribir texto en tus páginas web. Es como escribir en un documento, pero para la web. 📝
          </p>
        </div>

        <h2 className="text-2xl font-bold text-white mt-8 mb-4">
          ¿Qué es un Párrafo?
        </h2>

        <p className="text-lg text-gray-300 mb-4">
          Un párrafo es un bloque de texto que forma una unidad de contenido. En HTML, cada párrafo se muestra en una línea separada con espacio automático arriba y abajo.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700/50">
            <h3 className="text-lg font-semibold text-white mb-4">En EsHTML</h3>
            <code className="text-orange-400">&lt;p&gt;Mi texto aquí&lt;/p&gt;</code>
            <p className="text-gray-300 mt-2 text-sm">Usa la etiqueta <code className="text-orange-400">p</code> para crear párrafos.</p>
          </div>
          
          <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700/50">
            <h3 className="text-lg font-semibold text-white mb-4">En HTML</h3>
            <code className="text-orange-400">&lt;p&gt;Mi texto aquí&lt;/p&gt;</code>
            <p className="text-gray-300 mt-2 text-sm">La etiqueta <code className="text-orange-400">p</code> es la misma en ambos.</p>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-white mt-8 mb-4">
          Ejemplo con Múltiples Párrafos
        </h2>

        <p className="text-lg text-gray-300 mb-4">
          Aquí tienes un ejemplo de una página con varios párrafos:
        </p>

        <div className="rounded-xl overflow-hidden shadow-2xl bg-gray-950/50 backdrop-blur-sm border border-gray-800/50 mb-8">
          <div className="bg-gray-950/80 border-b border-gray-800 px-4 py-3">
            <span className="text-gray-300 text-sm font-medium">Página con Párrafos</span>
          </div>
          <div className="bg-gray-900/50 flex">
            <LineNumbers count={exampleCode.split('\n').length} />
            <CodeEditor code={exampleCode} readOnly={true} />
          </div>
        </div>

        <div className="bg-orange-500/10 rounded-lg p-6 border border-orange-500/20">
          <h3 className="text-lg font-semibold text-white mb-2">💡 Características de los Párrafos</h3>
          <ul className="text-gray-300 space-y-2 text-sm">
            <li>• Cada párrafo se muestra en una línea separada</li>
            <li>• Tienen espacio automático arriba y abajo</li>
            <li>• Pueden contener cualquier tipo de texto</li>
            <li>• Son elementos de bloque (ocupan toda la anchura)</li>
          </ul>
        </div>

        <h2 className="text-2xl font-bold text-white mt-8 mb-4">
          ¿Cuándo Usar Párrafos?
        </h2>

        <div className="space-y-4">
          <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700/50">
            <h3 className="text-lg font-semibold text-white mb-2">✅ Usar párrafos para:</h3>
            <ul className="text-gray-300 space-y-1 text-sm">
              <li>• Texto narrativo o descriptivo</li>
              <li>• Explicaciones y contenido informativo</li>
              <li>• Cualquier bloque de texto que forme una unidad</li>
              <li>• Contenido que necesita separación visual</li>
            </ul>
          </div>
          
          <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700/50">
            <h3 className="text-lg font-semibold text-white mb-2">❌ No usar párrafos para:</h3>
            <ul className="text-gray-300 space-y-1 text-sm">
              <li>• Títulos o encabezados (usa e1, e2, etc.)</li>
              <li>• Listas de elementos (usa ul, ol)</li>
              <li>• Texto muy corto o etiquetas</li>
              <li>• Contenido que no forma una unidad lógica</li>
            </ul>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-white mt-8 mb-4">
          Consejos de Escritura
        </h2>

        <div className="space-y-4">
          <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700/50">
            <h3 className="text-lg font-semibold text-white mb-2">📝 Mejores Prácticas</h3>
            <ul className="text-gray-300 space-y-1 text-sm">
              <li>• Mantén los párrafos relativamente cortos (3-5 oraciones)</li>
              <li>• Usa un párrafo por idea o tema</li>
              <li>• Asegúrate de que cada párrafo tenga sentido por sí solo</li>
              <li>• Usa párrafos para mejorar la legibilidad</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col sm:flex-row justify-between gap-3">
          <Link
            href="/tutorial/elementos/e1"
            className="inline-flex items-center justify-center px-4 py-2 sm:px-6 sm:py-3 bg-gray-700 text-white font-semibold rounded-md hover:bg-gray-600 transition-colors text-sm sm:text-base"
          >
            <ChevronRight className="mr-2 w-4 h-4 sm:w-5 sm:h-5 rotate-180" />
            <span>Anterior: Encabezado Principal</span>
          </Link>
          <Link
            href="/tutorial/elementos/encabezados"
            className="inline-flex items-center justify-center px-4 py-2 sm:px-6 sm:py-3 bg-orange-500 text-white font-semibold rounded-md hover:bg-orange-600 transition-colors text-sm sm:text-base"
          >
            <span>Siguiente: Más Encabezados</span>
            <ChevronRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
          </Link>
        </div>
      </div>
    </TutorialLayout>
  );
}