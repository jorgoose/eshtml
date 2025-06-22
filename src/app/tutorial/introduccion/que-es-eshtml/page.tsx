// src/app/tutorial/introduccion/que-es-eshtml/page.tsx
'use client';

import { useState } from 'react';
import { Nav } from '@/components/Nav';
import { TutorialSidebar } from '@/components/TutorialSidebar';
import CodeEditor from '@/components/CodeEditor';
import LineNumbers from '@/components/LineNumbers';
import Link from 'next/link';
import { ChevronRight, Menu } from 'lucide-react';

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

  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#111827]">
      <Nav 
        referenceButton={
          <button
            onClick={() => window.open('/docs/referencia', '_blank')}
            className="text-gray-300 hover:text-orange-500 p-2 rounded-md transition-colors"
            title="Referencia"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </button>
        }
      />
      
      {/* Mobile sidebar toggle */}
      <div className="md:hidden fixed top-20 left-4 z-50">
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="bg-gray-800/90 backdrop-blur-sm border border-gray-700/50 p-2 rounded-md text-gray-300 hover:text-white transition-colors"
        >
          <Menu className="w-5 h-5" />
        </button>
      </div>

      {/* Mobile sidebar overlay */}
      {sidebarOpen && (
        <div 
          className="md:hidden fixed inset-0 bg-black/50 z-40"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div className={`md:block ${sidebarOpen ? 'block' : 'hidden'} fixed left-0 top-16 h-full w-64 bg-gray-900/95 backdrop-blur-sm border-r border-gray-800/50 overflow-y-auto z-40`}>
        <TutorialSidebar activePath="/tutorial/introduccion/que-es-eshtml" />
      </div>

      {/* Progress indicator */}
      <div className="bg-orange-500/10 border-b border-orange-500/20 pt-16">
        <div className="max-w-[800px] mx-auto px-6 py-2 text-sm text-orange-300">
          Lección 2 de 24
        </div>
      </div>
      
      <div className="flex pt-16">
        <div className="flex-1 md:ml-64">
          <div className="max-w-[800px] mx-auto px-6 md:px-8 py-12 md:py-16">
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
          </div>
        </div>
      </div>
    </div>
  );
}