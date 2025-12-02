import React, { useEffect, useRef, useState } from 'react';

interface CTASectionProps {
  backgroundImage?: string;
  onSubscribe?: (email: string) => void;
}

export const CTASection: React.FC<CTASectionProps> = ({ backgroundImage, onSubscribe }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState('');
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      onSubscribe?.(email);
      setEmail('');
    }
  };

  return (
    <section ref={sectionRef} className="max-w-7xl mx-auto px-4 sm:px-6 py-20">
      <div
        className="relative backdrop-blur-xl bg-white/80 border border-slate-200/60 rounded-3xl p-12 shadow-lg text-center overflow-hidden opacity-0 translate-y-8 transition-all duration-800"
        style={{
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0)' : 'translateY(2rem)',
          backgroundImage: backgroundImage ? `url(${backgroundImage})` : undefined,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Decorative Blobs */}
        <div className="absolute top-0 left-0 w-40 h-40 bg-gradient-to-br from-blue-100 to-indigo-200 rounded-full opacity-40 blur-2xl transform -translate-x-12 -translate-y-12" />
        <div className="absolute bottom-0 right-0 w-40 h-40 bg-gradient-to-br from-purple-100 to-pink-200 rounded-full opacity-40 blur-2xl transform translate-x-12 translate-y-12" />

        {/* Content */}
        <div className="relative z-10">
          <h2 className="text-4xl sm:text-6xl font-light font-serif tracking-tight mb-6 bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
            Stay Inspired
          </h2>
          <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
            Get exclusive access to new collections, styling tips, and behind-the-scenes insights
            from our atelier.
          </p>

          {/* Newsletter Form */}
          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="flex gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="flex-1 backdrop-blur-xl bg-white/60 border border-slate-200/60 text-slate-800 placeholder-slate-500 rounded-2xl px-4 py-3 focus:outline-none focus:border-slate-400 transition-colors"
              />
              <button
                type="submit"
                className="backdrop-blur-xl bg-slate-900 text-white rounded-2xl px-6 py-3 font-medium hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
              >
                Subscribe
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
