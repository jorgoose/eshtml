// src/app/docs/introduccion/por-que-eshtml/page.tsx
import Link from 'next/link';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Nav } from '@/components/Nav';
import { DocsSidebar } from '@/components/DocsSidebar';

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
    description: `Aprendan conceptos web usando palabras que ya conocen
    Se concentren en entender la estructura y lógica de HTML
    Hagan una transición natural al HTML estándar cuando estén listos`
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
        <DocsSidebar activePath="/docs/introduccion/por-que-eshtml" />

        {/* Main content area - Remove fixed margin on mobile */}
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
                <span className="text-white whitespace-nowrap">¿Por qué EsHTML?</span>
              </div>

              <article className="prose prose-invert max-w-4xl">
                <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">{content.title}</h1>
                <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-8 md:mb-12">{content.description}</p>

                {/* Problem/Solution Section - Stack on mobile */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 not-prose mb-8 md:mb-12">
                  <div className="bg-gray-900/50 rounded-lg p-4 md:p-6 border border-gray-800/50">
                    <h2 className="text-xl md:text-2xl font-semibold text-white mb-4">{content.problem.title}</h2>
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
                  <div className="bg-gray-900/50 rounded-lg p-4 md:p-6 border border-gray-800/50">
                    <h2 className="text-xl md:text-2xl font-semibold text-white mb-4">{content.solution.title}</h2>
                    <p className="text-gray-300 mb-4">EsHTML permite que los estudiantes:</p>
                    <ul className="space-y-2 text-gray-300">
                      {content.solution.description.split('\n').map((point, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-orange-500 mr-2">•</span>
                          <span>{point.trim()}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Audiences Section - Stack on mobile */}
                <h2 className="text-xl md:text-2xl font-semibold text-white mb-4 md:mb-6">Para Quién Es EsHTML</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 not-prose mb-8 md:mb-12">
                  {content.audiences.map((audience) => (
                    <div key={audience.title} className="bg-gray-900/50 rounded-lg p-4 md:p-6 border border-gray-800/50">
                      <h3 className="text-lg md:text-xl font-semibold text-white mb-4">{audience.title}</h3>
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
                <div className="mt-8 md:mt-16 border-t border-gray-800/50 pt-6 md:pt-8 flex justify-between">
                  <Link 
                    href="/docs/introduccion/que-es-eshtml"
                    className="text-orange-500 hover:text-orange-400 flex items-center gap-1"
                  >
                    <ChevronLeft className="w-4 h-4" /> ¿Qué es EsHTML?
                  </Link>
                  <Link 
                    href="/docs/introduccion/aprendizaje-y-practica"
                    className="text-orange-500 hover:text-orange-400 flex items-center gap-1"
                  >
                    Aprendizaje y Práctica <ChevronRight className="w-4 h-4" />
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