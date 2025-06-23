// src/app/tutorial/introduccion/estructura-basica/page.tsx
'use client';

import { useState } from 'react';
import { TutorialLayout } from '@/components/TutorialLayout';
import CodeEditor from '@/components/CodeEditor';
import LineNumbers from '@/components/LineNumbers';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

export default function EstructuraBasica() {
  const [exampleCode] = useState(`<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mi Página Web</title>
  </head>
  <body>
    <header>
      <h1>Mi Sitio Web</h1>
    </header>
    
    <main>
      <section>
        <h2>Bienvenidos</h2>
        <p>Esta es mi página web.</p>
      </section>
    </main>
    
    <footer>
      <p>&copy; 2024 Mi Sitio Web</p>
    </footer>
  </body>
</html>`);

  return (
    <TutorialLayout activePath="/tutorial/introduccion/estructura-basica" lessonNumber={4} totalLessons={22}>
      <h1 className="text-3xl md:text-4xl font-bold text-white mb-6">
        Estructura Básica de un Documento
      </h1>
      
      <div className="space-y-6">
        <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-700/50">
          <p className="text-lg text-gray-300">
            Ahora vamos a profundizar en la estructura de un documento HTML y entender cada parte en detalle. 🏗️
          </p>
        </div>

        <h2 className="text-2xl font-bold text-white mt-8 mb-4">
          Componentes de un Documento HTML
        </h2>

        <div className="space-y-4">
          <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700/50">
            <h3 className="text-lg font-semibold text-white mb-2">1. DOCTYPE Declaration</h3>
            <code className="text-orange-400">&lt;!DOCTYPE html&gt;</code>
            <p className="text-gray-300 mt-2 text-sm">Indica al navegador que este es un documento HTML5. Debe ser la primera línea.</p>
          </div>
          
          <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700/50">
            <h3 className="text-lg font-semibold text-white mb-2">2. Elemento HTML</h3>
            <code className="text-orange-400">&lt;html lang=&quot;es&quot;&gt;</code>
            <p className="text-gray-300 mt-2 text-sm">El elemento raíz que contiene todo el documento. El atributo <code className="text-blue-400">lang</code> especifica el idioma.</p>
          </div>
          
          <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700/50">
            <h3 className="text-lg font-semibold text-white mb-2">3. Sección HEAD</h3>
            <code className="text-orange-400">&lt;head&gt;</code>
            <p className="text-gray-300 mt-2 text-sm">Contiene metadatos como título, codificación de caracteres, y enlaces a recursos externos.</p>
          </div>
          
          <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700/50">
            <h3 className="text-lg font-semibold text-white mb-2">4. Sección BODY</h3>
            <code className="text-orange-400">&lt;body&gt;</code>
            <p className="text-gray-300 mt-2 text-sm">Contiene todo el contenido visible de la página web.</p>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-white mt-8 mb-4">
          Metadatos Importantes en HEAD
        </h2>

        <div className="space-y-4">
          <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700/50">
            <h3 className="text-lg font-semibold text-white mb-2">Codificación de Caracteres</h3>
            <code className="text-orange-400">&lt;meta charset=&quot;UTF-8&quot;&gt;</code>
            <p className="text-gray-300 mt-2 text-sm">Define la codificación de caracteres para mostrar correctamente acentos y caracteres especiales.</p>
          </div>
          
          <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700/50">
            <h3 className="text-lg font-semibold text-white mb-2">Viewport</h3>
            <code className="text-orange-400">&lt;meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1.0&quot;&gt;</code>
            <p className="text-gray-300 mt-2 text-sm">Optimiza la visualización en dispositivos móviles.</p>
          </div>
          
          <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700/50">
            <h3 className="text-lg font-semibold text-white mb-2">Título</h3>
            <code className="text-orange-400">&lt;title&gt;Mi Página Web&lt;/title&gt;</code>
            <p className="text-gray-300 mt-2 text-sm">El título que aparece en la pestaña del navegador y en los resultados de búsqueda.</p>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-white mt-8 mb-4">
          Ejemplo Completo
        </h2>

        <p className="text-lg text-gray-300 mb-4">
          Aquí tienes un ejemplo de un documento HTML bien estructurado:
        </p>

        <div className="rounded-xl overflow-hidden shadow-2xl bg-gray-950/50 backdrop-blur-sm border border-gray-800/50 mb-8">
          <div className="bg-gray-950/80 border-b border-gray-800 px-4 py-3">
            <span className="text-gray-300 text-sm font-medium">Documento HTML Estructurado</span>
          </div>
          <div className="bg-gray-900/50 flex">
            <LineNumbers count={exampleCode.split('\n').length} />
            <CodeEditor code={exampleCode} readOnly={true} />
          </div>
        </div>

        <div className="bg-orange-500/10 rounded-lg p-6 border border-orange-500/20">
          <h3 className="text-lg font-semibold text-white mb-2">🔍 Elementos Semánticos</h3>
          <p className="text-gray-300 mb-4">En este ejemplo también vemos elementos semánticos que dan significado a las secciones:</p>
          <ul className="text-gray-300 space-y-2 text-sm">
            <li><code className="text-orange-400">&lt;header&gt;</code> - Encabezado de la página</li>
            <li><code className="text-orange-400">&lt;main&gt;</code> - Contenido principal</li>
            <li><code className="text-orange-400">&lt;section&gt;</code> - Sección de contenido</li>
            <li><code className="text-orange-400">&lt;footer&gt;</code> - Pie de página</li>
          </ul>
        </div>

        <div className="mt-12 flex flex-col sm:flex-row justify-between gap-3">
          <Link
            href="/tutorial/introduccion/primer-documento"
            className="inline-flex items-center justify-center px-4 py-2 sm:px-6 sm:py-3 bg-gray-700 text-white font-semibold rounded-md hover:bg-gray-600 transition-colors text-sm sm:text-base"
          >
            <ChevronRight className="mr-2 w-4 h-4 sm:w-5 sm:h-5 rotate-180" />
            <span>Anterior: Tu Primer Documento</span>
          </Link>
          <Link
            href="/tutorial/introduccion/elementos-y-etiquetas"
            className="inline-flex items-center justify-center px-4 py-2 sm:px-6 sm:py-3 bg-orange-500 text-white font-semibold rounded-md hover:bg-orange-600 transition-colors text-sm sm:text-base"
          >
            <span>Siguiente: Elementos y Etiquetas</span>
            <ChevronRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
          </Link>
        </div>
      </div>
    </TutorialLayout>
  );
}