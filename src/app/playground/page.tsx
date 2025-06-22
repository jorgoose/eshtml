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
  const [showSidebar, setShowSidebar] = useState(false);
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
      <Nav 
        referenceButton={
          <button
            onClick={() => setShowSidebar(!showSidebar)}
            className="text-gray-300 hover:text-orange-500 p-2 rounded-md transition-colors"
            title="Referencia"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </button>
        }
      />
      
      {/* Mobile Sidebar Overlay */}
      {showSidebar && (
        <div className="lg:hidden fixed inset-0 bg-black/50 z-40" onClick={() => setShowSidebar(false)} />
      )}

      {/* Sidebar */}
      <div className={`fixed lg:static lg:block z-50 ${showSidebar ? 'block' : 'hidden'}`}>
        <TagQuickReference />
      </div>

      {/* Main Content */}
      <main className="lg:ml-64 pt-16">
        <div className="relative max-w-7xl mx-auto px-4 py-8 lg:py-12">
          <h1 className="hidden lg:block text-3xl lg:text-4xl font-bold text-white mb-6 lg:mb-8 lg:ml-0 ml-16">
            Área de Práctica EsHTML
          </h1>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
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
                <div className="flex h-[400px] lg:h-[500px]">
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
                    <span className="text-gray-400 text-xs truncate max-w-[200px] lg:max-w-none">{pageTitle}</span>
                  </div>
                </div>
              </div>
              {/* Browser Content */}
              <div className="bg-white h-[400px] lg:h-[500px] overflow-auto shadow-inner">
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
          <div className="mt-6 lg:mt-8">
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
                <div className="bg-gray-900/50 flex h-[300px] lg:h-[400px]">
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
    </>
  );
}