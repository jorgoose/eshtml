import Link from 'next/link';
import { Nav } from '@/components/Nav';
import { DocsSidebar } from '@/components/DocsSidebar';
import { ChevronRight, ChevronLeft, Users, MessageCircle, Github, Mail, Heart, Lightbulb, Share2, BookOpen, HelpCircle, Star, ExternalLink } from 'lucide-react';

export default function ComunidadPage() {
  return (
    <div className="min-h-screen bg-[#111827]">
      <Nav />
      <div className="flex pt-16">
        <DocsSidebar activePath="/docs/proyecto/comunidad" />

        <div className="flex-1 md:ml-64">
          <div className="max-w-[1200px] mx-auto">
            <div className="px-4 md:px-16 py-8 md:py-12">
              {/* Breadcrumb */}
              <div className="flex items-center text-sm text-gray-400 mb-8">
                <Link href="/docs" className="hover:text-white">Docs</Link>
                <ChevronRight className="w-4 h-4 mx-2" />
                <Link href="/docs/proyecto" className="hover:text-white">Proyecto</Link>
                <ChevronRight className="w-4 h-4 mx-2" />
                <span className="text-white">Comunidad</span>
              </div>

              <article className="prose prose-invert max-w-4xl">
                <div className="flex items-center gap-3 mb-4">
                  <Users className="w-10 h-10 text-blue-400" />
                  <h1 className="text-4xl font-bold text-white mb-0">Comunidad EsHTML</h1>
                </div>
                <p className="text-xl text-gray-300 leading-relaxed mb-12">
                  Únete a la comunidad de desarrolladores y educadores que hacen el desarrollo web más accesible para hablantes de español.
                </p>

                {/* Welcome */}
                <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-lg border border-blue-500/20 p-6 mb-8 not-prose">
                  <p className="text-gray-300 mb-0">
                    <strong className="text-white">Bienvenido a la comunidad EsHTML!</strong> Ya seas estudiante, educador, o desarrollador, hay un lugar para ti aquí. Juntos estamos construyendo herramientas que eliminan barreras en el aprendizaje de tecnología.
                  </p>
                </div>

                {/* Ways to Participate */}
                <div className="mb-12">
                  <h2 className="text-2xl font-semibold text-white mb-6">Formas de Participar</h2>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 not-prose">
                    {/* GitHub Discussions */}
                    <div className="bg-gray-900/50 rounded-lg border border-gray-800/50 p-6 hover:border-blue-500/30 transition-colors">
                      <div className="flex items-center gap-3 mb-3">
                        <MessageCircle className="w-6 h-6 text-blue-400" />
                        <h3 className="text-xl font-semibold text-white">GitHub Discussions</h3>
                      </div>
                      <p className="text-gray-300 mb-4">
                        El lugar principal para discusiones sobre EsHTML. Comparte ideas, haz preguntas y conecta con otros usuarios.
                      </p>
                      <a
                        href="https://github.com/jorgoose/es-html/discussions"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors text-sm"
                      >
                        Unirse a Discussions
                        <ExternalLink size={14} />
                      </a>
                    </div>

                    {/* Star on GitHub */}
                    <div className="bg-gray-900/50 rounded-lg border border-gray-800/50 p-6 hover:border-orange-500/30 transition-colors">
                      <div className="flex items-center gap-3 mb-3">
                        <Star className="w-6 h-6 text-orange-400" />
                        <h3 className="text-xl font-semibold text-white">Apoya el Proyecto</h3>
                      </div>
                      <p className="text-gray-300 mb-4">
                        Dale una estrella al repositorio en GitHub para mostrar tu apoyo y ayudar a otros a descubrir EsHTML.
                      </p>
                      <a
                        href="https://github.com/jorgoose/es-html"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 bg-orange-600 hover:bg-orange-700 text-white rounded-md transition-colors text-sm"
                      >
                        Dar Estrella
                        <ExternalLink size={14} />
                      </a>
                    </div>

                    {/* Share Experiences */}
                    <div className="bg-gray-900/50 rounded-lg border border-gray-800/50 p-6 hover:border-green-500/30 transition-colors">
                      <div className="flex items-center gap-3 mb-3">
                        <Share2 className="w-6 h-6 text-green-400" />
                        <h3 className="text-xl font-semibold text-white">Comparte tu Experiencia</h3>
                      </div>
                      <p className="text-gray-300 mb-4">
                        Escribe sobre tu experiencia usando EsHTML en tus clases, proyectos o aprendizaje personal.
                      </p>
                      <div className="flex gap-2">
                        <Link
                          href="/playground"
                          className="inline-flex items-center gap-2 px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-md transition-colors text-sm"
                        >
                          Crear Ejemplo
                        </Link>
                      </div>
                    </div>

                    {/* Help Others */}
                    <div className="bg-gray-900/50 rounded-lg border border-gray-800/50 p-6 hover:border-purple-500/30 transition-colors">
                      <div className="flex items-center gap-3 mb-3">
                        <HelpCircle className="w-6 h-6 text-purple-400" />
                        <h3 className="text-xl font-semibold text-white">Ayuda a Otros</h3>
                      </div>
                      <p className="text-gray-300 mb-4">
                        Responde preguntas, comparte consejos y ayuda a nuevos usuarios a comenzar con EsHTML.
                      </p>
                      <a
                        href="https://github.com/jorgoose/es-html/discussions/categories/q-a"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-md transition-colors text-sm"
                      >
                        Ver Preguntas
                        <ExternalLink size={14} />
                      </a>
                    </div>
                  </div>
                </div>

                {/* How to Get Help */}
                <div className="bg-gray-900/50 rounded-lg border border-gray-800/50 p-6 mb-8">
                  <div className="flex items-center gap-2 mb-4">
                    <HelpCircle className="w-6 h-6 text-blue-400" />
                    <h2 className="text-2xl font-semibold text-white mb-0">Cómo Obtener Ayuda</h2>
                  </div>

                  <p className="text-gray-300 mb-4">
                    Si necesitas ayuda con EsHTML, hay varias formas de obtenerla:
                  </p>

                  <div className="space-y-4 not-prose">
                    <div className="flex items-start gap-3">
                      <div className="bg-blue-500/10 rounded p-2 flex-shrink-0">
                        <BookOpen className="w-5 h-5 text-blue-400" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-1">Consulta la Documentación</h3>
                        <p className="text-gray-300 text-sm">
                          La mayoría de las preguntas comunes están respondidas en nuestra documentación completa.
                        </p>
                        <Link
                          href="/docs"
                          className="text-blue-400 hover:text-blue-300 text-sm inline-flex items-center gap-1 mt-1"
                        >
                          Ver Documentación <ChevronRight className="w-3 h-3" />
                        </Link>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="bg-green-500/10 rounded p-2 flex-shrink-0">
                        <MessageCircle className="w-5 h-5 text-green-400" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-1">Busca en Discussions</h3>
                        <p className="text-gray-300 text-sm">
                          Es probable que alguien ya haya hecho tu pregunta. Busca en GitHub Discussions primero.
                        </p>
                        <a
                          href="https://github.com/jorgoose/es-html/discussions"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-400 hover:text-blue-300 text-sm inline-flex items-center gap-1 mt-1"
                        >
                          Buscar Discussions <ExternalLink className="w-3 h-3" />
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="bg-purple-500/10 rounded p-2 flex-shrink-0">
                        <Lightbulb className="w-5 h-5 text-purple-400" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-1">Haz una Pregunta</h3>
                        <p className="text-gray-300 text-sm">
                          Si no encuentras la respuesta, crea una nueva discusión en la categoría Q&A.
                        </p>
                        <a
                          href="https://github.com/jorgoose/es-html/discussions/new?category=q-a"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-400 hover:text-blue-300 text-sm inline-flex items-center gap-1 mt-1"
                        >
                          Hacer Pregunta <ExternalLink className="w-3 h-3" />
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="bg-orange-500/10 rounded p-2 flex-shrink-0">
                        <Mail className="w-5 h-5 text-orange-400" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-1">Contacto Directo</h3>
                        <p className="text-gray-300 text-sm mb-1">
                          Para consultas privadas o colaboraciones, contacta directamente:
                        </p>
                        <a
                          href="mailto:loganjorgensen@proton.me"
                          className="text-blue-400 hover:text-blue-300 text-sm inline-flex items-center gap-1"
                        >
                          loganjorgensen@proton.me
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Community Guidelines */}
                <div className="bg-gray-900/50 rounded-lg border border-gray-800/50 p-6 mb-8">
                  <div className="flex items-center gap-2 mb-4">
                    <Heart className="w-6 h-6 text-red-400" />
                    <h2 className="text-2xl font-semibold text-white mb-0">Lineamientos de la Comunidad</h2>
                  </div>

                  <p className="text-gray-300 mb-4">
                    Para mantener una comunidad acogedora y productiva, pedimos que todos sigan estos lineamientos:
                  </p>

                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="text-green-400 flex-shrink-0">✓</div>
                      <div>
                        <strong className="text-white">Sé respetuoso</strong>
                        <p className="text-gray-300 text-sm">
                          Trata a todos con respeto. No toleramos acoso, discriminación o comportamiento abusivo.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="text-green-400 flex-shrink-0">✓</div>
                      <div>
                        <strong className="text-white">Sé constructivo</strong>
                        <p className="text-gray-300 text-sm">
                          Ofrece crítica constructiva. Si no estás de acuerdo con algo, explica por qué de manera respetuosa.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="text-green-400 flex-shrink-0">✓</div>
                      <div>
                        <strong className="text-white">Sé útil</strong>
                        <p className="text-gray-300 text-sm">
                          Ayuda a otros cuando puedas. Todos comenzamos en algún lugar.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="text-green-400 flex-shrink-0">✓</div>
                      <div>
                        <strong className="text-white">Sé claro</strong>
                        <p className="text-gray-300 text-sm">
                          Proporciona contexto y detalles cuando hagas preguntas o reportes problemas.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="text-green-400 flex-shrink-0">✓</div>
                      <div>
                        <strong className="text-white">Sé paciente</strong>
                        <p className="text-gray-300 text-sm">
                          Recuerda que todos son voluntarios. Las respuestas pueden tomar tiempo.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Share Your Story */}
                <div className="bg-gray-900/50 rounded-lg border border-gray-800/50 p-6 mb-8">
                  <div className="flex items-center gap-2 mb-4">
                    <Share2 className="w-6 h-6 text-green-400" />
                    <h2 className="text-2xl font-semibold text-white mb-0">Comparte tu Historia</h2>
                  </div>

                  <p className="text-gray-300 mb-4">
                    Nos encantaría escuchar cómo estás usando EsHTML. Tus experiencias pueden inspirar y ayudar a otros:
                  </p>

                  <div className="space-y-4 not-prose">
                    <div className="bg-gray-950/50 rounded-lg p-4">
                      <h3 className="text-lg font-semibold text-white mb-2">Para Educadores</h3>
                      <p className="text-gray-300 text-sm mb-2">
                        Estás usando EsHTML en tus clases? Comparte tu experiencia:
                      </p>
                      <ul className="text-gray-300 text-sm space-y-1">
                        <li>• Cómo lo has integrado en tu currículo</li>
                        <li>• Reacciones y progreso de tus estudiantes</li>
                        <li>• Recursos o lecciones que has creado</li>
                        <li>• Sugerencias para otros educadores</li>
                      </ul>
                    </div>

                    <div className="bg-gray-950/50 rounded-lg p-4">
                      <h3 className="text-lg font-semibold text-white mb-2">Para Estudiantes</h3>
                      <p className="text-gray-300 text-sm mb-2">
                        Aprendiendo desarrollo web con EsHTML? Cuéntanos:
                      </p>
                      <ul className="text-gray-300 text-sm space-y-1">
                        <li>• Tu experiencia de aprendizaje</li>
                        <li>• Proyectos que has construido</li>
                        <li>• Desafíos que has superado</li>
                        <li>• Consejos para otros estudiantes</li>
                      </ul>
                    </div>

                    <div className="bg-gray-950/50 rounded-lg p-4">
                      <h3 className="text-lg font-semibold text-white mb-2">Para Desarrolladores</h3>
                      <p className="text-gray-300 text-sm mb-2">
                        Usando EsHTML en tus proyectos? Comparte:
                      </p>
                      <ul className="text-gray-300 text-sm space-y-1">
                        <li>• Casos de uso interesantes</li>
                        <li>• Herramientas o integraciones que has creado</li>
                        <li>• Mejoras que has implementado</li>
                        <li>• Ideas para nuevas características</li>
                      </ul>
                    </div>
                  </div>

                  <div className="mt-4">
                    <a
                      href="https://github.com/jorgoose/es-html/discussions/categories/show-and-tell"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors"
                    >
                      Compartir Historia
                      <ExternalLink size={16} />
                    </a>
                  </div>
                </div>

                {/* Future Plans */}
                <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-lg border border-blue-500/20 p-6 mb-8 not-prose">
                  <div className="flex items-center gap-3 mb-4">
                    <Lightbulb className="w-6 h-6 text-yellow-400" />
                    <h2 className="text-2xl font-semibold text-white mb-0">Planes Futuros</h2>
                  </div>
                  <p className="text-gray-300 mb-4">
                    Estamos explorando formas adicionales de conectar la comunidad:
                  </p>

                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-gray-300">
                      <span className="text-blue-400">🔮</span>
                      <span>Servidor de Discord para chat en tiempo real</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-300">
                      <span className="text-purple-400">🔮</span>
                      <span>Foro dedicado para discusiones más estructuradas</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-300">
                      <span className="text-green-400">🔮</span>
                      <span>Eventos virtuales y sesiones de Q&A en vivo</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-300">
                      <span className="text-orange-400">🔮</span>
                      <span>Newsletter con actualizaciones y recursos</span>
                    </div>
                  </div>

                  <p className="text-gray-300 mt-4 text-sm">
                    La comunidad está creciendo, y queremos asegurarnos de tener las herramientas adecuadas para apoyarla. Comparte tus preferencias en GitHub Discussions.
                  </p>
                </div>

                {/* Call to Action */}
                <div className="bg-gray-900/50 rounded-lg border border-gray-800/50 p-6 mb-8">
                  <h2 className="text-2xl font-semibold text-white mb-4">Únete a la Comunidad</h2>
                  <p className="text-gray-300 mb-6">
                    Comienza a participar hoy. Cada voz cuenta en hacer el desarrollo web más accesible.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3 not-prose">
                    <a
                      href="https://github.com/jorgoose/es-html/discussions"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 px-4 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
                    >
                      <MessageCircle size={18} />
                      Discussions
                      <ExternalLink size={14} />
                    </a>
                    <a
                      href="https://github.com/jorgoose/es-html"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 px-4 py-3 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors"
                    >
                      <Github size={18} />
                      GitHub
                      <ExternalLink size={14} />
                    </a>
                    <Link
                      href="/docs/proyecto/contribuir"
                      className="flex items-center justify-center gap-2 px-4 py-3 bg-orange-600 hover:bg-orange-700 text-white rounded-lg transition-colors"
                    >
                      Contribuir
                      <ChevronRight size={16} />
                    </Link>
                  </div>
                </div>

                {/* Navigation */}
                <div className="mt-16 border-t border-gray-800/50 pt-8 flex justify-between">
                  <Link
                    href="/docs/proyecto/contribuir"
                    className="text-orange-500 hover:text-orange-400 flex items-center gap-1"
                  >
                    <ChevronLeft className="w-4 h-4" /> Contribuir
                  </Link>
                  <Link
                    href="/docs/referencia"
                    className="text-orange-500 hover:text-orange-400 flex items-center gap-1"
                  >
                    Referencia <ChevronRight className="w-4 h-4" />
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
