// src/app/tutorial/semantica/encapsulando-contenido/page.tsx
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

export default function EncapsulandoContenido() {
  const [example] = useState({
    eshtml: `<seccion>
  <e1>Nuestros Productos</e1>
  
  <div clase="producto-tarjeta">
    <e2>Camiseta</e2>
    <p>Una cómoda camiseta de algodón con <span clase="destacado">diseño exclusivo</span>.</p>
    <div clase="precio">$19.99</div>
  </div>

  <div clase="producto-tarjeta">
    <e2>Gorra</e2>
    <p>Gorra deportiva con <span clase="destacado">ajuste perfecto</span>.</p>
    <div clase="precio">$14.99</div>
  </div>
</seccion>`
  });

  const [userCode, setUserCode] = useState(`<div clase="receta">
  <e2>Mi Receta Favorita</e2>
  
  <!-- Añade más divs y spans para organizar tu contenido -->
</div>`);

  const transpiler = useMemo(() => new EsHTMLTranspiler(), []);
  const html = useMemo(() => transpiler.transpile(userCode), [userCode, transpiler]);

  return (
    <TutorialLayout 
      activePath="/tutorial/semantica/encapsulando-contenido"
      lessonNumber={13}
      totalLessons={22}
    >
      <h1 className="text-3xl md:text-4xl font-bold text-white mb-6">
        Encapsulando Contenido
      </h1>
      
      <div className="space-y-6">
        <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-700/50">
          <p className="text-lg text-gray-300">
            A veces necesitamos agrupar elementos o resaltar partes específicas del texto. Para esto usamos dos elementos muy versátiles:
          </p>
          <ul className="mt-4 space-y-3 text-gray-300">
            <li>• <code className="text-orange-400">&lt;div&gt;</code> para agrupar elementos en bloques</li>
            <li>• <code className="text-orange-400">&lt;span&gt;</code> para resaltar partes del texto</li>
          </ul>
        </div>

        <h2 className="text-2xl font-bold text-white mt-8 mb-4">¿Cuándo usar cada uno?</h2>
        <div className="bg-gray-800/50 p-6 rounded-lg">
          <ul className="space-y-3 text-gray-300">
            <li>• Usa <code className="text-orange-400">&lt;div&gt;</code> cuando necesites crear secciones o agrupar varios elementos</li>
            <li>• Usa <code className="text-orange-400">&lt;span&gt;</code> para resaltar palabras o frases dentro de un texto</li>
            <li>• Ambos elementos son perfectos para aplicar estilos usando el atributo <code className="text-orange-400">clase</code></li>
          </ul>
        </div>

        <h2 className="text-2xl font-bold text-white mt-8 mb-4">Ejemplo</h2>
        <CodeWithPreview code={example.eshtml} />

        <h2 className="text-2xl font-bold text-white mt-12 mb-4">¡Ahora te toca a ti!</h2>
        <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-700/50 mb-6">
          <p className="text-lg text-gray-300">
            Crea una receta usando <code className="text-orange-400">&lt;div&gt;</code> para organizar las diferentes partes 
            (ingredientes, pasos) y <code className="text-orange-400">&lt;span&gt;</code> para resaltar cantidades o 
            instrucciones importantes.
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
            href="/tutorial/semantica/secciones-articulos"
            className="inline-flex items-center px-6 py-3 text-gray-300 hover:text-white"
          >
            <ChevronLeft className="mr-2 w-5 h-5" />
            <span>Anterior: Secciones y Artículos</span>
          </Link>
          <Link
            href="/tutorial/semantica/elementos-semanticos"
            className="inline-flex items-center px-6 py-3 bg-orange-500 text-white font-semibold rounded-md hover:bg-orange-600 transition-colors"
          >
            <span>Siguiente: Elementos Semánticos</span>
            <ChevronRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </div>
    </TutorialLayout>
  );
}