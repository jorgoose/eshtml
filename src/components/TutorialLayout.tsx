'use client';

import { useState } from 'react';
import { Nav } from '@/components/Nav';
import { TutorialSidebar } from '@/components/TutorialSidebar';
import { BookOpen } from 'lucide-react';

interface TutorialLayoutProps {
  children: React.ReactNode;
  activePath: string;
  lessonNumber?: number;
  totalLessons?: number;
}

export function TutorialLayout({ children, activePath, lessonNumber, totalLessons }: TutorialLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#111827]">
      <Nav 
        referenceButton={
          <button
            onClick={() => window.open('/docs/referencia', '_blank')}
            className="text-gray-300 hover:text-orange-500 p-2 rounded-md transition-colors"
            title="Referencia"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </button>
        }
      />
      
      {/* Mobile sidebar toggle */}
      <div className="md:hidden fixed top-20 left-4 z-50">
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="bg-gray-800/90 backdrop-blur-sm border border-gray-700/50 p-2 rounded-md text-gray-300 hover:text-white transition-colors"
          title="Tutorial"
        >
          <BookOpen className="w-5 h-5" />
        </button>
      </div>

      {/* Mobile sidebar overlay */}
      {sidebarOpen && (
        <div 
          className="md:hidden fixed inset-0 bg-black/50 z-40"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div className={`md:block ${sidebarOpen ? 'block' : 'hidden'} fixed left-0 top-16 h-full w-64 bg-gray-900/95 backdrop-blur-sm border-r border-gray-800/50 overflow-y-auto z-40`}>
        <TutorialSidebar activePath={activePath} />
      </div>

      {/* Progress indicator */}
      {lessonNumber && totalLessons && (
        <div className="bg-orange-500/10 border-b border-orange-500/20 pt-16">
          <div className="max-w-[800px] mx-auto px-6 py-2 text-sm text-orange-300 flex justify-between items-center">
            <div className="md:hidden"></div> {/* Spacer for mobile to balance the layout */}
            <div className="text-center">Lección {lessonNumber} de {totalLessons}</div>
            <div className="md:hidden w-12"></div> {/* Spacer for mobile to balance the layout */}
          </div>
        </div>
      )}
      
      <div className="flex pt-16">
        <div className="flex-1 md:ml-64">
          <div className="max-w-[800px] mx-auto px-6 md:px-8 py-12 md:py-16">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
} 