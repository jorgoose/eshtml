import Link from 'next/link';
import { Nav } from '@/components/Nav';
import { DocsSidebar } from '@/components/DocsSidebar';
import { ChevronRight, ChevronLeft, Package, Terminal, Code, CheckCircle, ExternalLink } from 'lucide-react';

export default function NpmPage() {
  return (
    <div className="min-h-screen bg-[#111827]">
      <Nav />
      <div className="flex pt-16">
        <DocsSidebar activePath="/docs/herramientas/npm" />

        <div className="flex-1 md:ml-64">
          <div className="max-w-[1200px] mx-auto">
            <div className="px-4 md:px-16 py-8 md:py-12">
              {/* Breadcrumb */}
              <div className="flex items-center text-sm text-gray-400 mb-8">
                <Link href="/docs" className="hover:text-white">Docs</Link>
                <ChevronRight className="w-4 h-4 mx-2" />
                <Link href="/docs/herramientas" className="hover:text-white">Herramientas</Link>
                <ChevronRight className="w-4 h-4 mx-2" />
                <span className="text-white">Paquete NPM</span>
              </div>

              <article className="prose prose-invert max-w-4xl">
                <div className="flex items-center gap-3 mb-4">
                  <Package className="w-10 h-10 text-orange-400" />
                  <h1 className="text-4xl font-bold text-white mb-0">Paquete NPM</h1>
                </div>
                <p className="text-xl text-gray-300 leading-relaxed mb-12">
                  El transpilador oficial de EsHTML está disponible como paquete NPM para integrar en tus proyectos Node.js.
                </p>

                {/* Installation */}
                <div className="bg-gray-900/50 rounded-lg border border-gray-800/50 p-6 mb-8">
                  <div className="flex items-center gap-2 mb-4">
                    <Terminal className="w-6 h-6 text-orange-400" />
                    <h2 className="text-2xl font-semibold text-white mb-0">Instalación</h2>
                  </div>
                  <p className="text-gray-300 mb-4">
                    Instala el paquete html-es usando npm o tu gestor de paquetes preferido:
                  </p>
                  <div className="space-y-3 not-prose">
                    <div className="bg-gray-950/50 rounded-lg p-4 font-mono text-sm">
                      <div className="text-gray-400 mb-2"># Usando npm</div>
                      <code className="text-orange-400">npm install html-es</code>
                    </div>
                    <div className="bg-gray-950/50 rounded-lg p-4 font-mono text-sm">
                      <div className="text-gray-400 mb-2"># Usando yarn</div>
                      <code className="text-blue-400">yarn add html-es</code>
                    </div>
                    <div className="bg-gray-950/50 rounded-lg p-4 font-mono text-sm">
                      <div className="text-gray-400 mb-2"># Usando pnpm</div>
                      <code className="text-green-400">pnpm add html-es</code>
                    </div>
                  </div>
                </div>

                {/* Basic Usage */}
                <div className="bg-gray-900/50 rounded-lg border border-gray-800/50 p-6 mb-8">
                  <div className="flex items-center gap-2 mb-4">
                    <Code className="w-6 h-6 text-blue-400" />
                    <h2 className="text-2xl font-semibold text-white mb-0">Uso Básico</h2>
                  </div>
                  <p className="text-gray-300 mb-4">
                    Importa el transpilador y úsalo para convertir código EsHTML a HTML:
                  </p>
                  <div className="bg-gray-950/50 rounded-lg p-4 font-mono text-sm not-prose mb-4">
                    <pre className="text-gray-300 overflow-x-auto"><code>{`import { EsHTMLTranspiler } from 'html-es';

const transpiler = new EsHTMLTranspiler();

// Código EsHTML
const eshtml = \`
<artículo>
  <título>Mi Primera Página</título>
  <sección clase="contenido">
    <e1>¡Hola Mundo!</e1>
    <p>Este es un ejemplo de EsHTML</p>
    <botón deshabilitado>Enviar</botón>
  </sección>
</artículo>
\`;

// Transpilar a HTML estándar
const html = transpiler.transpile(eshtml);
console.log(html);`}</code></pre>
                  </div>
                  <div className="bg-gray-800/30 rounded p-3">
                    <div className="text-gray-400 text-sm mb-2">Resultado:</div>
                    <pre className="text-gray-300 text-sm overflow-x-auto"><code>{`<article>
  <title>Mi Primera Página</title>
  <section class="contenido">
    <h1>¡Hola Mundo!</h1>
    <p>Este es un ejemplo de EsHTML</p>
    <button disabled>Enviar</button>
  </section>
</article>`}</code></pre>
                  </div>
                </div>

                {/* API Reference */}
                <div className="bg-gray-900/50 rounded-lg border border-gray-800/50 p-6 mb-8">
                  <h2 className="text-2xl font-semibold text-white mb-4">Referencia de API</h2>

                  <div className="space-y-6">
                    {/* EsHTMLTranspiler Class */}
                    <div>
                      <h3 className="text-xl font-semibold text-orange-400 mb-3">EsHTMLTranspiler</h3>
                      <p className="text-gray-300 mb-3">
                        Clase principal del transpilador que convierte código EsHTML a HTML estándar.
                      </p>
                      <div className="bg-gray-950/50 rounded p-3 font-mono text-sm mb-3 not-prose">
                        <code className="text-gray-300">const transpiler = new EsHTMLTranspiler();</code>
                      </div>
                    </div>

                    {/* transpile Method */}
                    <div>
                      <h3 className="text-xl font-semibold text-orange-400 mb-3">transpile()</h3>
                      <p className="text-gray-300 mb-3">
                        Transpila código EsHTML a HTML estándar.
                      </p>
                      <div className="bg-gray-950/50 rounded p-3 font-mono text-sm not-prose">
                        <code className="text-gray-300">{`transpiler.transpile(source: string, options?: TranspileOptions): string`}</code>
                      </div>

                      <div className="mt-4">
                        <h4 className="text-lg font-semibold text-white mb-2">Parámetros:</h4>
                        <ul className="text-gray-300 space-y-2">
                          <li>
                            <code className="text-orange-400 bg-gray-950/50 px-2 py-1 rounded">source</code>
                            <span className="text-gray-400"> (string)</span> - El código EsHTML a transpilar
                          </li>
                          <li>
                            <code className="text-orange-400 bg-gray-950/50 px-2 py-1 rounded">options</code>
                            <span className="text-gray-400"> (TranspileOptions, opcional)</span> - Opciones de configuración
                          </li>
                        </ul>
                      </div>

                      <div className="mt-4">
                        <h4 className="text-lg font-semibold text-white mb-2">Retorna:</h4>
                        <p className="text-gray-300">
                          <code className="text-blue-400 bg-gray-950/50 px-2 py-1 rounded">string</code> -
                          El código HTML estándar resultante
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Configuration Options */}
                <div className="bg-gray-900/50 rounded-lg border border-gray-800/50 p-6 mb-8">
                  <h2 className="text-2xl font-semibold text-white mb-4">Opciones de Configuración</h2>

                  <p className="text-gray-300 mb-4">
                    El objeto TranspileOptions permite personalizar el comportamiento del transpilador:
                  </p>

                  <div className="bg-gray-950/50 rounded p-4 font-mono text-sm not-prose mb-4">
                    <pre className="text-gray-300"><code>{`interface TranspileOptions {
  strictMode?: boolean;      // Lanza errores ante sintaxis inválida
  ignoreWarnings?: boolean;  // Ignora advertencias no críticas
}`}</code></pre>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">strictMode</h3>
                      <p className="text-gray-300">
                        Cuando está habilitado, el transpilador lanzará errores ante cualquier sintaxis inválida.
                        Útil durante el desarrollo para detectar problemas tempranamente.
                      </p>
                      <div className="bg-gray-950/50 rounded p-3 font-mono text-sm mt-2 not-prose">
                        <code className="text-gray-300">{`const html = transpiler.transpile(eshtml, { strictMode: true });`}</code>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">ignoreWarnings</h3>
                      <p className="text-gray-300">
                        Suprime advertencias no críticas durante la transpilación. Recomendado para producción.
                      </p>
                      <div className="bg-gray-950/50 rounded p-3 font-mono text-sm mt-2 not-prose">
                        <code className="text-gray-300">{`const html = transpiler.transpile(eshtml, { ignoreWarnings: true });`}</code>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Use Cases */}
                <div className="bg-gray-900/50 rounded-lg border border-gray-800/50 p-6 mb-8">
                  <h2 className="text-2xl font-semibold text-white mb-4">Casos de Uso</h2>

                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-1">Scripts de Build</h3>
                        <p className="text-gray-300">
                          Integra el transpilador en tu proceso de compilación para convertir archivos .eshtml a .html automáticamente.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-1">Aplicaciones Educativas</h3>
                        <p className="text-gray-300">
                          Crea herramientas de aprendizaje que permitan a estudiantes escribir HTML en español y ver el resultado.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-1">APIs y Servicios Web</h3>
                        <p className="text-gray-300">
                          Implementa endpoints que acepten EsHTML y devuelvan HTML estándar para aplicaciones web.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-1">Generadores de Sitios Estáticos</h3>
                        <p className="text-gray-300">
                          Extiende herramientas como 11ty o Next.js para soportar archivos EsHTML en tu flujo de trabajo.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Links */}
                <div className="flex flex-wrap gap-4 mt-12">
                  <a
                    href="https://www.npmjs.com/package/html-es"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-orange-600 hover:bg-orange-700 text-white rounded-lg transition-colors"
                  >
                    <Package size={20} />
                    Ver en NPM
                    <ExternalLink size={16} />
                  </a>
                  <a
                    href="https://github.com/jorgoose/es-html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-gray-800 hover:bg-gray-700 text-white rounded-lg transition-colors"
                  >
                    Repositorio GitHub
                    <ExternalLink size={16} />
                  </a>
                </div>

                {/* Navigation */}
                <div className="mt-16 border-t border-gray-800/50 pt-8 flex justify-between">
                  <Link
                    href="/docs/herramientas"
                    className="text-orange-500 hover:text-orange-400 flex items-center gap-1"
                  >
                    <ChevronLeft className="w-4 h-4" /> Herramientas
                  </Link>
                  <Link
                    href="/docs/herramientas/vscode"
                    className="text-orange-500 hover:text-orange-400 flex items-center gap-1"
                  >
                    Extensión VSCode <ChevronRight className="w-4 h-4" />
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
