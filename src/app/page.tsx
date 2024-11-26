// src/app/page.tsx
import Link from "next/link";

// GitHub and HTML icon from react-icons
import { AiOutlineHtml5, AiOutlineGithub } from "react-icons/ai";
import { Nav } from "@/components/Nav";
import CodeEditor from '@/components/CodeEditor';
import LineNumbers from '@/components/LineNumbers';

// Create a new component for the EsHTML logo
function EsHtmlLogo() {
  return (
    <div className="flex flex-col items-center justify-center w-64 h-64">
      {/* EsHTML Text */}
      {/* <div className="mb-4 text-center">
        <span className="text-5xl font-bold">
          <span className="text-white">Es</span>
          <span className="text-orange-500">HTML</span>
        </span>
      </div> */}

      {/* HTML5 Icon */}
      <div className="text-orange-500">
        <AiOutlineHtml5 className="w-72 h-72" />
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      {/* Animated Background */}
      <div
        className="fixed inset-0 z-0"
        style={{
          background: `
            linear-gradient(
              45deg,
              rgb(17, 24, 39) 0%,
              rgb(88, 28, 7) 25%,
              rgb(17, 24, 39) 50%,
              rgb(88, 28, 7) 75%,
              rgb(17, 24, 39) 100%
            )
          `,
          backgroundSize: "400% 400%",
          animation: "gradient 15s ease infinite",
        }}
      >
        <div className="absolute inset-0 bg-black/40 backdrop-blur-3xl"></div>
      </div>

      {/* Content */}
      <div className="relative z-10">
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
                Conoce el desarrollo web en tu idioma: EsHTML elimina la barrera
                del idioma permitiéndote entender HTML usando palabras en
                español que te resultan familiares.
              </p>
              <div className="flex space-x-4">
                <Link
                  href="/playground"
                  className="px-6 py-3 bg-orange-800 hover:bg-orange-600 text-white rounded-lg font-semibold tracking-wide text-shadow transition-colors"
                  style={{ textShadow: "0 1px 2px rgba(0,0,0,0.3)" }}
                >
                  Empezar con EsHTML
                </Link>
                <Link
                  href="/docs"
                  className="px-6 py-3 bg-gray-700 hover:bg-gray-600 text-white rounded-lg font-semibold tracking-wide text-shadow transition-colors"
                  style={{ textShadow: "0 1px 2px rgba(0,0,0,0.3)" }}
                >
                  Tutorial Interactivo
                </Link>
              </div>
            </div>

            {/* Right side - Logo/Visual */}
            <div className="lg:w-1/2 mt-12 lg:mt-0 flex items-center justify-center">
              <EsHtmlLogo />
            </div>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
          <div className="grid md:grid-cols-3 gap-6">
            <FeatureCard
              title="Sintaxis en Español"
              description="EsHTML es ideal para personas hispanohablantes que quieren aprender conceptos básicos de desarrollo web usando etiquetas en Español"
            />
            <FeatureCard
              title="Compatibilidad Total"
              description="EsHTML se convierte automáticamente a HTML estándar, manteniendo total compatibilidad con navegadores y herramientas existentes"
            />
            <FeatureCard
              title="Basado en HTML"
              description="EsHTML aprovecha la simplicidad de HTML, permitiéndote entender los conceptos fundamentales del desarrollo web sin la barrera del idioma"
            />
          </div>
        </div>

        {/* Code Example Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
          <h2 className="text-4xl font-semibold text-center text-white mb-8">
            HTML con sintaxis en Español
          </h2>
          <p className="text-gray-400 text-center mb-12">
            Escribe código HTML en Español y se convertirá automáticamente a
            HTML estándar
          </p>
          <CodeExample />
        </div>
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
  const eshtmlCode = `<html>
  <e1>¡Hola Mundo!</e1>
  <cuerpo>
    <p>Este es un ejemplo de EsHTML</p>
  </cuerpo>
</html>`;

  const transpiledHtml = `<html>
  <h1>¡Hola Mundo!</h1>
  <body>
    <p>Este es un ejemplo de EsHTML</p>
  </body>
</html>`;

  return (
    <div className="grid lg:grid-cols-3 gap-6">
      {/* EsHTML Code Snippet */}
      <div className="rounded-lg overflow-hidden">
        {/* Editor Header */}
        <div className="bg-gray-950 border-b border-gray-800 flex items-center">
          <div className="px-4 py-2 bg-gray-900 border-r border-gray-800 flex items-center">
            <span className="text-gray-300 text-sm font-medium">entrada.eshtml</span>
          </div>
        </div>
        {/* Code Content */}
        <div className="bg-gray-900/50 flex">
          <LineNumbers count={eshtmlCode.split('\n').length} />
          <CodeEditor
            code={eshtmlCode}
            readOnly={true}
          />
        </div>
        {/* Status Bar */}
        <div className="bg-gray-800 text-gray-400 text-xs px-2 py-1 flex justify-between">
          <span>EsHTML</span>
          <span>UTF-8</span>
        </div>
      </div>

      {/* Transpiled HTML Code Snippet */}
      <div className="rounded-lg overflow-hidden">
        {/* Editor Header */}
        <div className="bg-gray-950 border-b border-gray-800 flex items-center">
          <div className="px-4 py-2 bg-gray-900 border-r border-gray-800 flex items-center">
            <span className="text-gray-300 text-sm font-medium">salida.html</span>
          </div>
        </div>
        {/* Code Content */}
        <div className="bg-gray-900/50 flex">
          <LineNumbers count={transpiledHtml.split('\n').length} />
          <CodeEditor
            code={transpiledHtml}
            readOnly={true}
          />
        </div>
        {/* Status Bar */}
        <div className="bg-gray-800 text-gray-400 text-xs px-2 py-1 flex justify-between">
          <span>HTML</span>
          <span>UTF-8</span>
        </div>
      </div>

      {/* Browser Preview */}
      <div className="rounded-lg overflow-hidden">
        {/* Browser Header */}
        <div className="bg-gray-950 border-b border-gray-800 flex items-center px-4 py-2">
          <div className="flex items-center space-x-2">
            <div className="flex space-x-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-red-500/80"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-green-500/80"></div>
            </div>
            <div className="ml-4 bg-gray-900 rounded px-3 py-1">
              <span className="text-gray-400 text-xs">Vista Previa</span>
            </div>
          </div>
        </div>
        {/* Browser Content */}
        <div className="bg-white h-full overflow-auto shadow-inner">
          <iframe
            srcDoc={transpiledHtml}
            title="Vista Previa"
            className="w-full h-full"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
