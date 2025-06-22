import React from "react";
import { tagData, TagDefinition } from "@/lib/tagData";
import Link from "next/link";
import { Copy } from "lucide-react";

const categories = [
  "Main root",
  "Document metadata",
  "Sectioning root",
  "Content sectioning",
  "Text content",
  "Inline text semantics",
  "Image and multimedia",
  "Embedded content",
  "Scripting",
  "Demarcating edits",
  "Table content",
  "Forms",
  "Interactive elements",
  "SVG and MathML",
  "Other",
];

function copyToClipboard(snippet: string) {
  navigator.clipboard.writeText(snippet);
}

export default function TagQuickReference() {
  // Group tags by category
  const grouped: Record<string, TagDefinition[]> = {};
  Object.values(tagData).forEach((tag) => {
    if (!grouped[tag.category]) grouped[tag.category] = [];
    grouped[tag.category].push(tag);
  });

  return (
    <aside
      className="w-72 h-full sticky top-16 bg-gray-900 border-r border-gray-800 p-0 flex flex-col custom-scrollbar"
      style={{ borderTopLeftRadius: 0, borderBottomLeftRadius: 0, borderTopRightRadius: '0.75rem', borderBottomRightRadius: '0.75rem' }}
    >
      <div className="sticky top-0 z-10 bg-gray-900 px-6 py-4 border-b border-gray-800">
        <h2 className="text-xl font-extrabold text-white tracking-tight">Referencia Rápida</h2>
      </div>
      <div className="flex-1 overflow-y-auto px-6 py-4">
        {categories.map((cat) =>
          grouped[cat] ? (
            <div key={cat} className="mb-7">
              <h3 className="text-sm font-bold text-blue-400 uppercase tracking-wider mb-3 pl-1 border-l-4 border-blue-500/80">
                {cat}
              </h3>
              <ul className="space-y-1">
                {grouped[cat]
                  .sort((a, b) => a.eshtml.localeCompare(b.eshtml))
                  .map((tag) => (
                    <li
                      key={tag.eshtml}
                      className="flex items-center gap-2 bg-gray-800 hover:bg-blue-950 transition-colors px-3 py-2 border border-gray-800 group"
                      style={{ borderRadius: '0.5rem' }}
                    >
                      <span className="font-mono text-orange-400 text-base select-all">
                        &lt;{tag.eshtml}&gt;
                      </span>
                      <button
                        title="Copiar etiqueta"
                        className="ml-1 p-1 rounded bg-gray-700 text-gray-200 hover:bg-orange-500 hover:text-white transition-colors group-hover:scale-105"
                        onClick={() => copyToClipboard(`<${tag.eshtml}></${tag.eshtml}>`)}
                      >
                        <Copy size={14} />
                      </button>
                      <Link
                        href={`/docs/referencia/etiquetas/${tag.eshtml}`}
                        target="_blank"
                        className="ml-1 px-2 py-0.5 rounded bg-blue-700 text-xs text-blue-100 hover:bg-blue-500 hover:text-white transition-colors font-semibold group-hover:scale-105"
                        title="Ver documentación"
                      >
                        Docs
                      </Link>
                    </li>
                  ))}
              </ul>
            </div>
          ) : null
        )}
      </div>
      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 8px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #334155;
          border-radius: 8px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar {
          scrollbar-width: thin;
          scrollbar-color: #334155 #18181b;
        }
      `}</style>
    </aside>
  );
} 