import React from 'react';
import { Sparkles, Eye, Calendar, ArrowRight, ChevronDown } from 'lucide-react';
import { FashionHeroProps } from './types';

export const FashionHero: React.FC<FashionHeroProps> = ({
  onExplore,
  onBookConsultation,
}) => {
  const handleScrollToCollections = () => {
    const collectionsSection = document.getElementById('collections');
    collectionsSection?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-white to-purple-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 text-center">
        <div className="animate-in fade-in duration-800">
          {/* Badge */}
          <div className="mb-8 slide-up opacity-0 animate-slide-up">
            <span className="inline-flex items-center gap-2 backdrop-blur-xl bg-white/60 border border-black/40 text-black text-sm font-medium rounded-full px-6 py-3">
              <Sparkles className="h-4 w-4" />
              Haute Couture Studio
            </span>
          </div>

          {/* Heading */}
          <div className="mb-8">
            <h1 className="text-7xl sm:text-8xl lg:text-9xl leading-none font-light tracking-tight font-serif">
              <span className="inline-block mb-4 bg-gradient-to-r from-slate-800 via-slate-600 to-purple-700 bg-clip-text text-transparent">
                Timeless
              </span>
              <br />
              <span className="inline-block relative text-slate-400 font-light">
                ÉLEGANCE
                <div className="absolute -right-8 -top-4 w-8 h-8 bg-gradient-to-br from-purple-300 to-pink-300 rounded-full opacity-60 blur-sm animate-float" />
              </span>
            </h1>
          </div>

          {/* Description */}
          <p className="text-xl sm:text-2xl lg:text-3xl max-w-4xl mx-auto mb-16 leading-relaxed font-light text-slate-600 opacity-0 animate-slide-up animation-delay-100">
            Where timeless fashion meets contemporary artistry—crafting bespoke pieces that celebrate your unique elegance and personal style.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16 opacity-0 animate-slide-up animation-delay-200">
            <button
              onClick={onExplore}
              className="group backdrop-blur-xl bg-white/90 border border-slate-200/60 text-slate-800 rounded-2xl px-10 py-5 font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex items-center gap-3"
            >
              <Eye className="h-5 w-5" />
              Explore Collections
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={onBookConsultation}
              className="backdrop-blur-xl bg-gradient-to-r from-slate-900 to-purple-900 border border-slate-800 text-white rounded-2xl px-10 py-5 font-medium shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 flex items-center gap-3 hover:shadow-purple-900/30"
            >
              <Calendar className="h-5 w-5" />
              Book Consultation
            </button>
          </div>

          {/* Social Proof Stats */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-12 opacity-0 animate-slide-up animation-delay-300">
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-light font-serif mb-1 text-slate-800">
                500+
              </div>
              <p className="text-sm text-slate-500 uppercase tracking-wider">Happy Clients</p>
            </div>
            <div className="hidden sm:block w-px h-8 bg-slate-300" />
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-light font-serif mb-1 text-slate-800">
                15 Years
              </div>
              <p className="text-sm text-slate-500 uppercase tracking-wider">Experience</p>
            </div>
            <div className="hidden sm:block w-px h-8 bg-slate-300" />
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-light font-serif mb-1 text-slate-800">
                Award Winning
              </div>
              <p className="text-sm text-slate-500 uppercase tracking-wider">Studio</p>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-1/4 left-10 w-24 h-24 bg-gradient-to-br from-purple-200 to-pink-200 rounded-full opacity-30 blur-xl animate-float" />
      <div className="absolute bottom-1/3 right-16 w-20 h-20 bg-gradient-to-br from-blue-200 to-indigo-200 rounded-full opacity-30 blur-xl animate-float animation-delay-2s" />
      <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-gradient-to-br from-amber-200 to-orange-200 rounded-full opacity-20 blur-xl animate-float animation-delay-4s" />
      <div className="absolute bottom-1/4 left-1/3 w-12 h-12 bg-gradient-to-br from-green-200 to-emerald-200 rounded-full opacity-25 blur-xl animate-float animation-delay-1s" />

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0 animate-slide-up animation-delay-400">
        <button
          onClick={handleScrollToCollections}
          className="flex flex-col items-center gap-2 text-slate-400 hover:text-slate-600 transition-all duration-300 cursor-pointer"
          aria-label="Scroll to collections"
        >
          <span className="text-sm font-medium text-slate-600 tracking-wider">SCROLL</span>
          <div className="w-px h-8 bg-slate-600" />
          <ChevronDown className="w-4 h-4 text-slate-600 animate-bounce" />
        </button>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }

        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-slide-up {
          animation: slide-up 0.8s ease-out forwards;
        }

        .animation-delay-100 {
          animation-delay: 0.1s;
        }

        .animation-delay-200 {
          animation-delay: 0.2s;
        }

        .animation-delay-300 {
          animation-delay: 0.3s;
        }

        .animation-delay-400 {
          animation-delay: 0.4s;
        }

        .animation-delay-1s {
          animation-delay: -1s;
        }

        .animation-delay-2s {
          animation-delay: -2s;
        }

        .animation-delay-4s {
          animation-delay: -4s;
        }
      `}</style>
    </section>
  );
};
