// components/CodeEditor.tsx

'use client';

import Prism from 'prismjs';
import 'prismjs/components/prism-markup';
import 'prismjs/themes/prism-tomorrow.css';
import { useEffect, useRef } from 'react';

interface CodeEditorProps {
  code: string;
  onChange?: (value: string) => void;
  readOnly?: boolean;
}

export default function CodeEditor({ code, onChange, readOnly = false }: CodeEditorProps) {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const preRef = useRef<HTMLPreElement>(null);

  useEffect(() => {
    const highlight = () => {
      if (preRef.current) {
        const highlighted = Prism.highlight(
          code,
          Prism.languages.markup,
          'markup'
        );
        preRef.current.innerHTML = highlighted;
      }
    };
    highlight();
  }, [code]);

  const handleScroll = () => {
    if (preRef.current && textareaRef.current) {
      preRef.current.scrollTop = textareaRef.current.scrollTop;
      preRef.current.scrollLeft = textareaRef.current.scrollLeft;
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Tab') {
      e.preventDefault();

      const textarea = e.currentTarget;
      const start = textarea.selectionStart;
      const end = textarea.selectionEnd;

      // Insert 2 spaces for tab
      const newValue = code.substring(0, start) + '  ' + code.substring(end);
      onChange?.(newValue);

      // Move cursor after inserted spaces
      requestAnimationFrame(() => {
        textarea.selectionStart = textarea.selectionEnd = start + 2;
      });
    }
  };

  return (
    <div className="relative flex-1 overflow-auto min-h-[200px] h-48">
      <pre
        ref={preRef}
        className="absolute w-full h-full m-0 bg-[#18181b] text-gray-100 p-4 font-mono text-sm leading-6 whitespace-pre
        overflow-auto rounded-lg border border-gray-800/50
        scrollbar-thin scrollbar-track-transparent scrollbar-thumb-gray-700/50 hover:scrollbar-thumb-gray-600/50
        [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar]:h-2 
        [&::-webkit-scrollbar-track]:bg-transparent
        [&::-webkit-scrollbar-thumb]:bg-gray-700/50 [&::-webkit-scrollbar-thumb]:rounded-full
        [&::-webkit-scrollbar-corner]:bg-transparent"
        aria-hidden="true"
      />
      {!readOnly ? (
        <textarea
          ref={textareaRef}
          value={code}
          onChange={(e) => onChange?.(e.target.value)}
          onScroll={handleScroll}
          onKeyDown={handleKeyDown}
          className="absolute w-full h-full bg-[#18181b] text-gray-100 caret-white p-4 font-mono text-sm focus:outline-none resize-none leading-6 whitespace-pre
          overflow-auto rounded-lg border border-gray-800/50
          scrollbar-thin scrollbar-track-transparent scrollbar-thumb-gray-700/50 hover:scrollbar-thumb-gray-600/50
          [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar]:h-2 
          [&::-webkit-scrollbar-track]:bg-transparent
          [&::-webkit-scrollbar-thumb]:bg-gray-700/50 [&::-webkit-scrollbar-thumb]:rounded-full
          [&::-webkit-scrollbar-corner]:bg-transparent"
          spellCheck="false"
        />
      ) : null}
    </div>
  );
}