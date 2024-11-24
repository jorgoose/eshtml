// src/components/DocsSidebar.tsx
import Link from 'next/link';
import { docsNavigation } from '@/lib/docsNavigation';

type DocsSidebarProps = {
  activePath: string;
}

export function DocsSidebar({ activePath }: DocsSidebarProps) {
  const isActivePage = (href: string) => {
    return activePath === href || activePath.startsWith(href + '/');
  };

  return (
    <div className="w-64 fixed top-16 bottom-0 bg-[#111827] border-r border-gray-800/40">
      <nav className="h-full px-8 py-6">
        {Object.entries(docsNavigation).map(([key, section]) => (
          <div key={key} className="mb-6">
            <h2 className="text-sm font-medium text-gray-400 uppercase tracking-wide mb-2">
              {section.title}
            </h2>
            <ul className="space-y-1">
              {section.items.map((item) => (
                <li key={item.href}>
                  <Link 
                    href={item.href}
                    className={`block px-2 py-1.5 text-sm rounded
                      ${isActivePage(item.href) 
                        ? 'text-orange-400 bg-orange-500/10' 
                        : 'text-gray-300 hover:text-white hover:bg-gray-800/50'
                      }`}
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </nav>
    </div>
  );
}