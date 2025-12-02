import React from 'react';
import { StickyPortfolioCards } from './StickyPortfolioCards';
import { ExpandableProcessGrid } from './ExpandableProcessGrid';
import { LogoTicker } from './LogoTicker';
import { AnimatedGradientButton } from './AnimatedGradientButton';
import type { BlogPost, PortfolioProject, ProcessStep } from '../types/interior-design.types';

export interface DesignPortfolioLandingProps {
  splineUrl?: string; // optional iframe background
  projects: PortfolioProject[];
  steps: ProcessStep[];
  posts: BlogPost[];
  logos?: { src: string; alt: string }[];
}

export const DesignPortfolioLanding: React.FC<DesignPortfolioLandingProps> = ({
  splineUrl,
  projects,
  steps,
  posts,
  logos = [],
}) => {
  return (
    <div className="relative min-h-screen text-neutral-100 bg-neutral-950">
      {/* Background (optional Spline) */}
      {splineUrl && (
        <div className="pointer-events-none fixed inset-0 -z-10 opacity-30">
          <iframe title="spline-bg" src={splineUrl} className="w-full h-full" />
        </div>
      )}

      {/* Nav */}
      <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[min(1100px,92%)]">
        <nav className="flex items-center justify-between rounded-full bg-white/10 backdrop-blur px-5 py-3 border border-white/10">
          <div className="font-semibold tracking-wide">Aurelia Studio</div>
          <div className="hidden sm:flex gap-6 text-sm opacity-90">
            <a href="#work">Work</a>
            <a href="#process">Process</a>
            <a href="#insights">Insights</a>
            <a href="#contact">Contact</a>
          </div>
          <AnimatedGradientButton label="Start a project" />
        </nav>
      </header>

      {/* Hero */}
      <section className="pt-36 pb-16 text-center">
        <h1 className="text-4xl md:text-6xl font-semibold tracking-tight">
          Conscious spaces with enduring character
        </h1>
        <p className="mt-4 text-white/70 max-w-2xl mx-auto">
          We design refined residential and boutique commercial interiors that balance form and feeling.
        </p>
        <div className="mt-8 flex items-center justify-center gap-4">
          <AnimatedGradientButton label="View portfolio" />
          <button className="px-6 py-3 rounded-full bg-white/10 border border-white/15">Our approach</button>
        </div>
      </section>

      {/* Sticky Cards */}
      <div id="work" className="mt-6">
        <StickyPortfolioCards projects={projects} />
      </div>

      {/* Process */}
      <section id="process" className="w-[min(1100px,92%)] mx-auto py-20">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6">A collaborative, human process</h2>
        <ExpandableProcessGrid steps={steps} />
      </section>

      {/* Logos */}
      {logos.length > 0 && (
        <section className="w-[min(1100px,92%)] mx-auto">
          <LogoTicker logos={logos} />
        </section>
      )}

      {/* Insights */}
      <section id="insights" className="w-[min(1100px,92%)] mx-auto py-16">
        <div className="flex items-end justify-between mb-6">
          <h2 className="text-2xl md:text-3xl font-semibold">Insights</h2>
          <a className="text-sm text-white/70" href="#">View all →</a>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((p) => (
            <article key={p.title} className="group relative overflow-hidden rounded-3xl bg-white/5 border border-white/10">
              <div className="relative h-44">
                <img src={p.image} alt="" className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
                {p.featured && <span className="absolute top-3 left-3 text-xs px-2 py-1 bg-white/10 rounded-full backdrop-blur">Featured</span>}
              </div>
              <div className="p-5">
                <div className="text-xs text-white/70">{p.date}</div>
                <h3 className="mt-1 text-lg font-medium">{p.title}</h3>
                <p className="mt-1 text-sm text-white/70 line-clamp-2">{p.excerpt}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span key={t} className="text-xs px-2 py-1 rounded-full bg-white/10 border border-white/10">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="py-16 text-center text-white/60">
        <div>Aurelia Studio — © {new Date().getFullYear()}</div>
      </footer>
    </div>
  );
};

export default DesignPortfolioLanding;
