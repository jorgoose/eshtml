// src/app/docs/referencia/etiquetas/[tag]/page.tsx
import { notFound } from 'next/navigation';
import { tagData } from '@/lib/tagData';
import { Nav } from '@/components/Nav';
import { DocsSidebar } from '@/components/DocsSidebar';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import CodeEditor from '@/components/CodeEditor';
import { removeAccents } from '@/lib/utils';

export function generateStaticParams() {
  return Object.keys(tagData).map((tagName) => ({
    tag: removeAccents(tagName),
  }));
}

export default async function TagPage({
  params,
}: {
  params: { tag: string }
}) {
  const tagName = (await params).tag;
  // Update tag finding logic to use accent-free comparison
  const tag = Object.values(tagData).find(
    (tag) => removeAccents(tag.eshtml.toLowerCase()) === tagName.toLowerCase()
  );
  
  if (!tag) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-[#111827]">
      <Nav />
      <div className="flex pt-16">
        <DocsSidebar activePath={`/docs/referencia/etiquetas/${tagName}`} />

        <div className="flex-1 ml-64">
          <div className="max-w-[1200px] mx-auto">
            <div className="px-16 py-12">
              {/* Breadcrumb */}
              <div className="flex items-center text-sm text-gray-400 mb-8">
                <Link href="/docs" className="hover:text-white">Docs</Link>
                <ChevronRight className="w-4 h-4 mx-2" />
                <Link href="/docs/referencia" className="hover:text-white">Referencia</Link>
                <ChevronRight className="w-4 h-4 mx-2" />
                <Link href="/docs/referencia/etiquetas" className="hover:text-white">Etiquetas</Link>
                <ChevronRight className="w-4 h-4 mx-2" />
                <span className="text-white">&lt;{tag.eshtml}&gt;</span>
              </div>

              <article className="prose prose-invert max-w-4xl">
                <div className="flex items-center gap-4 mb-8">
                  <h1 className="text-4xl font-bold text-white mb-0">
                    <code className="text-orange-400">&lt;{tag.eshtml}&gt;</code>
                  </h1>
                  <span className="text-2xl text-gray-500">→</span>
                  <code className="text-2xl text-blue-400">&lt;{tag.html}&gt;</code>
                </div>

                <p className="text-xl text-gray-300 leading-relaxed mb-12">
                  {tag.description}
                </p>

                {tag.attributes && tag.attributes.length > 0 && (
                  <>
                    <h2 className="text-2xl font-semibold text-white mb-6">Atributos</h2>
                    <div className="grid grid-cols-1 gap-4 not-prose mb-12">
                      {tag.attributes.map((attr) => (
                        <div key={attr.name} className="bg-gray-900/50 rounded-lg p-6 border border-gray-800/50">
                          <h3 className="text-xl font-semibold text-white mb-2">
                            <code className="text-orange-400">{attr.name}</code>
                            <span className="mx-2 text-gray-500">→</span>
                            <code className="text-blue-400">{attr.html}</code>
                          </h3>
                          <p className="text-gray-300 mb-4">{attr.description}</p>
                          {attr.values && (
                            <div className="flex gap-2">
                              {attr.values.map((value) => (
                                <code key={value} className="px-2 py-1 bg-gray-800 rounded text-gray-300">
                                  {value}
                                </code>
                              ))}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </>
                )}

                {tag.example && (
                    <>
                    <h2 className="text-2xl font-semibold text-white mb-6">Ejemplo</h2>
                    <div className="grid grid-cols-2 gap-4 not-prose">
                      <div>
                      <div className="text-sm text-gray-400 mb-2">EsHTML</div>
                      <CodeEditor
                        code={tag.example.eshtml}
                        readOnly
                      />
                      </div>
                      <div>
                      <div className="text-sm text-gray-400 mb-2">HTML</div>
                      <CodeEditor
                        code={tag.example.html}
                        readOnly
                      />
                      </div>
                    </div>
                    </>
                )}
              </article>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}