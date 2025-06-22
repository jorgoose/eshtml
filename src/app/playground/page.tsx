// app/playground/page.tsx
'use client';

import { useState, useEffect, useMemo } from 'react';
import { EsHTMLTranspiler } from 'html-es';
import CodeEditor from '@/components/CodeEditor';
import LineNumbers from '@/components/LineNumbers';
import { AiOutlineDown, AiOutlineUp } from 'react-icons/ai';
import TagQuickReference from '@/components/TagQuickReference';
import { Nav } from '@/components/Nav';

// Function to extract title from HTML
function extractTitleFromHTML(html: string): string {
  const titleMatch = html.match(/<title[^>]*>([^<]*)<\/title>/i);
  return titleMatch ? titleMatch[1].trim() : 'EsHTML Preview';
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
  const [pageTitle, setPageTitle] = useState('EsHTML Preview');
  const transpiler = useMemo(() => new EsHTMLTranspiler(), []);

  useEffect(() => {
    try {
      const result = transpiler.transpile(eshtmlCode);
      setTranspiledHtml(result);
      setTranspileError('');
      
      // Extract and set the page title
      const extractedTitle = extractTitleFromHTML(result);
      setPageTitle(extractedTitle);
    } catch (error: unknown) {
      setTranspileError(error instanceof Error ? error.message : String(error));
      setTranspiledHtml('');
      setPageTitle('EsHTML Preview');
    }
  }, [eshtmlCode, transpiler]);

  return (
    <>
      <Nav />
      <div className="flex gap-8 pt-16 min-h-screen h-[calc(100vh-4rem)]">
        <TagQuickReference />
        <main className="flex-1">
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
                        <span className="text-gray-400 text-xs">{pageTitle}</span>
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
                        title={pageTitle}
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
        </main>
      </div>
    </>
  );
}