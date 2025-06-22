import Link from 'next/link';
import { Nav } from '@/components/Nav';
import { DocsSidebar } from '@/components/DocsSidebar';
import { ChevronRight, Code, Tag, Settings, BookOpen } from 'lucide-react';

export default function ReferenciaPage() {
  return (
    <div className="min-h-screen bg-[#111827]">
      <Nav />
      <div className="flex pt-16">
        <DocsSidebar activePath="/docs/referencia" />

        <div className="flex-1 md:ml-64">
          <div className="max-w-[1200px] mx-auto">
            <div className="px-4 md:px-16 py-8 md:py-12">
              {/* Breadcrumb */}
              <div className="flex items-center text-sm text-gray-400 mb-8">
                <Link href="/docs" className="hover:text-white">Docs</Link>
                <ChevronRight className="w-4 h-4 mx-2" />
                <span className="text-white">Referencia</span>
              </div>

              <article className="prose prose-invert max-w-4xl">
                <h1 className="text-4xl font-bold text-white mb-4">Referencia EsHTML</h1>
                <p className="text-xl text-gray-300 leading-relaxed mb-12">
                  Una guía completa de todos los elementos, atributos y sintaxis de EsHTML para consulta rápida.
                </p>

                {/* Reference Sections Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 not-prose">
                  {/* Tags Reference */}
                  <Link href="/docs/referencia/etiquetas" 
                    className="group block rounded-xl overflow-hidden border border-gray-800/50 hover:border-orange-500/50 transition-colors bg-gray-900/50">
                    <div className="p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <Tag className="w-8 h-8 text-orange-400" />
                        <h2 className="text-xl font-semibold text-white">Etiquetas</h2>
                      </div>
                      <p className="text-gray-300 mb-4">
                        Todas las etiquetas disponibles en EsHTML, organizadas por categorías y con ejemplos de uso.
                      </p>
                      <div className="flex items-center text-orange-400 group-hover:text-orange-300 transition-colors">
                        <span className="text-sm font-medium">Explorar etiquetas</span>
                        <ChevronRight className="w-4 h-4 ml-2" />
                      </div>
                    </div>
                  </Link>

                  {/* Attributes Reference */}
                  <Link href="/docs/referencia/atributos" 
                    className="group block rounded-xl overflow-hidden border border-gray-800/50 hover:border-orange-500/50 transition-colors bg-gray-900/50">
                    <div className="p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <Settings className="w-8 h-8 text-blue-400" />
                        <h2 className="text-xl font-semibold text-white">Atributos</h2>
                      </div>
                      <p className="text-gray-300 mb-4">
                        Referencia completa de atributos HTML traducidos al español para usar con EsHTML.
                      </p>
                      <div className="flex items-center text-blue-400 group-hover:text-blue-300 transition-colors">
                        <span className="text-sm font-medium">Ver atributos</span>
                        <ChevronRight className="w-4 h-4 ml-2" />
                      </div>
                    </div>
                  </Link>

                  {/* Syntax Reference */}
                  <Link href="/docs/referencia/sintaxis" 
                    className="group block rounded-xl overflow-hidden border border-gray-800/50 hover:border-orange-500/50 transition-colors bg-gray-900/50">
                    <div className="p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <Code className="w-8 h-8 text-green-400" />
                        <h2 className="text-xl font-semibold text-white">Sintaxis</h2>
                      </div>
                      <p className="text-gray-300 mb-4">
                        Guía de sintaxis y reglas de escritura para crear documentos EsHTML válidos.
                      </p>
                      <div className="flex items-center text-green-400 group-hover:text-green-300 transition-colors">
                        <span className="text-sm font-medium">Aprender sintaxis</span>
                        <ChevronRight className="w-4 h-4 ml-2" />
                      </div>
                    </div>
                  </Link>
                </div>

                {/* Quick Reference Section */}
                <div className="mt-12">
                  <h2 className="text-2xl font-bold text-white mb-6">Referencia Rápida</h2>
                  <div className="bg-gray-900/50 rounded-lg border border-gray-800/50 p-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-3">Etiquetas Básicas</h3>
                        <div className="space-y-2 text-sm">
                          <div className="flex justify-between">
                            <code className="text-orange-400">&lt;html&gt;</code>
                            <span className="text-gray-300">Documento principal</span>
                          </div>
                          <div className="flex justify-between">
                            <code className="text-orange-400">&lt;cabeza&gt;</code>
                            <span className="text-gray-300">Información del documento</span>
                          </div>
                          <div className="flex justify-between">
                            <code className="text-orange-400">&lt;cuerpo&gt;</code>
                            <span className="text-gray-300">Contenido visible</span>
                          </div>
                          <div className="flex justify-between">
                            <code className="text-orange-400">&lt;e1&gt;</code>
                            <span className="text-gray-300">Encabezado principal</span>
                          </div>
                          <div className="flex justify-between">
                            <code className="text-orange-400">&lt;p&gt;</code>
                            <span className="text-gray-300">Párrafo de texto</span>
                          </div>
                        </div>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-3">Atributos Comunes</h3>
                        <div className="space-y-2 text-sm">
                          <div className="flex justify-between">
                            <code className="text-blue-400">clase</code>
                            <span className="text-gray-300">Clases CSS</span>
                          </div>
                          <div className="flex justify-between">
                            <code className="text-blue-400">id</code>
                            <span className="text-gray-300">Identificador único</span>
                          </div>
                          <div className="flex justify-between">
                            <code className="text-blue-400">estilo</code>
                            <span className="text-gray-300">Estilos inline</span>
                          </div>
                          <div className="flex justify-between">
                            <code className="text-blue-400">título</code>
                            <span className="text-gray-300">Título del elemento</span>
                          </div>
                          <div className="flex justify-between">
                            <code className="text-blue-400">requerido</code>
                            <span className="text-gray-300">Campo obligatorio</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Additional Resources */}
                <div className="mt-12">
                  <h2 className="text-2xl font-bold text-white mb-6">Recursos Adicionales</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Link href="/playground" 
                      className="group block rounded-lg border border-gray-800/50 hover:border-orange-500/50 transition-colors bg-gray-900/50 p-4">
                      <div className="flex items-center gap-3">
                        <BookOpen className="w-6 h-6 text-orange-400" />
                        <div>
                          <h3 className="text-white font-medium">Área de Pruebas</h3>
                          <p className="text-gray-400 text-sm">Experimenta con EsHTML en tiempo real</p>
                        </div>
                      </div>
                    </Link>
                    <Link href="/tutorial" 
                      className="group block rounded-lg border border-gray-800/50 hover:border-orange-500/50 transition-colors bg-gray-900/50 p-4">
                      <div className="flex items-center gap-3">
                        <BookOpen className="w-6 h-6 text-green-400" />
                        <div>
                          <h3 className="text-white font-medium">Tutorial Interactivo</h3>
                          <p className="text-gray-400 text-sm">Aprende EsHTML paso a paso</p>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
