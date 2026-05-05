'use client'

import { useState } from 'react'

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <button 
        className="md:hidden text-white p-2"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          {isOpen ? (
            <>
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </>
          ) : (
            <>
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </>
          )}
        </svg>
      </button>

      {isOpen && (
        <div className="absolute top-14 left-0 w-full bg-[#0a0a0a]/95 backdrop-blur-md border-b border-white/10 md:hidden flex flex-col p-6 gap-6 shadow-2xl">
          <a href="#how-it-works" onClick={() => setIsOpen(false)} className="text-lg hover:text-white transition-colors text-white/60">
            How It Works
          </a>
          <a href="#install" onClick={() => setIsOpen(false)} className="text-lg hover:text-white transition-colors text-white/60">
            Install
          </a>
          <a href="#comparison" onClick={() => setIsOpen(false)} className="text-lg hover:text-white transition-colors text-white/60">
            Compare
          </a>
          <a
            href="https://www.npmjs.com/package/@ishwarrr/docsync"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsOpen(false)}
            className="w-full text-center px-4 py-3 bg-blue-500/20 border border-blue-500/30 text-blue-400 rounded-lg text-sm hover:bg-blue-500/30 transition-colors mt-2"
          >
            v0.1.0 on npm
          </a>
        </div>
      )}
    </>
  )
}
