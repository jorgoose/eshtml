// src/app/tutorial/page.tsx
'use client';

import Link from 'next/link';
import { Nav } from '@/components/Nav';
import { ChevronRight } from 'lucide-react';

const tutorialContent = {
  1: {
    title: "Introducción a EsHTML",
    description: "Fundamentos y configuración inicial",
    lessons: [
      { id: "1-1", title: "¿Qué es EsHTML?", href: "/tutorial/introduccion/que-es", description: "Comprende los conceptos básicos de EsHTML" },
      { id: "1-2", title: "¿Por qué EsHTML?", href: "/tutorial/introduccion/por-que", description: "Beneficios para desarrolladores hispanohablantes" },
      { id: "1-3", title: "Configuración", href: "/tutorial/introduccion/configuracion", description: "Prepara tu entorno de desarrollo" }
    ]
  },
  2: {
    title: "Sintaxis Básica",
    description: "Elementos fundamentales y estructura",
    lessons: [
      { id: "2-1", title: "Elementos y Etiquetas", href: "/tutorial/sintaxis/elementos", description: "Estructura básica de elementos EsHTML" },
      { id: "2-2", title: "Tu Primer Documento", href: "/tutorial/sintaxis/primer-documento", description: "Crea tu primera página en EsHTML" }
    ]
  },
  3: {
    title: "Trabajando con Atributos",
    description: "Personalización de elementos",
    lessons: [
      { id: "3-1", title: "Conceptos de Atributos", href: "/tutorial/atributos/conceptos", description: "Entiende qué son los atributos" },
      { id: "3-2", title: "Atributos Comunes", href: "/tutorial/atributos/comunes", description: "Atributos más utilizados" },
      { id: "3-3", title: "Ejercicios Prácticos", href: "/tutorial/atributos/ejercicios", description: "Practica el uso de atributos" }
    ]
  },
  4: {
    title: "Estructura y Anidación",
    description: "Organización jerárquica de elementos",
    lessons: [
      { id: "4-1", title: "Anidación Básica", href: "/tutorial/estructura/anidacion", description: "Aprende a anidar elementos correctamente" },
      { id: "4-2", title: "Layouts", href: "/tutorial/estructura/layouts", description: "Crea estructuras de página complejas" }
    ]
  },
  5: {
    title: "Elementos Comunes",
    description: "Componentes esenciales para páginas web",
    lessons: [
      { id: "5-1", title: "Texto y Títulos", href: "/tutorial/elementos/texto", description: "Formateo de texto y encabezados" },
      { id: "5-2", title: "Enlaces e Imágenes", href: "/tutorial/elementos/multimedia", description: "Trabajar con contenido multimedia" },
      { id: "5-3", title: "Listas y Tablas", href: "/tutorial/elementos/listas-tablas", description: "Organización de datos" }
    ]
  },
  6: {
    title: "Formularios",
    description: "Interacción con usuarios",
    lessons: [
      { id: "6-1", title: "Estructura de Formularios", href: "/tutorial/formularios/estructura", description: "Crear formularios básicos" },
      { id: "6-2", title: "Campos de Entrada", href: "/tutorial/formularios/campos", description: "Tipos de inputs y sus usos" },
      { id: "6-3", title: "Validación", href: "/tutorial/formularios/validacion", description: "Validación de datos de formulario" }
    ]
  },
  7: {
    title: "Estilos y Presentación",
    description: "Mejora visual de tu contenido",
    lessons: [
      { id: "7-1", title: "Estilos Básicos", href: "/tutorial/estilos/basicos", description: "Introducción a CSS con EsHTML" },
      { id: "7-2", title: "Hojas de Estilo", href: "/tutorial/estilos/css", description: "Trabajar con archivos CSS externos" }
    ]
  },
  8: {
    title: "Temas Avanzados",
    description: "Conceptos y prácticas profesionales",
    lessons: [
      { id: "8-1", title: "HTML Semántico", href: "/tutorial/avanzado/semantica", description: "Uso de elementos semánticos" },
      { id: "8-2", title: "Accesibilidad", href: "/tutorial/avanzado/accesibilidad", description: "Crear contenido accesible" },
      { id: "8-3", title: "Mejores Prácticas", href: "/tutorial/avanzado/mejores-practicas", description: "Optimización y mantenimiento" }
    ]
  }
};

export default function TutorialIntroPage() {
  return (
    <div className="min-h-screen bg-[#111827]">
      <Nav />
      <div className="flex pt-16">
        {/* Remove md:ml-64 and center content */}
        <div className="flex-1">
          <div className="max-w-[1000px] mx-auto">
            <div className="px-6 md:px-8 py-12 md:py-16">
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-6 text-center">
                Tutorial Interactivo de EsHTML
              </h1>
              <p className="text-lg text-gray-300 mb-12 text-center max-w-2xl mx-auto">
                Aprende a crear páginas web usando etiquetas y atributos en español a través de nuestras lecciones interactivas.
              </p>

              <div className="space-y-12 max-w-4xl mx-auto">
                {/* Rest of the content remains the same */}
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