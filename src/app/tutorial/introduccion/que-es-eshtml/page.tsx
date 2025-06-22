// src/app/tutorial/introduccion/que-es-eshtml/page.tsx
'use client';

import { useState } from 'react';
import { TutorialLayout } from '@/components/TutorialLayout';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

export default function QueEsEsHTML() {
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
    <TutorialLayout activePath="/tutorial/introduccion/que-es-eshtml" lessonNumber={2} totalLessons={22}>
      <h1 className="text-3xl md:text-4xl font-bold text-white mb-6">
        ¿Qué es EsHTML?
      </h1>
      
      <div className="space-y-6">
        {/* Simple analogy */}
        <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-700/50">
          <p className="text-lg text-gray-300">
            EsHTML es HTML, pero en español 🇪🇸. Imagina que estás aprendiendo a cocinar. Podrías aprender con recetas en inglés, pero ¿no sería más fácil si estuvieran en tu idioma?
          </p>
        </div>

        <p className="text-lg text-gray-300">
          EsHTML es una variante educativa de HTML que usa etiquetas y atributos en español. Esto te permite:
        </p>

        {/* Visual examples with icons */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-gray-800/50 p-4 rounded-lg flex items-center space-x-4">
            <span className="text-2xl">🎯</span>
            <span className="text-gray-300">Concentrarte en aprender HTML</span>
          </div>
          <div className="bg-gray-800/50 p-4 rounded-lg flex items-center space-x-4">
            <span className="text-2xl">🚀</span>
            <span className="text-gray-300">Aprender más rápido</span>
          </div>
          <div className="bg-gray-800/50 p-4 rounded-lg flex items-center space-x-4">
            <span className="text-2xl">🧠</span>
            <span className="text-gray-300">Entender mejor los conceptos</span>
          </div>
          <div className="bg-gray-800/50 p-4 rounded-lg flex items-center space-x-4">
            <span className="text-2xl">🔄</span>
            <span className="text-gray-300">Facilitar la transición a HTML</span>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-white mt-8 mb-4">
          Comparación: HTML vs EsHTML
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-700/50">
            <h3 className="text-xl font-bold text-white mb-4">HTML (Inglés)</h3>
            <div className="space-y-2 text-sm">
              <div className="bg-gray-900/50 p-2 rounded">
                <code className="text-orange-400">&lt;h1&gt;</code> - Heading 1
              </div>
              <div className="bg-gray-900/50 p-2 rounded">
                <code className="text-orange-400">&lt;p&gt;</code> - Paragraph
              </div>
              <div className="bg-gray-900/50 p-2 rounded">
                <code className="text-orange-400">&lt;img&gt;</code> - Image
              </div>
              <div className="bg-gray-900/50 p-2 rounded">
                <code className="text-orange-400">&lt;a&gt;</code> - Anchor/Link
              </div>
            </div>
          </div>
          
          <div className="bg-orange-500/10 rounded-lg p-6 border border-orange-500/20">
            <h3 className="text-xl font-bold text-white mb-4">EsHTML (Español)</h3>
            <div className="space-y-2 text-sm">
              <div className="bg-gray-900/50 p-2 rounded">
                <code className="text-orange-400">&lt;e1&gt;</code> - Encabezado 1
              </div>
              <div className="bg-gray-900/50 p-2 rounded">
                <code className="text-orange-400">&lt;p&gt;</code> - Párrafo
              </div>
              <div className="bg-gray-900/50 p-2 rounded">
                <code className="text-orange-400">&lt;imagen&gt;</code> - Imagen
              </div>
              <div className="bg-gray-900/50 p-2 rounded">
                <code className="text-orange-400">&lt;enlace&gt;</code> - Enlace
              </div>
            </div>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-white mt-8 mb-4">
          ¿Por qué EsHTML?
        </h2>

        <div className="space-y-4">
          <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700/50">
            <h3 className="text-lg font-semibold text-white mb-2">🎓 Para Estudiantes</h3>
            <p className="text-gray-300">Aprende los conceptos fundamentales de HTML sin la barrera del idioma inglés.</p>
          </div>
          
          <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700/50">
            <h3 className="text-lg font-semibold text-white mb-2">👨‍🏫 Para Educadores</h3>
            <p className="text-gray-300">Enseña HTML de manera más accesible a estudiantes hispanohablantes.</p>
          </div>
          
          <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700/50">
            <h3 className="text-lg font-semibold text-white mb-2">🚀 Para Desarrolladores</h3>
            <p className="text-gray-300">Una herramienta de aprendizaje que facilita la transición al HTML estándar.</p>
          </div>
        </div>

        <div className="mt-12 flex justify-between">
          <Link
            href="/tutorial/introduccion/que-es-html"
            className="inline-flex items-center px-6 py-3 bg-gray-700 text-white font-semibold rounded-md hover:bg-gray-600 transition-colors"
          >
            <ChevronRight className="mr-2 w-5 h-5 rotate-180" />
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
    </TutorialLayout>
  );
}