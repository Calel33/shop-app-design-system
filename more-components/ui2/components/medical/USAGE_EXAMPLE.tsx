/**
 * Usage Examples for Medical Landing Page Components
 * @module USAGE_EXAMPLE
 */

import React from 'react';
import MedicalLanding, {
  Navigation,
  HeroSection,
  BentoGrid,
  BentoCard,
  CTASection,
  useScrollAnimation,
} from './index';

// ============================================
// Example 1: Full Landing Page (Recommended)
// ============================================

export function Example1_FullLandingPage() {
  return <MedicalLanding />;
}

// ============================================
// Example 2: Custom Layout with Individual Components
// ============================================

export function Example2_CustomLayout() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50/30">
      <Navigation />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-20">
        <HeroSection className="mb-20" />
        <BentoGrid className="mb-20" />
        <CTASection />
      </main>
    </div>
  );
}

// ============================================
// Example 3: Using BentoCard for Custom Content
// ============================================

export function Example3_CustomBentoCard() {
  return (
    <div className="p-8">
      <BentoCard
        className="col-span-2"
        animationType="fade-in"
        animationDelay={400}
      >
        <div className="bg-white rounded-3xl p-6 shadow-lg">
          <h3 className="text-xl font-semibold mb-4">Custom Card</h3>
          <p className="text-gray-600">
            Your custom content with scroll animation
          </p>
        </div>
      </BentoCard>
    </div>
  );
}

// ============================================
// Example 4: Using Scroll Animation Hook
// ============================================

export function Example4_ScrollAnimationHook() {
  const { ref, isVisible } = useScrollAnimation({
    threshold: 0.2,
    rootMargin: '0px',
    triggerOnce: true,
  });

  return (
    <div className="min-h-screen p-8">
      <div className="h-screen">Scroll down to see animation</div>
      
      <div
        ref={ref}
        className={`transition-all duration-700 ${
          isVisible
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="bg-blue-600 text-white p-8 rounded-2xl">
          <h2 className="text-2xl font-bold mb-4">Animated Content</h2>
          <p>This content animates when scrolled into view!</p>
        </div>
      </div>
    </div>
  );
}

// ============================================
// Example 5: Multiple Staggered Animations
// ============================================

export function Example5_StaggeredAnimations() {
  const items = [
    { delay: 200, title: 'First Item' },
    { delay: 400, title: 'Second Item' },
    { delay: 600, title: 'Third Item' },
    { delay: 800, title: 'Fourth Item' },
  ];

  return (
    <div className="p-8 space-y-4">
      {items.map((item, index) => (
        <BentoCard
          key={index}
          animationType="slide-up"
          animationDelay={item.delay}
        >
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="font-semibold">{item.title}</h3>
            <p className="text-sm text-gray-600">
              Appears with {item.delay}ms delay
            </p>
          </div>
        </BentoCard>
      ))}
    </div>
  );
}

// ============================================
// Example 6: Responsive Grid Layout
// ============================================

export function Example6_ResponsiveGrid() {
  return (
    <div className="p-8">
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
        <BentoCard
          className="col-span-2 lg:col-span-3"
          animationType="scale-in"
        >
          <div className="bg-gradient-to-br from-blue-500 to-blue-700 text-white p-8 rounded-3xl h-full">
            <h3 className="text-2xl font-bold">Large Card</h3>
            <p className="mt-2">Spans 3 columns on desktop</p>
          </div>
        </BentoCard>

        <BentoCard
          className="col-span-1 lg:col-span-2"
          animationType="fade-in"
          animationDelay={200}
        >
          <div className="bg-white p-6 rounded-3xl h-full shadow-lg">
            <h3 className="font-semibold">Medium Card</h3>
            <p className="text-sm text-gray-600 mt-2">Spans 2 columns</p>
          </div>
        </BentoCard>

        <BentoCard
          className="col-span-1"
          animationType="slide-left"
          animationDelay={400}
        >
          <div className="bg-indigo-50 p-6 rounded-3xl h-full">
            <h3 className="font-semibold">Small Card</h3>
            <p className="text-sm text-gray-600 mt-2">1 column</p>
          </div>
        </BentoCard>
      </div>
    </div>
  );
}

// ============================================
// Example 7: Navigation Only (Standalone)
// ============================================

export function Example7_NavigationOnly() {
  return (
    <div>
      <Navigation className="shadow-lg" />
      <main className="pt-20 p-8">
        <h1 className="text-4xl font-bold">Your Content Here</h1>
        <p className="text-gray-600 mt-4">
          Navigation bar is fixed at the top
        </p>
      </main>
    </div>
  );
}

// ============================================
// Example 8: Dark Mode Variant (Custom)
// ============================================

export function Example8_DarkModeVariant() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <nav className="fixed top-0 w-full z-50 backdrop-blur-[20px] bg-gray-900/95 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <span className="font-semibold text-lg">MedCore Health</span>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors">
              Book Appointment
            </button>
          </div>
        </div>
      </nav>

      <main className="pt-20 p-8">
        <BentoCard animationType="fade-in">
          <div className="bg-gray-800 p-8 rounded-3xl">
            <h2 className="text-2xl font-bold mb-4">Dark Mode Example</h2>
            <p className="text-gray-300">
              Customize colors to match your design system
            </p>
          </div>
        </BentoCard>
      </main>
    </div>
  );
}

// ============================================
// Example 9: Integration with Next.js App Router
// ============================================

/**
 * app/medical/page.tsx
 */
export function Example9_NextJsAppRouter() {
  return (
    <>
      {/* Import CSS in layout.tsx or page.tsx */}
      {/* import '@/componets/medical/medical-animations.css'; */}
      <MedicalLanding />
    </>
  );
}

// ============================================
// Example 10: With Custom Event Handlers
// ============================================

export function Example10_WithEventHandlers() {
  const handleAppointmentClick = () => {
    console.log('Appointment button clicked');
    // Add your booking logic here
  };

  const handleServiceClick = (service: string) => {
    console.log(`Service clicked: ${service}`);
    // Navigate to service page or show modal
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50/30">
      <nav className="fixed top-0 w-full z-50 backdrop-blur-[20px] bg-white/95 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <span className="font-semibold text-lg">MedCore Health</span>
            <button
              onClick={handleAppointmentClick}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Book Appointment
            </button>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 pt-20 pb-20">
        <BentoCard animationType="fade-in">
          <button
            onClick={() => handleServiceClick('Cardiology')}
            className="w-full text-left bg-white p-6 rounded-3xl shadow-lg hover:shadow-xl transition-shadow"
          >
            <h3 className="text-xl font-semibold">Cardiology Services</h3>
            <p className="text-gray-600 mt-2">Click to learn more</p>
          </button>
        </BentoCard>
      </main>
    </div>
  );
}

export default {
  Example1_FullLandingPage,
  Example2_CustomLayout,
  Example3_CustomBentoCard,
  Example4_ScrollAnimationHook,
  Example5_StaggeredAnimations,
  Example6_ResponsiveGrid,
  Example7_NavigationOnly,
  Example8_DarkModeVariant,
  Example9_NextJsAppRouter,
  Example10_WithEventHandlers,
};
