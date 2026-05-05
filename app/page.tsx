// import type { Metadata } from "next";
// import { GLSLHills } from "@/components/ui/glsl-hills";

// export const metadata: Metadata = {
//   title: "DocSync — Docs That Stay True to Your Code",
//   description:
//     "AI-powered documentation drift detection. DocSync detects when code changes break your docs and automatically opens a PR to fix them.",
//   openGraph: {
//     title: "DocSync — Docs That Stay True to Your Code",
//     description:
//       "DocSync detects documentation drift and fixes it automatically.",
//     url: "https://ishwar-prog.github.io/docsync-landing",
//     siteName: "DocSync",
//     images: [{ url: "/og-image.png", width: 1200, height: 630 }],
//   },
//   twitter: {
//     card: "summary_large_image",
//     title: "DocSync",
//     description: "Docs that stay true to your code.",
//   },
// };

// import DemoOne from "@/components/demo";

// export default function Home() {
//   return (
//     <main className="min-h-screen bg-transparent text-white font-mono">
//       {/* Navigation */}
//       <nav className="fixed top-0 w-full z-50 border-b border-white/10 bg-[#0a0a0a]/80 backdrop-blur-sm">
//         <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
//           <span className="text-white font-bold tracking-tight">
//             doc<span className="text-blue-400">sync</span>
//           </span>
//           <div className="flex items-center gap-6 text-sm text-white/60">
//             <a
//               href="#how-it-works"
//               className="hover:text-white transition-colors"
//             >
//               How It Works
//             </a>
//             <a href="#install" className="hover:text-white transition-colors">
//               Install
//             </a>

//             <a
//               href="https://github.com/ishwar-prog/docsync"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="flex items-center gap-2 text-white hover:text-blue-400 transition-colors"
//             >
//               GitHub ↗
//             </a>
//           </div>
//         </div>
//       </nav>

//       {/* Hero */}
//       <section className="pt-32 pb-20 px-6">
//         <div className="max-w-4xl mx-auto text-center">
//           {/* Badge */}
//           <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-xs mb-8">
//             <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
//             Now on npm — npx @ishwarrr/docsync init
//           </div>

//           {/* Headline */}
//           <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-none">
//             Auto-updating documentation that stays{" "}
//             <span className="text-blue-400">true</span> to your code.
//           </h1>

//           <p className="text-lg text-white/60 max-w-2xl mx-auto mb-10 leading-relaxed">
//             AI coding agents ship code 5–10× faster than documentation. DocSync
//             detects when your docs drift from your code — and fixes it
//             automatically.
//           </p>

//           {/* CTA */}
//           <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
//             <div className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-lg px-5 py-3 font-mono text-sm">
//               <span className="text-white/40">$</span>
//               <span>npx @ishwarrr/docsync init</span>
//               <button
//                 className="text-white/40 hover:text-white transition-colors text-xs"
//                 title="Copy to clipboard"
//               >
//                 copy
//               </button>
//             </div>

//             <a
//               href="https://github.com/ishwar-prog/docsync"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="px-6 py-3 bg-blue-500 hover:bg-blue-400 text-white rounded-lg text-sm font-medium transition-colors"
//             >
//               View on GitHub →
//             </a>
//           </div>
//         </div>
//       </section>

//       {/* The Problem — Code Demo */}
//       <section className="py-20 px-6 border-t border-white/5">
//         <div className="max-w-5xl mx-auto">
//           <div className="text-center mb-16">
//             <p className="text-xs text-white/40 uppercase tracking-widest mb-3">
//               The Problem
//             </p>
//             <h2 className="text-3xl font-bold">
//               70% of docs are stale within 30 days of deploy
//             </h2>
//             <p className="text-white/50 mt-3 max-w-xl mx-auto">
//               Every time code changes, docs become lies. DocSync makes stale
//               docs impossible.
//             </p>
//           </div>

//           {/* Code diff */}
//           <div className="grid md:grid-cols-2 gap-4">
//             <div className="rounded-xl border border-white/10 overflow-hidden">
//               <div className="bg-white/5 px-4 py-2 text-xs text-white/40 flex items-center gap-2">
//                 <span className="w-2 h-2 rounded-full bg-red-500" />
//                 Your docs say
//               </div>
//               <pre className="p-5 text-sm text-white/70 overflow-x-auto">
//                 {`async function createUser(
//   email,
//   password
// ) {}`}
//               </pre>
//             </div>
//             <div className="rounded-xl border border-red-500/30 overflow-hidden">
//               <div className="bg-red-500/10 px-4 py-2 text-xs text-red-400 flex items-center gap-2">
//                 <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
//                 Your code now
//               </div>
//               <pre className="p-5 text-sm overflow-x-auto">
//                 {`async function createUser(
//   email,
//   password,
//   `}
//                 <span className="text-red-400">role, {/* new */}</span>
//                 {`
//   `}
//                 <span className="text-red-400">organizationId {/* new */}</span>
//                 {`
// ) {}`}
//               </pre>
//             </div>
//           </div>

//           <p className="text-center text-white/40 text-sm mt-6">
//             Two new required parameters. Zero documentation updates. Every
//             developer who reads the old docs writes broken code.
//           </p>
//         </div>
//       </section>

//       {/* Drift Score Demo */}
//       <section
//         className="py-20 px-6 bg-white/[0.02] border-y border-white/5"
//         id="how-it-works"
//       >
//         <div className="max-w-5xl mx-auto">
//           <div className="text-center mb-16">
//             <p className="text-xs text-white/40 uppercase tracking-widest mb-3">
//               How It Works
//             </p>
//             <h2 className="text-3xl font-bold">
//               DocSync catches drift before it ships
//             </h2>
//           </div>

//           <div className="grid md:grid-cols-3 gap-6 mb-16">
//             {[
//               {
//                 step: "01",
//                 title: "AST Parsing",
//                 desc: "Tree-sitter reads your code structurally — not as text. Extracts every function, class, and API route with full type information.",
//                 color: "blue",
//               },
//               {
//                 step: "02",
//                 title: "Drift Detection",
//                 desc: "Compares current signatures against your baseline snapshot. Calculates a Drift Score (0–100) for every changed construct.",
//                 color: "yellow",
//               },
//               {
//                 step: "03",
//                 title: "AI Fix",
//                 desc: "When drift exceeds your threshold, DocSync generates documentation using Llama 3.3 70B and opens a companion PR automatically.",
//                 color: "green",
//               },
//             ].map((item) => (
//               <div
//                 key={item.step}
//                 className="rounded-xl border border-white/10 p-6"
//               >
//                 <div
//                   className={`text-xs font-mono mb-4 text-${item.color}-400`}
//                 >
//                   {item.step}
//                 </div>
//                 <h3 className="font-bold mb-2">{item.title}</h3>
//                 <p className="text-sm text-white/50 leading-relaxed">
//                   {item.desc}
//                 </p>
//               </div>
//             ))}
//           </div>

//           {/* Terminal output demo */}
//           <div className="rounded-xl border border-white/10 overflow-hidden">
//             <div className="bg-white/5 px-4 py-2 text-xs text-white/40 flex items-center gap-2">
//               <div className="flex gap-1.5">
//                 <span className="w-3 h-3 rounded-full bg-red-500/60" />
//                 <span className="w-3 h-3 rounded-full bg-yellow-500/60" />
//                 <span className="w-3 h-3 rounded-full bg-green-500/60" />
//               </div>
//               Terminal — npx @ishwarrr/docsync check
//             </div>
//             <pre className="p-6 text-sm overflow-x-auto leading-relaxed text-white/80">
//               {`DocSync — Drift Check
// ─────────────────────

//   Drift Score: `}
//               <span className="text-red-400">83/100 ████████░░</span>
//               {`
//   Threshold:   75/100
//   Status:      `}
//               <span className="text-red-400">
//                 ⚠ DRIFT DETECTED — docs need updating
//               </span>
//               {`

// Changes Detected (3 total across 1 file)
// ─────────────────────────────────────────

//   `}
//               <span className="text-green-400">+</span>
//               {` New parameter `}
//               <span className="text-yellow-400">`organizationId`</span>
//               {` added to createUser
//   `}
//               <span className="text-green-400">+</span>
//               {` New parameter `}
//               <span className="text-yellow-400">`role`</span>
//               {` added to createUser
//   `}
//               <span className="text-yellow-400">~</span>
//               {` Return type changed: User → Promise<User>

// Next Steps
// ──────────
//   Run `}
//               <span className="text-blue-400">npx @ishwarrr/docsync fix</span>
//               {` to auto-generate updated documentation`}
//             </pre>
//           </div>
//         </div>
//       </section>

//       {/* Installation */}
//       <section className="py-20 px-6" id="install">
//         <div className="max-w-4xl mx-auto">
//           <div className="text-center mb-16">
//             <p className="text-xs text-white/40 uppercase tracking-widest mb-3">
//               Installation
//             </p>
//             <h2 className="text-3xl font-bold">Up and running in 2 minutes</h2>
//           </div>

//           <div className="space-y-4">
//             {[
//               {
//                 title: "CLI — Run anywhere",
//                 code: `npm install -g @ishwarrr/docsync
// # or without installing:
// npx @ishwarrr/docsync init`,
//                 desc: "Install globally or run once without installing.",
//               },
//               {
//                 title: "GitHub Action — Runs automatically on every PR",
//                 code: `name: DocSync
// on: [pull_request]
// permissions:
//   contents: write
//   pull-requests: write
// jobs:
//   docsync:
//     runs-on: ubuntu-latest
//     steps:
//       - uses: actions/checkout@v4
//       - uses: ishwar-prog/docsync@v1
//         with:
//           github-token: \${{ secrets.GITHUB_TOKEN }}
//           groq-api-key: \${{ secrets.GROQ_API_KEY }}`,
//                 desc: "Add to .github/workflows/docsync.yml. Get a free Groq key at console.groq.com.",
//               },
//             ].map((item) => (
//               <div
//                 key={item.title}
//                 className="rounded-xl border border-white/10 overflow-hidden"
//               >
//                 <div className="bg-white/5 px-4 py-2 text-xs text-white/40">
//                   {item.title}
//                 </div>
//                 <pre className="p-5 text-sm text-white/80 overflow-x-auto">
//                   {item.code}
//                 </pre>
//                 <div className="px-4 pb-3 text-xs text-white/30">
//                   {item.desc}
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Comparison table */}
//       <section className="py-20 px-6 bg-white/[0.02] border-y border-white/5">
//         <div className="max-w-4xl mx-auto">
//           <div className="text-center mb-12">
//             <h2 className="text-3xl font-bold">
//               The only tool that closes the loop
//             </h2>
//           </div>

//           <div className="overflow-x-auto">
//             <table className="w-full text-sm">
//               <thead>
//                 <tr className="border-b border-white/10">
//                   <th className="text-left py-3 px-4 text-white/40 font-normal">
//                     Tool
//                   </th>
//                   <th className="text-center py-3 px-4 text-white/40 font-normal">
//                     Generates Docs
//                   </th>
//                   <th className="text-center py-3 px-4 text-white/40 font-normal">
//                     Detects Drift
//                   </th>
//                   <th className="text-center py-3 px-4 text-white/40 font-normal">
//                     Auto-PRs Fix
//                   </th>
//                   <th className="text-center py-3 px-4 text-white/40 font-normal">
//                     Works in CI
//                   </th>
//                 </tr>
//               </thead>
//               <tbody className="divide-y divide-white/5">
//                 {[
//                   {
//                     name: "Mintlify",
//                     gen: true,
//                     drift: false,
//                     pr: false,
//                     ci: false,
//                   },
//                   { name: "Swimm", gen: true, drift: "~", pr: false, ci: true },
//                   {
//                     name: "GitHub Copilot",
//                     gen: true,
//                     drift: false,
//                     pr: false,
//                     ci: false,
//                   },
//                   {
//                     name: "DocSync",
//                     gen: true,
//                     drift: true,
//                     pr: true,
//                     ci: true,
//                     highlight: true,
//                   },
//                 ].map((row) => (
//                   <tr
//                     key={row.name}
//                     className={
//                       row.highlight
//                         ? "bg-blue-500/10 border border-blue-500/20"
//                         : ""
//                     }
//                   >
//                     <td
//                       className={`py-3 px-4 font-medium ${row.highlight ? "text-blue-400" : "text-white/80"}`}
//                     >
//                       {row.name} {row.highlight && "✨"}
//                     </td>
//                     {[row.gen, row.drift, row.pr, row.ci].map((val, i) => (
//                       <td key={i} className="py-3 px-4 text-center">
//                         {val === true ? "✅" : val === false ? "❌" : "⚠️"}
//                       </td>
//                     ))}
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </div>
//       </section>

//       {/* Footer CTA */}
//       <section className="py-24 px-6 text-center">
//         <h2 className="text-4xl font-bold mb-4">Stop letting docs lie.</h2>
//         <p className="text-white/50 mb-8 max-w-md mx-auto">
//           Every broken doc is a developer losing hours. DocSync makes that
//           impossible.
//         </p>
//         <div className="flex flex-col sm:flex-row gap-4 justify-center">
//           <div className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-lg px-5 py-3 font-mono text-sm">
//             <span className="text-white/40">$</span>
//             <span>npx @ishwarrr/docsync init</span>
//           </div>

//           <a
//             href="https://github.com/ishwar-prog/docsync"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="px-6 py-3 bg-blue-500 hover:bg-blue-400 rounded-lg text-sm font-medium transition-colors"
//           >
//             Star on GitHub ⭐
//           </a>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="border-t border-white/5 py-8 px-6">
//         <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-white/30">
//           <span>© 2026 DocSync · MIT License</span>
//           <div className="flex gap-6">
//             <a
//               href="https://github.com/ishwar-prog/docsync"
//               className="hover:text-white transition-colors"
//             >
//               GitHub
//             </a>
//             <a
//               href="https://www.npmjs.com/package/@ishwarrr/docsync"
//               className="hover:text-white transition-colors"
//             >
//               npm
//             </a>
//             <a
//               href="https://github.com/ishwar-prog/docsync/issues"
//               className="hover:text-white transition-colors"
//             >
//               Issues
//             </a>
//           </div>
//         </div>
//       </footer>
//     </main>
//   );
// }



import type { Metadata } from 'next'
import { CopyCommandButton } from '@/components/copy-button'

export const metadata: Metadata = {
  title: 'DocSync — Docs That Stay True to Your Code',
  description: 'AI-powered documentation drift detection. DocSync uses Tree-sitter AST parsing to detect when code changes break your docs — then automatically opens a PR to fix them.',
  openGraph: {
    title: 'DocSync — Docs That Stay True to Your Code',
    description: 'DocSync detects documentation drift and fixes it automatically with AI.',
    url: 'https://ishwar-prog.github.io/docsync-landing',
    siteName: 'DocSync',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DocSync — Docs That Stay True to Your Code',
    description: 'AI-powered documentation drift detection. Auto-PRs fixes when your code changes.',
  },
}

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white font-mono">

      {/* ── Navigation ──────────────────────────────────────────────── */}
      <nav className="fixed top-0 w-full z-50 border-b border-white/10 bg-[#0a0a0a]/80 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
          <span className="text-white font-bold tracking-tight">
            doc<span className="text-blue-400">sync</span>
          </span>
          <div className="flex items-center gap-6 text-sm text-white/60">
            <a href="#how-it-works" className="hover:text-white transition-colors">
              How It Works
            </a>
            <a href="#install" className="hover:text-white transition-colors">
              Install
            </a>
            <a href="#comparison" className="hover:text-white transition-colors">
              Compare
            </a>
            
            <a
              href="https://github.com/ishwar-prog/docsync"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-white hover:text-blue-400 transition-colors"
            >
              GitHub ↗
            </a>
            
            <a
              href="https://www.npmjs.com/package/@ishwarrr/docsync"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1.5 bg-blue-500/20 border border-blue-500/30 text-blue-400 rounded-md text-xs hover:bg-blue-500/30 transition-colors"
            >
              v0.1.0 on npm
            </a>
          </div>
        </div>
      </nav>

      {/* ── Hero ────────────────────────────────────────────────────── */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">

          {/* Live badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-xs mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
            Live on npm · @ishwarrr/docsync@0.1.0
          </div>

          {/* Headline */}
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-none">
            Docs that stay{' '}
            <span className="text-blue-400">true</span>{' '}
            to your code.
          </h1>

          <p className="text-lg text-white/60 max-w-2xl mx-auto mb-4 leading-relaxed">
            AI coding agents ship code 5–10× faster than documentation can be written.
            DocSync detects when your docs drift from reality and automatically
            opens a PR to fix them.
          </p>

          <p className="text-sm text-white/30 max-w-xl mx-auto mb-10">
            Uses Tree-sitter AST parsing · Groq Llama 3.3 70B · GitHub Actions · Works on every PR
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <div className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-lg px-5 py-3 font-mono text-sm">
              <span className="text-white/40">$</span>
              <span>npx @ishwarrr/docsync init</span>
              <CopyCommandButton />
            </div>
            
            <a
              href="https://github.com/ishwar-prog/docsync"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-blue-500 hover:bg-blue-400 text-white rounded-lg text-sm font-medium transition-colors"
            >
              View on GitHub →
            </a>
          </div>

          {/* Social proof */}
          <p className="text-xs text-white/20 mt-6">
            Open source · MIT License · Built by{' '}
            
            <a
              href="https://github.com/ishwar-prog"
              className="text-white/40 hover:text-white transition-colors"
            >
              @ishwar-prog
            </a>
          </p>
        </div>
      </section>

      {/* ── The Problem ─────────────────────────────────────────────── */}
      <section className="py-20 px-6 border-t border-white/5">
        <div className="max-w-5xl mx-auto">

          <div className="text-center mb-16">
            <p className="text-xs text-white/40 uppercase tracking-widest mb-3">The Problem</p>
            <h2 className="text-3xl font-bold">
              70% of engineering docs are stale within 30 days of a deploy
            </h2>
            <p className="text-white/50 mt-3 max-w-xl mx-auto text-sm">
              Source: GitHub Octoverse 2025. With AI coding tools shipping code 5–10× faster,
              the gap between code and docs widens every single day.
            </p>
          </div>

          {/* Code drift demo */}
          <div className="grid md:grid-cols-2 gap-4 mb-8">
            <div className="rounded-xl border border-white/10 overflow-hidden">
              <div className="bg-white/5 px-4 py-2 text-xs text-white/40 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-500" />
                Your docs say (3 months ago)
              </div>
              <pre className="p-5 text-sm text-white/70 overflow-x-auto leading-relaxed">
{`/**
 * Creates a new user account.
 * @param {string} email
 * @param {string} password
 * @returns {Promise<User>}
 */
async function createUser(
  email,
  password
) {}`}
              </pre>
            </div>

            <div className="rounded-xl border border-red-500/30 overflow-hidden">
              <div className="bg-red-500/10 px-4 py-2 text-xs text-red-400 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                Your code today (undocumented)
              </div>
              <pre className="p-5 text-sm overflow-x-auto leading-relaxed">
                <span className="text-white/70">{`async function createUser(\n  email,\n  password,\n  `}</span>
                <span className="text-red-400">{`role,            // new — breaks callers\n  `}</span>
                <span className="text-red-400">{`organizationId   // new — required field\n`}</span>
                <span className="text-white/70">{`) {}`}</span>
              </pre>
            </div>
          </div>

          <div className="rounded-xl border border-yellow-500/20 bg-yellow-500/5 p-4 text-center">
            <p className="text-yellow-400 text-sm font-medium">
              ⚠️ Two new required parameters. Zero documentation updates.
            </p>
            <p className="text-white/40 text-xs mt-1">
              Every developer who reads the old docs writes broken code.
              DocSync catches this the moment the PR is opened.
            </p>
          </div>
        </div>
      </section>

      {/* ── How It Works ────────────────────────────────────────────── */}
      <section className="py-20 px-6 bg-white/[0.02] border-y border-white/5" id="how-it-works">
        <div className="max-w-5xl mx-auto">

          <div className="text-center mb-16">
            <p className="text-xs text-white/40 uppercase tracking-widest mb-3">How It Works</p>
            <h2 className="text-3xl font-bold">DocSync catches drift before it ships</h2>
            <p className="text-white/40 text-sm mt-3 max-w-lg mx-auto">
              Three steps that happen automatically on every PR. Zero configuration after setup.
            </p>
          </div>

          {/* Three steps */}
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {[
              {
                step: '01',
                title: 'AST Parsing',
                desc: 'Tree-sitter reads your code as a structured syntax tree — not plain text. Extracts every function signature, class, and API route with full type information. Handles TypeScript, JSX, incomplete code, and syntax errors gracefully.',
                color: 'blue',
                detail: 'Tree-sitter · JS · TS · JSX · TSX',
              },
              {
                step: '02',
                title: 'Drift Detection',
                desc: 'Compares extracted signatures against your committed baseline snapshot. Calculates a Drift Score (0–100) per construct. Distinguishes between interface changes (high drift) and internal refactors (zero drift). No false positives.',
                color: 'yellow',
                detail: 'Signature-aware · Not file-hash-based',
              },
              {
                step: '03',
                title: 'AI Documentation',
                desc: 'When drift exceeds your threshold, DocSync calls Llama 3.3 70B via Groq with a surgical prompt engineered to produce senior-engineer-quality documentation. Opens a companion PR with the updated docs automatically.',
                color: 'green',
                detail: 'Groq Llama 3.3 70B · Free API key',
              },
            ].map((item) => (
              <div key={item.step} className="rounded-xl border border-white/10 p-6">
                <div className={`text-xs font-mono mb-1 text-${item.color}-400`}>
                  {item.step}
                </div>
                <h3 className="font-bold mb-3 text-lg">{item.title}</h3>
                <p className="text-sm text-white/50 leading-relaxed mb-4">{item.desc}</p>
                <div className={`text-xs text-${item.color}-400/60 font-mono`}>
                  {item.detail}
                </div>
              </div>
            ))}
          </div>

          {/* Flow diagram */}
          <div className="rounded-xl border border-white/10 bg-white/[0.02] p-6 mb-12">
            <p className="text-xs text-white/40 uppercase tracking-widest mb-6 text-center">
              The Automated Flow
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center gap-3 text-sm flex-wrap">
              {[
                { label: 'Developer opens PR #42', color: 'text-white/70' },
                { label: '→', color: 'text-white/20' },
                { label: 'DocSync parses changed files', color: 'text-blue-400' },
                { label: '→', color: 'text-white/20' },
                { label: 'Drift Score: 83/100', color: 'text-red-400' },
                { label: '→', color: 'text-white/20' },
                { label: 'AI generates docs', color: 'text-yellow-400' },
                { label: '→', color: 'text-white/20' },
                { label: 'Opens PR #43 with updated docs', color: 'text-green-400' },
              ].map((item, i) => (
                <span key={i} className={`font-mono ${item.color}`}>
                  {item.label}
                </span>
              ))}
            </div>
            <p className="text-center text-white/30 text-xs mt-4">
              Developer reviews PR #43, merges both. Docs stay true. Forever.
            </p>
          </div>

          {/* Terminal demo */}
          <div className="rounded-xl border border-white/10 overflow-hidden">
            <div className="bg-white/5 px-4 py-2 text-xs text-white/40 flex items-center gap-2">
              <div className="flex gap-1.5">
                <span className="w-3 h-3 rounded-full bg-red-500/60" />
                <span className="w-3 h-3 rounded-full bg-yellow-500/60" />
                <span className="w-3 h-3 rounded-full bg-green-500/60" />
              </div>
              Terminal — npx @ishwarrr/docsync check
            </div>
            <pre className="p-6 text-sm overflow-x-auto leading-relaxed text-white/80">
              <span className="text-white/40">{`DocSync — Drift Check\n─────────────────────\n\n`}</span>
              <span>{`  Drift Score: `}</span>
              <span className="text-red-400">{`83/100  ████████░░\n`}</span>
              <span>{`  Threshold:   75/100\n`}</span>
              <span>{`  Status:      `}</span>
              <span className="text-red-400">{`⚠ DRIFT DETECTED — docs need updating\n\n`}</span>
              <span className="text-white/40">{`Changes Detected (3 total across 1 file)\n─────────────────────────────────────────\n\n`}</span>
              <span className="text-green-400">{`  + `}</span>
              <span>{`New parameter `}</span>
              <span className="text-yellow-400">{`organizationId`}</span>
              <span>{` added to createUser — not documented\n`}</span>
              <span className="text-green-400">{`  + `}</span>
              <span>{`New parameter `}</span>
              <span className="text-yellow-400">{`role`}</span>
              <span>{` added to createUser — not documented\n`}</span>
              <span className="text-yellow-400">{`  ~ `}</span>
              <span>{`Return type changed: `}</span>
              <span className="text-white/50">{`User`}</span>
              <span>{` → `}</span>
              <span className="text-blue-400">{`Promise<User>\n\n`}</span>
              <span className="text-white/40">{`Next Steps\n──────────\n`}</span>
              <span>{`  Run `}</span>
              <span className="text-blue-400">{`npx @ishwarrr/docsync fix`}</span>
              <span>{` to auto-generate updated documentation`}</span>
            </pre>
          </div>
        </div>
      </section>

      {/* ── Installation ────────────────────────────────────────────── */}
      <section className="py-20 px-6" id="install">
        <div className="max-w-4xl mx-auto">

          <div className="text-center mb-16">
            <p className="text-xs text-white/40 uppercase tracking-widest mb-3">
              Installation
            </p>
            <h2 className="text-3xl font-bold">Up and running in 2 minutes</h2>
            <p className="text-white/40 text-sm mt-3">
              Three commands. No server. No account. No credit card.
            </p>
          </div>

          {/* Step by step */}
          <div className="space-y-4 mb-12">

            {/* Step 1 */}
            <div className="rounded-xl border border-white/10 overflow-hidden">
              <div className="bg-white/5 px-4 py-2 text-xs text-white/40 flex items-center justify-between">
                <span>Step 1 — Initialize your repo (run once, commit the result)</span>
                <span className="text-blue-400">~3 seconds</span>
              </div>
              <pre className="p-5 text-sm text-white/80 overflow-x-auto">
                <span className="text-white/40"># Scan your codebase, extract all function signatures,{'\n'}</span>
                <span className="text-white/40"># create a baseline snapshot in .docsync/snapshot.json{'\n'}</span>
                <span className="text-green-400">npx @ishwarrr/docsync init{'\n\n'}</span>
                <span className="text-white/40"># Commit the snapshot — this is your documentation baseline{'\n'}</span>
                <span className="text-green-400">git add .docsync/snapshot.json{'\n'}</span>
                <span className="text-green-400">git commit -m "docs: initialize DocSync baseline"</span>
              </pre>
              <div className="px-4 pb-3 text-xs text-white/30">
                DocSync scans every JS/TS file, extracts all functions with Tree-sitter,
                and saves their signatures. This is your "docs are accurate" baseline.
              </div>
            </div>

            {/* Step 2 */}
            <div className="rounded-xl border border-white/10 overflow-hidden">
              <div className="bg-white/5 px-4 py-2 text-xs text-white/40 flex items-center justify-between">
                <span>Step 2 — Check for drift anytime</span>
                <span className="text-yellow-400">instant</span>
              </div>
              <pre className="p-5 text-sm text-white/80 overflow-x-auto">
                <span className="text-white/40"># Run after any code change to see your drift score{'\n'}</span>
                <span className="text-green-400">npx @ishwarrr/docsync check{'\n\n'}</span>
                <span className="text-white/40"># Machine-readable output for CI scripts{'\n'}</span>
                <span className="text-green-400">npx @ishwarrr/docsync check --json</span>
              </pre>
              <div className="px-4 pb-3 text-xs text-white/30">
                Compares your current code against the snapshot. Shows exactly which functions
                changed and how severely the docs diverged. Score 0–100.
              </div>
            </div>

            {/* Step 3 */}
            <div className="rounded-xl border border-white/10 overflow-hidden">
              <div className="bg-white/5 px-4 py-2 text-xs text-white/40 flex items-center justify-between">
                <span>Step 3 — Auto-fix with AI</span>
                <span className="text-green-400">free via Groq</span>
              </div>
              <pre className="p-5 text-sm text-white/80 overflow-x-auto">
                <span className="text-white/40"># Add your free Groq key to .env first:{'\n'}</span>
                <span className="text-white/40"># Get one free at console.groq.com — no credit card{'\n'}</span>
                <span className="text-white/40">GROQ_API_KEY=your_key_here{'\n\n'}</span>
                <span className="text-white/40"># Generate documentation for all drifted constructs{'\n'}</span>
                <span className="text-green-400">npx @ishwarrr/docsync fix</span>
              </pre>
              <div className="px-4 pb-3 text-xs text-white/30">
                Calls Llama 3.3 70B with a surgical prompt engineered to produce
                senior-engineer-quality documentation. Writes Markdown to docs/. Updates snapshot.
              </div>
            </div>

            {/* GitHub Action */}
            <div className="rounded-xl border border-blue-500/20 overflow-hidden">
              <div className="bg-blue-500/10 px-4 py-2 text-xs text-blue-400 flex items-center justify-between">
                <span>GitHub Action — Runs automatically on every PR (recommended)</span>
                <span>zero maintenance</span>
              </div>
              <pre className="p-5 text-sm text-white/80 overflow-x-auto leading-relaxed">
                <span className="text-white/40">{`# .github/workflows/docsync.yml\n`}</span>
                <span className="text-white/40">{`# Copy this into your repo. Add GROQ_API_KEY secret. Done.\n\n`}</span>
                <span className="text-yellow-400">{`name: `}</span>
                <span>{`DocSync\n`}</span>
                <span className="text-yellow-400">{`on: `}</span>
                <span>{`[pull_request]\n`}</span>
                <span className="text-yellow-400">{`permissions:\n`}</span>
                <span>{`  contents: write\n`}</span>
                <span>{`  pull-requests: write\n`}</span>
                <span className="text-yellow-400">{`jobs:\n`}</span>
                <span>{`  docsync:\n`}</span>
                <span>{`    runs-on: ubuntu-latest\n`}</span>
                <span>{`    steps:\n`}</span>
                <span>{`      - uses: actions/checkout@v4\n`}</span>
                <span>{`      - uses: `}</span>
                <span className="text-blue-400">{`ishwar-prog/docsync@v1\n`}</span>
                <span>{`        with:\n`}</span>
                <span>{`          github-token: `}</span>
                <span className="text-green-400">{`\${{ secrets.GITHUB_TOKEN }}\n`}</span>
                <span>{`          groq-api-key: `}</span>
                <span className="text-green-400">{`\${{ secrets.GROQ_API_KEY }}`}</span>
              </pre>
              <div className="px-4 pb-3 text-xs text-white/30">
                Every PR automatically gets drift-checked. Companion PRs open automatically.
                Comments appear on the original PR. Zero ongoing maintenance.
              </div>
            </div>

          </div>

          {/* Config file */}
          <div className="rounded-xl border border-white/10 overflow-hidden">
            <div className="bg-white/5 px-4 py-2 text-xs text-white/40">
              Optional configuration — docsync.yaml (created automatically by init)
            </div>
            <pre className="p-5 text-sm text-white/60 overflow-x-auto leading-relaxed">
              <span className="text-white/30">{`# Which files to watch\n`}</span>
              <span className="text-yellow-400">{`track:\n`}</span>
              <span>{`  - src/**/*.ts\n`}</span>
              <span>{`  - src/**/*.js\n\n`}</span>
              <span className="text-white/30">{`# Drift score above this opens a companion PR\n`}</span>
              <span className="text-yellow-400">{`drift:\n`}</span>
              <span>{`  threshold: 75    `}</span>
              <span className="text-white/30">{`# 0=loose  100=strict\n`}</span>
              <span>{`  auto_pr: true\n\n`}</span>
              <span className="text-yellow-400">{`output:\n`}</span>
              <span>{`  format: markdown  `}</span>
              <span className="text-white/30">{`# markdown | mdx`}</span>
            </pre>
          </div>
        </div>
      </section>

      {/* ── Drift Score Explained ────────────────────────────────────── */}
      <section className="py-20 px-6 bg-white/[0.02] border-y border-white/5">
        <div className="max-w-4xl mx-auto">

          <div className="text-center mb-12">
            <p className="text-xs text-white/40 uppercase tracking-widest mb-3">
              The Drift Score
            </p>
            <h2 className="text-3xl font-bold">Not file hashes. Signature semantics.</h2>
            <p className="text-white/40 text-sm mt-3 max-w-lg mx-auto">
              Most tools detect "file changed." DocSync detects "public API changed."
              A refactor that doesn't touch the interface scores 0. An added parameter scores 60.
              This eliminates false positives entirely.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="rounded-xl border border-green-500/20 bg-green-500/5 p-5">
              <p className="text-green-400 text-xs font-mono mb-3">SCORE: 0 — No drift</p>
              <pre className="text-xs text-white/60 leading-relaxed">
{`// Renamed internal variable
// File hash changed — but interface identical
// DocSync correctly scores this 0
function createUser(email, password) {
  const usr = await db.insert(...)  // was: user
  return usr
}`}
              </pre>
            </div>
            <div className="rounded-xl border border-red-500/20 bg-red-500/5 p-5">
              <p className="text-red-400 text-xs font-mono mb-3">SCORE: 83 — Drift detected</p>
              <pre className="text-xs text-white/60 leading-relaxed">
{`// Added 2 required parameters
// Public API changed — every caller affected
// DocSync correctly flags this
function createUser(
  email, password,
  role,            // +60 drift
  organizationId   // +60 drift → capped 83
)`}
              </pre>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left py-3 px-4 text-white/40 font-normal">Score</th>
                  <th className="text-left py-3 px-4 text-white/40 font-normal">Status</th>
                  <th className="text-left py-3 px-4 text-white/40 font-normal">Meaning</th>
                  <th className="text-left py-3 px-4 text-white/40 font-normal">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {[
                  { score: '0', status: '✅ In Sync', meaning: 'Docs match code exactly', action: 'Nothing needed', color: 'text-green-400' },
                  { score: '1–39', status: '🟡 Minor', meaning: 'Small internal changes', action: 'Monitor', color: 'text-yellow-400' },
                  { score: '40–74', status: '🟠 Moderate', meaning: 'Docs are misleading', action: 'Update soon', color: 'text-orange-400' },
                  { score: '75–100', status: '🔴 Severe', meaning: 'Docs actively wrong', action: 'DocSync fixes automatically', color: 'text-red-400' },
                ].map((row) => (
                  <tr key={row.score}>
                    <td className={`py-3 px-4 font-mono font-bold ${row.color}`}>{row.score}</td>
                    <td className="py-3 px-4 text-white/70">{row.status}</td>
                    <td className="py-3 px-4 text-white/50">{row.meaning}</td>
                    <td className="py-3 px-4 text-white/40 text-xs">{row.action}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── Comparison ──────────────────────────────────────────────── */}
      <section className="py-20 px-6" id="comparison">
        <div className="max-w-4xl mx-auto">

          <div className="text-center mb-12">
            <p className="text-xs text-white/40 uppercase tracking-widest mb-3">Comparison</p>
            <h2 className="text-3xl font-bold">The only tool that closes the loop</h2>
            <p className="text-white/40 text-sm mt-3 max-w-lg mx-auto">
              Every other tool generates docs once and walks away.
              DocSync is the only tool that detects when those docs become lies
              and automatically fixes them.
            </p>
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
                  <th className="text-center py-3 px-4 text-white/40 font-normal">Free Tier</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {[
                  { name: 'Mintlify', gen: true, drift: false, pr: false, ci: false, free: false },
                  { name: 'Swimm', gen: true, drift: '~', pr: false, ci: true, free: '~' },
                  { name: 'GitHub Copilot', gen: true, drift: false, pr: false, ci: false, free: false },
                  { name: 'JSDoc / TSDoc', gen: false, drift: false, pr: false, ci: false, free: true },
                  { name: 'DocSync ✨', gen: true, drift: true, pr: true, ci: true, free: true, highlight: true },
                ].map((row) => (
                  <tr
                    key={row.name}
                    className={row.highlight ? 'bg-blue-500/10' : ''}
                  >
                    <td className={`py-3 px-4 font-medium ${row.highlight ? 'text-blue-400 font-bold' : 'text-white/80'}`}>
                      {row.name}
                    </td>
                    {[row.gen, row.drift, row.pr, row.ci, row.free].map((val, i) => (
                      <td key={i} className="py-3 px-4 text-center">
                        {val === true ? '✅' : val === false ? '❌' : '⚠️'}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-xs text-white/20 text-center mt-4">
            ⚠️ = Partial support · Free tier = no credit card required to start
          </p>
        </div>
      </section>

      {/* ── Supported Languages ─────────────────────────────────────── */}
      <section className="py-16 px-6 bg-white/[0.02] border-y border-white/5">
        <div className="max-w-4xl mx-auto text-center">

          <p className="text-xs text-white/40 uppercase tracking-widest mb-8">
            Supported Languages
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { lang: 'JavaScript', ext: '.js .mjs .cjs', status: '✅ Full', color: 'yellow' },
              { lang: 'TypeScript', ext: '.ts .tsx', status: '✅ Full', color: 'blue' },
              { lang: 'JSX / React', ext: '.jsx .tsx', status: '✅ Full', color: 'cyan' },
              { lang: 'Python', ext: '.py', status: '🔜 v0.2', color: 'green' },
            ].map((item) => (
              <div key={item.lang} className="rounded-xl border border-white/10 p-4 text-center">
                <p className="font-bold text-sm mb-1">{item.lang}</p>
                <p className="text-xs text-white/30 mb-2 font-mono">{item.ext}</p>
                <p className={`text-xs text-${item.color}-400`}>{item.status}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Footer CTA ──────────────────────────────────────────────── */}
      <section className="py-24 px-6 text-center">
        <h2 className="text-4xl font-bold mb-4">Stop letting docs lie.</h2>
        <p className="text-white/50 mb-3 max-w-md mx-auto">
          Every broken doc is a developer losing hours. Every stale API reference
          is a bug waiting to happen. DocSync makes stale docs impossible.
        </p>
        <p className="text-white/30 text-sm mb-10">
          Free forever for open source · Groq free tier · No credit card
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <div className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-lg px-5 py-3 font-mono text-sm">
            <span className="text-white/40">$</span>
            <span>npx @ishwarrr/docsync init</span>
          </div>
          
          <a
            href="https://github.com/ishwar-prog/docsync"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-blue-500 hover:bg-blue-400 rounded-lg text-sm font-medium transition-colors"
          >
            Star on GitHub ⭐
          </a>
          
          <a
            href="https://www.npmjs.com/package/@ishwarrr/docsync"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 border border-white/20 hover:border-white/40 rounded-lg text-sm text-white/60 hover:text-white transition-colors"
          >
            View on npm →
          </a>
        </div>
      </section>

      {/* ── Footer ──────────────────────────────────────────────────── */}
      <footer className="border-t border-white/5 py-8 px-6">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-white/30">
          <span>© 2026 DocSync · MIT License · Built by Ishwar Suthar</span>
          <div className="flex gap-6">
            
             <a href="https://github.com/ishwar-prog/docsync"
              className="hover:text-white transition-colors"
            >
              GitHub
            </a>
            
             <a href="https://www.npmjs.com/package/@ishwarrr/docsync"
              className="hover:text-white transition-colors"
            >
              npm
            </a>
            
             <a href="https://github.com/ishwar-prog/docsync/issues"
              className="hover:text-white transition-colors"
            >
              Issues
            </a>
            
             <a href="https://github.com/ishwar-prog/docsync/blob/main/README.md"
              className="hover:text-white transition-colors"
            >
              Docs
            </a>
          </div>
        </div>
      </footer>

    </main>
  )
}