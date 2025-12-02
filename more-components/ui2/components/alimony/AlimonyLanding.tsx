import React from 'react';

// Token-driven, responsive landing composed with existing Tailwind utilities
// Keep under 500 lines and single-responsibility per file as per rules/system.md

export function AlimonyHero() {
  return (
    <header className="relative min-h-screen w-full overflow-hidden bg-slate-950 text-white">
      {/* Animated gradient backdrop inspired by ideas/Full-Screen Hero with Navigation */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(99,102,241,0.25),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(217,70,239,0.22),transparent_50%)]" />
        <div className="absolute inset-0 animate-[pulseGlow_8s_ease-in-out_infinite] bg-gradient-to-b from-slate-900/0 via-slate-900/40 to-slate-950" />
      </div>

      {/* Navigation */}
      <nav className="relative z-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <span className="inline-block h-8 w-8 rounded-lg bg-gradient-to-br from-indigo-500 to-fuchsia-500" />
            <span className="text-lg font-bold tracking-tight">Alimo</span>
          </a>
          <div className="hidden md:flex items-center gap-8 text-sm text-slate-200/90">
            <a className="hover:text-white" href="#how-it-works">How it works</a>
            <a className="hover:text-white" href="#features">Features</a>
            <a className="hover:text-white" href="#get-started">Get started</a>
          </div>
          <a href="#get-started" className="rounded-lg bg-white/10 px-3 py-2 text-sm font-semibold hover:bg-white/15">Start free</a>
        </div>
      </nav>

      {/* Hero content */}
      <div className="relative z-10 flex min-h-[calc(100vh-4rem)] items-center">
        <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2 gap-10 px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            <span className="inline-flex items-center rounded-full border border-indigo-400/40 bg-indigo-400/10 px-3 py-1 text-xs font-semibold text-indigo-200">Fast. Fair. Transparent.</span>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">Alimony, Simplified.</h1>
            <p className="text-slate-300 text-lg md:text-xl">Estimate, plan, and stay compliant with a clear, guided experience.</p>
            <div className="flex flex-wrap gap-3">
              <a href="#get-started" className="inline-flex items-center justify-center rounded-lg bg-indigo-500 px-5 py-3 text-sm font-semibold text-white hover:bg-indigo-600 transition-colors">Get Started</a>
              <a href="#how-it-works" className="inline-flex items-center justify-center rounded-lg border border-white/15 px-5 py-3 text-sm font-semibold text-white/90 hover:bg-white/5 transition-colors">How it works</a>
            </div>
          </div>
          <div className="relative">
            <div className="rounded-3xl bg-white/5 ring-1 ring-white/10 p-6 backdrop-blur">
              <div className="rounded-2xl bg-gradient-to-br from-indigo-500/15 to-fuchsia-500/15 p-6">
                <div className="grid grid-cols-2 gap-4 text-sm text-slate-200">
                  <div className="rounded-xl bg-white/5 p-4 ring-1 ring-white/10">
                    <div className="text-xs text-slate-400">Monthly Estimate</div>
                    <div className="mt-1 text-2xl font-bold tracking-tight">$1,240</div>
                  </div>
                  <div className="rounded-xl bg-white/5 p-4 ring-1 ring-white/10">
                    <div className="text-xs text-slate-400">Duration</div>
                    <div className="mt-1 text-2xl font-bold tracking-tight">36 mo</div>
                  </div>
                  <div className="col-span-2 rounded-xl bg-white/5 p-4 ring-1 ring-white/10">
                    <div className="text-xs text-slate-400">Confidence</div>
                    <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-white/10">
                      <div className="h-full w-2/3 bg-gradient-to-r from-indigo-400 to-fuchsia-400" />
                    </div>
                  </div>
                </div>
                <div className="mt-4 text-xs text-slate-300">Based on state guidelines and similar cases.</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes pulseGlow { 0%,100%{opacity:1} 50%{opacity:.85} }
      `}</style>
    </header>
  );
}

export function AlimonyFeatures() {
  return (
    <section id="features" className="bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-10 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900">Everything you need to feel confident</h2>
          <p className="text-slate-600 mt-2">Ideas/Features Bento Grid adapted for planning & compliance.</p>
        </div>

        {/* Top row: 1/4, 2/4 (highlight), 1/4 */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-4 mb-6">
          <div className="col-span-1 rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex flex-col items-start">
              <div className="mb-3 h-10 w-10 rounded-lg bg-indigo-50 text-indigo-700 grid place-content-center font-bold">G</div>
              <h3 className="text-slate-900 font-semibold mb-1">Guided Estimator</h3>
              <p className="text-sm text-slate-600">Clear inputs, explainable results.</p>
            </div>
          </div>
          <div className="col-span-1 md:col-span-2 relative rounded-xl border border-slate-200 bg-slate-50 p-8 shadow">
            <div className="flex items-start gap-4">
              <div className="h-12 w-12 rounded-xl bg-indigo-100 text-indigo-700 grid place-content-center font-bold">A</div>
              <div>
                <h3 className="text-2xl font-semibold text-slate-900 mb-1">Audit-ready summaries</h3>
                <p className="text-slate-600">Generate shareable PDFs with assumptions and guideline references for counsel.</p>
              </div>
            </div>
            <span className="absolute top-4 right-6 text-xs text-indigo-700 bg-indigo-100 rounded px-2 py-0.5 font-medium">New</span>
          </div>
          <div className="col-span-1 rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex flex-col items-start">
              <div className="mb-3 h-10 w-10 rounded-lg bg-fuchsia-50 text-fuchsia-700 grid place-content-center font-bold">S</div>
              <h3 className="text-slate-900 font-semibold mb-1">Scenario Planning</h3>
              <p className="text-sm text-slate-600">Compare outcomes side-by-side.</p>
            </div>
          </div>
        </div>

        {/* Bottom row: 4 tiles */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4">
          <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
            <h4 className="text-slate-900 font-semibold mb-1">Auto-Reminders</h4>
            <p className="text-xs text-slate-600">Stay compliant with schedule nudges.</p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
            <h4 className="text-slate-900 font-semibold mb-1">Privacy-First</h4>
            <p className="text-xs text-slate-600">Local-first; opt-in secure sync.</p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
            <h4 className="text-slate-900 font-semibold mb-1">State Guidelines</h4>
            <p className="text-xs text-slate-600">Factor-by-factor transparency.</p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
            <h4 className="text-slate-900 font-semibold mb-1">Exports</h4>
            <p className="text-xs text-slate-600">PDF/CSV for records and counsel.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export function AlimonyTestimonials() {
  const notes = [
    { name: 'Jamie R.', role: 'Family Law Client', quote: 'The estimator helped me understand a fair range before meeting counsel.' },
    { name: 'A. Patel', role: 'Attorney', quote: 'Scenario comparisons reduced rounds of back-and-forth in negotiations.' },
    { name: 'Morgan S.', role: 'Mediator', quote: 'Clarity and tone keep conversations productive and humane.' },
  ];
  return (
    <section id="testimonials" className="py-16 bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900">What professionals and clients say</h2>
          <p className="text-slate-600 mt-2">Inspired by ideas/Whispered Notes layout.</p>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {notes.map((n) => (
            <div key={n.name} className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="mb-4 text-slate-400">“</div>
              <blockquote className="text-slate-800 mb-6">{n.quote}</blockquote>
              <div className="text-sm">
                <div className="font-medium text-slate-900">{n.name}</div>
                <div className="text-slate-500">{n.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function AlimonyTeaser() {
  return (
    <section className="bg-gradient-to-br from-slate-50 to-indigo-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 grid lg:grid-cols-2 gap-8 items-center">
        <div className="rounded-2xl bg-white ring-1 ring-slate-200 p-6 shadow">
          <div className="text-sm text-slate-600">Estimator Preview</div>
          <div className="mt-3 grid grid-cols-2 gap-4">
            <div>
              <label className="text-xs text-slate-500">Your Monthly Income</label>
              <input className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm" placeholder="$5,000" />
            </div>
            <div>
              <label className="text-xs text-slate-500">Partner Monthly Income</label>
              <input className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm" placeholder="$3,200" />
            </div>
            <div className="col-span-2">
              <label className="text-xs text-slate-500">Marriage Duration (years)</label>
              <input className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm" placeholder="7" />
            </div>
          </div>
          <div className="mt-4 grid grid-cols-2 gap-4">
            <div className="rounded-xl bg-indigo-50 text-indigo-800 p-4">
              <div className="text-xs">Estimate</div>
              <div className="text-2xl font-bold">$1,240</div>
            </div>
            <div className="rounded-xl bg-fuchsia-50 text-fuchsia-800 p-4">
              <div className="text-xs">Duration</div>
              <div className="text-2xl font-bold">36 mo</div>
            </div>
          </div>
        </div>
        <div>
          <h3 className="text-3xl font-extrabold text-slate-900 mb-2">Plan without the panic</h3>
          <p className="text-slate-600 mb-4">Explore outcomes safely before you commit. Save scenarios, export summaries, and share with counsel.</p>
          <a href="#get-started" className="inline-flex items-center justify-center rounded-lg bg-slate-900 px-5 py-3 text-sm font-semibold text-white hover:bg-slate-800 transition-colors">Try the estimator</a>
        </div>
      </div>
    </section>
  );
}

export function AlimonyCTA() {
  return (
    <section id="get-started" className="relative overflow-hidden">
      {/* ideas/Pricing Plans with Animated Background: animated gradient mesh */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -top-1/2 left-1/2 h-[32rem] w-[32rem] -translate-x-1/2 rounded-full bg-indigo-500/20 blur-3xl animate-[floatY_10s_ease-in-out_infinite]" />
        <div className="absolute -bottom-1/2 left-1/3 h-[28rem] w-[28rem] rounded-full bg-fuchsia-500/20 blur-3xl animate-[floatX_12s_ease-in-out_infinite]" />
        <div className="absolute inset-0 bg-slate-900/80" />
      </div>
      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-16 text-center text-white">
        <h3 className="text-3xl md:text-4xl font-extrabold mb-2">Ready for next steps?</h3>
        <p className="text-white/90 mb-6">Create a plan in minutes. Adjust as life evolves.</p>
        <div className="flex items-center justify-center gap-4">
          <a className="rounded-lg bg-indigo-500 px-5 py-3 text-sm font-semibold text-white hover:bg-indigo-600 transition-colors" href="#">Create free account</a>
          <a className="text-white hover:underline" href="#">Contact legal partners</a>
        </div>
      </div>
      <style>{`
        @keyframes floatY { 0%,100%{transform:translate(-50%,0)} 50%{transform:translate(-50%,-30px)} }
        @keyframes floatX { 0%,100%{transform:translate(0,0)} 50%{transform:translate(30px,0)} }
      `}</style>
    </section>
  );
}

export const AlimonyLanding: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <AlimonyHero />
      <AlimonyFeatures />
      <AlimonyTeaser />
      <AlimonyTestimonials />
      <AlimonyCTA />
    </div>
  );
};

export default AlimonyLanding;
