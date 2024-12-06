// src/app/tutorial/semantica/secciones-articulos/page.tsx
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

export default function SeccionesArticulos() {
  const [example] = useState({
    eshtml: `<seccion>
  <e1>Noticias de Tecnología</e1>
  
  <articulo>
    <e2>Nueva Actualización de EsHTML</e2>
    <p>La última versión trae mejoras importantes...</p>
  </articulo>

  <articulo>
    <e2>Consejos para Programar</e2>
    <p>Aprende a escribir mejor código con estos tips...</p>
  </articulo>
</seccion>

<seccion>
  <e1>Últimos Comentarios</e1>
  <articulo>
    <p>¡Excelente tutorial! Me ayudó mucho...</p>
  </articulo>
</seccion>`
  });

  const [userCode, setUserCode] = useState(`<seccion>
  <e1>Mi Blog Personal</e1>
  
  <!-- Añade aquí dos artículos usando <articulo> -->
</seccion>`);

  const transpiler = useMemo(() => new EsHTMLTranspiler(), []);
  const html = useMemo(() => transpiler.transpile(userCode), [userCode]);

  return (
    <div className="min-h-screen bg-[#111827]">
      <Nav />
      <div className="bg-orange-500/10 border-b border-orange-500/20">
        <div className="max-w-[1200px] mx-auto px-4 py-2 text-sm text-orange-300">
          Lección 12 de 24
        </div>
      </div>
      
      <div className="flex pt-16">
        <div className="flex-1">
          <div className="max-w-[1200px] mx-auto px-4 md:px-8 py-12 md:py-16">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Secciones y Artículos
            </h1>
            
            <div className="space-y-6">
              <div className="bg-orange-500/10 rounded-lg p-6 border border-orange-500/20">
                <h2 className="text-xl font-semibold text-white mb-3">Nueva Sección: Semántica y Organización</h2>
                <p className="text-gray-300">
                  Hasta ahora hemos aprendido a crear contenido básico. Ahora veremos cómo organizar ese contenido de manera que tenga más sentido y sea más fácil de entender, tanto para las personas como para los navegadores.
                </p>
              </div>

              <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-700/50">
                <p className="text-lg text-gray-300">
                  Las páginas web se pueden dividir en diferentes partes usando elementos semánticos:
                </p>
                <ul className="mt-4 space-y-3 text-gray-300">
                  <li>• <code className="text-orange-400">&lt;seccion&gt;</code> para agrupar contenido relacionado</li>
                  <li>• <code className="text-orange-400">&lt;articulo&gt;</code> para contenido independiente y completo</li>
                </ul>
              </div>

              <h2 className="text-2xl font-bold text-white mt-8 mb-4">¿Cuándo usar cada uno?</h2>
              <div className="bg-gray-800/50 p-6 rounded-lg">
                <ul className="space-y-3 text-gray-300">
                  <li>• Usa <code className="text-orange-400">&lt;seccion&gt;</code> para dividir tu página en áreas temáticas</li>
                  <li>• Usa <code className="text-orange-400">&lt;articulo&gt;</code> para contenido que tiene sentido por sí mismo</li>
                  <li>• Puedes tener varios artículos dentro de una sección</li>
                </ul>
              </div>

              <h2 className="text-2xl font-bold text-white mt-8 mb-4">Ejemplo</h2>
              <CodeWithPreview code={example.eshtml} />

              <h2 className="text-2xl font-bold text-white mt-12 mb-4">¡Ahora te toca a ti!</h2>
              <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-700/50 mb-6">
                <p className="text-lg text-gray-300">
                  Crea una sección para tu blog personal con dos artículos diferentes. Cada artículo debe tener un título 
                  (<code className="text-orange-400">&lt;e2&gt;</code>) y un párrafo de contenido.
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
                  href="/tutorial/formatos/citas-y-codigo"
                  className="inline-flex items-center px-6 py-3 text-gray-300 hover:text-white"
                >
                  <ChevronLeft className="mr-2 w-5 h-5" />
                  <span>Anterior: Citas y Código</span>
                </Link>
                <Link
                  href="/tutorial/semantica/encapsular"
                  className="inline-flex items-center px-6 py-3 bg-orange-500 text-white font-semibold rounded-md hover:bg-orange-600 transition-colors"
                >
                  <span>Siguiente: Encapsulando Contenido</span>
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