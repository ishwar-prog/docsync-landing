'use client'

import { useState } from 'react'

export function CopyCommandButton() {
  const [copied, setCopied] = useState(false)

  const copyCommand = () => {
    navigator.clipboard.writeText('npx @ishwarrr/docsync init')
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <button
      onClick={copyCommand}
      className="text-white/40 hover:text-blue-400 transition-colors text-xs ml-2"
      title="Copy to clipboard"
    >
      {copied ? '✓ copied' : 'copy'}
    </button>
  )
}
