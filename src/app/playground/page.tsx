// app/playground/page.tsx
'use client';

import { useState, useEffect, useMemo } from 'react';
import { EsHTMLTranspiler } from 'html-es';
import CodeEditor from '../../components/CodeEditor';
import { AiOutlineDown, AiOutlineUp } from 'react-icons/ai';

function LineNumbers({ count }: { count: number }) {
  return (
    <div className="select-none pr-4 text-right text-gray-600 font-mono text-sm py-4 ml-2">
      {Array.from({ length: count }).map((_, i) => (
        <div key={i} className="leading-6">
          {i + 1}
        </div>
      ))}
    </div>
  );
}

export default function Playground() {
  const [eshtmlCode, setEshtmlCode] = useState(`<html>
  <título>Mi Página</título>
  <cuerpo>
    <encabezado>
      <e1>¡Hola Mundo!</e1>
    </encabezado>
    
    <sección clase="contenido">
      <p>
        Este es un ejemplo de EsHTML
      </p>
    </sección>
  </cuerpo>
</html>`);
  const [transpiledHtml, setTranspiledHtml] = useState('');
  const [showTranspiled, setShowTranspiled] = useState(false);
  const [transpileError, setTranspileError] = useState('');
  const transpiler = useMemo(() => new EsHTMLTranspiler(), []);

  useEffect(() => {
    try {
      const result = transpiler.transpile(eshtmlCode);
      setTranspiledHtml(result);
      setTranspileError('');
    } catch (error: unknown) {
      setTranspileError(error instanceof Error ? error.message : String(error));
      setTranspiledHtml('');
    }
  }, [eshtmlCode, transpiler]);

  return (
    <main className="min-h-screen bg-gray-950">
      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-2 sm:px-4 py-12">
        <h1 className="text-4xl font-bold text-white mb-8">
          EsHTML Playground
        </h1>

        <div className="grid lg:grid-cols-2 gap-4">
          {/* Editor Container */}
          <div className="rounded-xl overflow-hidden shadow-2xl bg-gray-950/50 backdrop-blur-sm border border-gray-800/50">
            {/* Editor Header */}
            <div className="bg-gray-950/80 border-b border-gray-800">
              <div className="px-4 py-3 bg-gray-900/80 w-full">
                <span className="text-gray-300 text-sm font-medium">entrada.eshtml</span>
              </div>
            </div>
            {/* Editor Content */}
            <div className="bg-gray-900/50">
              <div className="flex h-[500px]">
                <LineNumbers count={eshtmlCode.split('\n').length} />
                <CodeEditor 
                  code={eshtmlCode}
                  onChange={setEshtmlCode}
                />
              </div>
            </div>
          </div>

          {/* Mock Browser Window */}
          <div className="rounded-xl overflow-hidden shadow-2xl bg-gray-950/50 backdrop-blur-sm border border-gray-800/50">
            {/* Browser Chrome */}
            <div className="bg-gray-950/80 border-b border-gray-800 px-4 py-3">
              <div className="flex items-center space-x-2">
                <div className="flex space-x-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                </div>
                <div className="ml-4 bg-gray-900/80 rounded-md px-3 py-1.5">
                  <span className="text-gray-400 text-xs">entrada.eshtml</span>
                </div>
              </div>
            </div>
            {/* Browser Content */}
            <div className="bg-white h-[500px] overflow-auto shadow-inner">
              {transpileError ? (
                <div className="p-4 text-red-600">
                  Error en la conversión: {transpileError}
                </div>
              ) : (
                <iframe
                  srcDoc={transpiledHtml}
                  title="Output"
                  className="w-full h-full"
                ></iframe>
              )}
            </div>
          </div>
        </div>

        {/* Collapsible Transpiled HTML */}
        <div className="mt-8">
          <button
            onClick={() => setShowTranspiled(!showTranspiled)}
            className="flex items-center space-x-2 text-gray-300 hover:text-orange-500 transition-colors focus:outline-none"
          >
            <span>Mostrar código HTML transpiliado</span>
            {showTranspiled ? (
              <AiOutlineUp className="w-5 h-5" />
            ) : (
              <AiOutlineDown className="w-5 h-5" />
            )}
          </button>

          {showTranspiled && (
            <div className="mt-4 rounded-xl overflow-hidden shadow-2xl bg-gray-950/50 backdrop-blur-sm border border-gray-800/50">
              <div className="bg-gray-950/80 border-b border-gray-800">
                <div className="px-4 py-3 bg-gray-900/80">
                  <span className="text-gray-300 text-sm font-medium">salida.html</span>
                </div>
              </div>
              <div className="bg-gray-900/50 flex">
                <LineNumbers count={transpiledHtml.split('\n').length} />
                <CodeEditor 
                  code={transpileError ? 'Error en la conversión' : transpiledHtml}
                  readOnly={true}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}