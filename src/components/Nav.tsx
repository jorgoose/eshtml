// 1. First create src/components/Nav.tsx
import Link from "next/link";
import { Search, Moon, Menu } from "lucide-react";
import { AiOutlineGithub } from "react-icons/ai";

export function Nav() {
  return (
    <nav className="fixed w-full bg-gray-900/80 backdrop-blur-sm border-b border-gray-800 z-50">
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
              href="/docs/introduccion"
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