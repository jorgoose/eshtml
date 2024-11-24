// src/app/docs/page.tsx
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import CodeEditor from '@/components/CodeEditor';
import LineNumbers from '@/components/LineNumbers';
import { Nav } from '@/components/Nav';
import { DocsSidebar } from '@/components/DocsSidebar';

const content = {
  title: 'EsHTML',
  description: `EsHTML hace que aprender los conceptos fundamentales de HTML sea más accesible para hablantes de español al permitirte escribir páginas web usando palabras en español puro. 
    Escribes tu código usando EsHTML con palabras familiares, y nuestras herramientas te ayudan a traducirlo al HTML que los navegadores entienden.
    
    EsHTML está diseñado como una herramienta educativa para comprender los elementos básicos de HTML - como estructurar documentos, usar etiquetas, y organizar contenido - todo esto en Español.`,
  example: {
    eshtml: `<!-- Un ejemplo simple en EsHTML -->
<título>Mi Página</título>
<cuerpo>
  <encabezado>
    <e1>¡Hola Mundo!</e1>
  </encabezado>
  
  <sección clase="contenido">
    <p>
      Este es un ejemplo de EsHTML
    </p>
  </sección>
</cuerpo>`,
    html: `<!-- La traducción a HTML de la EsHTML -->
<title>Mi Página</title>
<body>
  <header>
    <h1>¡Hola Mundo!</h1>
  </header>
  
  <section class="contenido">
    <p>
      Este es un ejemplo de EsHTML
    </p>
  </section>
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
        <DocsSidebar activePath="/docs/introduccion/que-es-eshtml" />

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
                <span className="text-gray-400">Introducción</span>
                <ChevronRight className="w-4 h-4 mx-2" />
                <span className="text-white">¿Qué es EsHTML?</span>
              </div>

              {/* Content */}
              <article className="prose prose-invert max-w-4xl"> {/* Constrain content width */}
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