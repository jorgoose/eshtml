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

        <div className="flex-1 ml-64">
          <div className="max-w-[1200px] mx-auto">
            <div className="px-16 py-12">
              <article className="prose prose-invert max-w-4xl">
                <h1 className="text-4xl font-bold text-white mb-4">Documentación</h1>
                <p className="text-xl text-gray-300 leading-relaxed mb-8">
                  Bienvenido a la documentación de EsHTML. Aquí encontrarás todo lo que necesitas para empezar a usar EsHTML.
                </p>

                <div className="grid grid-cols-2 gap-8 not-prose">
                  <Link href="/docs/introduccion/que-es-eshtml" 
                    className="block p-6 bg-gray-900/50 rounded-lg border border-gray-800/50 hover:border-orange-500/50 transition-colors">
                    <h2 className="text-2xl font-semibold text-white mb-2">Introducción</h2>
                    <p className="text-gray-300">Aprende qué es EsHTML y cómo puede ayudarte a aprender desarrollo web.</p>
                  </Link>
                  
                  <Link href="/docs/referencia/etiquetas"
                    className="block p-6 bg-gray-900/50 rounded-lg border border-gray-800/50 hover:border-orange-500/50 transition-colors">
                    <h2 className="text-2xl font-semibold text-white mb-2">Referencia</h2>
                    <p className="text-gray-300">Consulta la documentación detallada de etiquetas y atributos.</p>
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