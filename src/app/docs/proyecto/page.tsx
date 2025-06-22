import Link from 'next/link';
import { Nav } from '@/components/Nav';
import { DocsSidebar } from '@/components/DocsSidebar';
import { ChevronRight, ExternalLink, Mail, Github, Heart } from 'lucide-react';

export default function ProyectoPage() {
  return (
    <div className="min-h-screen bg-[#111827]">
      <Nav />
      <div className="flex pt-16">
        <DocsSidebar activePath="/docs/proyecto" />

        <div className="flex-1 md:ml-64">
          <div className="max-w-[1200px] mx-auto">
            <div className="px-4 md:px-16 py-8 md:py-12">
              {/* Breadcrumb */}
              <div className="flex items-center text-sm text-gray-400 mb-8">
                <Link href="/docs" className="hover:text-white">Docs</Link>
                <ChevronRight className="w-4 h-4 mx-2" />
                <span className="text-white">Proyecto</span>
              </div>

              <article className="prose prose-invert max-w-4xl">
                <h1 className="text-4xl font-bold text-white mb-4">Proyecto EsHTML</h1>
                <p className="text-xl text-gray-300 leading-relaxed mb-12">
                  EsHTML es un proyecto educativo diseñado para hacer el desarrollo web más accesible para hablantes de español.
                </p>

                {/* Project Overview */}
                <div className="bg-gray-900/50 rounded-lg border border-gray-800/50 p-6 mb-8">
                  <h2 className="text-2xl font-semibold text-white mb-4">Sobre el Proyecto</h2>
                  <p className="text-gray-300 mb-4">
                    EsHTML es una herramienta educativa que permite escribir HTML usando palabras clave y atributos en español, 
                    eliminando la barrera del idioma inglés para aprender desarrollo web. El proyecto incluye un transpilador 
                    que convierte código EsHTML a HTML estándar.
                  </p>
                  <div className="flex items-center gap-2 text-orange-400">
                    <Heart className="w-5 h-5" />
                    <span className="text-sm">Proyecto de código abierto</span>
                  </div>
                </div>

                {/* Project Lead */}
                <div className="bg-gray-900/50 rounded-lg border border-gray-800/50 p-6 mb-8">
                  <h2 className="text-2xl font-semibold text-white mb-4">Líder del Proyecto</h2>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-16 h-16 bg-orange-500/20 rounded-full flex items-center justify-center">
                      <span className="text-2xl font-bold text-orange-400">LJ</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white">Logan Jorgensen</h3>
                      <p className="text-gray-300">Fundador y desarrollador principal</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <a
                      href="mailto:loganjorgensen@proton.me"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors"
                    >
                      <Mail size={16} />
                      Contactar
                    </a>
                    <a
                      href="https://github.com/jorgoose"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-md transition-colors"
                    >
                      <Github size={16} />
                      GitHub
                    </a>
                  </div>
                </div>

                {/* Project Status */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-gray-900/50 rounded-lg border border-gray-800/50 p-6">
                    <h3 className="text-xl font-semibold text-white mb-3">Estado Actual</h3>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span className="text-gray-300">Transpilador funcional</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span className="text-gray-300">Paquete NPM publicado</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                        <span className="text-gray-300">Documentación en progreso</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        <span className="text-gray-300">Extensión VSCode planificada</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-900/50 rounded-lg border border-gray-800/50 p-6">
                    <h3 className="text-xl font-semibold text-white mb-3">Tecnologías</h3>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <span className="text-orange-400">•</span>
                        <span className="text-gray-300">TypeScript</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-orange-400">•</span>
                        <span className="text-gray-300">Node.js</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-orange-400">•</span>
                        <span className="text-gray-300">Next.js (sitio web)</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-orange-400">•</span>
                        <span className="text-gray-300">Tailwind CSS</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Contributing */}
                <div className="bg-gray-900/50 rounded-lg border border-gray-800/50 p-6 mb-8">
                  <h2 className="text-2xl font-semibold text-white mb-4">Contribuir</h2>
                  <p className="text-gray-300 mb-4">
                    ¡Nos encantaría que contribuyas al proyecto EsHTML! Hay muchas formas de participar, 
                    desde reportar bugs hasta desarrollar nuevas características.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <h4 className="text-lg font-semibold text-white">Cómo Contribuir</h4>
                      <ul className="text-gray-300 space-y-1">
                        <li>• Reportar bugs o sugerir mejoras</li>
                        <li>• Mejorar la documentación</li>
                        <li>• Desarrollar nuevas características</li>
                        <li>• Crear ejemplos y tutoriales</li>
                      </ul>
                    </div>
                    <div className="space-y-2">
                      <h4 className="text-lg font-semibold text-white">Contacto</h4>
                      <p className="text-gray-300">
                        Para contribuciones o preguntas sobre el proyecto, 
                        contacta directamente a Logan Jorgensen:
                      </p>
                      <a
                        href="mailto:loganjorgensen@proton.me"
                        className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
                      >
                        <Mail size={16} />
                        loganjorgensen@proton.me
                      </a>
                    </div>
                  </div>
                </div>

                {/* Links */}
                <div className="flex gap-4">
                  <a
                    href="https://github.com/jorgoose/es-html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-gray-800 hover:bg-gray-700 text-white rounded-lg transition-colors"
                  >
                    <Github size={20} />
                    Ver en GitHub
                    <ExternalLink size={16} />
                  </a>
                  <a
                    href="https://www.npmjs.com/package/html-es"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-orange-600 hover:bg-orange-700 text-white rounded-lg transition-colors"
                  >
                    <ExternalLink size={20} />
                    Paquete NPM
                  </a>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 