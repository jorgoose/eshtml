// src/app/docs/page.tsx
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import CodeEditor from '../../../components/CodeEditor';
import LineNumbers from '../../../components/LineNumbers';
import { Nav } from '../../../components/Nav';

// Sidebar navigation structure
const docsNavigation = {
  introduccion: {
    title: 'Introducción',
    items: [
      { title: '¿Qué es EsHTML?', href: '/docs/introduccion' },
      { title: '¿Por qué EsHTML?', href: '/docs/introduccion/por-que-eshtml' },
      { title: 'Primeros pasos', href: '/docs/introduccion/primeros-pasos' },
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
      { title: 'Integración Build Tools', href: '/docs/herramientas/build-tools' },
    ]
  },
  proyecto: {
    title: 'Proyecto',
    items: [
      { title: 'Contribuir', href: '/docs/proyecto/contribuir' },
      { title: 'Hoja de Ruta', href: '/docs/proyecto/roadmap' },
      { title: 'Comunidad', href: '/docs/proyecto/comunidad' },
    ]
  }
};

// Main content for the introduction page
const content = {
  title: 'EsHTML',
  description: `EsHTML es una herramienta que permite escribir HTML usando etiquetas y atributos en español. 
    Al escribir el código, EsHTML lo convierte automáticamente a HTML estándar, permitiendo que funcione 
    en cualquier navegador o herramienta que soporte HTML.`,
  example: {
    eshtml: `<titulo>Mi Página</titulo>
<cuerpo>
  <encabezado>
    <h1>¡Hola Mundo!</h1>
  </encabezado>
</cuerpo>`,
    html: `<title>Mi Página</title>
<body>
  <header>
    <h1>¡Hola Mundo!</h1>
  </header>
</body>`
  }
};

function CodeExampleDocs({ eshtml, html }: { eshtml: string; html: string }) {
  return (
    <div className="grid grid-cols-2 gap-4 not-prose">
      {/* EsHTML */}
      <div className="rounded-xl overflow-hidden shadow-2xl bg-gray-950/50 backdrop-blur-sm border border-gray-800/50">
        <div className="bg-gray-950/80 border-b border-gray-800">
          <div className="px-4 py-3 bg-gray-900/80">
            <span className="text-gray-300 text-sm font-medium">entrada.eshtml</span>
          </div>
        </div>
        <div className="bg-gray-900/50 flex">
          <LineNumbers count={eshtml.split('\n').length} />
          <CodeEditor code={eshtml} readOnly={true} />
        </div>
      </div>

      {/* HTML */}
      <div className="rounded-xl overflow-hidden shadow-2xl bg-gray-950/50 backdrop-blur-sm border border-gray-800/50">
        <div className="bg-gray-950/80 border-b border-gray-800">
          <div className="px-4 py-3 bg-gray-900/80">
            <span className="text-gray-300 text-sm font-medium">salida.html</span>
          </div>
        </div>
        <div className="bg-gray-900/50 flex">
          <LineNumbers count={html.split('\n').length} />
          <CodeEditor code={html} readOnly={true} />
        </div>
      </div>
    </div>
  );
}

export default function DocsPage() {
  return (
    <div className="min-h-screen bg-[#111827]">
      <Nav />
      <div className="flex pt-16"> {/* Add pt-16 to account for navbar height */}
        {/* Left sidebar - adjust top position */}
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
          <div className="max-w-[1200px] mx-auto"> {/* Center content with max width */}
            <div className="px-16 py-12"> {/* Consistent padding */}
              {/* Breadcrumb */}
              <div className="flex items-center text-sm text-gray-400 mb-8">
                <Link href="/docs" className="hover:text-white">
                  Docs
                </Link>
                <ChevronRight className="w-4 h-4 mx-2" />
                <span className="text-white">Introducción</span>
              </div>

              {/* Content */}
              <article className="prose prose-invert max-w-3xl"> {/* Constrain content width */}
                <h1 className="text-4xl font-bold text-white mb-4">{content.title}</h1>
                <p className="text-xl text-gray-300 leading-relaxed">{content.description}</p>

                <h2 className="text-2xl font-semibold text-white mt-16 mb-6">Ejemplo básico</h2>
                <CodeExampleDocs eshtml={content.example.eshtml} html={content.example.html} />
              </article>

              {/* Page navigation */}
              <div className="mt-16 max-w-3xl border-t border-gray-800/50 pt-8">
                <div></div>
                <Link 
                  href="/docs/introduccion/por-que-eshtml"
                  className="text-orange-500 hover:text-orange-400 flex items-center gap-1"
                >
                  ¿Por qué EsHTML? <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}