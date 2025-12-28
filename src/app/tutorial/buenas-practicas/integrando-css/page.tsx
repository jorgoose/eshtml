// src/app/tutorial/buenas-practicas/integrando-css/page.tsx
'use client';

import { useState, useMemo } from 'react';
import { TutorialLayout } from '@/components/TutorialLayout';
import CodeEditor from '@/components/CodeEditor';
import LineNumbers from '@/components/LineNumbers';
import Link from 'next/link';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { EsHTMLTranspiler } from 'html-es';

function CodeWithPreview({ code }: { code: string }) {
  const transpiler = useMemo(() => new EsHTMLTranspiler(), []);
  const html = useMemo(() => transpiler.transpile(code), [code, transpiler]);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
      <div className="rounded-xl overflow-hidden shadow-2xl bg-gray-950/50 backdrop-blur-sm border border-gray-800/50">
        <div className="bg-gray-950/80 border-b border-gray-800 px-4 py-3">
          <span className="text-gray-300 text-sm font-medium">EsHTML</span>
        </div>
        <div className="bg-gray-900/50 flex overflow-hidden h-[250px]">
          <LineNumbers count={code.split('\n').length} />
          <CodeEditor code={code} readOnly={true} />
        </div>
      </div>

      <div className="rounded-xl overflow-hidden shadow-2xl bg-gray-950/50 backdrop-blur-sm border border-gray-800/50">
        <div className="bg-gray-950/80 border-b border-gray-800 px-4 py-3">
          <span className="text-gray-300 text-sm font-medium">HTML</span>
        </div>
        <div className="bg-gray-900/50 flex overflow-hidden h-[250px]">
          <LineNumbers count={html.split('\n').length} />
          <CodeEditor code={html} readOnly={true} />
        </div>
      </div>

      <div className="rounded-xl overflow-hidden shadow-2xl bg-gray-950/50 backdrop-blur-sm border border-gray-800/50">
        <div className="bg-gray-950/80 border-b border-gray-800 px-4 py-3">
          <div className="flex items-center space-x-2">
            <div className="flex space-x-1.5">
              <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
            </div>
            <div className="ml-4 bg-gray-900/80 rounded-md px-3 py-1.5">
              <span className="text-gray-400 text-xs">Vista Previa</span>
            </div>
          </div>
        </div>
        <div className="bg-white h-[250px] overflow-auto shadow-inner">
          <iframe
            srcDoc={html}
            title="Preview"
            className="w-full h-full"
          />
        </div>
      </div>
    </div>
  );
}

export default function IntegrandoCSS() {
  const [exampleInline] = useState({
    eshtml: `<p estilo="color: blue; font-size: 20px;">
  Este texto es azul y grande
</p>`
  });

  const [exampleInternal] = useState({
    eshtml: `<eshtml idioma="es">
  <cabecera>
    <título>Ejemplo con CSS</título>
    <estilo>
      .destacado {
        color: blue;
        font-weight: bold;
      }
      .contenedor {
        padding: 20px;
        background-color: #f0f0f0;
      }
    </estilo>
  </cabecera>
  <cuerpo>
    <div clase="contenedor">
      <e1 clase="destacado">Título Azul</e1>
      <p>Contenido con fondo gris</p>
    </div>
  </cuerpo>
</eshtml>`
  });

  const [exampleExternal] = useState({
    eshtml: `<eshtml idioma="es">
  <cabecera>
    <título>Usando CSS Externo</título>
    <enlace relación="stylesheet" enlace="estilos.css">
  </cabecera>
  <cuerpo>
    <e1 clase="titulo-principal">Mi Sitio Web</e1>
    <p clase="texto-contenido">Contenido estilizado</p>
  </cuerpo>
</eshtml>`
  });

  return (
    <TutorialLayout activePath="/tutorial/buenas-practicas/integrando-css" lessonNumber={25} totalLessons={25}>
      <h1 className="text-3xl md:text-4xl font-bold text-white mb-6">
        Integrando CSS con EsHTML
      </h1>

      <div className="space-y-6">
        <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-700/50">
          <p className="text-lg text-gray-300">
            CSS (Hojas de Estilo en Cascada) es lo que hace que tus páginas web se vean bonitas.
            Mientras que EsHTML define la estructura y el contenido, CSS controla los colores,
            tamaños, disposición y apariencia visual. 🎨
          </p>
        </div>

        <div className="bg-orange-500/10 rounded-lg p-6 border border-orange-500/20">
          <h3 className="text-lg font-semibold text-white mb-2">📌 Importante</h3>
          <p className="text-gray-300 text-sm">
            Aunque escribas tu HTML en EsHTML, el CSS siempre se escribe en inglés porque CSS
            es un lenguaje separado. Lo que sí puedes hacer es usar las clases y atributos
            de EsHTML (<code className="text-orange-400">clase</code>, <code className="text-orange-400">id</code>, etc.)
            para aplicar estilos.
          </p>
        </div>

        <h2 className="text-2xl font-bold text-white mt-8 mb-4">
          Las Tres Formas de Añadir CSS
        </h2>

        <div className="space-y-6">
          <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700/50">
            <h3 className="text-xl font-semibold text-white mb-3">1. CSS en Línea (Inline)</h3>
            <p className="text-gray-300 mb-4">
              Usa el atributo <code className="text-orange-400">estilo</code> directamente en el elemento:
            </p>
            <CodeWithPreview code={exampleInline.eshtml} />
            <div className="mt-4 bg-orange-500/10 rounded p-3">
              <p className="text-gray-300 text-sm">
                ⚠️ No recomendado para proyectos grandes - dificulta el mantenimiento
              </p>
            </div>
          </div>

          <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700/50">
            <h3 className="text-xl font-semibold text-white mb-3">2. CSS Interno (Internal)</h3>
            <p className="text-gray-300 mb-4">
              Usa la etiqueta <code className="text-orange-400">&lt;estilo&gt;</code> dentro de <code className="text-orange-400">&lt;cabecera&gt;</code>:
            </p>
            <CodeWithPreview code={exampleInternal.eshtml} />
            <div className="mt-4 bg-green-500/10 rounded p-3">
              <p className="text-gray-300 text-sm">
                ✓ Bueno para páginas únicas o prototipos rápidos
              </p>
            </div>
          </div>

          <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700/50">
            <h3 className="text-xl font-semibold text-white mb-3">3. CSS Externo (External)</h3>
            <p className="text-gray-300 mb-4">
              Enlaza un archivo CSS externo con la etiqueta <code className="text-orange-400">&lt;enlace&gt;</code>:
            </p>
            <CodeWithPreview code={exampleExternal.eshtml} />
            <div className="mt-4 bg-green-500/10 rounded p-3">
              <p className="text-gray-300 text-sm">
                ✓ ✓ ✓ MEJOR PRÁCTICA - Reutilizable, mantenible, y cacheable
              </p>
            </div>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-white mt-8 mb-4">
          Usando el Atributo &quot;clase&quot;
        </h2>

        <p className="text-lg text-gray-300 mb-4">
          El atributo <code className="text-orange-400">clase</code> (que se convierte en <code className="text-orange-400">class</code> en HTML)
          es la forma más común de aplicar estilos CSS:
        </p>

        <div className="bg-gray-900 rounded-lg p-4 mb-4">
          <p className="text-gray-400 text-sm mb-2">EsHTML:</p>
          <code className="text-orange-400 text-sm">
            &lt;div clase=&quot;contenedor destacado&quot;&gt;Contenido&lt;/div&gt;
          </code>
          <p className="text-gray-400 text-sm mt-4 mb-2">CSS (en archivo estilos.css):</p>
          <pre className="text-green-400 text-sm">
{`.contenedor {
  max-width: 1200px;
  margin: 0 auto;
}

.destacado {
  background-color: yellow;
  padding: 10px;
}`}
          </pre>
        </div>

        <h2 className="text-2xl font-bold text-white mt-8 mb-4">
          Usando IDs
        </h2>

        <p className="text-lg text-gray-300 mb-4">
          Los IDs son únicos y se usan para elementos específicos:
        </p>

        <div className="bg-gray-900 rounded-lg p-4 mb-4">
          <p className="text-gray-400 text-sm mb-2">EsHTML:</p>
          <code className="text-orange-400 text-sm">
            &lt;encabezado id=&quot;cabecera-principal&quot;&gt;Mi Sitio&lt;/encabezado&gt;
          </code>
          <p className="text-gray-400 text-sm mt-4 mb-2">CSS:</p>
          <pre className="text-green-400 text-sm">
{`#cabecera-principal {
  background-color: navy;
  color: white;
  padding: 20px;
}`}
          </pre>
        </div>

        <div className="bg-orange-500/10 rounded-lg p-6 border border-orange-500/20">
          <h3 className="text-lg font-semibold text-white mb-2">⚖️ Clases vs IDs</h3>
          <div className="space-y-2 text-gray-300 text-sm">
            <p><strong>Clases</strong> (clase=&quot;...&quot;) - Pueden usarse múltiples veces, ideales para estilos reutilizables</p>
            <p><strong>IDs</strong> (id=&quot;...&quot;) - Deben ser únicos en la página, útiles para elementos específicos</p>
            <p><strong>Recomendación:</strong> Usa clases para estilizar, IDs para JavaScript y navegación por anclas</p>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-white mt-8 mb-4">
          Estructura Recomendada de Archivos
        </h2>

        <div className="bg-gray-900 rounded-lg p-4 mb-4">
          <pre className="text-gray-300 text-sm">
{`mi-proyecto/
├── index.html        (Transpilado desde tu EsHTML)
├── acerca.html
├── contacto.html
├── css/
│   ├── estilos.css   (Estilos principales)
│   └── responsive.css (Estilos para móviles)
├── imagenes/
│   └── logo.png
└── guiones/
    └── script.js`}
          </pre>
        </div>

        <h2 className="text-2xl font-bold text-white mt-8 mb-4">
          Ejemplo Completo
        </h2>

        <p className="text-lg text-gray-300 mb-4">
          Así se ve un proyecto completo con EsHTML y CSS:
        </p>

        <div className="space-y-4">
          <div className="bg-gray-900 rounded-lg p-4">
            <p className="text-gray-400 text-sm mb-2">📄 index.eshtml (Tu archivo fuente):</p>
            <pre className="text-orange-400 text-sm overflow-x-auto">
{`<eshtml idioma="es">
  <cabecera>
    <título>Mi Sitio Estilizado</título>
    <enlace relación="stylesheet" enlace="css/estilos.css">
  </cabecera>
  <cuerpo>
    <encabezado clase="cabecera-sitio">
      <e1>Bienvenido</e1>
    </encabezado>
    <principal clase="contenido-principal">
      <artículo clase="tarjeta">
        <e2>Título del Artículo</e2>
        <p>Contenido del artículo aquí...</p>
      </artículo>
    </principal>
  </cuerpo>
</eshtml>`}
            </pre>
          </div>

          <div className="bg-gray-900 rounded-lg p-4">
            <p className="text-gray-400 text-sm mb-2">🎨 css/estilos.css:</p>
            <pre className="text-green-400 text-sm overflow-x-auto">
{`.cabecera-sitio {
  background-color: #2c3e50;
  color: white;
  padding: 2rem;
  text-align: center;
}

.contenido-principal {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

.tarjeta {
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  padding: 1.5rem;
  margin-bottom: 1rem;
}`}
            </pre>
          </div>
        </div>

        <div className="bg-orange-500/10 rounded-lg p-6 border border-orange-500/20">
          <h3 className="text-lg font-semibold text-white mb-2">💡 Mejores Prácticas</h3>
          <ul className="text-gray-300 space-y-2 text-sm">
            <li>• Usa archivos CSS externos para proyectos reales (reutilizables y cacheables)</li>
            <li>• Nombra tus clases de forma descriptiva: <code className="text-orange-400">clase=&quot;botón-primario&quot;</code> no <code className="text-orange-400">clase=&quot;azul&quot;</code></li>
            <li>• Agrupa estilos relacionados en el mismo archivo CSS</li>
            <li>• Prefiere clases sobre IDs para estilos CSS</li>
            <li>• Mantén tu CSS organizado con comentarios y secciones</li>
            <li>• Considera usar metodologías como BEM para nombrar clases</li>
          </ul>
        </div>

        <h2 className="text-2xl font-bold text-white mt-8 mb-4">
          Siguientes Pasos
        </h2>

        <div className="space-y-3">
          <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700/50">
            <h3 className="text-lg font-semibold text-white mb-2">📚 Aprender CSS</h3>
            <p className="text-gray-300 text-sm">
              Ahora que sabes cómo integrar CSS con EsHTML, el siguiente paso es aprender CSS.
              Recursos recomendados: MDN Web Docs, CSS-Tricks, freeCodeCamp.
            </p>
          </div>

          <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700/50">
            <h3 className="text-lg font-semibold text-white mb-2">📱 CSS Responsive</h3>
            <p className="text-gray-300 text-sm">
              Aprende sobre media queries para hacer tu sitio adaptable a móviles y tablets.
            </p>
          </div>

          <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700/50">
            <h3 className="text-lg font-semibold text-white mb-2">🎨 Frameworks CSS</h3>
            <p className="text-gray-300 text-sm">
              Explora frameworks como Tailwind CSS, Bootstrap o Bulma para acelerar tu desarrollo.
            </p>
          </div>
        </div>

        <div className="mt-12 flex flex-col sm:flex-row justify-between gap-3">
          <Link
            href="/tutorial/buenas-practicas/organizacion-del-codigo"
            className="inline-flex items-center justify-center px-4 py-2 sm:px-6 sm:py-3 bg-gray-700 text-white font-semibold rounded-md hover:bg-gray-600 transition-colors text-sm sm:text-base"
          >
            <ChevronLeft className="mr-2 w-4 h-4 sm:w-5 sm:h-5" />
            <span>Anterior: Organización del Código</span>
          </Link>
          <Link
            href="/tutorial/conclusion/resumen"
            className="inline-flex items-center justify-center px-4 py-2 sm:px-6 sm:py-3 bg-orange-500 text-white font-semibold rounded-md hover:bg-orange-600 transition-colors text-sm sm:text-base"
          >
            <span>Siguiente: Resumen de Conceptos</span>
            <ChevronRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
          </Link>
        </div>
      </div>
    </TutorialLayout>
  );
}
