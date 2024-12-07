// src/app/tutorial/elementos/e1/page.tsx
'use client';

import { useState, useMemo } from 'react';
import { Nav } from '@/components/Nav';
import CodeEditor from '@/components/CodeEditor';
import LineNumbers from '@/components/LineNumbers';
import Link from 'next/link';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { EsHTMLTranspiler } from 'html-es';

function CodeWithPreview({ code }: { code: string }) {
  const transpiler = useMemo(() => new EsHTMLTranspiler(), []);
  const html = useMemo(() => transpiler.transpile(code), [code]);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
      <div className="rounded-xl overflow-hidden shadow-2xl bg-gray-950/50 backdrop-blur-sm border border-gray-800/50">
        <div className="bg-gray-950/80 border-b border-gray-800 px-4 py-3">
          <span className="text-gray-300 text-sm font-medium">EsHTML</span>
        </div>
        <div className="bg-gray-900/50 flex">
          <LineNumbers count={code.split('\n').length} />
          <CodeEditor code={code} readOnly={true} />
        </div>
      </div>

      <div className="rounded-xl overflow-hidden shadow-2xl bg-gray-950/50 backdrop-blur-sm border border-gray-800/50">
        <div className="bg-gray-950/80 border-b border-gray-800 px-4 py-3">
          <span className="text-gray-300 text-sm font-medium">HTML</span>
        </div>
        <div className="bg-gray-900/50 flex">
          <LineNumbers count={html.split('\n').length} />
          <CodeEditor code={html} readOnly={true} />
        </div>
      </div>

      <div className="rounded-xl overflow-hidden shadow-2xl bg-gray-950/50 backdrop-blur-sm border border-gray-800/50">
        <div className="bg-gray-950/80 border-b border-gray-800 px-4 py-3">
          <div className="flex items-center space-x-2">
            <div className="flex space-x-1.5">
              <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
            </div>
            <div className="ml-4 bg-gray-900/80 rounded-md px-3 py-1.5">
              <span className="text-gray-400 text-xs">Vista Previa</span>
            </div>
          </div>
        </div>
        <div className="bg-white h-[200px] overflow-auto shadow-inner">
          <iframe
            srcDoc={html}
            title="Preview"
            className="w-full h-full"
          />
        </div>
      </div>
    </div>
  );
}

export default function EncabezadoPrincipal() {
  const [example] = useState({
    eshtml: `<e1>¡Bienvenido a Mi Página!</e1>`
  });

  const [userCode, setUserCode] = useState(`<!-- Escribe tu código EsHTML aquí -->`);
  const transpiler = useMemo(() => new EsHTMLTranspiler(), []);
  const html = useMemo(() => transpiler.transpile(userCode), [userCode]);

  return (
    <div className="min-h-screen bg-[#111827]">
      <Nav />
      <div className="bg-orange-500/10 border-b border-orange-500/20 pt-16">
        <div className="max-w-[1200px] mx-auto px-4 py-2 text-sm text-orange-300">
          Lección 6 de 24
        </div>
      </div>
      
      <div className="flex pt-16">
        <div className="flex-1">
          <div className="max-w-[1200px] mx-auto px-4 md:px-8 py-12 md:py-16">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Encabezado Principal (e1)
            </h1>
            
            <div className="space-y-6">
              <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-700/50">
                <p className="text-lg text-gray-300">
                  El elemento <code className="text-orange-400">&lt;e1&gt;</code> representa el título principal de tu página. Es como el titular de un periódico - debe captar la atención y describir el contenido más importante.
                </p>
              </div>

              <h2 className="text-2xl font-bold text-white mt-8 mb-4">¿Cómo se usa?</h2>
              <div className="bg-gray-800/50 p-6 rounded-lg">
                <ul className="space-y-3 text-gray-300">
                  <li>• Solo debe haber un <code className="text-orange-400">&lt;e1&gt;</code> principal por página</li>
                  <li>• Es lo primero que verán los visitantes</li>
                  <li>• Debe ser corto y descriptivo</li>
                </ul>
              </div>

              <h2 className="text-2xl font-bold text-white mt-8 mb-4">Ejemplo</h2>
              <CodeWithPreview code={example.eshtml} />

              <h2 className="text-2xl font-bold text-white mt-12 mb-4">¡Ahora te toca a ti!</h2>
              <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-700/50 mb-6">
                <p className="text-lg text-gray-300">
                  Crea un título principal para una página sobre tu comida favorita. 
                  Recuerda usar las etiquetas <code className="text-orange-400">&lt;e1&gt;</code> de apertura y cierre.
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                <div className="rounded-xl overflow-hidden shadow-2xl bg-gray-950/50 backdrop-blur-sm border border-gray-800/50">
                  <div className="bg-gray-950/80 border-b border-gray-800 px-4 py-3">
                    <span className="text-gray-300 text-sm font-medium">Tu código EsHTML</span>
                  </div>
                  <div className="bg-gray-900/50 flex overflow-hidden h-[200px]">
                    <LineNumbers count={userCode.split('\n').length} />
                    <CodeEditor 
                      code={userCode} 
                      onChange={setUserCode}
                    />
                  </div>
                </div>

                <div className="rounded-xl overflow-hidden shadow-2xl bg-gray-950/50 backdrop-blur-sm border border-gray-800/50">
                  <div className="bg-gray-950/80 border-b border-gray-800 px-4 py-3">
                    <span className="text-gray-300 text-sm font-medium">HTML</span>
                  </div>
                  <div className="bg-gray-900/50 flex overflow-hidden h-[200px]">
                    <LineNumbers count={html.split('\n').length} />
                    <CodeEditor 
                      code={html} 
                      readOnly={true}
                    />
                  </div>
                </div>

                <div className="rounded-xl overflow-hidden shadow-2xl bg-gray-950/50 backdrop-blur-sm border border-gray-800/50">
                  <div className="bg-gray-950/80 border-b border-gray-800 px-4 py-3">
                    <span className="text-gray-300 text-sm font-medium">Vista Previa</span>
                  </div>
                  <div className="bg-white h-[200px] overflow-auto shadow-inner">
                    <iframe
                      srcDoc={html}
                      title="Preview"
                      className="w-full h-full"
                    />
                  </div>
                </div>
              </div>

              <div className="mt-12 flex justify-between">
                <Link
                  href="/tutorial/introduccion/elementos-etiquetas"
                  className="inline-flex items-center px-6 py-3 text-gray-300 hover:text-white"
                >
                  <ChevronLeft className="mr-2 w-5 h-5" />
                  <span>Anterior: Elementos y Etiquetas</span>
                </Link>
                <Link
                  href="/tutorial/elementos/p"
                  className="inline-flex items-center px-6 py-3 bg-orange-500 text-white font-semibold rounded-md hover:bg-orange-600 transition-colors"
                >
                  <span>Siguiente: Párrafos</span>
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