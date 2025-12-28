// app/playground/page.tsx
'use client';

import { useState, useEffect, useMemo } from 'react';
import { EsHTMLTranspiler } from 'html-es';
import CodeEditor from '@/components/CodeEditor';
import LineNumbers from '@/components/LineNumbers';
import {
  AiOutlineDown,
  AiOutlineUp,
  AiOutlineCopy,
  AiOutlineDownload,
  AiOutlineClear,
  AiOutlineZoomIn,
  AiOutlineZoomOut
} from 'react-icons/ai';
import {
  Monitor,
  Tablet,
  Smartphone,
  Save,
  FileCode,
  Zap,
  AlertCircle,
  CheckCircle,
  Keyboard,
  X
} from 'lucide-react';
import TagQuickReference from '@/components/TagQuickReference';
import { Nav } from '@/components/Nav';

// Code templates
const TEMPLATES = {
  blank: {
    name: 'En Blanco',
    code: `<eshtml idioma="es">
  <cabecera>
    <título>Mi Página</título>
  </cabecera>
  <cuerpo>
    <e1>¡Empieza aquí!</e1>
    <p>Escribe tu código EsHTML...</p>
  </cuerpo>
</eshtml>`
  },
  welcome: {
    name: 'Bienvenida',
    code: `<eshtml idioma="es">
  <cabecera>
    <título>Mi Página</título>
  </cabecera>
  <cuerpo>
    <encabezado>
      <e1>¡Hola Mundo!</e1>
    </encabezado>

    <sección clase="contenido">
      <p>Este es un ejemplo de EsHTML</p>
    </sección>
  </cuerpo>
</eshtml>`
  },
  form: {
    name: 'Formulario',
    code: `<eshtml idioma="es">
  <cabecera>
    <título>Formulario de Contacto</título>
  </cabecera>
  <cuerpo>
    <e1>Contáctanos</e1>
    <formulario método="post" acción="/enviar">
      <div>
        <etiqueta para="nombre">Nombre:</etiqueta>
        <entrada tipo="texto" id="nombre" nombre="nombre" requerido>
      </div>
      <div>
        <etiqueta para="correo">Email:</etiqueta>
        <entrada tipo="texto" id="correo" nombre="correo" requerido>
      </div>
      <div>
        <etiqueta para="mensaje">Mensaje:</etiqueta>
        <áreatexto id="mensaje" nombre="mensaje" filas="5"></áreatexto>
      </div>
      <botón tipo="enviar">Enviar</botón>
    </formulario>
  </cuerpo>
</eshtml>`
  },
  table: {
    name: 'Tabla',
    code: `<eshtml idioma="es">
  <cabecera>
    <título>Tabla de Datos</título>
  </cabecera>
  <cuerpo>
    <e1>Calificaciones</e1>
    <tabla>
      <encabezadot>
        <ft>
          <et>Estudiante</et>
          <et>Materia</et>
          <et>Nota</et>
        </ft>
      </encabezadot>
      <cuerpot>
        <ft>
          <ct>Ana García</ct>
          <ct>Matemáticas</ct>
          <ct>95</ct>
        </ft>
        <ft>
          <ct>Juan López</ct>
          <ct>Historia</ct>
          <ct>88</ct>
        </ft>
      </cuerpot>
    </tabla>
  </cuerpo>
</eshtml>`
  },
  portfolio: {
    name: 'Portafolio',
    code: `<eshtml idioma="es">
  <cabecera>
    <título>Mi Portafolio</título>
  </cabecera>
  <cuerpo>
    <encabezado>
      <e1>Juan Desarrollador</e1>
      <p>Desarrollador Web Frontend</p>
    </encabezado>

    <principal>
      <sección>
        <e2>Sobre Mí</e2>
        <p>Apasionado por crear experiencias web increíbles.</p>
      </sección>

      <sección>
        <e2>Proyectos</e2>
        <artículo>
          <e3>Proyecto 1</e3>
          <p>Una aplicación web moderna...</p>
        </artículo>
      </sección>
    </principal>

    <pie>
      <p>&copy; 2024 Mi Portafolio</p>
    </pie>
  </cuerpo>
</eshtml>`
  }
};

// Function to extract title from HTML
function extractTitleFromHTML(html: string): string {
  const titleMatch = html.match(/<title[^>]*>([^<]*)<\/title>/i);
  return titleMatch ? titleMatch[1].trim() : 'EsHTML Preview';
}

export default function Playground() {
  const [eshtmlCode, setEshtmlCode] = useState('');
  const [transpiledHtml, setTranspiledHtml] = useState('');
  const [showTranspiled, setShowTranspiled] = useState(false);
  const [transpileError, setTranspileError] = useState('');
  const [pageTitle, setPageTitle] = useState('EsHTML Preview');
  const [showSidebar, setShowSidebar] = useState(false);
  const [fontSize, setFontSize] = useState(14);
  const [previewMode, setPreviewMode] = useState<'desktop' | 'tablet' | 'mobile'>('desktop');
  const [showShortcuts, setShowShortcuts] = useState(false);
  const [autoSaveEnabled, setAutoSaveEnabled] = useState(true);
  const [lastSaved, setLastSaved] = useState<Date | null>(null);
  const transpiler = useMemo(() => new EsHTMLTranspiler(), []);

  // Load saved code on mount
  useEffect(() => {
    const saved = localStorage.getItem('eshtml-playground-code');
    if (saved) {
      setEshtmlCode(saved);
    } else {
      setEshtmlCode(TEMPLATES.welcome.code);
    }
  }, []);

  // Auto-save to localStorage
  useEffect(() => {
    if (autoSaveEnabled && eshtmlCode) {
      const timer = setTimeout(() => {
        localStorage.setItem('eshtml-playground-code', eshtmlCode);
        setLastSaved(new Date());
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [eshtmlCode, autoSaveEnabled]);

  // Transpile code
  useEffect(() => {
    try {
      const result = transpiler.transpile(eshtmlCode);
      setTranspiledHtml(result);
      setTranspileError('');

      const extractedTitle = extractTitleFromHTML(result);
      setPageTitle(extractedTitle);
    } catch (error: unknown) {
      setTranspileError(error instanceof Error ? error.message : String(error));
      setTranspiledHtml('');
      setPageTitle('EsHTML Preview');
    }
  }, [eshtmlCode, transpiler]);

  const handleTemplateChange = (template: keyof typeof TEMPLATES | '') => {
    if (template && TEMPLATES[template as keyof typeof TEMPLATES]) {
      setEshtmlCode(TEMPLATES[template as keyof typeof TEMPLATES].code);
    }
  };

  const handleCopyCode = () => {
    navigator.clipboard.writeText(eshtmlCode);
  };

  const handleCopyHTML = () => {
    navigator.clipboard.writeText(transpiledHtml);
  };

  const handleDownload = (content: string, filename: string) => {
    const blob = new Blob([content], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleClear = () => {
    if (confirm('¿Estás seguro de que quieres limpiar todo el código?')) {
      setEshtmlCode('');
    }
  };

  const handleFormat = () => {
    // Basic formatting - add proper indentation
    const lines = eshtmlCode.split('\n');
    let indentLevel = 0;
    const formatted = lines.map(line => {
      const trimmed = line.trim();
      if (trimmed.startsWith('</')) {
        indentLevel = Math.max(0, indentLevel - 1);
      }
      const formatted = '  '.repeat(indentLevel) + trimmed;
      if (trimmed.startsWith('<') && !trimmed.startsWith('</') && !trimmed.endsWith('/>') && !trimmed.includes('</')) {
        indentLevel++;
      }
      return formatted;
    }).join('\n');
    setEshtmlCode(formatted);
  };

  const getPreviewWidth = () => {
    switch (previewMode) {
      case 'mobile': return '375px';
      case 'tablet': return '768px';
      default: return '100%';
    }
  };

  return (
    <div className="min-h-screen bg-[#111827]">
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
        <div className="lg:hidden fixed inset-0 bg-gray-900/50 z-40" onClick={() => setShowSidebar(false)} />
      )}

      {/* Sidebar */}
      <div className={`lg:block ${showSidebar ? 'block' : 'hidden'} fixed lg:fixed left-0 top-16 h-full w-64 bg-gray-900/95 backdrop-blur-sm border-r border-gray-800/50 overflow-y-auto z-40`}>
        <TagQuickReference />
      </div>

      {/* Keyboard Shortcuts Modal */}
      {showShortcuts && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4" onClick={() => setShowShortcuts(false)}>
          <div className="bg-gray-900 rounded-xl border border-gray-800 max-w-md w-full p-6" onClick={(e) => e.stopPropagation()}>
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <Keyboard className="w-5 h-5" />
                Atajos de Teclado
              </h3>
              <button onClick={() => setShowShortcuts(false)} className="text-gray-400 hover:text-white">
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between text-gray-300">
                <span>Copiar código</span>
                <kbd className="px-2 py-1 bg-gray-800 rounded">Ctrl+C</kbd>
              </div>
              <div className="flex justify-between text-gray-300">
                <span>Pegar código</span>
                <kbd className="px-2 py-1 bg-gray-800 rounded">Ctrl+V</kbd>
              </div>
              <div className="flex justify-between text-gray-300">
                <span>Formato automático</span>
                <kbd className="px-2 py-1 bg-gray-800 rounded">Ctrl+Shift+F</kbd>
              </div>
              <div className="flex justify-between text-gray-300">
                <span>Guardar</span>
                <kbd className="px-2 py-1 bg-gray-800 rounded">Ctrl+S</kbd>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Main Content */}
      <main className="lg:ml-64 pt-16">
        <div className="relative max-w-7xl mx-auto px-4 py-4 lg:py-8">
          {/* Header with Controls */}
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 mb-6">
            <div>
              <h1 className="text-2xl lg:text-4xl font-bold text-white flex items-center gap-2">
                <Zap className="w-6 h-6 lg:w-8 lg:h-8 text-orange-500" />
                Área de Práctica EsHTML
              </h1>
              {lastSaved && autoSaveEnabled && (
                <p className="text-xs text-gray-400 mt-1 flex items-center gap-1">
                  <Save className="w-3 h-3" />
                  Guardado automáticamente {lastSaved.toLocaleTimeString()}
                </p>
              )}
            </div>

            {/* Template Selector */}
            <div className="flex flex-wrap gap-2">
              <select
                value=""
                onChange={(e) => {
                  handleTemplateChange(e.target.value);
                  e.target.value = ''; // Reset after selection
                }}
                className="bg-gray-800 text-gray-300 px-3 py-2 rounded-lg border border-gray-700 hover:border-orange-500 transition-colors text-sm"
              >
                <option value="">📋 Plantillas</option>
                {Object.entries(TEMPLATES).map(([key, { name }]) => (
                  <option key={key} value={key}>{name}</option>
                ))}
              </select>

              <button
                onClick={() => setShowShortcuts(true)}
                className="bg-gray-800 text-gray-300 px-3 py-2 rounded-lg border border-gray-700 hover:border-orange-500 transition-colors text-sm flex items-center gap-2"
                title="Atajos de teclado"
              >
                <Keyboard className="w-4 h-4" />
                <span className="hidden sm:inline">Atajos</span>
              </button>
            </div>
          </div>

          {/* Toolbar */}
          <div className="flex flex-wrap gap-2 mb-4 p-3 bg-gray-900/50 rounded-lg border border-gray-800">
            <button
              onClick={handleFormat}
              className="flex items-center gap-2 px-3 py-2 bg-gray-800 text-gray-300 rounded-lg hover:bg-orange-500 hover:text-white transition-colors text-sm"
              title="Formatear código"
            >
              <FileCode className="w-4 h-4" />
              <span className="hidden sm:inline">Formatear</span>
            </button>

            <button
              onClick={handleCopyCode}
              className="flex items-center gap-2 px-3 py-2 bg-gray-800 text-gray-300 rounded-lg hover:bg-orange-500 hover:text-white transition-colors text-sm"
              title="Copiar código EsHTML"
            >
              <AiOutlineCopy className="w-4 h-4" />
              <span className="hidden sm:inline">Copiar</span>
            </button>

            <button
              onClick={() => handleDownload(eshtmlCode, 'codigo.eshtml')}
              className="flex items-center gap-2 px-3 py-2 bg-gray-800 text-gray-300 rounded-lg hover:bg-orange-500 hover:text-white transition-colors text-sm"
              title="Descargar código EsHTML"
            >
              <AiOutlineDownload className="w-4 h-4" />
              <span className="hidden sm:inline">Descargar</span>
            </button>

            <button
              onClick={handleClear}
              className="flex items-center gap-2 px-3 py-2 bg-gray-800 text-gray-300 rounded-lg hover:bg-red-500 hover:text-white transition-colors text-sm"
              title="Limpiar código"
            >
              <AiOutlineClear className="w-4 h-4" />
              <span className="hidden sm:inline">Limpiar</span>
            </button>

            <div className="flex-1"></div>

            {/* Font Size Controls */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => setFontSize(Math.max(10, fontSize - 2))}
                className="p-2 bg-gray-800 text-gray-300 rounded-lg hover:bg-orange-500 hover:text-white transition-colors"
                title="Reducir tamaño de fuente"
              >
                <AiOutlineZoomOut className="w-4 h-4" />
              </button>
              <span className="text-gray-400 text-xs">{fontSize}px</span>
              <button
                onClick={() => setFontSize(Math.min(24, fontSize + 2))}
                className="p-2 bg-gray-800 text-gray-300 rounded-lg hover:bg-orange-500 hover:text-white transition-colors"
                title="Aumentar tamaño de fuente"
              >
                <AiOutlineZoomIn className="w-4 h-4" />
              </button>
            </div>

            {/* Auto-save Toggle */}
            <label className="flex items-center gap-2 px-3 py-2 bg-gray-800 rounded-lg cursor-pointer hover:bg-gray-700 transition-colors">
              <input
                type="checkbox"
                checked={autoSaveEnabled}
                onChange={(e) => setAutoSaveEnabled(e.target.checked)}
                className="w-4 h-4"
              />
              <span className="text-gray-300 text-sm hidden sm:inline">Auto-guardar</span>
            </label>
          </div>

          {/* Status Bar */}
          <div className="mb-4 p-3 bg-gray-900/50 rounded-lg border border-gray-800 flex items-center justify-between">
            <div className="flex items-center gap-3">
              {transpileError ? (
                <div className="flex items-center gap-2 text-red-400 text-sm">
                  <AlertCircle className="w-4 h-4" />
                  <span>Error de validación</span>
                </div>
              ) : (
                <div className="flex items-center gap-2 text-green-400 text-sm">
                  <CheckCircle className="w-4 h-4" />
                  <span>Código válido</span>
                </div>
              )}
              <span className="text-gray-500">|</span>
              <span className="text-gray-400 text-sm">{eshtmlCode.split('\n').length} líneas</span>
              <span className="text-gray-500">|</span>
              <span className="text-gray-400 text-sm">{eshtmlCode.length} caracteres</span>
            </div>

            {/* Preview Mode Selector */}
            <div className="flex gap-1">
              <button
                onClick={() => setPreviewMode('desktop')}
                className={`p-2 rounded-lg transition-colors ${previewMode === 'desktop' ? 'bg-orange-500 text-white' : 'bg-gray-800 text-gray-400 hover:bg-gray-700'}`}
                title="Vista escritorio"
              >
                <Monitor className="w-4 h-4" />
              </button>
              <button
                onClick={() => setPreviewMode('tablet')}
                className={`p-2 rounded-lg transition-colors ${previewMode === 'tablet' ? 'bg-orange-500 text-white' : 'bg-gray-800 text-gray-400 hover:bg-gray-700'}`}
                title="Vista tablet"
              >
                <Tablet className="w-4 h-4" />
              </button>
              <button
                onClick={() => setPreviewMode('mobile')}
                className={`p-2 rounded-lg transition-colors ${previewMode === 'mobile' ? 'bg-orange-500 text-white' : 'bg-gray-800 text-gray-400 hover:bg-gray-700'}`}
                title="Vista móvil"
              >
                <Smartphone className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {/* Editor Container */}
            <div className="rounded-xl overflow-hidden shadow-2xl bg-gray-950/50 backdrop-blur-sm border border-gray-800/50">
              <div className="bg-gray-950/80 border-b border-gray-800">
                <div className="px-4 py-3 bg-gray-900/80 w-full flex justify-between items-center">
                  <span className="text-gray-300 text-sm font-medium">📝 entrada.eshtml</span>
                  <div className="flex gap-2">
                    <button
                      onClick={handleCopyCode}
                      className="text-gray-400 hover:text-orange-500 transition-colors p-1"
                      title="Copiar código"
                    >
                      <AiOutlineCopy className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
              <div className="bg-gray-900/50">
                <div className="flex h-[400px] lg:h-[500px]" style={{ fontSize: `${fontSize}px` }}>
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
              <div className="bg-gray-950/80 border-b border-gray-800 px-4 py-3">
                <div className="flex items-center space-x-2">
                  <div className="flex space-x-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                  </div>
                  <div className="ml-4 bg-gray-900/80 rounded-md px-3 py-1.5 flex-1">
                    <span className="text-gray-400 text-xs truncate">{pageTitle}</span>
                  </div>
                </div>
              </div>
              <div className="bg-white h-[400px] lg:h-[500px] overflow-auto shadow-inner flex justify-center">
                {transpileError ? (
                  <div className="p-6 w-full">
                    <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                      <div className="flex items-start gap-3">
                        <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                        <div>
                          <h3 className="text-red-800 font-semibold mb-1">Error de Transpilación</h3>
                          <p className="text-red-700 text-sm">{transpileError}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div style={{ width: getPreviewWidth(), transition: 'width 0.3s' }} className="bg-white">
                    <iframe
                      srcDoc={transpiledHtml}
                      title={pageTitle}
                      className="w-full h-full border-0"
                    ></iframe>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Collapsible Transpiled HTML */}
          <div className="mt-6 lg:mt-8">
            <button
              onClick={() => setShowTranspiled(!showTranspiled)}
              className="flex items-center space-x-2 text-gray-300 hover:text-orange-500 transition-colors focus:outline-none mb-3"
            >
              <span className="font-medium">💻 Código HTML transpiliado</span>
              {showTranspiled ? (
                <AiOutlineUp className="w-5 h-5" />
              ) : (
                <AiOutlineDown className="w-5 h-5" />
              )}
            </button>

            {showTranspiled && (
              <div className="rounded-xl overflow-hidden shadow-2xl bg-gray-950/50 backdrop-blur-sm border border-gray-800/50">
                <div className="bg-gray-950/80 border-b border-gray-800">
                  <div className="px-4 py-3 bg-gray-900/80 flex justify-between items-center">
                    <span className="text-gray-300 text-sm font-medium">📄 salida.html</span>
                    <div className="flex gap-2">
                      <button
                        onClick={handleCopyHTML}
                        className="text-gray-400 hover:text-orange-500 transition-colors p-1 flex items-center gap-1 text-xs"
                        title="Copiar HTML"
                      >
                        <AiOutlineCopy className="w-4 h-4" />
                        <span>Copiar</span>
                      </button>
                      <button
                        onClick={() => handleDownload(transpiledHtml, 'salida.html')}
                        className="text-gray-400 hover:text-orange-500 transition-colors p-1 flex items-center gap-1 text-xs"
                        title="Descargar HTML"
                      >
                        <AiOutlineDownload className="w-4 h-4" />
                        <span>Descargar</span>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-900/50 flex h-[300px] lg:h-[400px]" style={{ fontSize: `${fontSize}px` }}>
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
    </div>
  );
}
