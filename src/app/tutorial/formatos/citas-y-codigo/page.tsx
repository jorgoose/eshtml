// src/app/tutorial/formatos/citas-y-codigo/page.tsx
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

export default function CitasCodigo() {
  const [example] = useState({
    eshtml: `<e1>Citas Famosas</e1>

<cita>
  La imaginación es más importante que el conocimiento.
  <fuente>Albert Einstein</fuente>
</cita>

<p>Para crear un programa simple en Python:</p>

<codigo>
print("¡Hola, Mundo!")
nombre = input("¿Cómo te llamas?")
print(f"¡Hola {nombre}!")
</codigo>`
  });

  const [userCode, setUserCode] = useState(`<e1>Mi Libro Favorito</e1>

<p>Este libro tiene una frase muy especial:</p>

<!-- Añade aquí una cita del libro usando <cita> y <fuente> -->`);

  const transpiler = useMemo(() => new EsHTMLTranspiler(), []);
  const html = useMemo(() => transpiler.transpile(userCode), [userCode, transpiler]);

  return (
    <TutorialLayout 
      activePath="/tutorial/formatos/citas-y-codigo"
      lessonNumber={11}
      totalLessons={22}
    >
      <h1 className="text-3xl md:text-4xl font-bold text-white mb-6">
        Citas y Código
      </h1>
      
      <div className="space-y-6">
        <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-700/50">
          <p className="text-lg text-gray-300">
            A veces necesitamos incluir citas de otras fuentes o mostrar fragmentos de código en nuestras páginas. 
            EsHTML tiene elementos especiales para presentar este tipo de contenido de manera clara y organizada.
          </p>
        </div>

        <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-700/50">
          <p className="text-lg text-gray-300">
            Tenemos dos elementos principales:
          </p>
          <ul className="mt-4 space-y-3 text-gray-300">
            <li>• <code className="text-orange-400">&lt;cita&gt;</code> para citas de texto</li>
            <li>• <code className="text-orange-400">&lt;codigo&gt;</code> para fragmentos de código</li>
          </ul>
        </div>

        <h2 className="text-2xl font-bold text-white mt-8 mb-4">¿Cómo se usan?</h2>
        <div className="bg-gray-800/50 p-6 rounded-lg">
          <ul className="space-y-3 text-gray-300">
            <li>• Usa <code className="text-orange-400">&lt;cita&gt;</code> para citar texto de otra fuente</li>
            <li>• Añade <code className="text-orange-400">&lt;fuente&gt;</code> dentro de la cita para indicar el autor</li>
            <li>• Usa <code className="text-orange-400">&lt;codigo&gt;</code> para mostrar código con formato especial</li>
          </ul>
        </div>

        <h2 className="text-2xl font-bold text-white mt-8 mb-4">Ejemplo</h2>
        <CodeWithPreview code={example.eshtml} />

        <h2 className="text-2xl font-bold text-white mt-12 mb-4">¡Ahora te toca a ti!</h2>
        <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-700/50 mb-6">
          <p className="text-lg text-gray-300">
            Añade una cita de tu libro favorito usando los elementos <code className="text-orange-400">&lt;cita&gt;</code> y <code className="text-orange-400">&lt;fuente&gt;</code>. 
            No olvides incluir el autor en la fuente.
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
            href="/tutorial/formatos/listas"
            className="inline-flex items-center px-6 py-3 text-gray-300 hover:text-white"
          >
            <ChevronLeft className="mr-2 w-5 h-5" />
            <span>Anterior: Listas</span>
          </Link>
          <Link
            href="/tutorial/semantica/secciones-y-articulos"
            className="inline-flex items-center px-6 py-3 bg-orange-500 text-white font-semibold rounded-md hover:bg-orange-600 transition-colors"
          >
            <span>Siguiente: Secciones y Artículos</span>
            <ChevronRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </div>
    </TutorialLayout>
  );
}