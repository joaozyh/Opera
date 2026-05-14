import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';

interface PromptBoxProps {
  prompt: string;
  title?: string;
}

export default function PromptBox({ prompt, title }: PromptBoxProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(prompt);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative">
      {/* Main card with black border */}
      <div className="bg-white border-4 border-black p-4 shadow-lg hover:shadow-xl transition-shadow duration-300">
        {title && (
          <div className="text-xs font-bold text-black uppercase tracking-widest mb-3 pb-2 border-b-2 border-black">
            {title}
          </div>
        )}
        
        {/* Prompt text area */}
        <div className="bg-gray-50 border-2 border-black rounded-none p-3 mb-4 font-mono text-xs text-black overflow-auto max-h-48 whitespace-pre-wrap break-words leading-relaxed">
          {prompt}
        </div>

        {/* Copy button */}
        <button
          onClick={handleCopy}
          className="w-full flex items-center justify-center gap-2 bg-black hover:bg-gray-900 text-white font-bold py-2 px-3 border-2 border-black transition-all duration-300 active:scale-95 uppercase tracking-wider text-sm"
        >
          {copied ? (
            <>
              <Check size={16} />
              <span>Copiado!</span>
            </>
          ) : (
            <>
              <Copy size={16} />
              <span>Copiar</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
}
