// src/app/tutorial/formatos/listas/page.tsx
"use client";

import { useState, useMemo } from "react";
import CodeEditor from "@/components/CodeEditor";
import LineNumbers from "@/components/LineNumbers";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { EsHTMLTranspiler } from "html-es";
import { TutorialLayout } from '@/components/TutorialLayout';

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
                    <LineNumbers count={code.split("\n").length} />
                    <CodeEditor code={code} readOnly={true} />
                </div>
            </div>

            <div className="rounded-xl overflow-hidden shadow-2xl bg-gray-950/50 backdrop-blur-sm border border-gray-800/50">
                <div className="bg-gray-950/80 border-b border-gray-800 px-4 py-3">
                    <span className="text-gray-300 text-sm font-medium">HTML</span>
                </div>
                <div className="bg-gray-900/50 flex overflow-hidden h-[200px]">
                    <LineNumbers count={html.split("\n").length} />
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
                    <iframe srcDoc={html} title="Preview" className="w-full h-full" />
                </div>
            </div>
        </div>
    );
}

export default function Listas() {
    const [example] = useState({
        eshtml: `<e1>Tipos de Frutas</e1>
<ld>
  <el>Manzanas</el>
  <el>Plátanos</el>
  <el>Naranjas</el>
</ld>

<e2>Pasos para Hacer una Tarta</e2>
<lo>
  <el>Precalentar el horno</el>
  <el>Mezclar los ingredientes</el>
  <el>Hornear durante 30 minutos</el>
</lo>`,
    });

    const [userCode, setUserCode] = useState(`<e1>Mi Lista de Compras</e1>
<!-- Escribe aquí tu lista de compras usando <ld> y <el> para una lista desordenada... -->`);

    const transpiler = useMemo(() => new EsHTMLTranspiler(), []);
    const html = useMemo(() => transpiler.transpile(userCode), [userCode, transpiler]);

    return (
        <TutorialLayout 
            activePath="/tutorial/formatos/listas"
            lessonNumber={10}
            totalLessons={22}
        >
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Listas
            </h1>

            <div className="space-y-6">
                <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-700/50">
                    <p className="text-lg text-gray-300">
                        Además de dar énfasis al texto, también podemos organizar la
                        información usando listas. Las listas nos ayudan a presentar
                        elementos relacionados de manera clara y ordenada.
                    </p>
                </div>

                <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-700/50">
                    <p className="text-lg text-gray-300">
                        Las listas son una excelente manera de agrupar elementos
                        relacionados. Hay dos tipos principales de listas:
                    </p>
                    <ul className="mt-4 space-y-3 text-gray-300">
                        <li>
                            • <code className="text-orange-400">&lt;ld&gt;</code> para
                            listas desordenadas (sin números)
                        </li>
                        <li>
                            • <code className="text-orange-400">&lt;lo&gt;</code> para
                            listas ordenadas (con números)
                        </li>
                    </ul>
                </div>

                <h2 className="text-2xl font-bold text-white mt-8 mb-4">
                    ¿Cómo se usan?
                </h2>
                <div className="bg-gray-800/50 p-6 rounded-lg">
                    <ul className="space-y-3 text-gray-300">
                        <li>
                            • Usa <code className="text-orange-400">&lt;ld&gt;</code>{" "}
                            para listas donde el orden no importa
                        </li>
                        <li>
                            • Usa <code className="text-orange-400">&lt;lo&gt;</code>{" "}
                            para listas donde el orden es importante
                        </li>
                        <li>
                            • Cada elemento de la lista se define con{" "}
                            <code className="text-orange-400">&lt;el&gt;</code>
                        </li>
                    </ul>
                </div>

                <h2 className="text-2xl font-bold text-white mt-8 mb-4">
                    Ejemplo
                </h2>
                <CodeWithPreview code={example.eshtml} />

                <h2 className="text-2xl font-bold text-white mt-12 mb-4">
                    ¡Ahora te toca a ti!
                </h2>
                <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-700/50 mb-6">
                    <p className="text-lg text-gray-300">
                        Crea una lista de compras usando{" "}
                        <code className="text-orange-400">&lt;ld&gt;</code> y{" "}
                        <code className="text-orange-400">&lt;el&gt;</code> para una
                        lista desordenada.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                    <div className="rounded-xl overflow-hidden shadow-2xl bg-gray-950/50 backdrop-blur-sm border border-gray-800/50">
                        <div className="bg-gray-950/80 border-b border-gray-800 px-4 py-3">
                            <span className="text-gray-300 text-sm font-medium">
                                Tu código EsHTML
                            </span>
                        </div>
                        <div className="bg-gray-900/50 flex overflow-hidden h-[200px]">
                            <LineNumbers count={userCode.split("\n").length} />
                            <CodeEditor code={userCode} onChange={setUserCode} />
                        </div>
                    </div>

                    <div className="rounded-xl overflow-hidden shadow-2xl bg-gray-950/50 backdrop-blur-sm border border-gray-800/50">
                        <div className="bg-gray-950/80 border-b border-gray-800 px-4 py-3">
                            <span className="text-gray-300 text-sm font-medium">
                                HTML
                            </span>
                        </div>
                        <div className="bg-gray-900/50 flex overflow-hidden h-[200px]">
                            <LineNumbers count={html.split("\n").length} />
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
                                    <span className="text-gray-400 text-xs">
                                        Vista Previa
                                    </span>
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

                <div className="mt-12 flex flex-col sm:flex-row justify-between gap-3">
                    <Link
                        href="/tutorial/formatos/enfasis-y-estilos"
                        className="inline-flex items-center justify-center px-4 py-2 sm:px-6 sm:py-3 bg-gray-700 text-white font-semibold rounded-md hover:bg-gray-600 transition-colors text-sm sm:text-base"
                    >
                        <ChevronLeft className="mr-2 w-4 h-4 sm:w-5 sm:h-5" />
                        <span>Anterior: Énfasis y Estilos</span>
                    </Link>
                    <Link
                        href="/tutorial/formatos/citas-y-codigo"
                        className="inline-flex items-center justify-center px-4 py-2 sm:px-6 sm:py-3 bg-orange-500 text-white font-semibold rounded-md hover:bg-orange-600 transition-colors text-sm sm:text-base"
                    >
                        <span>Siguiente: Citas y Código</span>
                        <ChevronRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
                    </Link>
                </div>
            </div>
        </TutorialLayout>
    );
}
