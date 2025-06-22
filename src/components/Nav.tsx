// src/components/Nav.tsx
'use client';
import { useState } from 'react';
import Link from "next/link";
import { Search, Moon, Menu, X } from "lucide-react";
import { AiOutlineGithub } from "react-icons/ai";

interface NavProps {
  referenceButton?: React.ReactNode;
}

export function Nav({ referenceButton }: NavProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-gray-900/80 backdrop-blur-sm border-b border-gray-800 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold">
              <span className="text-white">Es</span>
              <span className="text-orange-500">HTML</span>
            </span>
          </Link>

          <div className="hidden md:flex items-center space-x-4">
            <Link
              href="/docs"
              className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm flex items-center gap-2"
            >
              <Search className="w-4 h-4" />
              Docs
            </Link>
            <a
              href="https://github.com/jorgoose/eshtml"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm flex items-center gap-2"
            >
              <AiOutlineGithub className="w-4 h-4" />
              GitHub
            </a>
            <button
              className="text-gray-300 hover:text-white p-2 rounded-md"
              aria-label="Toggle dark mode"
            >
              <Moon className="w-5 h-5" />
            </button>
          </div>

          <div className="md:hidden flex items-center space-x-2">
            {referenceButton}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 hover:text-white p-2 rounded-md"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <>
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
            onClick={() => setIsMenuOpen(false)}
          />
          
          {/* Menu panel */}
          <div 
            className="fixed inset-y-0 right-0 w-64 bg-gray-900 shadow-xl z-[100]
                       transform transition-transform duration-200 ease-in-out"
            style={{ backgroundColor: '#111827' }} // Solid gray-900 color
          >
            <div className="flex flex-col h-full bg-gray-900"> {/* Added solid background here too */}
              {/* Header with close button */}
              <div className="flex items-center justify-between p-4 border-b border-gray-800 bg-gray-900">
                <span className="text-lg font-semibold text-white">Menu</span>
                <button 
                  onClick={() => setIsMenuOpen(false)}
                  className="p-2 text-gray-400 hover:text-white rounded-md
                           hover:bg-gray-800 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              
              {/* Menu items container */}
              <div className="flex flex-col py-4 bg-gray-900"> {/* Added solid background */}
                <Link
                  href="/docs"
                  className="flex items-center gap-3 px-4 py-3 text-gray-300
                           hover:text-white hover:bg-gray-800 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Search className="w-5 h-5" />
                  <span>Documentation</span>
                </Link>
                
                <a
                  href="https://github.com/jorgoose/eshtml"
                  target="_blank"
                  rel="noopener noreferrer" 
                  className="flex items-center gap-3 px-4 py-3 text-gray-300
                           hover:text-white hover:bg-gray-800 transition-colors"
                >
                  <AiOutlineGithub className="w-5 h-5" />
                  <span>GitHub</span>
                </a>
                
                <button
                  className="flex items-center gap-3 px-4 py-3 text-gray-300
                           hover:text-white hover:bg-gray-800 transition-colors"
                  aria-label="Toggle dark mode"
                >
                  <Moon className="w-5 h-5" />
                  <span>Dark Mode</span>
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </nav>
  );
}