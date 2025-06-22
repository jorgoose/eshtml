// src/app/docs/introduccion/aprendizaje-y-practica/page.tsx
import Link from 'next/link';
import { ChevronLeft, ChevronRight, BookOpen, Play } from 'lucide-react';
import { Nav } from '@/components/Nav';
import { DocsSidebar } from '@/components/DocsSidebar';

export default function AprendizajePracticaPage() {
  return (
    <div className="min-h-screen bg-[#111827]">
      <Nav />
      <div className="flex pt-16">
        <DocsSidebar activePath="/docs/introduccion/aprendizaje-y-practica" />

        {/* Remove fixed margin on mobile */}
        <div className="flex-1 md:ml-64">
          <div className="max-w-[1200px] mx-auto">
            {/* Responsive padding */}
            <div className="px-4 md:px-16 py-8 md:py-12 mt-12 md:mt-0">
              {/* Scrollable breadcrumbs */}
              <div className="flex items-center text-sm text-gray-400 mb-8 overflow-x-auto">
                <Link href="/docs" className="hover:text-white whitespace-nowrap">Docs</Link>
                <ChevronRight className="w-4 h-4 mx-2 flex-shrink-0" />
                <Link href="/docs/introduccion" className="hover:text-white whitespace-nowrap">Introducción</Link>
                <ChevronRight className="w-4 h-4 mx-2 flex-shrink-0" />
                <span className="text-white whitespace-nowrap">Aprendizaje y Práctica</span>
              </div>

              <article className="prose prose-invert max-w-4xl">
                <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Aprendizaje y Práctica</h1>
                <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-8 md:mb-12">
                  Hay dos formas principales de empezar a aprender y practicar con EsHTML.
                </p>

                {/* Stack grid on mobile */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 not-prose">
                  {/* Tutorial Section */}
                  <Link href="/tutorial" 
                    className="group block rounded-xl overflow-hidden border border-gray-800/50 hover:border-orange-500/50 transition-colors">
                    <div className="aspect-video relative bg-gray-900/50 flex items-center justify-center">
                      <BookOpen className="w-24 h-24 text-orange-400 opacity-80 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <div className="p-4 md:p-6 bg-gray-900/50">
                      <h2 className="text-xl md:text-2xl font-semibold text-white mb-2">Tutorial Interactivo</h2>
                      <p className="text-gray-300 mb-4">
                        Una serie de lecciones paso a paso que te guiarán a través de los conceptos básicos de EsHTML.
                      </p>
                      <ul className="space-y-2 text-gray-300">
                        <li className="flex items-start">
                          <span className="text-orange-500 mr-2">•</span>
                          <span>Aprende los fundamentos paso a paso</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-orange-500 mr-2">•</span>
                          <span>Ejercicios prácticos interactivos</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-orange-500 mr-2">•</span>
                          <span>Verifica tu progreso</span>
                        </li>
                      </ul>
                    </div>
                  </Link>

                  {/* Playground Section */}
                  <Link href="/playground" 
                    className="group block rounded-xl overflow-hidden border border-gray-800/50 hover:border-orange-500/50 transition-colors">
                    <div className="aspect-video relative bg-gray-900/50 flex items-center justify-center">
                      <Play className="w-24 h-24 text-blue-400 opacity-80 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <div className="p-4 md:p-6 bg-gray-900/50">
                      <h2 className="text-xl md:text-2xl font-semibold text-white mb-2">Playground</h2>
                      <p className="text-gray-300 mb-4">
                        Un espacio para experimentar libremente con EsHTML y ver los resultados en tiempo real.
                      </p>
                      <ul className="space-y-2 text-gray-300">
                        <li className="flex items-start">
                          <span className="text-orange-500 mr-2">•</span>
                          <span>Editor en vivo con vista previa</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-orange-500 mr-2">•</span>
                          <span>Traducción automática a HTML</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-orange-500 mr-2">•</span>
                          <span>Comparte tu código</span>
                        </li>
                      </ul>
                    </div>
                  </Link>
                </div>

                {/* Navigation with responsive spacing */}
                <div className="mt-8 md:mt-16 border-t border-gray-800/50 pt-6 md:pt-8 flex justify-between">
                  <Link 
                    href="/docs/introduccion/por-que-eshtml"
                    className="text-orange-500 hover:text-orange-400 flex items-center gap-1"
                  >
                    <ChevronLeft className="w-4 h-4" /> ¿Por qué EsHTML?
                  </Link>
                  <Link 
                    href="/docs/referencia/etiquetas"
                    className="text-orange-500 hover:text-orange-400 flex items-center gap-1"
                  >
                    Referencia de Etiquetas <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}