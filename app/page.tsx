import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'DocSync — Docs That Stay True to Your Code',
  description: 'AI-powered documentation drift detection. DocSync detects when code changes break your docs and automatically opens a PR to fix them.',
  openGraph: {
    title: 'DocSync — Docs That Stay True to Your Code',
    description: 'DocSync detects documentation drift and fixes it automatically.',
    url: 'https://ishwar-prog.github.io/docsync-landing',
    siteName: 'DocSync',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DocSync',
    description: 'Docs that stay true to your code.',
  },
}

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white font-mono">

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 border-b border-white/10 bg-[#0a0a0a]/80 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
          <span className="text-white font-bold tracking-tight">
            doc<span className="text-blue-400">sync</span>
          </span>
          <div className="flex items-center gap-6 text-sm text-white/60">
            <a href="#how-it-works" className="hover:text-white transition-colors">How It Works</a>
            <a href="#install" className="hover:text-white transition-colors">Install</a>
            
              <a href="https://github.com/ishwar-prog/docsync"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-white hover:text-blue-400 transition-colors"
              >
              GitHub ↗
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-xs mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
            Now on npm — npx @ishwarrr/docsync init
          </div>

          {/* Headline */}
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-none">
            Docs that stay{' '}
            <span className="text-blue-400">true</span>{' '}
            to your code.
          </h1>

          <p className="text-lg text-white/60 max-w-2xl mx-auto mb-10 leading-relaxed">
            AI coding agents ship code 5–10× faster than documentation.
            DocSync detects when your docs drift from reality — and
            automatically opens a PR to fix them.
          </p>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <div className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-lg px-5 py-3 font-mono text-sm">
              <span className="text-white/40">$</span>
              <span>npx @ishwarrr/docsync init</span>
              <button
                className="text-white/40 hover:text-white transition-colors text-xs"
                title="Copy to clipboard"
              >
                copy
              </button>
            </div>
            
              <a href="https://github.com/ishwar-prog/docsync"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-blue-500 hover:bg-blue-400 text-white rounded-lg text-sm font-medium transition-colors"
            >
              View on GitHub →
            </a>
          </div>
        </div>
      </section>

      {/* The Problem — Code Demo */}
      <section className="py-20 px-6 border-t border-white/5">
        <div className="max-w-5xl mx-auto">

          <div className="text-center mb-16">
            <p className="text-xs text-white/40 uppercase tracking-widest mb-3">The Problem</p>
            <h2 className="text-3xl font-bold">70% of docs are stale within 30 days of deploy</h2>
            <p className="text-white/50 mt-3 max-w-xl mx-auto">
              Every time code changes, docs become lies. DocSync makes stale docs impossible.
            </p>
          </div>

          {/* Code diff */}
          <div className="grid md:grid-cols-2 gap-4">
            <div className="rounded-xl border border-white/10 overflow-hidden">
              <div className="bg-white/5 px-4 py-2 text-xs text-white/40 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-red-500" />
                Your docs say
              </div>
              <pre className="p-5 text-sm text-white/70 overflow-x-auto">
{`async function createUser(
  email,
  password
) {}`}
              </pre>
            </div>
            <div className="rounded-xl border border-red-500/30 overflow-hidden">
              <div className="bg-red-500/10 px-4 py-2 text-xs text-red-400 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                Your code now
              </div>
              <pre className="p-5 text-sm overflow-x-auto">
{`async function createUser(
  email,
  password,
  `}<span className="text-red-400">role,            {/* new */}</span>{`
  `}<span className="text-red-400">organizationId   {/* new */}</span>{`
) {}`}
              </pre>
            </div>
          </div>

          <p className="text-center text-white/40 text-sm mt-6">
            Two new required parameters. Zero documentation updates.
            Every developer who reads the old docs writes broken code.
          </p>
        </div>
      </section>

      {/* Drift Score Demo */}
      <section className="py-20 px-6 bg-white/[0.02] border-y border-white/5" id="how-it-works">
        <div className="max-w-5xl mx-auto">

          <div className="text-center mb-16">
            <p className="text-xs text-white/40 uppercase tracking-widest mb-3">How It Works</p>
            <h2 className="text-3xl font-bold">DocSync catches drift before it ships</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {[
              {
                step: '01',
                title: 'AST Parsing',
                desc: 'Tree-sitter reads your code structurally — not as text. Extracts every function, class, and API route with full type information.',
                color: 'blue',
              },
              {
                step: '02',
                title: 'Drift Detection',
                desc: 'Compares current signatures against your baseline snapshot. Calculates a Drift Score (0–100) for every changed construct.',
                color: 'yellow',
              },
              {
                step: '03',
                title: 'AI Fix',
                desc: 'When drift exceeds your threshold, DocSync generates documentation using Llama 3.3 70B and opens a companion PR automatically.',
                color: 'green',
              },
            ].map((item) => (
              <div key={item.step} className="rounded-xl border border-white/10 p-6">
                <div className={`text-xs font-mono mb-4 text-${item.color}-400`}>{item.step}</div>
                <h3 className="font-bold mb-2">{item.title}</h3>
                <p className="text-sm text-white/50 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Terminal output demo */}
          <div className="rounded-xl border border-white/10 overflow-hidden">
            <div className="bg-white/5 px-4 py-2 text-xs text-white/40 flex items-center gap-2">
              <div className="flex gap-1.5">
                <span className="w-3 h-3 rounded-full bg-red-500/60" />
                <span className="w-3 h-3 rounded-full bg-yellow-500/60" />
                <span className="w-3 h-3 rounded-full bg-green-500/60" />
              </div>
              Terminal — docsync check
            </div>
            <pre className="p-6 text-sm overflow-x-auto leading-relaxed text-white/80">
{`DocSync — Drift Check
─────────────────────

  Drift Score: `}<span className="text-red-400">83/100  ████████░░</span>{`
  Threshold:   75/100
  Status:      `}<span className="text-red-400">⚠ DRIFT DETECTED — docs need updating</span>{`

Changes Detected (3 total across 1 file)
─────────────────────────────────────────

  `}<span className="text-green-400">+</span>{` New parameter `}<span className="text-yellow-400">`organizationId`</span>{` added to createUser
  `}<span className="text-green-400">+</span>{` New parameter `}<span className="text-yellow-400">`role`</span>{` added to createUser
  `}<span className="text-yellow-400">~</span>{` Return type changed: User → Promise<User>

Next Steps
──────────
  Run `}<span className="text-blue-400">docsync fix</span>{` to auto-generate updated documentation`}
            </pre>
          </div>
        </div>
      </section>

      {/* Installation */}
      <section className="py-20 px-6" id="install">
        <div className="max-w-4xl mx-auto">

          <div className="text-center mb-16">
            <p className="text-xs text-white/40 uppercase tracking-widest mb-3">Installation</p>
            <h2 className="text-3xl font-bold">Up and running in 2 minutes</h2>
          </div>

          <div className="space-y-4">
            {[
              {
                title: 'CLI — Run anywhere',
                code: 'npx @ishwarrr/docsync init',
                desc: 'No global install needed. Works on any repo.',
              },
              {
                title: 'GitHub Action — Runs automatically on every PR',
                code: `- uses: ishwar-prog/docsync@v1
  with:
    github-token: \${{ secrets.GITHUB_TOKEN }}
    groq-api-key: \${{ secrets.GROQ_API_KEY }}`,
                desc: 'Add to .github/workflows/docsync.yml. Get a free Groq key at console.groq.com.',
              },
            ].map((item) => (
              <div key={item.title} className="rounded-xl border border-white/10 overflow-hidden">
                <div className="bg-white/5 px-4 py-2 text-xs text-white/40">
                  {item.title}
                </div>
                <pre className="p-5 text-sm text-white/80 overflow-x-auto">{item.code}</pre>
                <div className="px-4 pb-3 text-xs text-white/30">{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison table */}
      <section className="py-20 px-6 bg-white/[0.02] border-y border-white/5">
        <div className="max-w-4xl mx-auto">

          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">The only tool that closes the loop</h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left py-3 px-4 text-white/40 font-normal">Tool</th>
                  <th className="text-center py-3 px-4 text-white/40 font-normal">Generates Docs</th>
                  <th className="text-center py-3 px-4 text-white/40 font-normal">Detects Drift</th>
                  <th className="text-center py-3 px-4 text-white/40 font-normal">Auto-PRs Fix</th>
                  <th className="text-center py-3 px-4 text-white/40 font-normal">Works in CI</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {[
                  { name: 'Mintlify', gen: true, drift: false, pr: false, ci: false },
                  { name: 'Swimm', gen: true, drift: '~', pr: false, ci: true },
                  { name: 'GitHub Copilot', gen: true, drift: false, pr: false, ci: false },
                  { name: 'DocSync', gen: true, drift: true, pr: true, ci: true, highlight: true },
                ].map((row) => (
                  <tr
                    key={row.name}
                    className={row.highlight ? 'bg-blue-500/10 border border-blue-500/20' : ''}
                  >
                    <td className={`py-3 px-4 font-medium ${row.highlight ? 'text-blue-400' : 'text-white/80'}`}>
                      {row.name} {row.highlight && '✨'}
                    </td>
                    {[row.gen, row.drift, row.pr, row.ci].map((val, i) => (
                      <td key={i} className="py-3 px-4 text-center">
                        {val === true ? '✅' : val === false ? '❌' : '⚠️'}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-24 px-6 text-center">
        <h2 className="text-4xl font-bold mb-4">Stop letting docs lie.</h2>
        <p className="text-white/50 mb-8 max-w-md mx-auto">
          Every broken doc is a developer losing hours. DocSync makes that impossible.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <div className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-lg px-5 py-3 font-mono text-sm">
            <span className="text-white/40">$</span>
            <span>npx @ishwarrr/docsync init</span>
          </div>
          
           <a href="https://github.com/ishwar-prog/docsync"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-blue-500 hover:bg-blue-400 rounded-lg text-sm font-medium transition-colors"
          >
            Star on GitHub ⭐
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 py-8 px-6">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-white/30">
          <span>© 2026 DocSync · MIT License</span>
          <div className="flex gap-6">
            <a href="https://github.com/ishwar-prog/docsync" className="hover:text-white transition-colors">GitHub</a>
            <a href="https://www.npmjs.com/package/docsync" className="hover:text-white transition-colors">npm</a>
            <a href="https://github.com/ishwar-prog/docsync/issues" className="hover:text-white transition-colors">Issues</a>
          </div>
        </div>
      </footer>

    </main>
  )
}