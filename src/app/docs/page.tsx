// src/app/docs/page.tsx - Main docs landing
import Link from 'next/link';
import { Nav } from '@/components/Nav';
import { DocsSidebar } from '@/components/DocsSidebar';

export default function DocsPage() {
  return (
    <div className="min-h-screen bg-[#111827]">
      <Nav />
      <div className="flex pt-16">
        <DocsSidebar activePath="/docs" />

        {/* Remove fixed margin-left on mobile with md:ml-64 */}
        <div className="flex-1 md:ml-64">
          <div className="max-w-[1200px] mx-auto">
            {/* Adjust padding for mobile */}
            <div className="px-4 md:px-16 py-8 md:py-12 mt-12 md:mt-0">
              <article className="prose prose-invert max-w-4xl">
                <h1 className="text-4xl font-bold text-white mb-4">Documentación</h1>
                <p className="text-xl text-gray-300 leading-relaxed mb-8">
                  Bienvenido a la documentación de EsHTML. Aquí encontrarás todo lo que necesitas para empezar a usar EsHTML.
                </p>

                {/* Make grid 3 columns on desktop, single column on mobile */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 not-prose">
                  <Link href="/docs/introduccion/que-es-eshtml" 
                    className="block p-4 md:p-6 bg-gray-900/50 rounded-lg border border-gray-800/50 hover:border-orange-500/50 transition-colors">
                    <h2 className="text-xl md:text-2xl font-semibold text-white mb-2">Introducción</h2>
                    <p className="text-gray-300">Aprende qué es EsHTML y cómo puede ayudarte a aprender desarrollo web.</p>
                  </Link>
                  
                  <Link href="/docs/referencia"
                    className="block p-4 md:p-6 bg-gray-900/50 rounded-lg border border-gray-800/50 hover:border-orange-500/50 transition-colors">
                    <h2 className="text-xl md:text-2xl font-semibold text-white mb-2">Referencia</h2>
                    <p className="text-gray-300">Consulta la documentación detallada de etiquetas y atributos.</p>
                  </Link>

                  <Link href="/tutorial"
                    className="block p-4 md:p-6 bg-gray-900/50 rounded-lg border border-gray-800/50 hover:border-orange-500/50 transition-colors">
                    <h2 className="text-xl md:text-2xl font-semibold text-white mb-2">Tutorial Interactivo</h2>
                    <p className="text-gray-300">Sigue nuestro tutorial paso a paso para crear tu primera página web con EsHTML.</p>
                  </Link>

                  <Link href="/playground"
                    className="block p-4 md:p-6 bg-gray-900/50 rounded-lg border border-gray-800/50 hover:border-orange-500/50 transition-colors">
                    <h2 className="text-xl md:text-2xl font-semibold text-white mb-2">Playground</h2>
                    <p className="text-gray-300">Experimenta con EsHTML en tiempo real en nuestro playground interactivo.</p>
                  </Link>

                  <Link href="/docs/herramientas"
                    className="block p-4 md:p-6 bg-gray-900/50 rounded-lg border border-gray-800/50 hover:border-orange-500/50 transition-colors">
                    <h2 className="text-xl md:text-2xl font-semibold text-white mb-2">Herramientas</h2>
                    <p className="text-gray-300">Descubre el paquete NPM, extensiones de VSCode y otras herramientas para EsHTML.</p>
                  </Link>

                  <Link href="/docs/proyecto"
                    className="block p-4 md:p-6 bg-gray-900/50 rounded-lg border border-gray-800/50 hover:border-orange-500/50 transition-colors">
                    <h2 className="text-xl md:text-2xl font-semibold text-white mb-2">Proyecto</h2>
                    <p className="text-gray-300">Conoce más sobre el proyecto EsHTML, su estado actual y cómo contribuir.</p>
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