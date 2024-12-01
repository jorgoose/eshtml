// src/app/tutorial/introduccion/primer-documento/page.tsx
'use client';

import { useState } from 'react';
import { Nav } from '@/components/Nav';
import CodeEditor from '@/components/CodeEditor';
import LineNumbers from '@/components/LineNumbers';
import Link from 'next/link';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function PrimerDocumento() {
  const [exampleCode] = useState(`<html>
  <cabeza>
    <titulo>Mi Primera Página</titulo>
  </cabeza>
  <cuerpo>
    <e1>¡Hola Mundo!</e1>
    <p>Esta es mi primera página web usando EsHTML.</p>
  </cuerpo>
</html>`);

  return (
    <div className="min-h-screen bg-[#111827]">
      <Nav />
      <div className="bg-orange-500/10 border-b border-orange-500/20">
        <div className="max-w-[800px] mx-auto px-6 py-2 text-sm text-orange-300">
          Lección 3 de 24
        </div>
      </div>
      
      <div className="flex pt-16">
        <div className="flex-1">
          <div className="max-w-[800px] mx-auto px-6 md:px-8 py-12 md:py-16">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Tu Primer Documento EsHTML
            </h1>
            
            <div className="space-y-6">
              <p className="text-lg text-gray-300">
                Vamos a crear tu primera página web usando EsHTML. Empezaremos con algo muy simple: una página que te da la bienvenida con un mensaje amistoso. 😊
              </p>

              <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-700/50">
                <p className="text-lg text-gray-300">
                  Esta página tendrá:
                  <ul className="list-disc list-inside mt-2 space-y-2">
                    <li>Un título en la pestaña del navegador</li>
                    <li>Un mensaje grande de bienvenida</li>
                    <li>Un texto corto que describe la página</li>
                  </ul>
                </p>
              </div>

              <div className="rounded-xl overflow-hidden shadow-2xl bg-gray-950/50 backdrop-blur-sm border border-gray-800/50">
                <div className="bg-gray-950/80 border-b border-gray-800 px-4 py-3">
                  <span className="text-gray-300 text-sm font-medium">Tu Primer Código EsHTML</span>
                </div>
                <div className="bg-gray-900/50 flex">
                  <LineNumbers count={exampleCode.split('\n').length} />
                  <CodeEditor code={exampleCode} readOnly={true} />
                </div>
              </div>

              <h2 className="text-2xl font-bold text-white mt-8 mb-4">
                Entendiendo el Código
              </h2>

              <div className="space-y-4">
                <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700/50">
                  <code className="text-orange-400">&lt;html&gt;</code>
                  <p className="text-gray-300 mt-2">Esta etiqueta indica el inicio de tu documento EsHTML.</p>
                </div>

                <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700/50">
                  <code className="text-orange-400">&lt;cabeza&gt;</code>
                  <p className="text-gray-300 mt-2">Aquí va la información sobre tu página, como el título.</p>
                </div>

                <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700/50">
                  <code className="text-orange-400">&lt;titulo&gt;</code>
                  <p className="text-gray-300 mt-2">El título que aparecerá en la pestaña del navegador.</p>
                </div>

                <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700/50">
                  <code className="text-orange-400">&lt;cuerpo&gt;</code>
                  <p className="text-gray-300 mt-2">Contiene todo lo que se mostrará en la página.</p>
                </div>

                <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700/50">
                  <code className="text-orange-400">&lt;e1&gt;</code>
                  <p className="text-gray-300 mt-2">Un encabezado principal - el título más grande de tu página.</p>
                </div>

                <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700/50">
                  <code className="text-orange-400">&lt;p&gt;</code>
                  <p className="text-gray-300 mt-2">Un párrafo de texto.</p>
                </div>
              </div>

              <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-700/50 mt-8">
                <p className="text-lg text-gray-300">
                  Observa cómo cada elemento tiene una etiqueta de apertura <code className="text-orange-400">&lt;etiqueta&gt;</code> y una de cierre <code className="text-orange-400">&lt;/etiqueta&gt;</code>. 
                  En la siguiente lección, aprenderemos más sobre la estructura básica de un documento.
                </p>
              </div>

              <div className="mt-12 flex justify-between">
                <Link
                  href="/tutorial/introduccion/que-es-eshtml"
                  className="inline-flex items-center px-6 py-3 text-gray-300 hover:text-white"
                >
                  <ChevronLeft className="mr-2 w-5 h-5" />
                  <span>Anterior: ¿Qué es EsHTML?</span>
                </Link>
                <Link
                  href="/tutorial/introduccion/estructura-basica"
                  className="inline-flex items-center px-6 py-3 bg-orange-500 text-white font-semibold rounded-md hover:bg-orange-600 transition-colors"
                >
                  <span>Siguiente: Estructura Básica</span>
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