// src/app/docs/introduccion/por-que-eshtml/page.tsx
import Link from 'next/link';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Nav } from '@/components/Nav';

// Import sidebar navigation from main docs
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

const content = {
  title: '¿Por qué EsHTML?',
  description: 'EsHTML busca eliminar la barrera del idioma en el aprendizaje inicial del desarrollo web, permitiendo que estudiantes hispanohablantes se enfoquen en los conceptos fundamentales.',
  problem: {
    title: 'El Problema',
    description: `Cuando estudiantes de habla hispana comienzan a aprender desarrollo web, se enfrentan a dos desafíos simultáneos:

    1. Aprender conceptos nuevos de programación web
    2. Entender terminología técnica en inglés

    Esta doble carga cognitiva hace que el proceso inicial sea innecesariamente complejo y puede desanimar a muchos estudiantes potenciales.`
  },
  solution: {
    title: 'Nuestra Solución',
    description: `EsHTML permite que los estudiantes:

    • Aprendan conceptos web usando palabras que ya conocen
    • Se concentren en entender la estructura y lógica de HTML
    • Hagan una transición natural al HTML estándar cuando estén listos`
  },
  benefits: [
    {
      title: 'Menos Frustración',
      description: 'Los estudiantes pueden concentrarse en aprender conceptos web sin la barrera adicional del idioma'
    },
    {
      title: 'Mejor Retención',
      description: 'Al usar términos familiares, los conceptos son más fáciles de entender y recordar'
    },
    {
      title: 'Transición Natural',
      description: 'La similitud estructural con HTML facilita el paso al estándar cuando sea necesario'
    }
  ],
  audiences: [
    {
      title: 'Estudiantes Principiantes',
      points: [
        'Aprende los conceptos básicos sin barreras de idioma',
        'Enfócate en la estructura y lógica de HTML',
        'Avanza gradualmente hacia HTML estándar'
      ]
    },
    {
      title: 'Profesores y Mentores',
      points: [
        'Enfócate en enseñar conceptos sin barreras lingüísticas',
        'Materiales educativos más efectivos en español',
        'Mejor participación de los estudiantes'
      ]
    },
    {
      title: 'Comunidad de Desarrollo',
      points: [
        'Herramienta adicional para estudiantes hispanohablantes',
        'Contribuye al ecosistema de herramientas educativas',
        'Código abierto y extensible para adaptación local'
      ]
    }
  ]
};

export default function PorQueEsHtmlPage() {
  return (
    <div className="min-h-screen bg-[#111827]">
      <Nav />
      <div className="flex pt-16">
        {/* Left sidebar - matches main docs */}
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

        {/* Main content area */}
        <div className="flex-1 ml-64">
          <div className="max-w-[1200px] mx-auto">
            <div className="px-16 py-12">
              {/* Breadcrumb */}
              <div className="flex items-center text-sm text-gray-400 mb-8">
                <Link href="/docs" className="hover:text-white">Docs</Link>
                <ChevronRight className="w-4 h-4 mx-2" />
                <Link href="/docs/introduccion" className="hover:text-white">Introducción</Link>
                <ChevronRight className="w-4 h-4 mx-2" />
                <span className="text-white">¿Por qué EsHTML?</span>
              </div>

              <article className="prose prose-invert max-w-4xl">
                <h1 className="text-4xl font-bold text-white mb-4">{content.title}</h1>
                <p className="text-xl text-gray-300 leading-relaxed mb-12">{content.description}</p>

                {/* Problem/Solution Section */}
                <div className="grid grid-cols-2 gap-8 not-prose mb-12">
                  <div className="bg-gray-900/50 rounded-lg p-6 border border-gray-800/50">
                    <h2 className="text-2xl font-semibold text-white mb-4">{content.problem.title}</h2>
                    <p className="text-gray-300 mb-4">
                      Cuando estudiantes de habla hispana comienzan a aprender desarrollo web, se enfrentan a dos desafíos simultáneos:
                    </p>
                    <ul className="space-y-2 text-gray-300">
                      <li className="flex items-start">
                        <span className="text-orange-500 mr-2">1.</span>
                        <span>Aprender conceptos nuevos de programación web</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-orange-500 mr-2">2.</span>
                        <span>Entender terminología técnica en inglés</span>
                      </li>
                    </ul>
                    <p className="text-gray-300 mt-4">
                      Esta doble carga cognitiva hace que el proceso inicial sea innecesariamente complejo y puede desanimar a muchos estudiantes potenciales.
                    </p>
                  </div>
                  <div className="bg-gray-900/50 rounded-lg p-6 border border-gray-800/50">
                    <h2 className="text-2xl font-semibold text-white mb-4">{content.solution.title}</h2>
                    <p className="text-gray-300 mb-4">EsHTML permite que los estudiantes:</p>
                    <ul className="space-y-2 text-gray-300">
                      <li className="flex items-start">
                        <span className="text-orange-500 mr-2">•</span>
                        <span>Aprendan conceptos web usando palabras que ya conocen</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-orange-500 mr-2">•</span>
                        <span>Se concentren en entender la estructura y lógica de HTML</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-orange-500 mr-2">•</span>
                        <span>Hagan una transición natural al HTML estándar cuando estén listos</span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Audiences Section */}
                <h2 className="text-2xl font-semibold text-white mb-6">Para Quién Es EsHTML</h2>
                <div className="grid grid-cols-3 gap-6 not-prose mb-12">
                  {content.audiences.map((audience) => (
                    <div key={audience.title} className="bg-gray-900/50 rounded-lg p-6 border border-gray-800/50">
                      <h3 className="text-xl font-semibold text-white mb-4">{audience.title}</h3>
                      <ul className="space-y-2 text-gray-300">
                        {audience.points.map((point, index) => (
                          <li key={index} className="flex items-start">
                            <span className="text-orange-500 mr-2">•</span>
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                {/* Navigation */}
                <div className="mt-16 border-t border-gray-800/50 pt-8 flex justify-between">
                  <Link 
                    href="/docs/introduccion"
                    className="text-orange-500 hover:text-orange-400 flex items-center gap-1"
                  >
                    <ChevronLeft className="w-4 h-4" /> Introducción
                  </Link>
                  <Link 
                    href="/docs/introduccion/primeros-pasos"
                    className="text-orange-500 hover:text-orange-400 flex items-center gap-1"
                  >
                    Primeros Pasos <ChevronRight className="w-4 h-4" />
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