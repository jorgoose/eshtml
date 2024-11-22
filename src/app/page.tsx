// src/app/page.tsx
import Link from "next/link";
import {
  Github, // For GitHub link
  MessageCircle, // For Discord/community
  Search, // For docs search
  Moon, // For dark mode toggle
  Menu, // For mobile menu
} from "lucide-react";

function Nav() {
  return (
    <nav className="fixed w-full bg-gray-900/80 backdrop-blur-sm border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold">
              <span className="text-white">Es</span>
              <span className="text-orange-500">HTML</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            <Link
              href="/docs"
              className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm flex items-center gap-2"
            >
              <Search className="w-4 h-4" />
              Docs
            </Link>
            <a
              href="https://github.com/yourusername/eshtml"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm flex items-center gap-2"
            >
              <Github className="w-4 h-4" />
              GitHub
            </a>
            <a
              href="https://discord.gg/yourdiscord"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm flex items-center gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              Community
            </a>
            <button
              className="text-gray-300 hover:text-white p-2 rounded-md"
              aria-label="Toggle dark mode"
            >
              <Moon className="w-5 h-5" />
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              className="text-gray-300 hover:text-white p-2 rounded-md"
              aria-label="Open menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <Nav />
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-32">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          {/* Left side - Text */}
          <div className="space-y-8 lg:w-1/2">
            <h1 className="text-7xl font-bold">
              <span className="text-white">Es</span>
              <span className="text-orange-500">HTML</span>
            </h1>
            <h2 className="text-4xl text-gray-100 font-light leading-tight">
              HTML nativo en Español
            </h2>
            <p className="text-gray-400 text-xl">
              Conoce el desarrollo web en tu idioma: EsHTML elimina la barrera del idioma 
              permitiéndote entender HTML usando palabras en español que te resultan familiares.
            </p>
            <div className="flex space-x-4">
              <Link
                href="/playground"
                className="px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-lg font-medium transition-colors"
              >
                Empezar con EsHTML
              </Link>
              <Link
                href="/docs"
                className="px-6 py-3 bg-gray-700 hover:bg-gray-600 text-white rounded-lg font-medium transition-colors"
              >
                Tutorial Interactivo
              </Link>
            </div>
          </div>

          {/* Right side - Logo/Visual */}
          <div className="lg:w-1/2 mt-12 lg:mt-0">
            <div className="bg-orange-500 w-64 h-64 rounded-3xl mx-auto">
              <div className="p-12">
                <span className="text-white text-8xl font-bold">Es</span>
                <span className="text-white text-6xl">HTML</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Feature Cards */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="grid md:grid-cols-3 gap-6">
          <FeatureCard
            title="Sintaxis en Español"
            description="EsHTML es ideal para personas hispanohablantes que quieren comenzar con desarrollo web, ya que las etiquetas están escritas en Español"
          />
          <FeatureCard
            title="Compatibilidad Total"
            description="EsHTML se convierte automáticamente a HTML estándar, manteniendo total compatibilidad con navegadores y herramientas existentes"
          />
          <FeatureCard
            title="Basado en HTML"
            description="EsHTML aprovecha toda la potencia de HTML, permitiéndote aprender desarrollo web sin la barrera del idioma"
          />
        </div>
      </div>

      {/* Code Example Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <h2 className="text-4xl font-semibold text-center text-white mb-8">
          HTML con sintaxis en Español
        </h2>
        <p className="text-gray-400 text-center mb-12">
          Escribe código HTML en Español y se convertirá automáticamente a HTML
          estándar
        </p>
        <CodeExample />
      </div>
    </main>
  );
}

function FeatureCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="p-6 rounded-xl bg-gray-800/50 backdrop-blur-sm border border-gray-700">
      <h3 className="text-xl font-semibold text-white mb-3">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  );
}

function CodeExample() {
  return (
    <div className="grid lg:grid-cols-3 gap-6">
      {/* EsHTML Editor - Col 1 */}
      <div className="rounded-lg overflow-hidden">
        {/* Editor Tab Bar */}
        <div className="bg-gray-950 border-b border-gray-800 flex items-center">
          <div className="px-4 py-2 bg-gray-900 border-r border-gray-800 flex items-center">
            <span className="text-gray-400 text-sm">ejemplo.eshtml</span>
          </div>
        </div>
        
        {/* Editor Content */}
        <div className="bg-gray-900 p-4 font-mono text-sm flex">
          {/* Line Numbers */}
          <div className="text-gray-600 pr-4 select-none text-right">
            {Array.from({length: 9}).map((_, i) => (
              <div key={i}>{i + 1}</div>
            ))}
          </div>
          
          {/* Code */}
          <pre className="text-gray-300">
            <code>{`<titulo>Mi Página</titulo>
<cuerpo>
  <encabezado>
    <h1>¡Hola Mundo!</h1>
  </encabezado>
  
  <seccion clase="contenido">
    <parrafo>
      Este es un ejemplo de EsHTML
    </parrafo>
  </seccion>
</cuerpo>`}</code>
          </pre>
        </div>

        {/* Status Bar */}
        <div className="bg-gray-800 text-gray-400 text-xs px-2 py-1 flex justify-between">
          <span>EsHTML</span>
          <span>UTF-8</span>
        </div>
      </div>

      {/* HTML Editor - Col 2 */}
      <div className="rounded-lg overflow-hidden">
        {/* Editor Tab Bar */}
        <div className="bg-gray-950 border-b border-gray-800 flex items-center">
          <div className="px-4 py-2 bg-gray-900 border-r border-gray-800 flex items-center">
            <span className="text-gray-400 text-sm">example.html</span>
          </div>
        </div>

        {/* Editor Content */}
        <div className="bg-gray-900 p-4 font-mono text-sm flex">
          {/* Line Numbers */}
          <div className="text-gray-600 pr-4 select-none text-right">
            {Array.from({length: 9}).map((_, i) => (
              <div key={i}>{i + 1}</div>
            ))}
          </div>

          {/* Code */}
          <pre className="text-gray-300">
            <code>{`<title>Mi Página</title>
<body>
  <header>
    <h1>¡Hola Mundo!</h1>
  </header>
  
  <section class="contenido">
    <p>
      Este es un ejemplo de EsHTML
    </p>
  </section>
</body>`}</code>
          </pre>
        </div>

        {/* Status Bar */}
        <div className="bg-gray-800 text-gray-400 text-xs px-2 py-1 flex justify-between">
          <span>HTML</span>
          <span>UTF-8</span>
        </div>
      </div>

      {/* Browser Preview - Col 3 */}
      <div className="rounded-lg overflow-hidden">
        {/* Browser Chrome */}
        <div className="bg-gray-950 border-b border-gray-800 flex items-center px-4 py-2">
          <div className="flex items-center space-x-2">
            <div className="flex space-x-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-red-500/80"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-green-500/80"></div>
            </div>
            <div className="ml-4 bg-gray-900 rounded px-3 py-1">
              <span className="text-gray-400 text-xs">localhost:3000</span>
            </div>
          </div>
        </div>

        {/* Browser Content */}
        <div className="bg-gray-900 p-6">
          <h1 className="text-2xl font-bold text-white mb-4">¡Hola Mundo!</h1>
          <p className="text-gray-300">Este es un ejemplo de EsHTML</p>
        </div>
      </div>
    </div>
  );
}
