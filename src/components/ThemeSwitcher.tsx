"use client";

import { useState } from 'react';
import { useThemeContext } from '@/context/ThemeContext';

export default function ThemeSwitcher() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme, font, setFont, layout, setLayout, resetToDefault } = useThemeContext();

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 left-6 z-50 w-14 h-14 bg-primary text-white rounded-full shadow-2xl flex items-center justify-center hover:scale-110 hover:bg-secondary transition-all font-bold text-2xl border-2 border-white"
        aria-label="Theme Settings"
      >
        N
      </button>

      {/* Settings Panel */}
      {isOpen && (
        <div className="fixed bottom-24 left-6 z-50 w-80 bg-white rounded-xl shadow-2xl border border-slate-200 overflow-hidden animate-fade-in-up">
          <div className="bg-primary text-white p-4 flex justify-between items-center">
            <h3 className="font-bold">Website Customization</h3>
            <button onClick={() => setIsOpen(false)} className="text-white hover:text-red-300">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
            </button>
          </div>

          <div className="p-5 space-y-6 max-h-[70vh] overflow-y-auto">
            
            {/* Theme Selector */}
            <div>
              <h4 className="text-sm font-bold text-slate-700 mb-3">Color Theme</h4>
              <div className="grid grid-cols-2 gap-2">
                <button onClick={() => setTheme('default')} className={\py-2 px-3 text-xs rounded border \\}>
                  <div className="flex gap-1 justify-center mb-1"><div className="w-3 h-3 rounded-full bg-[#182B45]"></div><div className="w-3 h-3 rounded-full bg-[#ff6b00]"></div></div>
                  Default
                </button>
                <button onClick={() => setTheme('dark')} className={\py-2 px-3 text-xs rounded border \\}>
                  <div className="flex gap-1 justify-center mb-1"><div className="w-3 h-3 rounded-full bg-[#0f172a]"></div><div className="w-3 h-3 rounded-full bg-[#38bdf8]"></div></div>
                  Dark
                </button>
                <button onClick={() => setTheme('nature')} className={\py-2 px-3 text-xs rounded border \\}>
                  <div className="flex gap-1 justify-center mb-1"><div className="w-3 h-3 rounded-full bg-[#14532d]"></div><div className="w-3 h-3 rounded-full bg-[#eab308]"></div></div>
                  Nature
                </button>
                <button onClick={() => setTheme('ocean')} className={\py-2 px-3 text-xs rounded border \\}>
                  <div className="flex gap-1 justify-center mb-1"><div className="w-3 h-3 rounded-full bg-[#0369a1]"></div><div className="w-3 h-3 rounded-full bg-[#0ea5e9]"></div></div>
                  Ocean
                </button>
              </div>
            </div>

            {/* Font Selector */}
            <div>
              <h4 className="text-sm font-bold text-slate-700 mb-3">Typography</h4>
              <div className="flex flex-col gap-2">
                <button onClick={() => setFont('sans')} className={\py-2 px-3 text-sm rounded border text-left \\} style={{fontFamily: 'Arial, sans-serif'}}>
                  Sans Serif (Default)
                </button>
                <button onClick={() => setFont('serif')} className={\py-2 px-3 text-sm rounded border text-left \\} style={{fontFamily: 'Georgia, serif'}}>
                  Serif (Classic)
                </button>
                <button onClick={() => setFont('mono')} className={\py-2 px-3 text-sm rounded border text-left \\} style={{fontFamily: 'monospace'}}>
                  Monospace (Code)
                </button>
              </div>
            </div>

            {/* Layout Selector */}
            <div>
              <h4 className="text-sm font-bold text-slate-700 mb-3">Layout Style</h4>
              <div className="grid grid-cols-2 gap-2">
                <button onClick={() => setLayout('wide')} className={\py-2 px-3 text-xs rounded border \\}>
                  <div className="w-full h-8 bg-slate-200 mb-1 rounded flex items-center justify-center"><div className="w-full h-full border-x-4 border-slate-300"></div></div>
                  Wide (Default)
                </button>
                <button onClick={() => setLayout('boxed')} className={\py-2 px-3 text-xs rounded border \\}>
                  <div className="w-full h-8 bg-slate-200 mb-1 rounded flex items-center justify-center"><div className="w-2/3 h-full bg-white shadow-sm"></div></div>
                  Boxed
                </button>
              </div>
            </div>

            <div className="pt-2 border-t border-slate-200">
              <button
                onClick={resetToDefault}
                className="w-full py-3 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold rounded-lg transition-colors text-sm"
              >
                Reset to Default
              </button>
            </div>

          </div>
        </div>
      )}
    </>
  );
}
