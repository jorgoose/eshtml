import Link from 'next/link';
import { Nav } from '@/components/Nav';
import { DocsSidebar } from '@/components/DocsSidebar';
import { ChevronRight, ExternalLink, Package, Code, Heart } from 'lucide-react';

export default function HerramientasPage() {
  return (
    <div className="min-h-screen bg-[#111827]">
      <Nav />
      <div className="flex pt-16">
        <DocsSidebar activePath="/docs/herramientas" />

        <div className="flex-1 md:ml-64">
          <div className="max-w-[1200px] mx-auto">
            <div className="px-4 md:px-16 py-8 md:py-12">
              {/* Breadcrumb */}
              <div className="flex items-center text-sm text-gray-400 mb-8">
                <Link href="/docs" className="hover:text-white">Docs</Link>
                <ChevronRight className="w-4 h-4 mx-2" />
                <span className="text-white">Herramientas</span>
              </div>

              <article className="prose prose-invert max-w-4xl">
                <h1 className="text-4xl font-bold text-white mb-4">Herramientas</h1>
                <p className="text-xl text-gray-300 leading-relaxed mb-12">
                  Descubre las herramientas disponibles para trabajar con EsHTML y mejorar tu experiencia de desarrollo.
                </p>

                {/* Tools Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 not-prose">
                  {/* NPM Package */}
                  <div className="bg-gray-900/50 rounded-lg border border-gray-800/50 p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <Package className="w-8 h-8 text-orange-400" />
                      <h2 className="text-2xl font-semibold text-white">Paquete NPM</h2>
                    </div>
                    <p className="text-gray-300 mb-4">
                      El transpilador oficial de EsHTML a HTML está disponible como paquete NPM para uso en proyectos Node.js.
                    </p>
                    <div className="space-y-3">
                      <div className="bg-gray-800/50 rounded p-3">
                        <code className="text-orange-400">npm install html-es</code>
                      </div>
                      <div className="flex gap-2">
                        <a
                          href="https://www.npmjs.com/package/html-es"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors"
                        >
                          Ver en NPM
                          <ExternalLink size={16} />
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* VSCode Extension */}
                  <div className="bg-gray-900/50 rounded-lg border border-gray-800/50 p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <Code className="w-8 h-8 text-blue-400" />
                      <h2 className="text-2xl font-semibold text-white">Extensión VSCode</h2>
                    </div>
                    <p className="text-gray-300 mb-4">
                      Extensión para Visual Studio Code que proporciona soporte completo para EsHTML con resaltado de sintaxis y autocompletado.
                    </p>
                    <div className="space-y-3">
                      <div className="bg-gray-800/50 rounded p-3">
                        <span className="text-gray-400 text-sm">💡 Propuesta futura</span>
                      </div>
                      <div className="flex gap-2">
                        <button
                          disabled
                          className="inline-flex items-center gap-2 px-4 py-2 bg-gray-600 text-gray-400 rounded-md cursor-not-allowed"
                        >
                          En evaluación
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Additional Tools Section */}
                <div className="mt-12">
                  <h2 className="text-2xl font-semibold text-white mb-6">Otras Herramientas</h2>
                  <div className="bg-gray-900/50 rounded-lg border border-gray-800/50 p-6">
                    <p className="text-gray-300 mb-4">
                      Estamos trabajando en expandir el ecosistema de herramientas para EsHTML. Si tienes ideas para herramientas adicionales, ¡nos encantaría escucharte!
                    </p>
                  </div>
                </div>

                {/* Contributing Section */}
                <div className="mt-12">
                  <div className="bg-gradient-to-r from-orange-500/10 to-blue-500/10 rounded-lg border border-orange-500/20 p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <Heart className="w-6 h-6 text-orange-400" />
                      <h2 className="text-2xl font-semibold text-white">¿Te gusta EsHTML?</h2>
                    </div>
                    <p className="text-gray-300 mb-4">
                      EsHTML es un proyecto de código abierto. Si te gusta lo que estamos construyendo, 
                      considera contribuir al proyecto o compartirlo con otros desarrolladores.
                    </p>
                    <Link
                      href="/docs/proyecto"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-orange-600 hover:bg-orange-700 text-white rounded-lg transition-colors"
                    >
                      Contribuir al proyecto
                      <ExternalLink size={16} />
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