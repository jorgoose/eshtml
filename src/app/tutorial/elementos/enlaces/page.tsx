// src/app/tutorial/elementos/enlaces/page.tsx
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
        <div className="bg-gray-900/50 flex overflow-hidden h-[200px]">
          <LineNumbers count={code.split('\n').length} />
          <CodeEditor code={code} readOnly={true} />
        </div>
      </div>

      <div className="rounded-xl overflow-hidden shadow-2xl bg-gray-950/50 backdrop-blur-sm border border-gray-800/50">
        <div className="bg-gray-950/80 border-b border-gray-800 px-4 py-3">
          <span className="text-gray-300 text-sm font-medium">HTML</span>
        </div>
        <div className="bg-gray-900/50 flex overflow-hidden h-[200px]">
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
        <div className="bg-white h-[200px] overflow-auto shadow-inner">
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

export default function Enlaces() {
  const [exampleBasic] = useState({
    eshtml: `<a enlace="https://www.ejemplo.com">Visita nuestro sitio</a>`
  });

  const [exampleInternal] = useState({
    eshtml: `<nav>
  <a enlace="/inicio">Inicio</a>
  <a enlace="/acerca">Acerca de</a>
  <a enlace="/contacto">Contacto</a>
</nav>`
  });

  const [exampleNewTab] = useState({
    eshtml: `<a enlace="https://www.wikipedia.org" destino="_blank">
  Abrir Wikipedia (nueva pestaña)
</a>`
  });

  const [exampleEmail] = useState({
    eshtml: `<a enlace="mailto:contacto@ejemplo.com">Envíanos un correo</a>`
  });

  return (
    <TutorialLayout activePath="/tutorial/elementos/enlaces" lessonNumber={24} totalLessons={25}>
      <h1 className="text-3xl md:text-4xl font-bold text-white mb-6">
        Enlaces y Navegación
      </h1>

      <div className="space-y-6">
        <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-700/50">
          <p className="text-lg text-gray-300">
            Los enlaces son lo que hace que la web sea &quot;web&quot;. Te permiten conectar páginas entre sí
            y navegar por internet. En EsHTML, crear enlaces es muy simple. 🔗
          </p>
        </div>

        <h2 className="text-2xl font-bold text-white mt-8 mb-4">
          La Etiqueta &lt;a&gt; (Anchor/Ancla)
        </h2>

        <p className="text-lg text-gray-300 mb-4">
          Para crear un enlace, usa la etiqueta <code className="text-orange-400">&lt;a&gt;</code>.
          Esta etiqueta convierte cualquier texto en un enlace clickeable.
        </p>

        <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-700/50">
          <h3 className="text-lg font-semibold text-white mb-3">Atributo Principal:</h3>
          <ul className="space-y-3 text-gray-300">
            <li>• <code className="text-orange-400">enlace</code> (equivalente a &quot;href&quot; en HTML) - La URL o ruta de destino</li>
            <li>• <code className="text-orange-400">destino</code> (equivalente a &quot;target&quot; en HTML) - Dónde abrir el enlace</li>
            <li>• <code className="text-orange-400">título</code> - Información adicional que aparece al pasar el ratón</li>
          </ul>
        </div>

        <h2 className="text-2xl font-bold text-white mt-8 mb-4">Ejemplo Básico</h2>
        <p className="text-lg text-gray-300 mb-4">
          Un enlace simple a un sitio externo:
        </p>
        <CodeWithPreview code={exampleBasic.eshtml} />

        <h2 className="text-2xl font-bold text-white mt-8 mb-4">Enlaces Internos</h2>
        <p className="text-lg text-gray-300 mb-4">
          Puedes crear menús de navegación con enlaces a otras páginas de tu sitio:
        </p>
        <CodeWithPreview code={exampleInternal.eshtml} />

        <div className="bg-orange-500/10 rounded-lg p-6 border border-orange-500/20">
          <h3 className="text-lg font-semibold text-white mb-2">💡 Rutas Relativas vs Absolutas</h3>
          <div className="text-gray-300 text-sm space-y-2">
            <p>• <code className="text-orange-400">enlace=&quot;/pagina&quot;</code> - Ruta absoluta desde la raíz del sitio</p>
            <p>• <code className="text-orange-400">enlace=&quot;pagina.html&quot;</code> - Ruta relativa a la página actual</p>
            <p>• <code className="text-orange-400">enlace=&quot;https://ejemplo.com&quot;</code> - URL completa a sitio externo</p>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-white mt-8 mb-4">Abrir en Nueva Pestaña</h2>
        <p className="text-lg text-gray-300 mb-4">
          Usa <code className="text-orange-400">destino=&quot;_blank&quot;</code> para abrir enlaces en una nueva pestaña:
        </p>
        <CodeWithPreview code={exampleNewTab.eshtml} />

        <div className="bg-orange-500/10 rounded-lg p-6 border border-orange-500/20">
          <h3 className="text-lg font-semibold text-white mb-2">⚠️ Seguridad con _blank</h3>
          <p className="text-gray-300 text-sm">
            Cuando uses <code className="text-orange-400">destino=&quot;_blank&quot;</code>, considera añadir
            <code className="text-orange-400"> relación=&quot;noopener noreferrer&quot;</code> por razones de seguridad,
            especialmente para enlaces a sitios externos.
          </p>
        </div>

        <h2 className="text-2xl font-bold text-white mt-8 mb-4">Tipos Especiales de Enlaces</h2>

        <div className="space-y-4">
          <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700/50">
            <h3 className="text-lg font-semibold text-white mb-2">📧 Enlaces de Correo</h3>
            <CodeWithPreview code={exampleEmail.eshtml} />
          </div>

          <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700/50">
            <h3 className="text-lg font-semibold text-white mb-2">📞 Enlaces de Teléfono</h3>
            <div className="rounded-lg overflow-hidden">
              <div className="bg-gray-900 p-3">
                <code className="text-orange-400 text-sm">&lt;a enlace=&quot;tel:+34912345678&quot;&gt;Llámanos&lt;/a&gt;</code>
              </div>
            </div>
          </div>

          <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700/50">
            <h3 className="text-lg font-semibold text-white mb-2">🔖 Enlaces de Ancla (misma página)</h3>
            <div className="rounded-lg overflow-hidden">
              <div className="bg-gray-900 p-3">
                <code className="text-orange-400 text-sm">&lt;a enlace=&quot;#seccion-2&quot;&gt;Ir a Sección 2&lt;/a&gt;</code>
              </div>
            </div>
            <p className="text-gray-300 mt-2 text-sm">Salta a un elemento con id=&quot;seccion-2&quot; en la misma página</p>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-white mt-8 mb-4">
          Valores del Atributo destino
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700/50">
            <h3 className="text-lg font-semibold text-white mb-2">_blank</h3>
            <p className="text-gray-300 text-sm">Abre el enlace en una nueva pestaña o ventana</p>
          </div>

          <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700/50">
            <h3 className="text-lg font-semibold text-white mb-2">_self (predeterminado)</h3>
            <p className="text-gray-300 text-sm">Abre el enlace en la misma pestaña/marco</p>
          </div>

          <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700/50">
            <h3 className="text-lg font-semibold text-white mb-2">_parent</h3>
            <p className="text-gray-300 text-sm">Abre en el marco padre (útil con iframes)</p>
          </div>

          <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700/50">
            <h3 className="text-lg font-semibold text-white mb-2">_top</h3>
            <p className="text-gray-300 text-sm">Abre en toda la ventana, saliendo de cualquier marco</p>
          </div>
        </div>

        <div className="bg-orange-500/10 rounded-lg p-6 border border-orange-500/20">
          <h3 className="text-lg font-semibold text-white mb-2">💡 Mejores Prácticas</h3>
          <ul className="text-gray-300 space-y-2 text-sm">
            <li>• Usa texto descriptivo: &quot;Descarga el manual PDF&quot; en vez de &quot;Click aquí&quot;</li>
            <li>• Los enlaces internos (a tu sitio) generalmente se abren en la misma pestaña</li>
            <li>• Los enlaces externos pueden abrirse en nueva pestaña con <code className="text-orange-400">destino=&quot;_blank&quot;</code></li>
            <li>• Añade el atributo <code className="text-orange-400">título</code> para información adicional</li>
            <li>• Asegúrate de que el color de los enlaces sea diferente al texto normal</li>
            <li>• Los enlaces visitados a menudo se muestran en un color diferente</li>
          </ul>
        </div>

        <h2 className="text-2xl font-bold text-white mt-8 mb-4">
          Estilizando Enlaces
        </h2>

        <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700/50">
          <p className="text-gray-300 text-sm mb-3">
            Los enlaces tienen diferentes estados que puedes estilizar con CSS:
          </p>
          <ul className="text-gray-300 space-y-1 text-sm">
            <li>• <strong>Normal</strong>: El estado predeterminado</li>
            <li>• <strong>Visitado</strong>: Después de hacer click</li>
            <li>• <strong>Hover</strong>: Cuando pasas el ratón sobre él</li>
            <li>• <strong>Activo</strong>: Mientras haces click</li>
          </ul>
        </div>

        <div className="mt-12 flex flex-col sm:flex-row justify-between gap-3">
          <Link
            href="/tutorial/elementos/imagenes"
            className="inline-flex items-center justify-center px-4 py-2 sm:px-6 sm:py-3 bg-gray-700 text-white font-semibold rounded-md hover:bg-gray-600 transition-colors text-sm sm:text-base"
          >
            <ChevronLeft className="mr-2 w-4 h-4 sm:w-5 sm:h-5" />
            <span>Anterior: Imágenes y Multimedia</span>
          </Link>
          <Link
            href="/tutorial/formatos/enfasis-y-estilos"
            className="inline-flex items-center justify-center px-4 py-2 sm:px-6 sm:py-3 bg-orange-500 text-white font-semibold rounded-md hover:bg-orange-600 transition-colors text-sm sm:text-base"
          >
            <span>Siguiente: Énfasis y Estilos</span>
            <ChevronRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
          </Link>
        </div>
      </div>
    </TutorialLayout>
  );
}
