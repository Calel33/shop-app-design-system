import { useState } from 'react';
import { MessageCircle, Github, Twitter, Linkedin, ArrowRight, Mail } from 'lucide-react';

export const Footer = () => {
  const [email, setEmail] = useState('');
  const currentYear = new Date().getFullYear();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log('Subscribe:', email);
  };

  return (
    <footer className="border-t border-white/10 pt-10 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="sm:p-8 bg-gradient-to-r from-gray-950 to-gray-900 border border-white/10 rounded-3xl p-6">
          <div className="grid md:grid-cols-2 gap-10">
            {/* Left Column */}
            <div>
              <div className="flex items-center gap-3">
                <span className="inline-flex h-8 w-8 rounded-full bg-gradient-to-br from-blue-600 to-teal-500 items-center justify-center text-white ring-1 ring-white/10">
                  <MessageCircle className="w-4 h-4" />
                </span>
                <span className="text-lg font-semibold tracking-tight text-white font-sans">
                  NOVA Chat
                </span>
              </div>
              <p className="mt-3 text-sm text-gray-400 font-sans">
                Conversation infrastructure for modern apps. Realtime, secure, and delightful by
                default.
              </p>

              {/* Social Links */}
              <ul className="mt-6 space-y-2">
                <li>
                  <a
                    href="#"
                    className="flex items-center justify-between border-b border-white/10 py-3 text-sm"
                  >
                    <span className="flex items-center gap-3 text-gray-200 font-sans">
                      <Github className="w-4 h-4 text-neutral-400" />
                      GitHub
                    </span>
                    <ArrowRight className="w-4 h-4 text-neutral-500" />
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center justify-between border-b border-white/10 py-3 text-sm"
                  >
                    <span className="flex items-center gap-3 text-gray-200 font-sans">
                      <Twitter className="w-4 h-4 text-neutral-400" />
                      Twitter
                    </span>
                    <ArrowRight className="w-4 h-4 text-neutral-500" />
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center justify-between border-b border-white/10 py-3 text-sm"
                  >
                    <span className="flex items-center gap-3 text-gray-200 font-sans">
                      <Linkedin className="w-4 h-4 text-neutral-400" />
                      LinkedIn
                    </span>
                    <ArrowRight className="w-4 h-4 text-neutral-500" />
                  </a>
                </li>
              </ul>
            </div>

            {/* Right Column - Newsletter + Links */}
            <div>
              <p className="text-sm font-medium text-gray-200 font-sans">Join product updates</p>
              <form onSubmit={handleSubmit} className="mt-3">
                <label htmlFor="footer-email" className="sr-only font-sans">
                  Email address
                </label>
                <div className="flex items-center gap-3 sm:max-w-sm">
                  <input
                    id="footer-email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your email address"
                    className="flex-1 rounded-full border border-white/10 bg-gray-950 px-5 py-2.5 text-sm placeholder-gray-600 focus:outline-none text-gray-200"
                    required
                  />
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 rounded-full bg-white text-gray-900 px-5 py-2.5 text-sm font-medium hover:bg-gray-100 font-sans"
                  >
                    Subscribe
                    <Mail className="w-4 h-4" />
                  </button>
                </div>
              </form>

              {/* Footer Links */}
              <ul className="mt-6 space-y-2">
                <li>
                  <a
                    href="#features"
                    className="flex items-center justify-between border-b border-white/10 py-3 text-sm text-gray-200 font-sans"
                  >
                    Features
                    <ArrowRight className="w-4 h-4 text-neutral-500" />
                  </a>
                </li>
                <li>
                  <a
                    href="#pricing"
                    className="flex items-center justify-between border-b border-white/10 py-3 text-sm text-gray-200 font-sans"
                  >
                    Pricing
                    <ArrowRight className="w-4 h-4 text-neutral-500" />
                  </a>
                </li>
                <li>
                  <a
                    href="#docs"
                    className="flex items-center justify-between border-b border-white/10 py-3 text-sm text-gray-200 font-sans"
                  >
                    Docs
                    <ArrowRight className="w-4 h-4 text-neutral-500" />
                  </a>
                </li>
                <li className="flex items-center justify-between py-3 text-sm text-gray-400">
                  <span className="font-sans">
                    © <span className="font-sans">{currentYear}</span> NOVA. All rights reserved.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
