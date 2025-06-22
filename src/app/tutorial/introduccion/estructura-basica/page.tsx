// src/app/tutorial/introduccion/estructura-basica/page.tsx
'use client';

import { useState } from 'react';
import { Nav } from '@/components/Nav';
import CodeEditor from '@/components/CodeEditor';
import LineNumbers from '@/components/LineNumbers';
import Link from 'next/link';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { TutorialSidebar } from '@/components/TutorialSidebar';

export default function EstructuraBasica() {
  const [documentStructure] = useState(`<html>
  <cabeza>
    <titulo>Título de la Página</titulo>
  </cabeza>
  <cuerpo>
    <!-- El contenido visible va aquí -->
    <e1>Título Principal</e1>
    <p>Un párrafo de texto.</p>
  </cuerpo>
</html>`);

  return (
    <div className="min-h-screen bg-[#111827]">
      <Nav />
      <TutorialSidebar activePath="/tutorial/introduccion/estructura-basica" />
      <div className="bg-orange-500/10 border-b border-orange-500/20 pt-16">
        <div className="max-w-[800px] mx-auto px-6 py-2 text-sm text-orange-300">
          Lección 4 de 24
        </div>
      </div>
      
      <div className="flex pt-16">
        <div className="flex-1 md:ml-64">
          <div className="max-w-[800px] mx-auto px-6 md:px-8 py-12 md:py-16">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Estructura Básica de un Documento
            </h1>
            
            <div className="space-y-6">
              <p className="text-lg text-gray-300">
                Toda página web tiene una estructura básica, como un edificio tiene cimientos, paredes y techo. Vamos a ver cada parte:
              </p>

              <div className="grid grid-cols-1 gap-6">
                <div className="bg-gray-800/50 p-6 rounded-lg border-l-4 border-orange-500">
                  <h3 className="text-xl font-semibold text-white mb-2">La Etiqueta html</h3>
                  <p className="text-gray-300">Es como una caja grande que contiene todas las partes de tu página web. Todo lo demás irá dentro de esta caja.</p>
                </div>

                <div className="bg-gray-800/50 p-6 rounded-lg border-l-4 border-blue-500 ml-6">
                  <h3 className="text-xl font-semibold text-white mb-2">La Cabeza (cabeza)</h3>
                  <p className="text-gray-300">Contiene información sobre tu página, como el título que aparece en la parte superior de la ventana cuando alguien visita tu sitio.</p>
                </div>

                <div className="bg-gray-800/50 p-6 rounded-lg border-l-4 border-green-500 ml-6">
                  <h3 className="text-xl font-semibold text-white mb-2">El Cuerpo (cuerpo)</h3>
                  <p className="text-gray-300">Es donde va todo lo que quieres que la gente vea en tu página: los textos que escribes, las imágenes que quieres mostrar y los botones que quieres que la gente use.</p>
                </div>
              </div>

              <div className="mt-8">
                <h2 className="text-2xl font-bold text-white mb-4">
                  Así se ve todo junto:
                </h2>

                <div className="rounded-xl overflow-hidden shadow-2xl bg-gray-950/50 backdrop-blur-sm border border-gray-800/50">
                  <div className="bg-gray-950/80 border-b border-gray-800 px-4 py-3">
                    <span className="text-gray-300 text-sm font-medium">Estructura Básica</span>
                  </div>
                  <div className="bg-gray-900/50 flex">
                    <LineNumbers count={documentStructure.split('\n').length} />
                    <CodeEditor code={documentStructure} readOnly={true} />
                  </div>
                </div>

                <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-700/50 mt-8">
                  <h3 className="text-lg font-semibold text-white mb-2">¿Por qué este orden?</h3>
                  <p className="text-gray-300">
                    Esta estructura es como armar un rompecabezas: cada pieza tiene su lugar específico. El navegador espera encontrar estas partes en este orden para mostrar correctamente tu página.
                  </p>
                </div>
              </div>

              <div className="mt-12 flex justify-between">
                <Link
                  href="/tutorial/introduccion/primer-documento"
                  className="inline-flex items-center px-6 py-3 text-gray-300 hover:text-white"
                >
                  <ChevronLeft className="mr-2 w-5 h-5" />
                  <span>Anterior: Tu Primer Documento</span>
                </Link>
                <Link
                  href="/tutorial/introduccion/elementos-y-etiquetas"
                  className="inline-flex items-center px-6 py-3 bg-orange-500 text-white font-semibold rounded-md hover:bg-orange-600 transition-colors"
                >
                  <span>Siguiente: Elementos y Etiquetas</span>
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