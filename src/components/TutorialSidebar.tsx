import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

interface TutorialSidebarProps {
  activePath: string;
}

const tutorialStructure = [
  {
    title: 'Introducción',
    path: '/tutorial/introduccion',
    lessons: [
      { title: '¿Qué es HTML?', path: '/tutorial/introduccion/que-es-html' },
      { title: '¿Qué es EsHTML?', path: '/tutorial/introduccion/que-es-eshtml' },
      { title: 'Tu Primer Documento', path: '/tutorial/introduccion/primer-documento' },
      { title: 'Estructura Básica', path: '/tutorial/introduccion/estructura-basica' },
      { title: 'Elementos y Etiquetas', path: '/tutorial/introduccion/elementos-y-etiquetas' },
    ]
  },
  {
    title: 'Elementos',
    path: '/tutorial/elementos',
    lessons: [
      { title: 'Encabezados', path: '/tutorial/elementos/encabezados' },
      { title: 'Párrafos', path: '/tutorial/elementos/p' },
      { title: 'Elemento E1', path: '/tutorial/elementos/e1' },
    ]
  },
  {
    title: 'Formatos',
    path: '/tutorial/formatos',
    lessons: [
      { title: 'Listas', path: '/tutorial/formatos/listas' },
      { title: 'Énfasis y Estilos', path: '/tutorial/formatos/enfasis-y-estilos' },
      { title: 'Citas y Código', path: '/tutorial/formatos/citas-y-codigo' },
    ]
  },
  {
    title: 'Semántica',
    path: '/tutorial/semantica',
    lessons: [
      { title: 'Secciones y Artículos', path: '/tutorial/semantica/secciones-y-articulos' },
      { title: 'Encapsulando Contenido', path: '/tutorial/semantica/encapsulando-contenido' },
      { title: 'Elementos Semánticos', path: '/tutorial/semantica/elementos-semanticos' },
    ]
  },
  {
    title: 'Tablas y Formularios',
    path: '/tutorial/tablas-y-formularios',
    lessons: [
      { title: 'Creando Tablas', path: '/tutorial/tablas-y-formularios/creando-tablas' },
      { title: 'Formularios Básicos', path: '/tutorial/tablas-y-formularios/formularios-basicos' },
      { title: 'Elementos de Formulario', path: '/tutorial/tablas-y-formularios/elementos-de-formulario' },
    ]
  },
  {
    title: 'Buenas Prácticas',
    path: '/tutorial/buenas-practicas',
    lessons: [
      { title: 'Comentarios y Legibilidad', path: '/tutorial/buenas-practicas/comentarios-legibilidad' },
      { title: 'Organización del Código', path: '/tutorial/buenas-practicas/organizacion-del-codigo' },
      { title: 'Validación y Corrección', path: '/tutorial/buenas-practicas/validacion-y-coreccion' },
    ]
  },
  {
    title: 'Conclusión',
    path: '/tutorial/conclusion',
    lessons: [
      { title: 'Resumen', path: '/tutorial/conclusion/resumen' },
      { title: 'Recursos', path: '/tutorial/conclusion/recursos' },
    ]
  }
];

export function TutorialSidebar({ activePath }: TutorialSidebarProps) {
  return (
    <div 
      className="fixed left-0 top-16 h-full w-64 bg-gray-900/95 backdrop-blur-sm border-r border-gray-800/50 overflow-y-auto z-40"
      style={{
        scrollbarWidth: 'thin',
        scrollbarColor: '#4B5563 #1F2937',
      }}
    >
      <style jsx>{`
        div::-webkit-scrollbar {
          width: 8px;
        }
        div::-webkit-scrollbar-track {
          background: rgba(31, 41, 55, 0.5);
        }
        div::-webkit-scrollbar-thumb {
          background: rgba(75, 85, 99, 0.6);
          border-radius: 4px;
        }
        div::-webkit-scrollbar-thumb:hover {
          background: rgba(107, 114, 128, 0.7);
        }
      `}</style>
      <div className="p-4 pb-8">
        <div className="mb-6">
          <Link 
            href="/tutorial" 
            className="text-lg font-semibold text-white hover:text-orange-400 transition-colors"
          >
            Tutorial EsHTML
          </Link>
        </div>
        
        <nav className="space-y-6">
          {tutorialStructure.map((section) => (
            <div key={section.path}>
              <div className="mb-3">
                <h3 className="text-sm font-medium text-gray-400 uppercase tracking-wider">
                  {section.title}
                </h3>
              </div>
              <ul className="space-y-1">
                {section.lessons.map((lesson) => {
                  const isActive = activePath === lesson.path;
                  return (
                    <li key={lesson.path}>
                      <Link
                        href={lesson.path}
                        className={`flex items-center px-3 py-2 text-sm rounded-md transition-colors ${
                          isActive
                            ? 'bg-orange-500/20 text-orange-400 border border-orange-500/30'
                            : 'text-gray-300 hover:text-white hover:bg-gray-800/50'
                        }`}
                      >
                        {isActive && (
                          <ChevronRight className="w-3 h-3 mr-2 flex-shrink-0" />
                        )}
                        <span className={isActive ? 'ml-0' : 'ml-5'}>
                          {lesson.title}
                        </span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </nav>
      </div>
    </div>
  );
} 