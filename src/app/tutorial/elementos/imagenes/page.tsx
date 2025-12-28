// src/app/tutorial/elementos/imagenes/page.tsx
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

export default function Imagenes() {
  const [exampleBasic] = useState({
    eshtml: `<img fte="logo.png" ta="Logo de mi sitio">`
  });

  const [exampleWithSize] = useState({
    eshtml: `<img fte="banner.jpg" ta="Banner del sitio" ancho="800" alto="400">`
  });

  const [exampleInContext] = useState({
    eshtml: `<artículo>
  <e2>Receta de Paella</e2>
  <img fte="paella.jpg" ta="Deliciosa paella valenciana" ancho="600">
  <p>La paella es uno de los platos más emblemáticos de España.</p>
</artículo>`
  });

  return (
    <TutorialLayout activePath="/tutorial/elementos/imagenes" lessonNumber={23} totalLessons={25}>
      <h1 className="text-3xl md:text-4xl font-bold text-white mb-6">
        Imágenes y Multimedia
      </h1>

      <div className="space-y-6">
        <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-700/50">
          <p className="text-lg text-gray-300">
            Las imágenes hacen que tu sitio web sea más atractivo y ayudan a comunicar tu mensaje visualmente. En EsHTML, usar imágenes es simple y directo. 🖼️
          </p>
        </div>

        <h2 className="text-2xl font-bold text-white mt-8 mb-4">
          La Etiqueta img
        </h2>

        <p className="text-lg text-gray-300 mb-4">
          Para añadir una imagen a tu página, usa la etiqueta <code className="text-orange-400">&lt;img&gt;</code>.
          Es una etiqueta especial que no necesita cerrarse (se cierra automáticamente).
        </p>

        <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-700/50">
          <h3 className="text-lg font-semibold text-white mb-3">Atributos Principales:</h3>
          <ul className="space-y-3 text-gray-300">
            <li>• <code className="text-orange-400">fte</code> (fuente) - La ruta de la imagen (equivalente a &quot;src&quot; en HTML)</li>
            <li>• <code className="text-orange-400">ta</code> (texto alternativo) - Descripción de la imagen (equivalente a &quot;alt&quot; en HTML)</li>
            <li>• <code className="text-orange-400">ancho</code> - El ancho de la imagen en píxeles</li>
            <li>• <code className="text-orange-400">alto</code> - La altura de la imagen en píxeles</li>
          </ul>
        </div>

        <h2 className="text-2xl font-bold text-white mt-8 mb-4">Ejemplo Básico</h2>
        <p className="text-lg text-gray-300 mb-4">
          Aquí está el ejemplo más simple de una imagen:
        </p>
        <CodeWithPreview code={exampleBasic.eshtml} />

        <div className="bg-orange-500/10 rounded-lg p-6 border border-orange-500/20 mt-6">
          <h3 className="text-lg font-semibold text-white mb-2">⚠️ Importante sobre &quot;ta&quot; (texto alternativo)</h3>
          <p className="text-gray-300 text-sm">
            El atributo <code className="text-orange-400">ta</code> es crucial para la accesibilidad. Describe la imagen
            para personas con discapacidad visual y se muestra si la imagen no se puede cargar. Siempre incluye
            una descripción clara y concisa.
          </p>
        </div>

        <h2 className="text-2xl font-bold text-white mt-8 mb-4">Especificando Tamaño</h2>
        <p className="text-lg text-gray-300 mb-4">
          Puedes controlar el tamaño de tus imágenes con los atributos <code className="text-orange-400">ancho</code> y <code className="text-orange-400">alto</code>:
        </p>
        <CodeWithPreview code={exampleWithSize.eshtml} />

        <h2 className="text-2xl font-bold text-white mt-8 mb-4">Imágenes en Contexto</h2>
        <p className="text-lg text-gray-300 mb-4">
          Las imágenes funcionan mejor cuando están integradas con otro contenido:
        </p>
        <CodeWithPreview code={exampleInContext.eshtml} />

        <h2 className="text-2xl font-bold text-white mt-8 mb-4">
          Tipos de Rutas de Imagen
        </h2>

        <div className="space-y-4">
          <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700/50">
            <h3 className="text-lg font-semibold text-white mb-2">📁 Rutas Relativas</h3>
            <code className="text-orange-400 text-sm">fte=&quot;imagenes/foto.jpg&quot;</code>
            <p className="text-gray-300 mt-2 text-sm">Busca la imagen en una carpeta relativa al archivo HTML</p>
          </div>

          <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700/50">
            <h3 className="text-lg font-semibold text-white mb-2">🌐 URLs Absolutas</h3>
            <code className="text-orange-400 text-sm">fte=&quot;https://ejemplo.com/foto.jpg&quot;</code>
            <p className="text-gray-300 mt-2 text-sm">Usa una URL completa para imágenes en otros sitios</p>
          </div>

          <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700/50">
            <h3 className="text-lg font-semibold text-white mb-2">📂 Rutas desde la raíz</h3>
            <code className="text-orange-400 text-sm">fte=&quot;/imagenes/foto.jpg&quot;</code>
            <p className="text-gray-300 mt-2 text-sm">Comienza desde la raíz del sitio web</p>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-white mt-8 mb-4">
          Formatos de Imagen Comunes
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700/50">
            <h3 className="text-lg font-semibold text-white mb-2">JPG/JPEG</h3>
            <p className="text-gray-300 text-sm">Mejor para fotografías y imágenes con muchos colores</p>
          </div>

          <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700/50">
            <h3 className="text-lg font-semibold text-white mb-2">PNG</h3>
            <p className="text-gray-300 text-sm">Mejor para gráficos, logos y imágenes con transparencia</p>
          </div>

          <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700/50">
            <h3 className="text-lg font-semibold text-white mb-2">GIF</h3>
            <p className="text-gray-300 text-sm">Animaciones simples y gráficos con pocos colores</p>
          </div>

          <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700/50">
            <h3 className="text-lg font-semibold text-white mb-2">SVG</h3>
            <p className="text-gray-300 text-sm">Gráficos vectoriales que se escalan sin perder calidad</p>
          </div>
        </div>

        <div className="bg-orange-500/10 rounded-lg p-6 border border-orange-500/20">
          <h3 className="text-lg font-semibold text-white mb-2">💡 Mejores Prácticas</h3>
          <ul className="text-gray-300 space-y-2 text-sm">
            <li>• Siempre usa el atributo <code className="text-orange-400">ta</code> con una descripción clara</li>
            <li>• Optimiza el tamaño de tus imágenes antes de subirlas (usa herramientas de compresión)</li>
            <li>• Usa el formato adecuado: JPG para fotos, PNG para logos con transparencia</li>
            <li>• Especifica <code className="text-orange-400">ancho</code> y <code className="text-orange-400">alto</code> para mejorar el rendimiento</li>
            <li>• Usa nombres de archivo descriptivos: &quot;paisaje-montana.jpg&quot; en vez de &quot;IMG_1234.jpg&quot;</li>
          </ul>
        </div>

        <div className="mt-12 flex flex-col sm:flex-row justify-between gap-3">
          <Link
            href="/tutorial/elementos/encabezados"
            className="inline-flex items-center justify-center px-4 py-2 sm:px-6 sm:py-3 bg-gray-700 text-white font-semibold rounded-md hover:bg-gray-600 transition-colors text-sm sm:text-base"
          >
            <ChevronLeft className="mr-2 w-4 h-4 sm:w-5 sm:h-5" />
            <span>Anterior: Más Encabezados</span>
          </Link>
          <Link
            href="/tutorial/elementos/enlaces"
            className="inline-flex items-center justify-center px-4 py-2 sm:px-6 sm:py-3 bg-orange-500 text-white font-semibold rounded-md hover:bg-orange-600 transition-colors text-sm sm:text-base"
          >
            <span>Siguiente: Enlaces y Navegación</span>
            <ChevronRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
          </Link>
        </div>
      </div>
    </TutorialLayout>
  );
}
