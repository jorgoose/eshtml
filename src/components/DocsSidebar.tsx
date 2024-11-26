// src/components/DocsSidebar.tsx
'use client';
import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { docsNavigation } from '@/lib/docsNavigation';

type DocsSidebarProps = {
  activePath: string;
}

export function DocsSidebar({ activePath }: DocsSidebarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const isActivePage = (href: string) => {
    return activePath === href || activePath.startsWith(href + '/');
  };

  const SidebarContent = () => (
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
                  onClick={() => setIsMobileMenuOpen(false)}
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
  );

  return (
    <>
      {/* Mobile Toggle Bar */}
      <div className="md:hidden fixed top-16 left-0 right-0 h-12 bg-gray-900 border-b border-gray-800 z-30">
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="flex items-center px-4 h-full text-gray-300 hover:text-white"
        >
          <Menu className="w-5 h-5 mr-2" />
          <span>Menu</span>
        </button>
      </div>

      {/* Desktop Sidebar */}
      <div className="hidden md:block w-64 fixed top-16 bottom-0 bg-[#111827] border-r border-gray-800/40">
        <SidebarContent />
      </div>

      {/* Mobile Sidebar */}
      {isMobileMenuOpen && (
        <>
          <div 
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          <div className="fixed inset-y-0 left-0 w-64 bg-[#111827] shadow-xl z-50 md:hidden">
            <div className="flex items-center justify-between p-4 border-b border-gray-800">
              <span className="text-lg font-semibold text-white">Documentación</span>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 text-gray-400 hover:text-white rounded-md"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <SidebarContent />
          </div>
        </>
      )}
    </>
  );
}