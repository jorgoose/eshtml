// src/app/tutorial/practicas/organizacion/page.tsx
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
        <div className="bg-gray-900/50 flex overflow-hidden h-[200px]">
          <LineNumbers count={code.split('\n').length} />
          <CodeEditor code={code} readOnly={true} />
        </div>
      </div>

      <div className="rounded-xl overflow-hidden shadow-2xl bg-gray-950/50 backdrop-blur-sm border border-gray-800/50">
        <div className="bg-gray-950/80 border-b border-gray-800 px-4 py-3">
          <span className="text-gray-300 text-sm font-medium">HTML</span>
        </div>
        <div className="bg-gray-900/50 flex overflow-hidden h-[200px]">
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

export default function OrganizacionCodigo() {
  const [example] = useState({
    eshtml: `<proyecto>
  <carpeta nombre="src">
    <archivo nombre="index.html">
      <e1>Mi Proyecto</e1>
      <p>Bienvenido a mi proyecto.</p>
    </archivo>
    <carpeta nombre="css">
      <archivo nombre="styles.css">
        /* Estilos para mi proyecto */
      </archivo>
    </carpeta>
    <carpeta nombre="js">
      <archivo nombre="scripts.js">
        // Funciones para mi proyecto
      </archivo>
    </carpeta>
  </carpeta>
</proyecto>`
  });

  const [userCode, setUserCode] = useState(`<proyecto>
  <!-- Organiza tu proyecto aquí -->
  <carpeta nombre="src">
    <archivo nombre="index.html">
      <e1>Mi Proyecto</e1>
      <p>Bienvenido a mi proyecto.</p>
    </archivo>
    <!-- Añade más carpetas y archivos aquí -->
  </carpeta>
</proyecto>`);

  const transpiler = useMemo(() => new EsHTMLTranspiler(), []);
  const html = useMemo(() => transpiler.transpile(userCode), [userCode]);

  return (
    <div className="min-h-screen bg-[#111827]">
      <Nav />
      <div className="bg-orange-500/10 border-b border-orange-500/20 pt-16">
        <div className="max-w-[1200px] mx-auto px-4 py-2 text-sm text-orange-300">
          Lección 20 de 24
        </div>
      </div>
      
      <div className="flex pt-16">
        <div className="flex-1">
          <div className="max-w-[1200px] mx-auto px-4 md:px-8 py-12 md:py-16">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Organización del Código
            </h1>
            
            <div className="space-y-6">
              <div className="bg-orange-500/10 rounded-lg p-6 border border-orange-500/20">
                <h2 className="text-xl font-semibold text-white mb-3">Nueva Sección: Buenas Prácticas</h2>
                <p className="text-gray-300">
                  Organizar tu código de manera adecuada es crucial para mantener tu proyecto limpio y fácil de entender. 
                  Una buena estructura de carpetas y archivos te ayudará a encontrar y modificar el código más fácilmente.
                </p>
              </div>

              <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-700/50">
                <p className="text-lg text-gray-300">
                  Aquí hay algunas prácticas recomendadas para organizar tu proyecto:
                </p>
                <ul className="mt-4 space-y-3 text-gray-300">
                  <li>• Usa carpetas para agrupar archivos relacionados (por ejemplo, <code className="text-orange-400">css</code> para estilos, <code className="text-orange-400">js</code> para scripts)</li>
                  <li>• Nombra tus archivos y carpetas de manera descriptiva</li>
                  <li>• Mantén una estructura consistente en todos tus proyectos</li>
                </ul>
              </div>

              <h2 className="text-2xl font-bold text-white mt-8 mb-4">Ejemplo</h2>
              <p className="text-lg text-gray-300 mb-4">
                Aquí hay un ejemplo de una estructura de proyecto bien organizada:
              </p>
              <CodeWithPreview code={example.eshtml} />

              <h2 className="text-2xl font-bold text-white mt-12 mb-4">¡Ahora te toca a ti!</h2>
              <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-700/50 mb-6">
                <p className="text-lg text-gray-300">
                  Organiza tu proyecto creando carpetas y archivos. Usa nombres descriptivos y agrupa archivos relacionados.
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

              <div className="mt-12 flex justify-between">
                <Link
                  href="/tutorial/practicas/validacion-correccion"
                  className="inline-flex items-center px-6 py-3 text-gray-300 hover:text-white"
                >
                  <ChevronLeft className="mr-2 w-5 h-5" />
                  <span>Anterior: Validación y Corrección</span>
                </Link>
                <Link
                  href="/tutorial/conclusion/resumen"
                  className="inline-flex items-center px-6 py-3 bg-orange-500 text-white font-semibold rounded-md hover:bg-orange-600 transition-colors"
                >
                  <span>Siguiente: Resumen de Conceptos Clave</span>
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