// src/app/tutorial/tablas-y-formularios/formularios-basicos/page.tsx
'use client';

import { useState, useMemo } from 'react';
import CodeEditor from '@/components/CodeEditor';
import LineNumbers from '@/components/LineNumbers';
import Link from 'next/link';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { EsHTMLTranspiler } from 'html-es';
import { TutorialLayout } from '@/components/TutorialLayout';

function CodeWithPreview({ code }: { code: string }) {
  const transpiler = useMemo(() => new EsHTMLTranspiler(), []);
  const html = useMemo(() => transpiler.transpile(code), [code, transpiler]);

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

export default function FormulariosBasicos() {
  const [example] = useState({
    eshtml: `<formulario accion="/enviar" metodo="post">
  <div>
    <etiqueta para="nombre">Nombre:</etiqueta>
    <entrada tipo="texto" id="nombre" nombre="nombre" requerido>
  </div>

  <div>
    <etiqueta para="correo">Correo:</etiqueta>
    <entrada tipo="correo" id="correo" nombre="correo" requerido>
  </div>

  <div>
    <etiqueta para="mensaje">Mensaje:</etiqueta>
    <areatexto id="mensaje" nombre="mensaje" filas="4"></areatexto>
  </div>

  <boton tipo="enviar">Enviar Mensaje</boton>
</formulario>`
  });

  const [userCode, setUserCode] = useState(`<formulario>
  <!-- Crea un formulario de contacto simple -->
  <div>
    <etiqueta para="nombre">Nombre:</etiqueta>
    <entrada tipo="texto" id="nombre" nombre="nombre">
  </div>

  <!-- Añade más campos aquí -->
</formulario>`);

  const transpiler = useMemo(() => new EsHTMLTranspiler(), []);
  const html = useMemo(() => transpiler.transpile(userCode), [userCode, transpiler]);

  return (
    <TutorialLayout 
      activePath="/tutorial/tablas-y-formularios/formularios-basicos"
      lessonNumber={16}
      totalLessons={22}
    >
      <h1 className="text-3xl md:text-4xl font-bold text-white mb-6">
        Formularios Básicos
      </h1>
      
      <div className="space-y-6">
        <div className="bg-orange-500/10 rounded-lg p-6 border border-orange-500/20">
          <h2 className="text-xl font-semibold text-white mb-3">Nueva Sección: Tablas y Formularios</h2>
          <p className="text-gray-300">
            Después de aprender a mostrar información, ahora veremos cómo interactuar con los usuarios 
            a través de formularios. Los formularios permiten a los usuarios ingresar información en tu página web.
          </p>
        </div>

        <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-700/50">
          <p className="text-lg text-gray-300">
            Un formulario tiene estas partes principales:
          </p>
          <ul className="mt-4 space-y-3 text-gray-300">
            <li>• <code className="text-orange-400">&lt;formulario&gt;</code> - El contenedor principal</li>
            <li>• <code className="text-orange-400">&lt;etiqueta&gt;</code> - Texto que describe cada campo</li>
            <li>• <code className="text-orange-400">&lt;entrada&gt;</code> - Campo donde el usuario escribe</li>
            <li>• <code className="text-orange-400">&lt;boton&gt;</code> - Para enviar el formulario</li>
          </ul>
        </div>

        <h2 className="text-2xl font-bold text-white mt-8 mb-4">Ejemplo</h2>
        <p className="text-lg text-gray-300 mb-4">
          Un formulario de contacto simple:
        </p>
        <CodeWithPreview code={example.eshtml} />

        <h2 className="text-2xl font-bold text-white mt-12 mb-4">¡Ahora te toca a ti!</h2>
        <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-700/50 mb-6">
          <p className="text-lg text-gray-300">
            Completa el formulario de contacto añadiendo un campo para el correo electrónico y un mensaje. 
            No olvides incluir las etiquetas y un botón para enviar.
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

        <div className="mt-12 flex flex-col sm:flex-row justify-between gap-3">
          <Link
            href="/tutorial/tablas-y-formularios/creando-tablas"
            className="inline-flex items-center justify-center px-4 py-2 sm:px-6 sm:py-3 bg-gray-700 text-white font-semibold rounded-md hover:bg-gray-600 transition-colors text-sm sm:text-base"
          >
            <ChevronLeft className="mr-2 w-4 h-4 sm:w-5 sm:h-5" />
            <span>Anterior: Creando Tablas</span>
          </Link>
          <Link
            href="/tutorial/tablas-y-formularios/elementos-de-formulario"
            className="inline-flex items-center justify-center px-4 py-2 sm:px-6 sm:py-3 bg-orange-500 text-white font-semibold rounded-md hover:bg-orange-600 transition-colors text-sm sm:text-base"
          >
            <span>Siguiente: Elementos de Formulario</span>
            <ChevronRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
          </Link>
        </div>
      </div>
    </TutorialLayout>
  );
}