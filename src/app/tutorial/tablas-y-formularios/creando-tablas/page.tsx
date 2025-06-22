// src/app/tutorial/tablas-y-formularios/tablas/page.tsx
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

export default function Tablas() {
  const [example] = useState({
    eshtml: `<tabla>
  <cabecera-tabla>
    <fila-tabla>
      <celda-encabezado>Estudiante</celda-encabezado>
      <celda-encabezado>Materia</celda-encabezado>
      <celda-encabezado>Calificación</celda-encabezado>
    </fila-tabla>
  </cabecera-tabla>
  
  <cuerpo-tabla>
    <fila-tabla>
      <celda>Ana</celda>
      <celda>Matemáticas</celda>
      <celda>95</celda>
    </fila-tabla>
    <fila-tabla>
      <celda>Juan</celda>
      <celda>Matemáticas</celda>
      <celda>88</celda>
    </fila-tabla>
  </cuerpo-tabla>
</tabla>`
  });

  const [userCode, setUserCode] = useState(`<tabla>
  <cabecera-tabla>
    <fila-tabla>
      <!-- Añade las celdas de encabezado aquí -->
    </fila-tabla>
  </cabecera-tabla>
  
  <cuerpo-tabla>
    <!-- Añade las filas y celdas aquí -->
  </cuerpo-tabla>
</tabla>`);

  const transpiler = useMemo(() => new EsHTMLTranspiler(), []);
  const html = useMemo(() => transpiler.transpile(userCode), [userCode]);

  return (
    <TutorialLayout 
      activePath="/tutorial/tablas-y-formularios/creando-tablas"
      lessonNumber={15}
      totalLessons={22}
    >
      <h1 className="text-3xl md:text-4xl font-bold text-white mb-6">
        Creando Tablas
      </h1>
      
      <div className="space-y-6">
        <div className="bg-orange-500/10 rounded-lg p-6 border border-orange-500/20">
          <h2 className="text-xl font-semibold text-white mb-3">Nueva Sección: Tablas y Formularios</h2>
          <p className="text-gray-300">
            Ahora aprenderemos a organizar información en tablas y a crear formularios para interactuar con los usuarios.
            Empecemos con las tablas, que son perfectas para mostrar información en filas y columnas.
          </p>
        </div>

        <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-700/50">
          <p className="text-lg text-gray-300">
            Una tabla se compone de:
          </p>
          <ul className="mt-4 space-y-3 text-gray-300">
            <li>• <code className="text-orange-400">&lt;tabla&gt;</code> - El contenedor principal</li>
            <li>• <code className="text-orange-400">&lt;cabecera-tabla&gt;</code> - La sección de encabezados</li>
            <li>• <code className="text-orange-400">&lt;cuerpo-tabla&gt;</code> - Donde va el contenido principal</li>
            <li>• <code className="text-orange-400">&lt;fila-tabla&gt;</code> - Cada fila de la tabla</li>
            <li>• <code className="text-orange-400">&lt;celda&gt;</code> - Para datos normales</li>
            <li>• <code className="text-orange-400">&lt;celda-encabezado&gt;</code> - Para títulos de columnas</li>
          </ul>
        </div>

        <h2 className="text-2xl font-bold text-white mt-8 mb-4">Ejemplo</h2>
        <p className="text-lg text-gray-300 mb-4">
          Aquí hay una tabla simple que muestra calificaciones de estudiantes:
        </p>
        <CodeWithPreview code={example.eshtml} />

        <h2 className="text-2xl font-bold text-white mt-12 mb-4">¡Ahora te toca a ti!</h2>
        <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-700/50 mb-6">
          <p className="text-lg text-gray-300">
            Crea una tabla con tres columnas: &quot;Nombre&quot;, &quot;Edad&quot; y &quot;Ciudad&quot;. 
            Añade al menos dos filas con información de personas.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <div className="rounded-xl overflow-hidden shadow-2xl bg-gray-950/50 backdrop-blur-sm border border-gray-800/50">
            <div className="bg-gray-950/80 border-b border-gray-800 px-4 py-3">
              <span className="text-gray-300 text-sm font-medium">Tu código EsHTML</span>
            </div>
            <div className="bg-gray-900/50 flex overflow-hidden h-[200px]">
              <LineNumbers count={userCode.split('\n').length} />
              <CodeEditor code={userCode} readOnly={false} onChange={setUserCode} />
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

        <div className="mt-12 flex justify-between">
          <Link
            href="/tutorial/semantica/elementos-semanticos"
            className="inline-flex items-center px-6 py-3 text-gray-300 hover:text-white"
          >
            <ChevronLeft className="mr-2 w-5 h-5" />
            <span>Anterior: Elementos Semánticos</span>
          </Link>
          <Link
            href="/tutorial/tablas-y-formularios/formularios-basicos"
            className="inline-flex items-center px-6 py-3 bg-orange-500 text-white font-semibold rounded-md hover:bg-orange-600 transition-colors"
          >
            <span>Siguiente: Formularios Básicos</span>
            <ChevronRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </div>
    </TutorialLayout>
  );
}