import { Play, BookOpen, Lock, Radio, Wand2 } from 'lucide-react';
import { ChatDemoCard } from './ChatDemoCard';

export const HeroSection = () => {
  return (
    <section className="relative overflow-hidden max-w-7xl bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/0fb4aa0f-5e53-4030-88ae-8f570ef7170c_3840w.jpg)] bg-cover border-white/10 rounded-3xl mt-8 mr-auto ml-auto">
      {/* Gradient Overlay */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(1000px_400px_at_20%_-10%,rgba(16,185,129,0.18),transparent),radial-gradient(700px_300px_at_90%_10%,rgba(59,130,246,0.12),transparent)] bg-gray-950/40 backdrop-blur-2xl" />

      <div className="max-w-7xl md:py-20 mr-auto ml-auto pt-16 pr-8 pb-16 pl-8">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Left Column - Copy */}
          <div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl text-white font-manrope tracking-tighter">
              Ship chat your users love —{' '}
              <span className="italic tracking-tight font-instrument-serif">
                realtime, secure, fast
              </span>
            </h1>
            <p className="mt-5 text-gray-300/90 leading-relaxed font-sans">
              NOVA Chat is a developer-first messaging platform for modern apps. Realtime sync, AI
              assist, end-to-end encryption, and SDKs for Web, iOS, and Android.
            </p>

            {/* CTA Buttons */}
            <div className="mt-8 flex items-center gap-3">
              <a
                href="#"
                className="inline-flex items-center gap-2 text-sm font-medium text-white border border-white/15 bg-white/10 rounded-full px-6 py-3 hover:bg-white/15 hover:shadow-lg transition backdrop-blur font-sans"
              >
                <Play className="w-4 h-4" />
                Start free
              </a>
              <a
                href="#docs"
                className="inline-flex items-center gap-2 text-sm font-medium border border-white/15 text-white rounded-full px-6 py-3 hover:bg-white/10 transition backdrop-blur font-sans"
              >
                <BookOpen className="w-4 h-4" />
                View docs
              </a>
            </div>

            {/* Feature Highlights */}
            <div className="mt-8 space-y-6">
              {/* End-to-end encryption */}
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-500/10 flex items-center justify-center mt-1 ring-1 ring-blue-400/20 backdrop-blur">
                  <Lock className="w-4 h-4 text-emerald-400" />
                </div>
                <div>
                  <h4 className="text-base font-semibold text-white mb-1 font-sans">
                    End‑to‑end encryption
                  </h4>
                  <p className="text-sm text-gray-300/90 leading-relaxed font-sans">
                    Zero‑knowledge architecture with rotating keys and secure device handshakes.
                  </p>
                </div>
              </div>

              {/* Realtime at scale */}
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-purple-500/10 flex items-center justify-center mt-1 ring-1 ring-purple-400/20 backdrop-blur">
                  <Radio className="w-4 h-4 text-blue-400" />
                </div>
                <div>
                  <h4 className="text-base font-semibold text-white mb-1 font-sans">
                    Realtime at scale
                  </h4>
                  <p className="text-sm text-gray-300/90 leading-relaxed font-sans">
                    Sub‑100ms fanout, presence, typing indicators, and optimistic updates built‑in.
                  </p>
                </div>
              </div>

              {/* AI Assist */}
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-pink-500/10 flex items-center justify-center mt-1 ring-1 ring-pink-400/20 backdrop-blur">
                  <Wand2 className="w-4 h-4 text-purple-300" />
                </div>
                <div>
                  <h4 className="text-base font-semibold text-white mb-1 font-sans">AI Assist</h4>
                  <p className="text-sm text-gray-300/90 leading-relaxed font-sans">
                    Smart replies, summaries, and automations that keep conversations flowing.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Chat Demo */}
          <ChatDemoCard />
        </div>
      </div>
    </section>
  );
};
