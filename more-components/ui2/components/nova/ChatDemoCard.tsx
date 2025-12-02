import { Search, Settings, Paperclip, Mic, Send, ShieldCheck, MessageSquare, ArrowRight, Bot } from 'lucide-react';

export const ChatDemoCard = () => {
  return (
    <div className="relative">
      {/* Main Chat Card */}
      <article className="group relative overflow-hidden transition-shadow hover:shadow-xl bg-white/5 border-white/10 border rounded-3xl shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)] backdrop-blur-xl">
        <div className="sm:p-8 pt-6 pr-6 pb-6 pl-6">
          {/* Chat Window */}
          <div className="relative h-64 sm:h-72 rounded-2xl bg-gray-950/40 ring-1 ring-inset ring-white/10 overflow-hidden backdrop-blur-xl">
            {/* Grid Pattern */}
            <svg className="absolute inset-0 h-full w-full text-white/5" aria-hidden="true">
              <defs>
                <pattern id="grid-dark" width="24" height="24" patternUnits="userSpaceOnUse">
                  <path d="M24 0H0V24" fill="none" stroke="currentColor" strokeWidth="1" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid-dark)" />
            </svg>

            {/* Chat Interface */}
            <div className="absolute inset-x-6 top-6 sm:inset-x-10 sm:top-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-lg">
              {/* Header */}
              <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10">
                <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                <div className="ml-3 h-2 w-24 rounded bg-white/20" />
                <div className="ml-auto flex items-center gap-3 text-gray-300">
                  <Search className="w-4 h-4" />
                  <Settings className="w-4 h-4" />
                </div>
              </div>

              {/* Messages */}
              <div className="p-4 space-y-3 max-h-56 overflow-hidden">
                {/* Message 1 */}
                <div className="flex items-start gap-3">
                  <img
                    alt="Ava"
                    src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/91b9f74f-bc94-458c-82e2-8033d1113ade_320w.jpg"
                    className="h-7 w-7 rounded-full ring-1 ring-white/10 object-cover"
                  />
                  <div>
                    <div className="flex items-center gap-2">
                      <p className="text-sm font-semibold text-white font-sans">Ava</p>
                      <span className="text-[11px] text-gray-400 font-sans">09:24</span>
                    </div>
                    <div className="mt-1 rounded-2xl bg-white/10 text-gray-100 text-sm px-3 py-2 ring-1 ring-white/10 backdrop-blur font-sans">
                      Shipping a beta today. Can we enable AI summaries by default?
                    </div>
                  </div>
                </div>

                {/* Message 2 */}
                <div className="flex items-start gap-3 justify-end">
                  <div className="max-w-[75%]">
                    <div className="flex items-center justify-end gap-2">
                      <span className="text-[11px] text-gray-400 font-sans">09:25</span>
                      <p className="text-sm font-semibold text-white font-sans">You</p>
                    </div>
                    <div className="mt-1 rounded-2xl bg-blue-500/15 text-blue-200 text-sm px-3 py-2 ring-1 ring-blue-400/20 backdrop-blur font-sans">
                      Yep — toggled for workspaces with &gt;5 members. Summaries run on close.
                    </div>
                  </div>
                  <img
                    alt="You"
                    src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/8971b844-3f76-4d34-963f-0426b84c3985_320w.jpg"
                    className="h-7 w-7 rounded-full ring-1 ring-white/10 object-cover"
                  />
                </div>

                {/* Message 3 */}
                <div className="flex items-start gap-3">
                  <img
                    alt="Kai"
                    src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/13a5581f-35ac-4b9e-ae7c-47573e09ab8e_320w.jpg"
                    className="h-7 w-7 rounded-full ring-1 ring-white/10 object-cover"
                  />
                  <div>
                    <div className="flex items-center gap-2">
                      <p className="text-sm font-semibold text-white font-sans">Kai</p>
                      <span className="text-[11px] text-gray-400 font-sans">09:27</span>
                      <span className="inline-flex items-center gap-1 text-[11px] text-blue-300 font-sans">
                        <ShieldCheck className="w-3.5 h-3.5" /> E2EE
                      </span>
                    </div>
                    <div className="mt-1 rounded-2xl bg-white/10 text-gray-100 text-sm px-3 py-2 ring-1 ring-white/10 backdrop-blur font-sans">
                      Love it. Also enabled presence + typing for the shared channels.
                    </div>
                  </div>
                </div>
              </div>

              {/* Input */}
              <div className="p-3 border-t border-white/10 bg-white/5 backdrop-blur">
                <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 backdrop-blur">
                  <button className="text-gray-300 hover:text-gray-100">
                    <Paperclip className="w-4.5 h-4.5" />
                  </button>
                  <input
                    placeholder="Write a message…"
                    className="flex-1 bg-transparent placeholder-gray-500 text-sm outline-none text-gray-100"
                  />
                  <button className="text-gray-300 hover:text-gray-100">
                    <Mic className="w-4.5 h-4.5" />
                  </button>
                  <button className="inline-flex items-center justify-center rounded-full bg-blue-500 text-blue-950 px-3 py-1.5 hover:bg-blue-400 transition">
                    <Send className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Card Footer */}
          <div className="mt-6 sm:mt-8">
            <div className="flex items-center gap-3">
              <MessageSquare className="w-5 h-5 text-neutral-300" />
              <h3 className="text-xl sm:text-2xl text-gray-100 font-manrope tracking-tighter">
                Conversation Infrastructure
              </h3>
            </div>
            <p className="mt-3 text-gray-300/90 text-sm font-sans">
              Channels, threads, reactions, uploads, search, and permissions — all in one API.
            </p>
            <div className="mt-4">
              <a
                href="#features"
                className="inline-flex items-center gap-2 text-xs font-medium text-gray-100 hover:text-gray-300 font-sans"
              >
                Explore features
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </article>

      {/* AI Summary Card */}
      <div className="relative w-full max-w-xl mt-8">
        <div className="absolute -top-5 left-1/2 -translate-x-1/2 w-[calc(100%-3rem)] h-9 shadow-[0_6px_20px_rgba(16,185,129,0.25)] bg-blue-900/20 rounded-2xl backdrop-blur" />
        <article className="relative overflow-hidden ring-1 ring-white/15 text-white bg-white/5 rounded-2xl shadow-2xl backdrop-blur-xl">
          <div className="pointer-events-none absolute inset-x-0 -top-10 h-24 bg-gradient-to-b from-white/20 to-transparent" />
          <div className="sm:p-5 pt-4 pr-4 pb-4 pl-4">
            <div className="flex items-start gap-3">
              <div className="shrink-0 rounded-xl bg-gray-950/40 p-2.5 ring-1 ring-white/10 shadow-md backdrop-blur">
                <Bot className="w-5 h-5 text-white" />
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-[15px] sm:text-base font-semibold tracking-tight truncate font-sans">
                    AI Summary posted to #release
                  </h3>
                  <span className="text-xs sm:text-sm text-white/85 shrink-0 font-sans">2m ago</span>
                </div>
                <p className="mt-1 text-sm leading-6 text-white/90 font-sans">
                  8 updates merged. Beta flag enabled. Rollout: 20% workspaces. No incidents detected.
                </p>
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
};
