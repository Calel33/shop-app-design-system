import { StickyNav } from './StickyNav';
import { HeroSection } from './HeroSection';
import { FeatureCard } from './FeatureCard';
import { MetricsChart } from './MetricsChart';
import { PricingCard } from './PricingCard';
import { FAQItem } from './FAQItem';
import { Footer } from './Footer';
import { Radio, Shield, Sparkles, MapPin, FileCode2, Code2, ArrowRight } from 'lucide-react';

/**
 * NOVA Chat Landing Page
 * A comprehensive SaaS landing page showcasing a messaging platform
 * with features, pricing, FAQ, and interactive elements
 */
export const NovaLandingDemo = () => {
  return (
    <div className="antialiased selection:bg-emerald-500/30 selection:text-emerald-100 text-neutral-200 bg-gray-950 min-h-screen">
      {/* Navigation */}
      <StickyNav />

      {/* Hero Section */}
      <HeroSection />

      {/* Logo Strip */}
      <section className="max-w-7xl mx-auto px-6 mt-12">
        <div className="border-t border-white/10 pt-8">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 place-items-center text-gray-300/80">
            {/* Placeholder for company logos */}
            <div className="text-sm font-sans opacity-50">Google</div>
            <div className="text-sm font-sans opacity-50">Vercel</div>
            <div className="text-sm font-sans opacity-50">Supabase</div>
            <div className="text-sm font-sans opacity-50">Stripe</div>
            <div className="text-sm font-sans opacity-50">Airbnb</div>
            <div className="text-sm font-sans opacity-50">Figma</div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="pt-16 pb-16 md:py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-end justify-between gap-6">
            <div>
              <h2 className="text-3xl sm:text-4xl text-white font-manrope tracking-tighter">
                Built for scale —{' '}
                <span className="italic tracking-tight font-instrument-serif">
                  designed for people
                </span>
              </h2>
              <p className="mt-3 text-gray-400 max-w-2xl font-sans">
                Everything you need to integrate messaging fast, without sacrificing security or UX.
              </p>
            </div>
            <a
              href="#docs"
              className="hidden sm:inline-flex items-center gap-2 rounded-full bg-white text-gray-900 px-5 py-3 text-sm font-medium hover:bg-gray-100 font-sans"
            >
              Read the docs <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
            <FeatureCard
              icon={Radio}
              iconColor="text-purple-300"
              iconBgColor="bg-purple-500/10"
              title="Realtime Engine"
              description="Presence, typing, reactions, threads, and read receipts with global fanout."
              metrics={[
                { label: 'Latency p95', value: '84ms', color: 'text-purple-300' },
                { label: 'Regions', value: '16', color: 'text-purple-300' },
                { label: 'Messages/min', value: '2.1M', color: 'text-purple-300' },
              ]}
            />

            <div id="security">
              <FeatureCard
                icon={Shield}
                iconColor="text-emerald-300"
                iconBgColor="bg-blue-500/10"
                title="End‑to‑End Security"
                description="E2EE, SSO/SAML, audit logs, DLP, BYOK/HYOK, and compliance exports."
                metrics={[
                  { label: 'Encryption', value: 'AES‑256 / XChaCha20', color: 'text-blue-300' },
                  { label: 'Certs', value: 'SOC2 • ISO27001', color: 'text-blue-300' },
                  { label: 'Uptime', value: '99.99%', color: 'text-blue-300' },
                ]}
              />
            </div>

            <FeatureCard
              icon={Sparkles}
              iconColor="text-purple-300"
              iconBgColor="bg-pink-500/10"
              title="AI Assist"
              description="Context‑aware replies, triage, routing, and conversation summaries with your data."
              metrics={[
                { label: 'Time to reply', value: '‑42%', color: 'text-pink-300' },
                { label: 'Resolution rate', value: '+28%', color: 'text-pink-300' },
                { label: 'CSAT', value: '4.7/5', color: 'text-pink-300' },
              ]}
            />
          </div>
        </div>
      </section>

      {/* Metrics Band with Chart */}
      <section className="pt-10 pb-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="rounded-3xl border border-white/10 bg-gray-900 overflow-hidden">
            <div className="grid md:grid-cols-4 gap-6 items-stretch p-6 sm:p-8">
              <div>
                <p className="text-3xl text-white font-manrope tracking-tighter">2.4M+</p>
                <p className="text-sm text-gray-400 mt-1 font-sans">Messages per minute</p>
              </div>
              <div>
                <p className="text-3xl text-white font-manrope tracking-tighter">99.99%</p>
                <p className="text-sm text-gray-400 mt-1 font-sans">Uptime last 90 days</p>
              </div>
              <div>
                <p className="text-3xl text-white font-manrope tracking-tighter">120ms</p>
                <p className="text-sm text-gray-400 mt-1 font-sans">Global p95 latency</p>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-1 text-neutral-400" />
                <p className="text-sm text-gray-300 font-sans">
                  16 regions, automatic failover, and edge presence for consistent performance.
                </p>
              </div>
            </div>
            <div className="border-t border-white/10 px-6 sm:px-8 py-6">
              <div className="max-w-3xl">
                <h3 className="text-base font-semibold tracking-tight text-white font-sans">
                  Weekly messages
                </h3>
                <p className="text-sm text-gray-400 mt-1 font-sans">
                  Peak traffic handled with zero degradation.
                </p>
              </div>
              <MetricsChart />
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="pt-16 pb-16 md:py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl sm:text-4xl text-white font-manrope tracking-tighter">
              Pricing —{' '}
              <span className="italic tracking-tight font-instrument-serif">
                simple and scalable
              </span>
            </h2>
            <p className="mt-3 text-gray-400 font-sans">
              Start for free. Upgrade when you need more throughput, features, or controls.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <PricingCard
              tier="Free"
              price="$0"
              period="/month"
              description="Best for prototypes and small apps."
              features={[
                '10k monthly active users',
                'Core chat SDKs',
                'Shared region',
              ]}
              ctaText="Choose Free"
            />

            <PricingCard
              tier="Pro"
              price="$249"
              period="/month"
              description="Growing apps that need scale and controls."
              features={[
                '100k MAU + burst scaling',
                'Threads, search, file uploads',
                'Custom retention + GDPR tools',
                'Email support',
              ]}
              featured
              ctaText="Choose Pro"
            />

            <PricingCard
              tier="Enterprise"
              price="Custom"
              period="/annual"
              description="Dedicated regions, SSO/SAML, BYOK/HYOK, and support SLAs."
              features={[
                'Unlimited MAU',
                'Private cloud & on‑prem',
                '24/7 enterprise support',
                'Compliance: SOC2, ISO27001',
              ]}
              ctaText="Contact sales"
            />
          </div>

          <div className="mt-12 text-center">
            <p className="text-sm text-gray-400 font-sans">
              Transparent pricing. Cancel anytime.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl text-white font-manrope tracking-tighter">
              Frequently asked —{' '}
              <span className="italic tracking-tight font-instrument-serif">questions</span>
            </h2>
            <p className="mt-3 text-gray-400 font-sans">
              Everything you need to know about integrating NOVA Chat.
            </p>
          </div>

          <div className="space-y-6">
            <FAQItem
              question="How long does integration take?"
              answer="Most teams ship a production chat in under a week using our SDKs and templates. Web, iOS, and Android are covered, plus REST and WebSocket APIs."
            />
            <FAQItem
              question="Is end‑to‑end encryption enabled by default?"
              answer="Yes for direct messages and optional per‑channel for group chats. Key rotation and device verification are provided out of the box."
            />
            <FAQItem
              question="Can we migrate from an existing provider?"
              answer="We offer assisted migrations with message import, user mapping, and zero‑downtime cutovers for Pro and Enterprise plans."
            />
            <FAQItem
              question="What about rate limits and scale?"
              answer="Generous defaults with burst capacity. Enterprise plans include dedicated regions, custom limits, and performance SLAs."
            />
            <FAQItem
              question="Where can I find examples?"
              answer="See our starter kits and sample apps in the docs. We also provide prebuilt chat UIs you can theme in minutes."
            />
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-400 mb-4 font-sans">Still have questions?</p>
            <a
              href="#"
              className="inline-flex items-center gap-2 rounded-full bg-white text-gray-900 px-5 py-3 text-sm font-medium hover:bg-gray-100 transition font-sans"
            >
              Get in touch
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="docs" className="py-14">
        <div className="max-w-7xl mx-auto px-6">
          <div className="relative overflow-hidden border-white/10 rounded-3xl">
            <img
              src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/79c03f5d-fd87-4312-bdb4-3032e5aac6f6_1600w.jpg"
              alt="abstract grid"
              className="absolute inset-0 h-full w-full object-cover opacity-40"
            />
            <div className="relative bg-gray-950/40">
              <div className="sm:px-12 sm:py-20 pt-16 pr-8 pb-16 pl-8">
                <div className="max-w-2xl text-white">
                  <h3 className="text-3xl sm:text-4xl font-manrope tracking-tighter">
                    Ready to build conversations that delight?
                  </h3>
                  <p className="mt-3 text-white/80 font-sans">
                    Drop‑in components, powerful APIs, and production‑ready templates.
                  </p>
                  <div className="mt-6 flex flex-wrap items-center gap-3">
                    <a
                      href="#"
                      className="inline-flex items-center gap-2 rounded-full bg-white text-gray-900 px-5 py-3 text-sm font-medium hover:bg-gray-100 font-sans"
                    >
                      Quickstart guide
                      <FileCode2 className="w-4 h-4" />
                    </a>
                    <a
                      href="#"
                      className="inline-flex items-center gap-2 rounded-full border border-white/40 text-white px-5 py-3 text-sm font-medium hover:bg-white/10 font-sans"
                    >
                      API reference
                      <Code2 className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};
