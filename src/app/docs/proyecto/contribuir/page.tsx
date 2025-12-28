import Link from 'next/link';
import { Nav } from '@/components/Nav';
import { DocsSidebar } from '@/components/DocsSidebar';
import { ChevronRight, ChevronLeft, Heart, Github, GitPullRequest, Bug, Lightbulb, Code, BookOpen, Mail, ExternalLink } from 'lucide-react';

export default function ContribuirPage() {
  return (
    <div className="min-h-screen bg-[#111827]">
      <Nav />
      <div className="flex pt-16">
        <DocsSidebar activePath="/docs/proyecto/contribuir" />

        <div className="flex-1 md:ml-64">
          <div className="max-w-[1200px] mx-auto">
            <div className="px-4 md:px-16 py-8 md:py-12">
              {/* Breadcrumb */}
              <div className="flex items-center text-sm text-gray-400 mb-8">
                <Link href="/docs" className="hover:text-white">Docs</Link>
                <ChevronRight className="w-4 h-4 mx-2" />
                <Link href="/docs/proyecto" className="hover:text-white">Proyecto</Link>
                <ChevronRight className="w-4 h-4 mx-2" />
                <span className="text-white">Contribuir</span>
              </div>

              <article className="prose prose-invert max-w-4xl">
                <div className="flex items-center gap-3 mb-4">
                  <Heart className="w-10 h-10 text-orange-400" />
                  <h1 className="text-4xl font-bold text-white mb-0">Guía de Contribución</h1>
                </div>
                <p className="text-xl text-gray-300 leading-relaxed mb-12">
                  EsHTML es un proyecto de código abierto que mejora con cada contribución. Ya sea que reportes un error, sugieras una mejora o contribuyas código, tu ayuda es valiosa.
                </p>

                {/* Welcome Message */}
                <div className="bg-gradient-to-r from-orange-500/10 to-blue-500/10 rounded-lg border border-orange-500/20 p-6 mb-8 not-prose">
                  <p className="text-gray-300 mb-0">
                    <strong className="text-white">¡Gracias por tu interés en contribuir a EsHTML!</strong> Este proyecto existe para hacer el desarrollo web más accesible a hablantes de español, y cada contribución nos acerca más a ese objetivo.
                  </p>
                </div>

                {/* Ways to Contribute */}
                <div className="mb-12">
                  <h2 className="text-2xl font-semibold text-white mb-6">Formas de Contribuir</h2>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 not-prose">
                    {/* Report Issues */}
                    <div className="bg-gray-900/50 rounded-lg border border-gray-800/50 p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <Bug className="w-6 h-6 text-red-400" />
                        <h3 className="text-xl font-semibold text-white">Reportar Errores</h3>
                      </div>
                      <p className="text-gray-300 mb-4">
                        Encuentra un bug o algo que no funciona como esperabas? Ayúdanos reportándolo.
                      </p>
                      <ul className="text-gray-300 space-y-2 text-sm">
                        <li>• Describe el problema claramente</li>
                        <li>• Incluye pasos para reproducirlo</li>
                        <li>• Menciona tu entorno (versión, sistema operativo)</li>
                      </ul>
                    </div>

                    {/* Feature Requests */}
                    <div className="bg-gray-900/50 rounded-lg border border-gray-800/50 p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <Lightbulb className="w-6 h-6 text-yellow-400" />
                        <h3 className="text-xl font-semibold text-white">Sugerir Mejoras</h3>
                      </div>
                      <p className="text-gray-300 mb-4">
                        Tienes ideas para nuevas características o mejoras? Compártelas con nosotros.
                      </p>
                      <ul className="text-gray-300 space-y-2 text-sm">
                        <li>• Explica el caso de uso</li>
                        <li>• Describe la solución propuesta</li>
                        <li>• Considera alternativas</li>
                      </ul>
                    </div>

                    {/* Code Contributions */}
                    <div className="bg-gray-900/50 rounded-lg border border-gray-800/50 p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <Code className="w-6 h-6 text-green-400" />
                        <h3 className="text-xl font-semibold text-white">Contribuir Código</h3>
                      </div>
                      <p className="text-gray-300 mb-4">
                        Desarrolla nuevas características, corrige bugs o mejora el código existente.
                      </p>
                      <ul className="text-gray-300 space-y-2 text-sm">
                        <li>• Fork del repositorio</li>
                        <li>• Crea una branch para tu cambio</li>
                        <li>• Escribe tests cuando sea aplicable</li>
                      </ul>
                    </div>

                    {/* Documentation */}
                    <div className="bg-gray-900/50 rounded-lg border border-gray-800/50 p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <BookOpen className="w-6 h-6 text-blue-400" />
                        <h3 className="text-xl font-semibold text-white">Mejorar Documentación</h3>
                      </div>
                      <p className="text-gray-300 mb-4">
                        Ayuda a otros usuarios mejorando guías, tutoriales o ejemplos.
                      </p>
                      <ul className="text-gray-300 space-y-2 text-sm">
                        <li>• Corrige errores o typos</li>
                        <li>• Añade ejemplos útiles</li>
                        <li>• Mejora explicaciones existentes</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* How to Report Issues */}
                <div className="bg-gray-900/50 rounded-lg border border-gray-800/50 p-6 mb-8">
                  <div className="flex items-center gap-2 mb-4">
                    <Bug className="w-6 h-6 text-red-400" />
                    <h2 className="text-2xl font-semibold text-white mb-0">Cómo Reportar Problemas</h2>
                  </div>

                  <p className="text-gray-300 mb-4">
                    Cuando encuentres un problema, por favor incluye la siguiente información:
                  </p>

                  <div className="space-y-4">
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">1. Descripción del Problema</h3>
                      <p className="text-gray-300">
                        Explica claramente qué está mal. Qué esperabas que sucediera vs. qué realmente sucedió?
                      </p>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">2. Pasos para Reproducir</h3>
                      <p className="text-gray-300 mb-2">Proporciona una lista paso a paso de cómo reproducir el problema:</p>
                      <div className="bg-gray-950/50 rounded p-3 text-gray-300 text-sm not-prose">
                        <ol className="list-decimal list-inside space-y-1">
                          <li>Ir a...</li>
                          <li>Hacer clic en...</li>
                          <li>Escribir...</li>
                          <li>Ver error...</li>
                        </ol>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">3. Entorno</h3>
                      <p className="text-gray-300 mb-2">Menciona tu configuración:</p>
                      <ul className="text-gray-300 space-y-1 text-sm">
                        <li>• Versión de html-es: <code className="text-orange-400 bg-gray-950/50 px-2 py-1 rounded">0.1.5</code></li>
                        <li>• Versión de Node.js: <code className="text-orange-400 bg-gray-950/50 px-2 py-1 rounded">18.0.0</code></li>
                        <li>• Sistema operativo: <code className="text-orange-400 bg-gray-950/50 px-2 py-1 rounded">macOS / Windows / Linux</code></li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">4. Código de Ejemplo (si aplica)</h3>
                      <p className="text-gray-300">
                        Si el problema está relacionado con código específico, incluye un ejemplo mínimo que lo reproduzca.
                      </p>
                    </div>
                  </div>

                  <div className="mt-6">
                    <a
                      href="https://github.com/jorgoose/es-html/issues/new"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors"
                    >
                      <Bug size={20} />
                      Reportar un Problema
                      <ExternalLink size={16} />
                    </a>
                  </div>
                </div>

                {/* How to Submit Pull Requests */}
                <div className="bg-gray-900/50 rounded-lg border border-gray-800/50 p-6 mb-8">
                  <div className="flex items-center gap-2 mb-4">
                    <GitPullRequest className="w-6 h-6 text-green-400" />
                    <h2 className="text-2xl font-semibold text-white mb-0">Cómo Enviar Pull Requests</h2>
                  </div>

                  <p className="text-gray-300 mb-4">
                    Para contribuir código al proyecto, sigue estos pasos:
                  </p>

                  <div className="space-y-4 not-prose">
                    <div className="flex items-start gap-3">
                      <div className="bg-orange-500 rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 text-white font-bold text-sm">
                        1
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-1">Fork del Repositorio</h3>
                        <p className="text-gray-300">
                          Haz un fork del repositorio en GitHub y clónalo a tu máquina local.
                        </p>
                        <div className="bg-gray-950/50 rounded p-3 font-mono text-sm mt-2">
                          <code className="text-gray-300">{`git clone https://github.com/tu-usuario/es-html.git
cd es-html`}</code>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="bg-orange-500 rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 text-white font-bold text-sm">
                        2
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-1">Crea una Nueva Branch</h3>
                        <p className="text-gray-300">
                          Crea una branch descriptiva para tus cambios:
                        </p>
                        <div className="bg-gray-950/50 rounded p-3 font-mono text-sm mt-2">
                          <code className="text-gray-300">{`git checkout -b feature/nombre-descriptivo
# o
git checkout -b fix/descripcion-del-bug`}</code>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="bg-orange-500 rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 text-white font-bold text-sm">
                        3
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-1">Configura el Entorno de Desarrollo</h3>
                        <p className="text-gray-300">
                          Instala las dependencias y configura el proyecto:
                        </p>
                        <div className="bg-gray-950/50 rounded p-3 font-mono text-sm mt-2">
                          <code className="text-gray-300">{`# Transpilador (html-es)
cd html-es
npm install
npm run build

# Frontend (eshtml)
cd ../eshtml
npm install
npm run dev`}</code>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="bg-orange-500 rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 text-white font-bold text-sm">
                        4
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-1">Realiza tus Cambios</h3>
                        <p className="text-gray-300 mb-2">
                          Implementa tus cambios siguiendo las guías de estilo del proyecto:
                        </p>
                        <ul className="text-gray-300 space-y-1 text-sm">
                          <li>• Escribe código claro y bien comentado</li>
                          <li>• Sigue las convenciones de nombres existentes</li>
                          <li>• Añade tests para nuevas características</li>
                          <li>• Actualiza la documentación si es necesario</li>
                        </ul>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="bg-orange-500 rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 text-white font-bold text-sm">
                        5
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-1">Ejecuta los Tests</h3>
                        <p className="text-gray-300">
                          Asegúrate de que todos los tests pasen antes de enviar:
                        </p>
                        <div className="bg-gray-950/50 rounded p-3 font-mono text-sm mt-2">
                          <code className="text-gray-300">{`npm test
npm run lint`}</code>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="bg-orange-500 rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 text-white font-bold text-sm">
                        6
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-1">Commit y Push</h3>
                        <p className="text-gray-300">
                          Haz commit de tus cambios con mensajes descriptivos:
                        </p>
                        <div className="bg-gray-950/50 rounded p-3 font-mono text-sm mt-2">
                          <code className="text-gray-300">{`git add .
git commit -m "feat: descripción clara del cambio"
git push origin feature/nombre-descriptivo`}</code>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="bg-orange-500 rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 text-white font-bold text-sm">
                        7
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-1">Abre un Pull Request</h3>
                        <p className="text-gray-300 mb-2">
                          Ve a GitHub y crea un pull request desde tu branch. Incluye:
                        </p>
                        <ul className="text-gray-300 space-y-1 text-sm">
                          <li>• Descripción clara de los cambios</li>
                          <li>• Referencias a issues relacionados</li>
                          <li>• Capturas de pantalla si es visual</li>
                          <li>• Notas sobre cómo probar los cambios</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6">
                    <a
                      href="https://github.com/jorgoose/es-html/pulls"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors"
                    >
                      <GitPullRequest size={20} />
                      Ver Pull Requests
                      <ExternalLink size={16} />
                    </a>
                  </div>
                </div>

                {/* Code Style Guidelines */}
                <div className="bg-gray-900/50 rounded-lg border border-gray-800/50 p-6 mb-8">
                  <h2 className="text-2xl font-semibold text-white mb-4">Guías de Estilo de Código</h2>

                  <div className="space-y-4">
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">TypeScript</h3>
                      <ul className="text-gray-300 space-y-1">
                        <li>• Usa tipos explícitos cuando sea posible</li>
                        <li>• Evita el uso de <code className="text-orange-400 bg-gray-950/50 px-2 py-1 rounded">any</code></li>
                        <li>• Sigue las convenciones de ESLint configuradas</li>
                        <li>• Documenta funciones públicas con JSDoc</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">React/Next.js</h3>
                      <ul className="text-gray-300 space-y-1">
                        <li>• Usa componentes funcionales con hooks</li>
                        <li>• Nombra componentes con PascalCase</li>
                        <li>• Mantén componentes pequeños y enfocados</li>
                        <li>• Usa TypeScript para props de componentes</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">Mensajes de Commit</h3>
                      <p className="text-gray-300 mb-2">Sigue la convención de Conventional Commits:</p>
                      <div className="bg-gray-950/50 rounded p-3 text-gray-300 text-sm not-prose">
                        <code>feat: añade nueva funcionalidad</code><br />
                        <code>fix: corrige bug en transpilador</code><br />
                        <code>docs: actualiza documentación</code><br />
                        <code>style: mejora formato del código</code><br />
                        <code>refactor: refactoriza componente</code><br />
                        <code>test: añade tests faltantes</code>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Development Areas */}
                <div className="bg-gray-900/50 rounded-lg border border-gray-800/50 p-6 mb-8">
                  <h2 className="text-2xl font-semibold text-white mb-4">Áreas de Contribución</h2>
                  <p className="text-gray-300 mb-4">
                    EsHTML tiene dos áreas principales donde puedes contribuir:
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 not-prose">
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                        <Code className="w-5 h-5 text-orange-400" />
                        Transpilador (Backend)
                      </h3>
                      <p className="text-gray-300 mb-3 text-sm">
                        El núcleo del proyecto en TypeScript que convierte EsHTML a HTML.
                      </p>
                      <ul className="text-gray-300 space-y-1 text-sm">
                        <li>• Ubicación: <code className="text-orange-400 bg-gray-950/50 px-2 py-1 rounded text-xs">/html-es</code></li>
                        <li>• Lenguaje: TypeScript</li>
                        <li>• Tests: Jest</li>
                        <li>• Areas: Parser, transpilador, validación</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                        <BookOpen className="w-5 h-5 text-blue-400" />
                        Sitio Web (Frontend)
                      </h3>
                      <p className="text-gray-300 mb-3 text-sm">
                        La plataforma educativa con documentación, playground y tutoriales.
                      </p>
                      <ul className="text-gray-300 space-y-1 text-sm">
                        <li>• Ubicación: <code className="text-blue-400 bg-gray-950/50 px-2 py-1 rounded text-xs">/eshtml</code></li>
                        <li>• Framework: Next.js + React</li>
                        <li>• Estilos: Tailwind CSS</li>
                        <li>• Areas: UI, docs, ejemplos, playground</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Contact */}
                <div className="bg-gradient-to-r from-orange-500/10 to-blue-500/10 rounded-lg border border-orange-500/20 p-6 not-prose">
                  <div className="flex items-center gap-3 mb-4">
                    <Mail className="w-6 h-6 text-orange-400" />
                    <h2 className="text-2xl font-semibold text-white mb-0">Dudas?</h2>
                  </div>
                  <p className="text-gray-300 mb-4">
                    Si tienes preguntas sobre cómo contribuir o necesitas ayuda con tu pull request, no dudes en contactar:
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <a
                      href="mailto:loganjorgensen@proton.me"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors"
                    >
                      <Mail size={16} />
                      loganjorgensen@proton.me
                    </a>
                    <a
                      href="https://github.com/jorgoose/es-html/discussions"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-md transition-colors"
                    >
                      <Github size={16} />
                      GitHub Discussions
                      <ExternalLink size={14} />
                    </a>
                  </div>
                </div>

                {/* Navigation */}
                <div className="mt-16 border-t border-gray-800/50 pt-8 flex justify-between">
                  <Link
                    href="/docs/proyecto"
                    className="text-orange-500 hover:text-orange-400 flex items-center gap-1"
                  >
                    <ChevronLeft className="w-4 h-4" /> Proyecto
                  </Link>
                  <Link
                    href="/docs/proyecto/comunidad"
                    className="text-orange-500 hover:text-orange-400 flex items-center gap-1"
                  >
                    Comunidad <ChevronRight className="w-4 h-4" />
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
