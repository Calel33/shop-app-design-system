import React from 'react';

// Upbeat Candle Landing Page Structure
// Patterns referenced from ideas/: Full-Screen Hero with Navigation, Features Grid, Testimonials, Footer, Newsletter

const PreHeader: React.FC = () => (
  <div className="w-full bg-sky-50 text-sky-900 border-b border-sky-200">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-2 text-center text-sm flex items-center justify-center gap-4">
      <span>🌿 Non-Toxic & Vegan Friendly</span>
      <span className="text-sky-400">•</span>
      <span className="font-semibold">✨ Free Shipping on Orders Over $50</span>
    </div>
  </div>
);

const Header: React.FC = () => (
  <header className="sticky top-0 z-40 bg-white/85 backdrop-blur border-b border-zinc-200">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
      <a href="#" className="flex items-center gap-2">
        <span className="inline-block h-8 w-8 rounded-lg bg-gradient-to-br from-sky-400 to-fuchsia-400" />
        <span className="text-lg font-extrabold tracking-tight text-zinc-900">GlowJoy</span>
      </a>
      <nav className="hidden md:flex items-center gap-8 text-sm text-zinc-700">
        <a href="#shop" className="hover:text-sky-600">Shop</a>
        <a href="#scents" className="hover:text-sky-600">Scents</a>
        <a href="#story" className="hover:text-sky-600">Our Story</a>
        <a href="#gifts" className="hover:text-sky-600">Gifts</a>
      </nav>
      <div className="flex items-center gap-2">
        <button aria-label="Account" className="size-9 rounded-lg text-zinc-700 hover:bg-zinc-100 grid place-content-center">👤</button>
        <button aria-label="Search" className="size-9 rounded-lg text-zinc-700 hover:bg-zinc-100 grid place-content-center">🔎</button>
        <button aria-label="Bag" className="relative rounded-lg text-zinc-700 hover:bg-zinc-100 px-3 h-9 flex items-center gap-2">
          👜<span className="text-sm">Bag</span>
          <span className="ml-1 inline-flex items-center justify-center text-[10px] font-semibold bg-amber-600 text-white rounded-full w-5 h-5">2</span>
        </button>
      </div>
    </div>
  </header>
);

const Hero: React.FC = () => (
  <section className="relative isolate min-h-[80vh] flex items-center overflow-hidden bg-gradient-to-br from-sky-50 via-white to-pink-50">
    <div className="absolute inset-0 -z-10">
      <div className="absolute -top-20 -right-20 h-80 w-80 rounded-full bg-fuchsia-200/60 blur-3xl" />
      <div className="absolute -bottom-24 -left-16 h-72 w-72 rounded-full bg-sky-200/60 blur-3xl" />
    </div>
    <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2 gap-10 px-4 sm:px-6 lg:px-8 py-16 lg:py-24 items-center">
      <div className="space-y-6">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-zinc-900">Ignite Your Happy.</h1>
        <p className="text-lg md:text-xl text-zinc-600">Handcrafted candles to fill your home with joy and positive vibes.</p>
        <div className="flex flex-wrap gap-3">
          <a href="#shop" className="inline-flex items-center justify-center rounded-lg bg-sky-600 px-5 py-3 text-sm font-semibold text-white hover:bg-sky-700 transition-colors">Shop Our Sunny Scents</a>
          <a href="#story" className="inline-flex items-center justify-center rounded-lg text-sky-700 hover:text-sky-800 px-2 py-3 text-sm font-semibold">Discover Our Story →</a>
        </div>
      </div>
      <div className="relative rounded-3xl overflow-hidden shadow-2xl ring-1 ring-zinc-200">
        <img src="https://images.unsplash.com/photo-1519681393784-d120267933ba?w=1600&h=1100&fit=crop" alt="Candles glowing in sunlight" className="h-full w-full object-cover" />
      </div>
    </div>
  </section>
);

const MiniBenefits: React.FC = () => (
  <section className="bg-white border-t border-zinc-200">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 grid grid-cols-2 md:grid-cols-4 gap-4">
      {[
        { icon: '🚚', text: 'Free & Fast Shipping' },
        { icon: '🌱', text: 'Clean, Eco-Friendly Wax' },
        { icon: '🎁', text: 'Perfect Giftable Packaging' },
        { icon: '💖', text: '100% Happiness Guarantee' },
      ].map((b) => (
        <div key={b.text} className="flex items-center gap-3 p-4 rounded-xl bg-sky-50/60 hover:bg-sky-100 transition-colors">
          <div className="text-sky-700 text-base" aria-hidden>{b.icon}</div>
          <div className="text-sm font-medium text-zinc-800">{b.text}</div>
        </div>
      ))}
    </div>
  </section>
);

type Candle = { id: string; name: string; desc: string; price: number; image: string };
const SCENTS: Candle[] = [
  { id: 'sunrise-citrus', name: 'Sunrise Citrus Splash', desc: 'Grapefruit, mango, sparkling ginger.', price: 28, image: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800&h=800&fit=crop' },
  { id: 'cashmere-cloud', name: 'Cozy Cashmere Cloud', desc: 'Cashmere, vanilla bean, soft musk.', price: 28, image: 'https://images.unsplash.com/photo-1514543255330-1043f6f868e0?w=800&h=800&fit=crop' },
  { id: 'mint-meadow', name: 'Mint Meadow Breeze', desc: 'Spearmint, basil, wild meadow.', price: 28, image: 'https://images.unsplash.com/photo-1459664018906-085c36f472af?w=800&h=800&fit=crop' },
  { id: 'sunny-fig', name: 'Sunny Fig & Honey', desc: 'Ripened fig, golden honey, almond.', price: 28, image: 'https://images.unsplash.com/photo-1499125562588-29fb10c115d3?w=800&h=800&fit=crop' },
];

const ScentsCollection: React.FC = () => (
  <section id="scents" className="py-16 bg-gradient-to-b from-white to-sky-50/50">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-zinc-900">A Scent for Every Vibe!</h2>
        <p className="text-zinc-600">Best-sellers our community can’t stop raving about.</p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {SCENTS.map((c) => (
          <div key={c.id} className="rounded-2xl overflow-hidden bg-white ring-1 ring-zinc-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="aspect-square overflow-hidden">
              <img src={c.image} alt={c.name} className="w-full h-full object-cover" />
            </div>
            <div className="p-4 space-y-2">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold text-zinc-900">{c.name}</h3>
                <span className="text-sm font-semibold text-sky-700">${c.price.toFixed(2)}</span>
              </div>
              <p className="text-sm text-zinc-600">{c.desc}</p>
              <div className="pt-2 flex items-center justify-between">
                <button className="rounded-lg bg-sky-600 hover:bg-sky-700 text-white text-sm px-3 py-2">Add to Cart</button>
                <button aria-label="Favorite" className="text-sky-700 hover:text-sky-800">♡</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Experience: React.FC = () => (
  <section className="py-16 bg-white">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-8 items-center">
      <div className="rounded-2xl overflow-hidden shadow-lg ring-1 ring-zinc-200">
        <img src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=1600&h=1000&fit=crop" alt="Happy person reading with candle" className="w-full h-full object-cover" />
      </div>
      <div>
        <h3 className="text-3xl font-extrabold text-zinc-900 mb-3">More Than a Candle, It's a Mood.</h3>
        <ul className="space-y-2 text-sm text-zinc-700">
          <li>• Your Daily Dose of Sunshine: Perfect for your morning routine.</li>
          <li>• The Ultimate Chill Pill: Unwind after a long day.</li>
          <li>• Instant Good Vibes: Elevate your space for gatherings or 'you' time.</li>
        </ul>
        <a href="#scents" className="mt-5 inline-flex items-center justify-center rounded-lg bg-zinc-900 px-5 py-3 text-sm font-semibold text-white hover:bg-zinc-800 transition-colors">Find Your Mood</a>
      </div>
    </div>
  </section>
);

const Story: React.FC = () => (
  <section id="story" className="py-16 bg-gradient-to-br from-sky-50 to-pink-50">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-8 items-center">
      <div>
        <h3 className="text-3xl font-extrabold text-zinc-900 mb-3">Crafted with Joy & Good Intentions.</h3>
        <ul className="space-y-2 text-sm text-zinc-700">
          <li>• Hand-poured in small batches.</li>
          <li>• Premium, phthalate-free fragrances.</li>
          <li>• Sustainable, recyclable packaging.</li>
          <li>• Our mission: spread positivity.</li>
        </ul>
      </div>
      <div className="rounded-2xl overflow-hidden ring-1 ring-zinc-200 bg-white p-4 grid grid-cols-3 gap-3">
        <div className="h-28 rounded-xl bg-sky-100" />
        <div className="h-28 rounded-xl bg-pink-100" />
        <div className="h-28 rounded-xl bg-teal-100" />
        <div className="h-28 rounded-xl bg-pink-100" />
        <div className="h-28 rounded-xl bg-sky-100" />
        <div className="h-28 rounded-xl bg-teal-100" />
      </div>
    </div>
  </section>
);

const Testimonials: React.FC = () => (
  <section className="py-16 bg-white">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-10">
        <h3 className="text-3xl md:text-4xl font-extrabold tracking-tight text-zinc-900">Spreading Smiles, One Candle at a Time!</h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          { name: 'Jamie R.', quote: "The 'Sunshine State of Mind' candle literally makes me happy the second I light it! 10/10!" },
          { name: 'Alex P.', quote: 'Gifted to my sister—she won\'t stop talking about it.' },
          { name: 'Mina L.', quote: 'Clean burn, gorgeous scent, and the packaging is stunning.' },
        ].map((t) => (
          <div key={t.name} className="rounded-2xl border border-zinc-200 bg-white p-8 shadow-sm hover:shadow-md transition-shadow">
            <div className="mb-4 text-zinc-400">“</div>
            <blockquote className="text-zinc-800 mb-6">{t.quote}</blockquote>
            <div className="text-sm font-medium text-zinc-900">— {t.name}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Gifts: React.FC = () => (
  <section id="gifts" className="py-16 bg-gradient-to-b from-white to-sky-50/50">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-8 items-center">
      <div className="rounded-2xl overflow-hidden shadow-lg ring-1 ring-zinc-200">
        <img src="https://images.unsplash.com/photo-1519681393784-d120267933ba?w=1400&h=1000&fit=crop" alt="Gift-ready candle box" className="w-full h-full object-cover" />
      </div>
      <div>
        <h3 className="text-3xl font-extrabold text-zinc-900 mb-3">The Gift of Good Vibes.</h3>
        <p className="text-zinc-600 mb-4">Looking for the perfect pick-me-up? Our candles come in gorgeous, gift-ready boxes. We can even include a handwritten note!</p>
        <a href="#shop" className="inline-flex items-center justify-center rounded-lg bg-sky-600 px-5 py-3 text-sm font-semibold text-white hover:bg-sky-700 transition-colors">Shop Gift Sets</a>
      </div>
    </div>
  </section>
);

const FinalCTA: React.FC = () => (
  <section className="relative overflow-hidden">
    <div aria-hidden className="pointer-events-none absolute inset-0">
      <div className="absolute -top-1/2 left-1/2 h-[30rem] w-[30rem] -translate-x-1/2 rounded-full bg-sky-400/20 blur-3xl" />
      <div className="absolute -bottom-1/2 left-1/3 h-[26rem] w-[26rem] rounded-full bg-teal-400/20 blur-3xl" />
      <div className="absolute inset-0 bg-sky-100/40" />
    </div>
    <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-16 text-center">
      <h3 className="text-3xl md:text-4xl font-extrabold text-zinc-900 mb-2">Ready to Transform Your Space?</h3>
      <p className="text-zinc-700 mb-6">Join the glow-getters and discover your new favorite scent today.</p>
      <a href="#shop" className="inline-flex items-center justify-center rounded-lg bg-zinc-900 px-5 py-3 text-sm font-semibold text-white hover:bg-zinc-800 transition-colors">Shop All Candles</a>
    </div>
  </section>
);

// New section: Unboxing/Process teaser inspired by ideas/4K Video Unboxing Layout
const UnboxTeaser: React.FC = () => (
  <section className="bg-white border-t border-zinc-200">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 grid lg:grid-cols-3 gap-6 items-stretch">
      <div className="rounded-2xl overflow-hidden ring-1 ring-zinc-200 bg-[url(https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=1600&q=80)] bg-cover min-h-[240px]"/>
      <div className="rounded-2xl overflow-hidden ring-1 ring-zinc-200 bg-[url(https://images.unsplash.com/photo-1519681393784-d120267933ba?w=1600&q=80)] bg-cover min-h-[240px]"/>
      <div className="rounded-2xl bg-sky-50 ring-1 ring-sky-100 p-6 flex flex-col">
        <h3 className="text-2xl font-semibold text-zinc-900 mb-2">Unbox the Glow</h3>
        <p className="text-zinc-600 mb-4">Every GlowJoy box includes a joyful unboxing: premium jar, safety card, and scent story.</p>
        <ul className="text-sm text-zinc-700 space-y-2 mb-6">
          <li>• Premium recyclable packaging</li>
          <li>• Scent story card included</li>
          <li>• Gift-ready out of the box</li>
        </ul>
        <a href="#gifts" className="mt-auto inline-flex items-center justify-center rounded-lg bg-sky-600 px-4 py-2 text-sm font-semibold text-white hover:bg-sky-700">See What’s Inside</a>
      </div>
    </div>
  </section>
);

// New section: Newsletter inspired by ideas/Newsletter Signup Form1
const Newsletter: React.FC = () => (
  <section className="bg-gradient-to-br from-pink-50 to-sky-50">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
      <div className="max-w-lg">
        <h2 className="text-4xl font-extrabold tracking-tight text-zinc-900 mb-3">Stay Connected</h2>
        <p className="text-sm text-zinc-600 mb-6">Be first to discover drops, exclusive scents, and tips to elevate your vibe.</p>
        <form className="flex flex-col gap-4 max-w-md">
          <input className="rounded-md border border-zinc-300 px-3 py-2 text-sm" placeholder="Email Address" type="email" required />
          <label className="flex items-center gap-2 text-sm text-zinc-600">
            <input type="checkbox" className="rounded border-zinc-300" />
            Send me scent tips and exclusive offers
          </label>
          <button className="inline-flex items-center justify-center rounded-lg bg-zinc-900 px-5 py-3 text-sm font-semibold text-white hover:bg-zinc-800 w-fit">Join the Glow</button>
        </form>
      </div>
    </div>
  </section>
);

// New section: FAQ inspired by ideas/FAQ Section with Interactive Cards
const FAQ: React.FC = () => {
  const faqs = [
    { q: 'What wax do you use?', a: 'We use a clean, eco-friendly soy blend for a slow, even burn.' },
    { q: 'Are fragrances safe?', a: 'Yes—premium, phthalate-free fragrances tested for home use.' },
    { q: 'How long do they burn?', a: 'Up to 45 hours for 8oz jars with proper wick care.' },
    { q: 'Gift options?', a: 'Gift-ready boxes with optional handwritten notes are available.' },
    { q: 'Shipping & returns?', a: 'Free shipping over $50, 30-day happiness guarantee.' },
  ];
  return (
    <section id="faq" className="relative bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-zinc-900">Frequently Asked</h2>
          <p className="text-zinc-600">Everything you need to glow with confidence.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {faqs.map((f) => (
            <details key={f.q} className="group rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm open:shadow-md transition-shadow">
              <summary className="cursor-pointer list-none flex items-start justify-between gap-4">
                <h3 className="font-semibold text-zinc-900">{f.q}</h3>
                <span className="text-sky-600">+</span>
              </summary>
              <p className="mt-3 text-sm text-zinc-600">{f.a}</p>
            </details>
          ))}
        </div>
        <div className="text-center mt-8">
          <a href="#contact" className="inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-sky-500 to-fuchsia-500 px-5 py-3 text-sm font-semibold text-white hover:opacity-90">Ask Our Team</a>
        </div>
      </div>
    </section>
  );
};

const Footer: React.FC = () => (
  <footer className="bg-white border-t border-zinc-200">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 grid md:grid-cols-4 gap-8">
      <div>
        <div className="flex items-center gap-2 mb-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-400 to-rose-400" />
          <span className="font-extrabold text-zinc-900">GlowJoy</span>
        </div>
        <p className="text-sm text-zinc-600">Spreading joy, one flickering flame at a time.</p>
      </div>
      <div>
        <h5 className="font-semibold text-zinc-900 mb-2">Shop</h5>
        <ul className="space-y-2 text-sm text-zinc-600">
          <li><a href="#shop">Shop All</a></li>
          <li><a href="#scents">Best Sellers</a></li>
          <li><a href="#scents">New Arrivals</a></li>
          <li><a href="#gifts">Gifts</a></li>
        </ul>
      </div>
      <div>
        <h5 className="font-semibold text-zinc-900 mb-2">About</h5>
        <ul className="space-y-2 text-sm text-zinc-600">
          <li><a href="#story">Our Story</a></li>
          <li><a href="#story">Ingredients</a></li>
          <li><a href="#story">Sustainability</a></li>
          <li><a href="#">FAQ</a></li>
        </ul>
      </div>
      <div>
        <h5 className="font-semibold text-zinc-900 mb-2">Join the Glow</h5>
        <p className="text-sm text-zinc-600 mb-3">Get 15% off your first order & scent tips!</p>
        <div className="flex gap-2">
          <input className="flex-1 rounded-lg border border-zinc-300 px-3 py-2 text-sm" placeholder="you@example.com" />
          <button className="rounded-lg bg-zinc-900 text-white px-3 py-2 text-sm hover:bg-zinc-800">Subscribe</button>
        </div>
      </div>
    </div>
    <div className="py-4 text-center text-xs text-zinc-500 border-t border-zinc-200">© 2024 GlowJoy. All rights reserved.</div>
  </footer>
);

export const UpbeatCandleLanding: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <PreHeader />
      <Header />
      <Hero />
      <MiniBenefits />
      <UnboxTeaser />
      <ScentsCollection />
      <Experience />
      <Story />
      <Testimonials />
      <FAQ />
      <Newsletter />
      <Gifts />
      <FinalCTA />
      <Footer />
    </div>
  );
};

export default UpbeatCandleLanding;
