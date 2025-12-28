// src/app/tutorial/introduccion/primer-documento/page.tsx
'use client';

import { useState } from 'react';
import { TutorialLayout } from '@/components/TutorialLayout';
import CodeEditor from '@/components/CodeEditor';
import LineNumbers from '@/components/LineNumbers';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

export default function PrimerDocumento() {
  const [exampleCode] = useState(`<!DOCTYPE html>
<eshtml idioma="es">
  <cabecera>
    <título>Mi Primera Página</título>
  </cabecera>
  <cuerpo>
    <e1>¡Hola Mundo!</e1>
    <p>Esta es mi primera página web.</p>
  </cuerpo>
</eshtml>`);

  return (
    <TutorialLayout activePath="/tutorial/introduccion/primer-documento" lessonNumber={3} totalLessons={22}>
      <h1 className="text-3xl md:text-4xl font-bold text-white mb-6">
        Tu Primer Documento EsHTML
      </h1>
      
      <div className="space-y-6">
        <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-700/50">
          <p className="text-lg text-gray-300">
            ¡Es hora de crear tu primera página web! 🎉 Vamos a escribir un documento EsHTML simple y ver cómo funciona.
          </p>
        </div>

        <h2 className="text-2xl font-bold text-white mt-8 mb-4">
          Estructura Básica de un Documento EsHTML
        </h2>

        <p className="text-lg text-gray-300 mb-4">
          Todo documento EsHTML necesita estos elementos básicos:
        </p>

        <div className="space-y-4">
          <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700/50">
            <h3 className="text-lg font-semibold text-white mb-2">1. Declaración del Tipo de Documento</h3>
            <code className="text-orange-400">&lt;!DOCTYPE html&gt;</code>
            <p className="text-gray-300 mt-2 text-sm">Le dice al navegador que este es un documento HTML5.</p>
          </div>
          
          <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700/50">
            <h3 className="text-lg font-semibold text-white mb-2">2. Etiqueta Raíz</h3>
            <code className="text-orange-400">&lt;eshtml&gt;</code>
            <p className="text-gray-300 mt-2 text-sm">Contiene todo el contenido de la página. En EsHTML usamos <code className="text-orange-400">&lt;eshtml&gt;</code> en lugar de <code className="text-gray-400">&lt;html&gt;</code>.</p>
          </div>

          <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700/50">
            <h3 className="text-lg font-semibold text-white mb-2">3. Sección de Cabecera</h3>
            <code className="text-orange-400">&lt;cabecera&gt;</code>
            <p className="text-gray-300 mt-2 text-sm">Contiene información sobre la página (título, metadatos, etc.). Se transpila a <code className="text-gray-400">&lt;head&gt;</code>.</p>
          </div>

          <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700/50">
            <h3 className="text-lg font-semibold text-white mb-2">4. Sección del Cuerpo</h3>
            <code className="text-orange-400">&lt;cuerpo&gt;</code>
            <p className="text-gray-300 mt-2 text-sm">Contiene todo el contenido visible de la página. Se transpila a <code className="text-gray-400">&lt;body&gt;</code>.</p>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-white mt-8 mb-4">
          Tu Primer Código
        </h2>

        <p className="text-lg text-gray-300 mb-4">
          Aquí tienes un ejemplo completo de tu primera página web:
        </p>

        <div className="rounded-xl overflow-hidden shadow-2xl bg-gray-950/50 backdrop-blur-sm border border-gray-800/50 mb-8">
          <div className="bg-gray-950/80 border-b border-gray-800 px-4 py-3">
            <span className="text-gray-300 text-sm font-medium">Mi Primera Página Web</span>
          </div>
          <div className="bg-gray-900/50 flex">
            <LineNumbers count={exampleCode.split('\n').length} />
            <CodeEditor code={exampleCode} readOnly={true} />
          </div>
        </div>

        <div className="bg-orange-500/10 rounded-lg p-6 border border-orange-500/20">
          <h3 className="text-lg font-semibold text-white mb-2">💡 ¿Qué hace cada línea?</h3>
          <ul className="text-gray-300 space-y-2 text-sm">
            <li><strong>Línea 1:</strong> Declara que es un documento HTML5</li>
            <li><strong>Línea 2:</strong> Abre la etiqueta raíz del documento</li>
            <li><strong>Línea 3:</strong> Abre la sección de cabeza</li>
            <li><strong>Línea 4:</strong> Define el título que aparece en la pestaña del navegador</li>
            <li><strong>Línea 5:</strong> Cierra la sección de cabeza</li>
            <li><strong>Línea 6:</strong> Abre la sección del cuerpo (contenido visible)</li>
            <li><strong>Línea 7:</strong> Crea un encabezado principal</li>
            <li><strong>Línea 8:</strong> Crea un párrafo de texto</li>
            <li><strong>Línea 9:</strong> Cierra la sección del cuerpo</li>
            <li><strong>Línea 10:</strong> Cierra la etiqueta raíz</li>
          </ul>
        </div>

        <div className="mt-12 flex flex-col sm:flex-row justify-between gap-3">
          <Link
            href="/tutorial/introduccion/que-es-eshtml"
            className="inline-flex items-center justify-center px-4 py-2 sm:px-6 sm:py-3 bg-gray-700 text-white font-semibold rounded-md hover:bg-gray-600 transition-colors text-sm sm:text-base"
          >
            <ChevronRight className="mr-2 w-4 h-4 sm:w-5 sm:h-5 rotate-180" />
            <span>Anterior: ¿Qué es EsHTML?</span>
          </Link>
          <Link
            href="/tutorial/introduccion/estructura-basica"
            className="inline-flex items-center justify-center px-4 py-2 sm:px-6 sm:py-3 bg-orange-500 text-white font-semibold rounded-md hover:bg-orange-600 transition-colors text-sm sm:text-base"
          >
            <span>Siguiente: Estructura Básica</span>
            <ChevronRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
          </Link>
        </div>
      </div>
    </TutorialLayout>
  );
}