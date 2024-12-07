// src/app/tutorial/practicas/validacion-correccion/page.tsx
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

export default function ValidacionCorreccion() {
  const [example] = useState({
    eshtml: `<e1>Mi Página Web</e1>
<p>Bienvenido a mi página web.</p>
<!-- Error: Falta cerrar la etiqueta <p> -->
<p>Esta es una página de ejemplo.
<!-- Error: Falta cerrar la etiqueta <p> -->
<ld>
  <el>Elemento 1</el>
  <el>Elemento 2</el>
  <el>Elemento 3</el>
</ld>`
  });

  const [userCode, setUserCode] = useState(`<e1>Mi Proyecto</e1>
<!-- Añade aquí tu código con errores y corrige los errores -->

<p>Este es un párrafo sin cerrar
<!-- Error: Falta cerrar la etiqueta <p> -->

<!-- Añade más contenido y corrige los errores aquí -->`);

  const transpiler = useMemo(() => new EsHTMLTranspiler(), []);
  const html = useMemo(() => transpiler.transpile(userCode), [userCode]);

  return (
    <div className="min-h-screen bg-[#111827]">
      <Nav />
      <div className="bg-orange-500/10 border-b border-orange-500/20">
        <div className="max-w-[1200px] mx-auto px-4 py-2 text-sm text-orange-300">
          Lección 19 de 24
        </div>
      </div>
      
      <div className="flex pt-16">
        <div className="flex-1">
          <div className="max-w-[1200px] mx-auto px-4 md:px-8 py-12 md:py-16">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Validación y Corrección
            </h1>
            
            <div className="space-y-6">
              <div className="bg-orange-500/10 rounded-lg p-6 border border-orange-500/20">
                <h2 className="text-xl font-semibold text-white mb-3">Nueva Sección: Buenas Prácticas</h2>
                <p className="text-gray-300">
                  Es importante asegurarse de que tu código es válido y no contiene errores. 
                  La validación y corrección de errores ayuda a que tu página funcione correctamente y sea accesible para todos.
                </p>
              </div>

              <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-700/50">
                <p className="text-lg text-gray-300">
                  Aquí hay algunos errores comunes y cómo corregirlos:
                </p>
                <ul className="mt-4 space-y-3 text-gray-300">
                  <li>• Asegúrate de cerrar todas las etiquetas (<code className="text-orange-400">&lt;p&gt;</code>, <code className="text-orange-400">&lt;div&gt;</code>, etc.)</li>
                  <li>• Usa un validador de HTML para encontrar errores en tu código</li>
                  <li>• Corrige los errores siguiendo las recomendaciones del validador</li>
                </ul>
              </div>

              <h2 className="text-2xl font-bold text-white mt-8 mb-4">Ejemplo</h2>
              <p className="text-lg text-gray-300 mb-4">
                Aquí hay un ejemplo de código con errores y cómo corregirlos:
              </p>
              <CodeWithPreview code={example.eshtml} />

              <h2 className="text-2xl font-bold text-white mt-12 mb-4">¡Ahora te toca a ti!</h2>
              <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-700/50 mb-6">
                <p className="text-lg text-gray-300">
                  Añade tu código con errores y corrige los errores siguiendo las recomendaciones del validador.
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
                  href="/tutorial/practicas/comentarios-legibilidad"
                  className="inline-flex items-center px-6 py-3 text-gray-300 hover:text-white"
                >
                  <ChevronLeft className="mr-2 w-5 h-5" />
                  <span>Anterior: Comentarios y Legibilidad</span>
                </Link>
                <Link
                  href="/tutorial/practicas/organizacion"
                  className="inline-flex items-center px-6 py-3 bg-orange-500 text-white font-semibold rounded-md hover:bg-orange-600 transition-colors"
                >
                  <span>Siguiente: Organización del Código</span>
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