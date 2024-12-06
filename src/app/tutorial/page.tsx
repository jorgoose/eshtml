// src/app/tutorial/page.tsx
'use client';

import Link from 'next/link';
import { Nav } from '@/components/Nav';
import { ChevronRight } from 'lucide-react';

const tutorialContent = {
  1: {
    title: "Introducción a EsHTML",
    description: "Conceptos fundamentales y visión general",
    lessons: [
      { id: "1-1", title: "¿Qué es HTML?", href: "/tutorial/introduccion/que-es-html", description: "Aprende qué es HTML y su propósito en la web" },
      { id: "1-2", title: "¿Qué es EsHTML?", href: "/tutorial/introduccion/que-es-eshtml", description: "Descubre EsHTML y sus beneficios" },
      { id: "1-3", title: "Tu Primer Documento EsHTML", href: "/tutorial/introduccion/primer-documento", description: "Crea y entiende tu primer código EsHTML" },
      { id: "1-4", title: "Estructura Básica de un Documento", href: "/tutorial/introduccion/estructura-basica", description: "Desglosa la estructura esencial de una página" },
      { id: "1-5", title: "Elementos y Etiquetas en HTML", href: "/tutorial/introduccion/elementos-y-etiquetas", description: "Comprende cómo funcionan las etiquetas y elementos" }
    ]
  },
  2: {
    title: "Elementos en EsHTML",
    description: "Conociendo los elementos básicos",
    lessons: [
      { id: "2-1", title: "Encabezado Principal (e1)", href: "/tutorial/elementos/e1", description: "Tu primer elemento - el encabezado principal" },
      { id: "2-2", title: "Párrafos (p)", href: "/tutorial/elementos/p", description: "Escribiendo texto con párrafos" },
      { id: "2-3", title: "Más Encabezados (e2-e6)", href: "/tutorial/elementos/encabezados", description: "Usando diferentes niveles de encabezados" }
    ]
  },
  3: {
    title: "Formateando el Texto",
    description: "Mejorando la presentación del contenido",
    lessons: [
      { id: "3-1", title: "Énfasis y Estilos de Texto", href: "/tutorial/formatos/enfasis-y-estilos", description: "Aplica negritas, cursivas y más" },
      { id: "3-2", title: "Listas", href: "/tutorial/formatos/listas", description: "Crea listas ordenadas y desordenadas" },
      { id: "3-3", title: "Citas y Código", href: "/tutorial/formatos/citas-y-codigo", description: "Incluye citas y fragmentos de código" }
    ]
  },
  4: {
    title: "Semántica y Organización",
    description: "Estructurando y dando significado al contenido",
    lessons: [
      { id: "4-1", title: "Secciones y Artículos", href: "/tutorial/semantica/secciones-y-articulos", description: "Divide tu contenido de forma lógica" },
      { id: "4-2", title: "Encapsulando Contenido", href: "/tutorial/semantica/encapsular", description: "Usa divs y spans eficazmente" },
      { id: "4-3", title: "Elementos Semánticos", href: "/tutorial/semantica/elementos-semanticos", description: "Mejora la accesibilidad y SEO" }
    ]
  },
  5: {
    title: "Tablas y Formularios",
    description: "Interactuando y presentando datos",
    lessons: [
      { id: "5-1", title: "Creando Tablas", href: "/tutorial/avanzado/tablas", description: "Organiza datos en formato tabular" },
      { id: "5-2", title: "Formularios Básicos", href: "/tutorial/avanzado/formularios-basicos", description: "Recopila información del usuario" },
      { id: "5-3", title: "Elementos de Formulario", href: "/tutorial/avanzado/elementos-formulario", description: "Utiliza distintos tipos de campos" }
    ]
  },
  6: {
    title: "Buenas Prácticas",
    description: "Escribiendo código limpio y eficiente",
    lessons: [
      { id: "6-1", title: "Comentarios y Legibilidad", href: "/tutorial/practicas/comentarios-legibilidad", description: "Mantén tu código entendible" },
      { id: "6-2", title: "Validación y Corrección", href: "/tutorial/practicas/validacion-correccion", description: "Asegura que tu código es válido" },
      { id: "6-3", title: "Organización del Código", href: "/tutorial/practicas/organizacion", description: "Estructura tu proyecto adecuadamente" }
    ]
  },
  7: {
    title: "Conclusión",
    description: "Resumen y siguientes pasos",
    lessons: [
      { id: "7-1", title: "Resumen de Conceptos Clave", href: "/tutorial/conclusion/resumen", description: "Reflexiona sobre lo aprendido" },
      { id: "7-2", title: "Recursos Adicionales", href: "/tutorial/conclusion/recursos", description: "Continúa tu aprendizaje" }
    ]
  }
};

export default function TutorialIntroPage() {
  return (
    <div className="min-h-screen bg-[#111827]">
      <Nav />
      <div className="flex pt-16">
        <div className="flex-1">
          <div className="max-w-[1000px] mx-auto">
            <div className="px-6 md:px-8 py-12 md:py-16">
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-6 text-center">
                Tutorial Interactivo de EsHTML
              </h1>
              <p className="text-lg text-gray-300 mb-12 text-center max-w-2xl mx-auto">
                Aprende a crear páginas web utilizando etiquetas y atributos en español con este tutorial paso a paso.
              </p>

              <div className="space-y-12 max-w-4xl mx-auto">
                {Object.entries(tutorialContent).map(([key, category]) => (
                  <div key={key} className="space-y-4">
                    <div className="border-b border-gray-800 pb-2">
                      <h2 className="text-2xl font-bold text-white">
                        {key}. {category.title}
                      </h2>
                      <p className="text-gray-400 mt-1">{category.description}</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pl-4">
                      {category.lessons.map((lesson) => (
                        <Link key={lesson.id} href={lesson.href}>
                          <div className="p-4 bg-gray-800/50 rounded-lg hover:bg-gray-700/50 transition-colors border border-gray-700/50 hover:border-orange-500/50">
                            <div className="flex items-center justify-between">
                              <h3 className="text-lg font-semibold text-white">{lesson.title}</h3>
                              <ChevronRight className="w-5 h-5 text-gray-400" />
                            </div>
                            <p className="text-gray-300 mt-2 text-sm">
                              {lesson.description}
                            </p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}