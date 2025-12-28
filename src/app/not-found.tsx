// src/app/not-found.tsx
import Link from 'next/link';
import { Home, BookOpen, Code, Search } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center px-4">
      <div className="max-w-2xl w-full text-center">
        {/* Animated 404 */}
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600 animate-pulse">
            404
          </h1>
          <div className="mt-4 flex justify-center gap-2">
            <div className="w-3 h-3 bg-orange-500 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
            <div className="w-3 h-3 bg-orange-500 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
            <div className="w-3 h-3 bg-orange-500 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
          </div>
        </div>

        {/* Error Message */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            ¡Página no encontrada!
          </h2>
          <p className="text-lg text-gray-300 mb-2">
            Lo sentimos, no pudimos encontrar la página que buscas.
          </p>
          <p className="text-gray-400">
            Es posible que la URL esté mal escrita o que la página haya sido movida.
          </p>
        </div>

        {/* Code Example - Fun 404 in EsHTML */}
        <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 mb-8">
          <p className="text-sm text-gray-400 mb-3">Error 404 en EsHTML:</p>
          <div className="bg-gray-900 rounded-lg p-4 text-left">
            <code className="text-orange-400 text-sm">
              <span className="text-gray-500">&lt;</span>
              <span className="text-orange-400">error</span>
              <span className="text-gray-500">&gt;</span>
              <br />
              <span className="ml-4 text-gray-500">&lt;</span>
              <span className="text-orange-400">código</span>
              <span className="text-gray-500">&gt;</span>
              <span className="text-white">404</span>
              <span className="text-gray-500">&lt;/</span>
              <span className="text-orange-400">código</span>
              <span className="text-gray-500">&gt;</span>
              <br />
              <span className="ml-4 text-gray-500">&lt;</span>
              <span className="text-orange-400">mensaje</span>
              <span className="text-gray-500">&gt;</span>
              <span className="text-white">Página no encontrada</span>
              <span className="text-gray-500">&lt;/</span>
              <span className="text-orange-400">mensaje</span>
              <span className="text-gray-500">&gt;</span>
              <br />
              <span className="text-gray-500">&lt;/</span>
              <span className="text-orange-400">error</span>
              <span className="text-gray-500">&gt;</span>
            </code>
          </div>
        </div>

        {/* Navigation Options */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
          <Link
            href="/"
            className="flex items-center justify-center gap-3 px-6 py-4 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg transition-colors group"
          >
            <Home className="w-5 h-5 group-hover:scale-110 transition-transform" />
            <span>Volver al Inicio</span>
          </Link>

          <Link
            href="/tutorial"
            className="flex items-center justify-center gap-3 px-6 py-4 bg-gray-700 hover:bg-gray-600 text-white font-semibold rounded-lg transition-colors group"
          >
            <BookOpen className="w-5 h-5 group-hover:scale-110 transition-transform" />
            <span>Ver Tutoriales</span>
          </Link>

          <Link
            href="/playground"
            className="flex items-center justify-center gap-3 px-6 py-4 bg-gray-700 hover:bg-gray-600 text-white font-semibold rounded-lg transition-colors group"
          >
            <Code className="w-5 h-5 group-hover:scale-110 transition-transform" />
            <span>Probar el Playground</span>
          </Link>

          <Link
            href="/docs"
            className="flex items-center justify-center gap-3 px-6 py-4 bg-gray-700 hover:bg-gray-600 text-white font-semibold rounded-lg transition-colors group"
          >
            <Search className="w-5 h-5 group-hover:scale-110 transition-transform" />
            <span>Buscar en Docs</span>
          </Link>
        </div>

        {/* Helpful Links */}
        <div className="border-t border-gray-700 pt-6">
          <p className="text-sm text-gray-400 mb-3">Enlaces útiles:</p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <Link href="/docs/introduccion/que-es-eshtml" className="text-orange-400 hover:text-orange-300 transition-colors">
              ¿Qué es EsHTML?
            </Link>
            <span className="text-gray-600">•</span>
            <Link href="/docs/referencia/etiquetas" className="text-orange-400 hover:text-orange-300 transition-colors">
              Referencia de Etiquetas
            </Link>
            <span className="text-gray-600">•</span>
            <Link href="/docs/herramientas/npm" className="text-orange-400 hover:text-orange-300 transition-colors">
              Paquete NPM
            </Link>
            <span className="text-gray-600">•</span>
            <Link href="/docs/proyecto/comunidad" className="text-orange-400 hover:text-orange-300 transition-colors">
              Comunidad
            </Link>
          </div>
        </div>

        {/* Footer Note */}
        <div className="mt-8">
          <p className="text-xs text-gray-500">
            Si crees que esto es un error, por favor{' '}
            <Link href="/docs/proyecto/contribuir" className="text-orange-400 hover:text-orange-300">
              repórtalo aquí
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
