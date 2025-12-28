// src/app/tutorial/elementos/e1/page.tsx
'use client';

import { useState } from 'react';
import { TutorialLayout } from '@/components/TutorialLayout';
import CodeEditor from '@/components/CodeEditor';
import LineNumbers from '@/components/LineNumbers';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

export default function EncabezadoPrincipal() {
  const [exampleCode] = useState(`<!DOCTYPE html>
<eshtml idioma="es">
  <cabecera>
    <título>Mi Página Web</título>
  </cabecera>
  <cuerpo>
    <e1>¡Bienvenido a Mi Sitio Web!</e1>
    <p>Este es el contenido de mi página.</p>
  </cuerpo>
</eshtml>`);

  return (
    <TutorialLayout activePath="/tutorial/elementos/e1" lessonNumber={6} totalLessons={22}>
      <h1 className="text-3xl md:text-4xl font-bold text-white mb-6">
        Encabezado Principal (e1)
      </h1>
      
      <div className="space-y-6">
        <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-700/50">
          <p className="text-lg text-gray-300">
            El elemento <code className="text-orange-400">&lt;e1&gt;</code> es tu primer elemento EsHTML. Es el encabezado principal de tu página web - el título más grande y prominente. 🎯
          </p>
        </div>

        <h2 className="text-2xl font-bold text-white mt-8 mb-4">
          ¿Qué es un Encabezado Principal?
        </h2>

        <p className="text-lg text-gray-300 mb-4">
          Un encabezado principal es el título más importante de tu página. Es lo primero que los visitantes ven y les dice de qué trata tu sitio web.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700/50">
            <h3 className="text-lg font-semibold text-white mb-4">En EsHTML</h3>
            <code className="text-orange-400">&lt;e1&gt;Mi Título Principal&lt;/e1&gt;</code>
            <p className="text-gray-300 mt-2 text-sm">Usa la etiqueta <code className="text-orange-400">e1</code> para el encabezado principal.</p>
          </div>
          
          <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700/50">
            <h3 className="text-lg font-semibold text-white mb-4">En HTML</h3>
            <code className="text-orange-400">&lt;h1&gt;Mi Título Principal&lt;/h1&gt;</code>
            <p className="text-gray-300 mt-2 text-sm">Se convierte automáticamente a <code className="text-orange-400">h1</code>.</p>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-white mt-8 mb-4">
          Ejemplo Práctico
        </h2>

        <p className="text-lg text-gray-300 mb-4">
          Aquí tienes un ejemplo completo usando el encabezado principal:
        </p>

        <div className="rounded-xl overflow-hidden shadow-2xl bg-gray-950/50 backdrop-blur-sm border border-gray-800/50 mb-8">
          <div className="bg-gray-950/80 border-b border-gray-800 px-4 py-3">
            <span className="text-gray-300 text-sm font-medium">Página con Encabezado Principal</span>
          </div>
          <div className="bg-gray-900/50 flex">
            <LineNumbers count={exampleCode.split('\n').length} />
            <CodeEditor code={exampleCode} readOnly={true} />
          </div>
        </div>

        <div className="bg-orange-500/10 rounded-lg p-6 border border-orange-500/20">
          <h3 className="text-lg font-semibold text-white mb-2">💡 Consejos Importantes</h3>
          <ul className="text-gray-300 space-y-2 text-sm">
            <li>• Usa solo <strong>un</strong> <code className="text-orange-400">&lt;e1&gt;</code> por página</li>
            <li>• Debe describir claramente el contenido de tu página</li>
            <li>• Es el título más importante para los motores de búsqueda</li>
            <li>• Aparece más grande que otros encabezados</li>
          </ul>
        </div>

        <h2 className="text-2xl font-bold text-white mt-8 mb-4">
          ¿Cuándo Usar e1?
        </h2>

        <div className="space-y-4">
          <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700/50">
            <h3 className="text-lg font-semibold text-white mb-2">✅ Usar e1 para:</h3>
            <ul className="text-gray-300 space-y-1 text-sm">
              <li>• El título principal de tu página web</li>
              <li>• El nombre de tu sitio web</li>
              <li>• El tema principal del contenido</li>
            </ul>
          </div>
          
          <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700/50">
            <h3 className="text-lg font-semibold text-white mb-2">❌ No usar e1 para:</h3>
            <ul className="text-gray-300 space-y-1 text-sm">
              <li>• Subtítulos o secciones menores</li>
              <li>• Múltiples títulos en la misma página</li>
              <li>• Texto decorativo o de navegación</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col sm:flex-row justify-between gap-3">
          <Link
            href="/tutorial/introduccion/elementos-y-etiquetas"
            className="inline-flex items-center justify-center px-4 py-2 sm:px-6 sm:py-3 bg-gray-700 text-white font-semibold rounded-md hover:bg-gray-600 transition-colors text-sm sm:text-base"
          >
            <ChevronRight className="mr-2 w-4 h-4 sm:w-5 sm:h-5 rotate-180" />
            <span>Anterior: Elementos y Etiquetas</span>
          </Link>
          <Link
            href="/tutorial/elementos/p"
            className="inline-flex items-center justify-center px-4 py-2 sm:px-6 sm:py-3 bg-orange-500 text-white font-semibold rounded-md hover:bg-orange-600 transition-colors text-sm sm:text-base"
          >
            <span>Siguiente: Párrafos</span>
            <ChevronRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
          </Link>
        </div>
      </div>
    </TutorialLayout>
  );
}