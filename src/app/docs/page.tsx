// src/app/docs/page.tsx - Main docs landing
import Link from 'next/link';
import { Nav } from '@/components/Nav';

const docsNavigation = {
  introduccion: {
    title: 'Introducción',
    items: [
      { title: '¿Qué es EsHTML?', href: '/docs/introduccion/que-es-eshtml' },
      { title: '¿Por qué EsHTML?', href: '/docs/introduccion/por-que-eshtml' },
      { title: 'Aprendizaje y Práctica', href: '/docs/introduccion/aprendizaje' }, 
    ]
  },
  referencia: {
    title: 'Referencia',
    items: [
      { title: 'Etiquetas', href: '/docs/referencia/etiquetas' },
      { title: 'Atributos', href: '/docs/referencia/atributos' },
      { title: 'Sintaxis', href: '/docs/referencia/sintaxis' },
    ]
  },
  herramientas: {
    title: 'Herramientas',
    items: [
      { title: 'Paquete NPM', href: '/docs/herramientas/npm' },
      { title: 'Extensión VS Code', href: '/docs/herramientas/vscode' },
    ]
  },
  proyecto: {
    title: 'Proyecto',
    items: [
      { title: 'Contribuir', href: '/docs/proyecto/contribuir' },
      { title: 'Comunidad', href: '/docs/proyecto/comunidad' },
    ]
  }
};

export default function DocsPage() {
  return (
    <div className="min-h-screen bg-[#111827]">
      <Nav />
      <div className="flex pt-16">
        {/* Left sidebar */}
        <div className="w-64 fixed top-16 bottom-0 bg-[#111827] border-r border-gray-800/40">
          <nav className="h-full px-8 py-6">
            {Object.entries(docsNavigation).map(([key, section]) => (
              <div key={key} className="mb-6">
                <h2 className="text-sm font-medium text-gray-400 uppercase tracking-wide mb-2">
                  {section.title}
                </h2>
                <ul className="space-y-1">
                  {section.items.map((item) => (
                    <li key={item.href}>
                      <Link 
                        href={item.href}
                        className="block px-2 py-1.5 text-gray-300 hover:text-white rounded hover:bg-gray-800/50 text-sm"
                      >
                        {item.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>

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