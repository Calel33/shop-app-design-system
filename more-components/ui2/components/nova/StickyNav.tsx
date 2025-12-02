import { LogIn, Rocket, Menu } from 'lucide-react';

export const StickyNav = () => {
  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const element = document.querySelector(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-4 z-40 backdrop-blur supports-[backdrop-filter]:bg-gray-900/70 bg-gray-900/60 border-t border-gray-800 max-w-7xl ml-auto mr-auto rounded-full">
      <div className="max-w-7xl mr-auto ml-auto pr-6 pl-6">
        <div className="h-16 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-0">
            <svg
              className="md:w-14 md:h-14 w-[36px] h-[36px]"
              viewBox="0 0 48 48"
              aria-hidden="true"
              strokeWidth="2"
            >
              <circle
                cx="24"
                cy="24"
                r="12"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              />
              <circle cx="32" cy="18" r="3" fill="currentColor" />
            </svg>
            <span className="text-lg font-semibold tracking-tight">NOVA</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8 text-sm">
            <a
              href="#features"
              onClick={(e) => handleSmoothScroll(e, '#features')}
              className="text-gray-400 hover:text-gray-200 font-sans transition-colors"
            >
              Features
            </a>
            <a
              href="#security"
              onClick={(e) => handleSmoothScroll(e, '#security')}
              className="text-gray-400 hover:text-gray-200 font-sans transition-colors"
            >
              Security
            </a>
            <a
              href="#pricing"
              onClick={(e) => handleSmoothScroll(e, '#pricing')}
              className="text-gray-400 hover:text-gray-200 font-sans transition-colors"
            >
              Pricing
            </a>
            <a
              href="#docs"
              onClick={(e) => handleSmoothScroll(e, '#docs')}
              className="text-gray-400 hover:text-gray-200 font-sans transition-colors"
            >
              Docs
            </a>
          </nav>

          {/* CTA Buttons */}
          <div className="flex items-center gap-3">
            <a
              href="#"
              className="hidden sm:inline-flex items-center gap-2 rounded-full border border-gray-800 bg-gray-900/50 px-4 py-2.5 text-sm font-medium hover:bg-gray-800 transition font-sans"
            >
              <LogIn className="w-4 h-4" />
              Sign in
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-2 rounded-full bg-white text-gray-900 px-4 py-2.5 text-sm font-medium hover:bg-gray-100 transition font-sans"
            >
              <Rocket className="w-4 h-4" />
              Get started
            </a>
            <button
              className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-full border border-gray-800 bg-gray-900/50 hover:bg-gray-800"
              aria-label="Open menu"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
