// src/app/tutorial/practicas/comentarios-legibilidad/page.tsx
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

export default function ComentariosLegibilidad() {
  const [example] = useState({
    eshtml: `<e1>Mi Receta Favorita</e1>
<!-- Este es el título principal de la página -->

<p>Esta receta es muy fácil de hacer y deliciosa.</p>
<!-- Descripción breve de la receta -->

<ld>
  <!-- Lista de ingredientes -->
  <el>2 tazas de harina</el>
  <el>1 taza de azúcar</el>
  <el>1/2 taza de leche</el>
</ld>

<lo>
  <!-- Lista de pasos -->
  <el>Precalentar el horno a 180 grados.</el>
  <el>Mezclar todos los ingredientes.</el>
  <el>Hornear durante 30 minutos.</el>
</lo>`
  });

  const [userCode, setUserCode] = useState(`<e1>Mi Proyecto</e1>
<!-- Añade aquí un comentario explicando el propósito de tu proyecto -->

<p>Este proyecto es sobre...</p>
<!-- Añade aquí un comentario explicando el contenido del párrafo -->

<!-- Añade más contenido y comentarios aquí -->`);

  const transpiler = useMemo(() => new EsHTMLTranspiler(), []);
  const html = useMemo(() => transpiler.transpile(userCode), [userCode]);

  return (
    <div className="min-h-screen bg-[#111827]">
      <Nav />
      <div className="bg-orange-500/10 border-b border-orange-500/20">
        <div className="max-w-[1200px] mx-auto px-4 py-2 text-sm text-orange-300">
          Lección 18 de 24
        </div>
      </div>
      
      <div className="flex pt-16">
        <div className="flex-1">
          <div className="max-w-[1200px] mx-auto px-4 md:px-8 py-12 md:py-16">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Comentarios y Legibilidad
            </h1>
            
            <div className="space-y-6">
              <div className="bg-orange-500/10 rounded-lg p-6 border border-orange-500/20">
                <h2 className="text-xl font-semibold text-white mb-3">Nueva Sección: Buenas Prácticas</h2>
                <p className="text-gray-300">
                  Escribir código limpio y entendible es crucial para cualquier proyecto. 
                  Los comentarios y la legibilidad del código ayudan a que otros (y tú mismo en el futuro) 
                  puedan entender fácilmente lo que hace tu código.
                </p>
              </div>

              <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-700/50">
                <p className="text-lg text-gray-300">
                  Los comentarios son notas que puedes añadir a tu código para explicar lo que hace. 
                  No afectan cómo funciona el código, pero son muy útiles para la comprensión.
                </p>
                <ul className="mt-4 space-y-3 text-gray-300">
                  <li>• Usa <code className="text-orange-400">&lt;!-- comentario --&gt;</code> para añadir comentarios en EsHTML</li>
                  <li>• Explica el propósito de secciones importantes de tu código</li>
                  <li>• Mantén tus comentarios claros y concisos</li>
                </ul>
              </div>

              <h2 className="text-2xl font-bold text-white mt-8 mb-4">Ejemplo</h2>
              <p className="text-lg text-gray-300 mb-4">
                Aquí hay un ejemplo de una receta con comentarios:
              </p>
              <CodeWithPreview code={example.eshtml} />

              <h2 className="text-2xl font-bold text-white mt-12 mb-4">¡Ahora te toca a ti!</h2>
              <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-700/50 mb-6">
                <p className="text-lg text-gray-300">
                  Añade comentarios a tu proyecto explicando el propósito de cada sección. 
                  Usa comentarios para describir el contenido y la estructura de tu código.
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
                  href="/tutorial/avanzado/elementos-formulario"
                  className="inline-flex items-center px-6 py-3 text-gray-300 hover:text-white"
                >
                  <ChevronLeft className="mr-2 w-5 h-5" />
                  <span>Anterior: Elementos de Formulario</span>
                </Link>
                <Link
                  href="/tutorial/practicas/validacion-correccion"
                  className="inline-flex items-center px-6 py-3 bg-orange-500 text-white font-semibold rounded-md hover:bg-orange-600 transition-colors"
                >
                  <span>Siguiente: Validación y Corrección</span>
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