// src/app/docs/referencia/atributos/page.tsx
'use client';
import { useState } from 'react';
import Link from 'next/link';
import { ChevronRight, Search } from 'lucide-react';
import { Nav } from '@/components/Nav';
import { DocsSidebar } from '@/components/DocsSidebar';
import { attributeData } from '@/lib/attributeData';

export default function AtributosPage() {
  const [searchQuery, setSearchQuery] = useState('');
  
  // Filter and sort attributes based on search query
  const filteredAttributes = Object.entries(attributeData)
    .filter(([, attr]) => {
      const searchTerms = searchQuery.toLowerCase();
      return (
        attr.eshtml.toLowerCase().includes(searchTerms) ||
        attr.html.toLowerCase().includes(searchTerms) ||
        attr.description.toLowerCase().includes(searchTerms) ||
        attr.elements?.some(element => 
          element.toLowerCase().includes(searchTerms)
        )
      );
    })
    .sort(([a], [b]) => a.localeCompare(b));

  return (
    <div className="min-h-screen bg-[#111827]">
      <Nav />
      <div className="flex pt-16">
        <DocsSidebar activePath="/docs/referencia/atributos" />

        <div className="flex-1 md:ml-64">
          <div className="max-w-[1200px] mx-auto">
            <div className="px-4 md:px-16 py-8 md:py-12 mt-12 md:mt-0">
              <div className="flex items-center text-sm text-gray-400 mb-8 overflow-x-auto">
                <Link href="/docs" className="hover:text-white whitespace-nowrap">Docs</Link>
                <ChevronRight className="w-4 h-4 mx-2 flex-shrink-0" />
                <Link href="/docs/referencia" className="hover:text-white whitespace-nowrap">Referencia</Link>
                <ChevronRight className="w-4 h-4 mx-2 flex-shrink-0" />
                <span className="text-white whitespace-nowrap">Atributos</span>
              </div>

              <article className="prose prose-invert max-w-4xl">
                <div className="mb-8 md:mb-12">
                  <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 md:mb-6">Referencia de atributos EsHTML</h1>
                  <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-4">
                    Esta página enumera todos los atributos de EsHTML junto con sus equivalentes en HTML estándar en inglés.
                  </p>
                  <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-8 md:mb-12">
                    Los atributos configuran o ajustan el comportamiento de los elementos HTML.
                  </p>
                </div>

                {/* Search input with handler */}
                <div className="flex justify-between items-center mb-8">
                  <div className="relative w-full">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input 
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="Buscar atributos..."
                      className="w-full pl-10 pr-4 py-2 bg-gray-900/50 border border-gray-800/50 rounded-lg text-gray-300 placeholder-gray-500 focus:outline-none focus:border-orange-500/50"
                    />
                  </div>
                </div>

                {/* Display filtered attributes */}
                <div className="grid grid-cols-1 gap-3 md:gap-4 not-prose">
                  {filteredAttributes.map(([key, attr]) => (
                    <div
                      key={key}
                      className="block bg-gray-900/50 rounded-lg border border-gray-800/50 hover:border-orange-500/50 transition-colors p-3 md:p-4"
                    >
                      <div className="flex flex-col">
                        <div className="flex flex-wrap items-center mb-2 gap-2">
                          <code className="text-orange-400 text-sm md:text-base">{attr.eshtml}</code>
                          <span className="text-gray-500">→</span>
                          <code className="text-blue-400 text-sm md:text-base">{attr.html}</code>
                        </div>
                        <p className="text-gray-300 text-sm mb-2">{attr.description}</p>
                        {attr.elements && (
                          <div className="flex gap-2 flex-wrap">
                            {attr.elements.map((element) => (
                              <code key={element} className="text-xs px-2 py-1 bg-gray-800 rounded text-gray-300">
                                &lt;{element}&gt;
                              </code>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}