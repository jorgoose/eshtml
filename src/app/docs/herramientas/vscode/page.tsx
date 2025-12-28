import Link from 'next/link';
import { Nav } from '@/components/Nav';
import { DocsSidebar } from '@/components/DocsSidebar';
import { ChevronRight, ChevronLeft, Code, Sparkles, Zap, Eye, GitBranch, Star, Bell, ExternalLink } from 'lucide-react';

export default function VSCodePage() {
  return (
    <div className="min-h-screen bg-[#111827]">
      <Nav />
      <div className="flex pt-16">
        <DocsSidebar activePath="/docs/herramientas/vscode" />

        <div className="flex-1 md:ml-64">
          <div className="max-w-[1200px] mx-auto">
            <div className="px-4 md:px-16 py-8 md:py-12">
              {/* Breadcrumb */}
              <div className="flex items-center text-sm text-gray-400 mb-8">
                <Link href="/docs" className="hover:text-white">Docs</Link>
                <ChevronRight className="w-4 h-4 mx-2" />
                <Link href="/docs/herramientas" className="hover:text-white">Herramientas</Link>
                <ChevronRight className="w-4 h-4 mx-2" />
                <span className="text-white">Extensión VSCode</span>
              </div>

              <article className="prose prose-invert max-w-4xl">
                <div className="flex items-center gap-3 mb-4">
                  <Code className="w-10 h-10 text-blue-400" />
                  <h1 className="text-4xl font-bold text-white mb-0">Extensión para Visual Studio Code</h1>
                </div>
                <p className="text-xl text-gray-300 leading-relaxed mb-8">
                  Una extensión de VS Code que proporcionará soporte completo para archivos EsHTML, incluyendo resaltado de sintaxis, autocompletado y más.
                </p>

                {/* Development Status */}
                <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-lg border border-blue-500/20 p-6 mb-8 not-prose">
                  <div className="flex items-center gap-3 mb-4">
                    <GitBranch className="w-6 h-6 text-blue-400" />
                    <h2 className="text-2xl font-semibold text-white mb-0">Estado del Desarrollo</h2>
                  </div>
                  <p className="text-gray-300 mb-4">
                    La extensión de Visual Studio Code para EsHTML está actualmente <strong className="text-blue-400">en desarrollo</strong>.
                    Estamos trabajando en las características fundamentales para proporcionar la mejor experiencia de desarrollo posible.
                  </p>
                  <div className="flex items-center gap-2 text-yellow-400 bg-yellow-400/10 rounded px-3 py-2 text-sm">
                    <Sparkles className="w-4 h-4" />
                    <span>Próximamente disponible en el Visual Studio Code Marketplace</span>
                  </div>
                </div>

                {/* Planned Features */}
                <div className="bg-gray-900/50 rounded-lg border border-gray-800/50 p-6 mb-8">
                  <h2 className="text-2xl font-semibold text-white mb-6">Características Planificadas</h2>

                  <div className="space-y-6">
                    {/* Syntax Highlighting */}
                    <div className="flex items-start gap-4">
                      <div className="bg-blue-500/10 rounded-lg p-3 flex-shrink-0">
                        <Eye className="w-6 h-6 text-blue-400" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-white mb-2">Resaltado de Sintaxis</h3>
                        <p className="text-gray-300">
                          Resaltado completo de sintaxis para archivos <code className="text-orange-400 bg-gray-950/50 px-2 py-1 rounded">.eshtml</code>,
                          con soporte para etiquetas, atributos y valores en español. Colores optimizados para distinguir fácilmente entre diferentes elementos.
                        </p>
                      </div>
                    </div>

                    {/* IntelliSense */}
                    <div className="flex items-start gap-4">
                      <div className="bg-green-500/10 rounded-lg p-3 flex-shrink-0">
                        <Sparkles className="w-6 h-6 text-green-400" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-white mb-2">IntelliSense y Autocompletado</h3>
                        <p className="text-gray-300">
                          Sugerencias inteligentes mientras escribes. Autocompletado de etiquetas y atributos EsHTML con descripciones en español.
                          IntelliSense te ayudará a descubrir todas las etiquetas y atributos disponibles sin tener que memorizar la sintaxis.
                        </p>
                      </div>
                    </div>

                    {/* Code Snippets */}
                    <div className="flex items-start gap-4">
                      <div className="bg-purple-500/10 rounded-lg p-3 flex-shrink-0">
                        <Code className="w-6 h-6 text-purple-400" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-white mb-2">Fragmentos de Código (Snippets)</h3>
                        <p className="text-gray-300 mb-3">
                          Colección completa de snippets para estructuras HTML comunes. Escribe abreviaciones cortas y expándelas
                          automáticamente a bloques de código completos:
                        </p>
                        <div className="bg-gray-950/50 rounded p-3 font-mono text-sm space-y-2 not-prose">
                          <div>
                            <span className="text-orange-400">eshtml:5</span>
                            <span className="text-gray-500"> → </span>
                            <span className="text-gray-400">Plantilla HTML5 completa</span>
                          </div>
                          <div>
                            <span className="text-orange-400">form</span>
                            <span className="text-gray-500"> → </span>
                            <span className="text-gray-400">Formulario con campos básicos</span>
                          </div>
                          <div>
                            <span className="text-orange-400">tabla</span>
                            <span className="text-gray-500"> → </span>
                            <span className="text-gray-400">Tabla con estructura completa</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Transpile on Save */}
                    <div className="flex items-start gap-4">
                      <div className="bg-orange-500/10 rounded-lg p-3 flex-shrink-0">
                        <Zap className="w-6 h-6 text-orange-400" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-white mb-2">Transpilar al Guardar</h3>
                        <p className="text-gray-300">
                          Opción para transpilar automáticamente archivos <code className="text-orange-400 bg-gray-950/50 px-2 py-1 rounded">.eshtml</code> a
                          <code className="text-blue-400 bg-gray-950/50 px-2 py-1 rounded ml-1">.html</code> cada vez que guardes.
                          Perfecto para integración en tu flujo de trabajo de desarrollo sin pasos adicionales.
                        </p>
                      </div>
                    </div>

                    {/* Error Detection */}
                    <div className="flex items-start gap-4">
                      <div className="bg-red-500/10 rounded-lg p-3 flex-shrink-0">
                        <Bell className="w-6 h-6 text-red-400" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-white mb-2">Detección de Errores</h3>
                        <p className="text-gray-300">
                          Validación en tiempo real de la sintaxis EsHTML. La extensión subrayará errores de sintaxis y
                          te ofrecerá sugerencias para corregirlos antes de transpilar.
                        </p>
                      </div>
                    </div>

                    {/* File Icons */}
                    <div className="flex items-start gap-4">
                      <div className="bg-cyan-500/10 rounded-lg p-3 flex-shrink-0">
                        <Code className="w-6 h-6 text-cyan-400" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-white mb-2">Iconos de Archivo Personalizados</h3>
                        <p className="text-gray-300">
                          Iconos distintivos para archivos <code className="text-orange-400 bg-gray-950/50 px-2 py-1 rounded">.eshtml</code> en
                          el explorador de archivos, facilitando su identificación en proyectos grandes.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Example Usage */}
                <div className="bg-gray-900/50 rounded-lg border border-gray-800/50 p-6 mb-8">
                  <h2 className="text-2xl font-semibold text-white mb-4">Ejemplo de Uso</h2>
                  <p className="text-gray-300 mb-4">
                    Una vez instalada, la extensión funcionará automáticamente:
                  </p>

                  <div className="space-y-4 not-prose">
                    <div className="flex items-start gap-3">
                      <div className="bg-orange-500 rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 text-white font-bold text-sm">
                        1
                      </div>
                      <div>
                        <p className="text-gray-300">
                          Crea un nuevo archivo con extensión <code className="text-orange-400 bg-gray-950/50 px-2 py-1 rounded">.eshtml</code>
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="bg-orange-500 rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 text-white font-bold text-sm">
                        2
                      </div>
                      <div>
                        <p className="text-gray-300">
                          Comienza a escribir y disfruta del resaltado de sintaxis y autocompletado automático
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="bg-orange-500 rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 text-white font-bold text-sm">
                        3
                      </div>
                      <div>
                        <p className="text-gray-300">
                          Usa snippets escribiendo abreviaciones y presionando <kbd className="bg-gray-950/50 px-2 py-1 rounded text-sm">Tab</kbd>
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="bg-orange-500 rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 text-white font-bold text-sm">
                        4
                      </div>
                      <div>
                        <p className="text-gray-300">
                          Guarda el archivo y se transpilará automáticamente a HTML (si está habilitado)
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Configuration */}
                <div className="bg-gray-900/50 rounded-lg border border-gray-800/50 p-6 mb-8">
                  <h2 className="text-2xl font-semibold text-white mb-4">Configuración Planificada</h2>
                  <p className="text-gray-300 mb-4">
                    La extensión incluirá opciones de configuración personalizables:
                  </p>

                  <div className="bg-gray-950/50 rounded p-4 font-mono text-sm not-prose">
                    <pre className="text-gray-300"><code>{`{
  // Habilitar transpilación automática al guardar
  "eshtml.transpileOnSave": true,

  // Directorio de salida para archivos HTML
  "eshtml.outputDirectory": "./dist",

  // Mostrar notificaciones de transpilación
  "eshtml.showTranspileNotifications": false,

  // Modo estricto para validación
  "eshtml.strictMode": false
}`}</code></pre>
                  </div>
                </div>

                {/* Get Notified */}
                <div className="bg-gradient-to-r from-orange-500/10 to-blue-500/10 rounded-lg border border-orange-500/20 p-6 mb-8 not-prose">
                  <div className="flex items-center gap-3 mb-4">
                    <Star className="w-6 h-6 text-orange-400" />
                    <h2 className="text-2xl font-semibold text-white mb-0">Recibe Actualizaciones</h2>
                  </div>
                  <p className="text-gray-300 mb-4">
                    Queremos asegurarnos de que la extensión satisfaga las necesidades de la comunidad. Si estás interesado en
                    probarla cuando esté disponible, hay varias formas de mantenerte informado:
                  </p>

                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-gray-300">
                      <Star className="w-4 h-4 text-orange-400" />
                      <span>Dale una estrella al repositorio en GitHub para recibir notificaciones</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-300">
                      <Bell className="w-4 h-4 text-blue-400" />
                      <span>Activa las notificaciones del repositorio para estar al tanto del desarrollo</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-300">
                      <GitBranch className="w-4 h-4 text-green-400" />
                      <span>Visita la sección de <Link href="/docs/proyecto/comunidad" className="text-blue-400 hover:text-blue-300">Comunidad</Link> para más formas de participar</span>
                    </div>
                  </div>

                  <div className="mt-6">
                    <a
                      href="https://github.com/jorgoose/es-html"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-orange-600 hover:bg-orange-700 text-white rounded-lg transition-colors"
                    >
                      <Star size={20} />
                      Dar Estrella en GitHub
                      <ExternalLink size={16} />
                    </a>
                  </div>
                </div>

                {/* Contributing */}
                <div className="bg-gray-900/50 rounded-lg border border-gray-800/50 p-6 mb-8">
                  <h2 className="text-2xl font-semibold text-white mb-4">Ayuda con el Desarrollo</h2>
                  <p className="text-gray-300 mb-4">
                    Si tienes experiencia con el desarrollo de extensiones para VS Code o ideas sobre características
                    que te gustaría ver, tus contribuciones son bienvenidas.
                  </p>
                  <Link
                    href="/docs/proyecto/contribuir"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
                  >
                    Guía de Contribución
                    <ChevronRight size={16} />
                  </Link>
                </div>

                {/* Navigation */}
                <div className="mt-16 border-t border-gray-800/50 pt-8 flex justify-between">
                  <Link
                    href="/docs/herramientas/npm"
                    className="text-orange-500 hover:text-orange-400 flex items-center gap-1"
                  >
                    <ChevronLeft className="w-4 h-4" /> Paquete NPM
                  </Link>
                  <Link
                    href="/docs/proyecto/contribuir"
                    className="text-orange-500 hover:text-orange-400 flex items-center gap-1"
                  >
                    Contribuir <ChevronRight className="w-4 h-4" />
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
