/**
 * MedicalLayout Usage Examples
 * Demonstrates various ways to use the reusable MedicalLayout component
 */

import { MedicalLayout } from './MedicalLayout';
import { HeroSection, BentoGrid, CTASection } from './index';

// ============================================
// Example 1: Basic Usage (Default Settings)
// ============================================
export const BasicLayoutExample = () => {
  return (
    <MedicalLayout>
      <h1 className="text-4xl font-bold">About Our Medical Center</h1>
      <p className="mt-4 text-gray-600">
        Learn more about our world-class healthcare facility...
      </p>
    </MedicalLayout>
  );
};

// ============================================
// Example 2: Custom Background
// ============================================
export const CustomBackgroundExample = () => {
  return (
    <MedicalLayout background="gradient-to-br from-blue-100 to-indigo-50">
      <h1 className="text-4xl font-bold">Our Services</h1>
      <div className="grid grid-cols-3 gap-6 mt-8">
        {/* Service cards here */}
      </div>
    </MedicalLayout>
  );
};

// ============================================
// Example 3: Without Navigation
// ============================================
export const NoNavigationExample = () => {
  return (
    <MedicalLayout showNavigation={false}>
      <h1 className="text-4xl font-bold">Standalone Content</h1>
      <p className="mt-4 text-gray-600">
        This page doesn't show the navigation bar.
      </p>
    </MedicalLayout>
  );
};

// ============================================
// Example 4: Custom Container Width
// ============================================
export const CustomWidthExample = () => {
  return (
    <MedicalLayout maxWidth="max-w-4xl">
      <article className="prose prose-lg">
        <h1>Medical Blog Post</h1>
        <p>Narrower container for better reading experience...</p>
      </article>
    </MedicalLayout>
  );
};

// ============================================
// Example 5: Full Landing Page with Layout
// ============================================
export const FullLandingWithLayout = () => {
  return (
    <MedicalLayout>
      <HeroSection />
      <BentoGrid />
      <CTASection />
    </MedicalLayout>
  );
};

// ============================================
// Example 6: Custom Content Styling
// ============================================
export const CustomContentExample = () => {
  return (
    <MedicalLayout
      contentClassName="py-32"
      background="white"
    >
      <div className="text-center">
        <h1 className="text-5xl font-bold mb-6">Contact Us</h1>
        <form className="max-w-md mx-auto space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full px-4 py-2 border rounded-lg"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full px-4 py-2 border rounded-lg"
          />
          <textarea
            placeholder="Your Message"
            rows={4}
            className="w-full px-4 py-2 border rounded-lg"
          />
          <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
            Send Message
          </button>
        </form>
      </div>
    </MedicalLayout>
  );
};

// ============================================
// Example 7: Multiple Sections
// ============================================
export const MultipleSectionsExample = () => {
  return (
    <MedicalLayout>
      {/* Section 1 */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
        <p className="text-gray-600 leading-relaxed">
          Providing exceptional healthcare services...
        </p>
      </section>

      {/* Section 2 */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Our Team</h2>
        <div className="grid grid-cols-3 gap-6">
          {/* Team member cards */}
        </div>
      </section>

      {/* Section 3 */}
      <section>
        <h2 className="text-3xl font-bold mb-6">Testimonials</h2>
        {/* Testimonial cards */}
      </section>
    </MedicalLayout>
  );
};

// ============================================
// Example 8: Dark Theme Variant
// ============================================
export const DarkThemeExample = () => {
  return (
    <MedicalLayout
      background="gradient-to-br from-gray-900 to-gray-800"
      className="text-white"
    >
      <h1 className="text-4xl font-bold">Night Mode</h1>
      <p className="mt-4 text-gray-300">
        Custom dark theme implementation...
      </p>
    </MedicalLayout>
  );
};

// ============================================
// Example 9: Nested Layout (Admin Dashboard)
// ============================================
export const NestedLayoutExample = () => {
  return (
    <MedicalLayout maxWidth="max-w-full">
      <div className="flex gap-6">
        {/* Sidebar */}
        <aside className="w-64 bg-white rounded-lg shadow p-6">
          <h3 className="font-semibold mb-4">Dashboard Menu</h3>
          <nav className="space-y-2">
            <a href="#" className="block text-gray-600 hover:text-blue-600">
              Overview
            </a>
            <a href="#" className="block text-gray-600 hover:text-blue-600">
              Patients
            </a>
            <a href="#" className="block text-gray-600 hover:text-blue-600">
              Appointments
            </a>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 bg-white rounded-lg shadow p-6">
          <h2 className="text-2xl font-bold mb-4">Dashboard Overview</h2>
          <div className="grid grid-cols-3 gap-4">
            {/* Stats cards */}
          </div>
        </main>
      </div>
    </MedicalLayout>
  );
};

// ============================================
// Example 10: Custom Navigation Props
// ============================================
export const CustomNavigationExample = () => {
  return (
    <MedicalLayout
      navigationClassName="bg-blue-600 text-white border-blue-700"
    >
      <h1 className="text-4xl font-bold">Custom Navigation Style</h1>
      <p className="mt-4 text-gray-600">
        The navigation bar has custom styling applied...
      </p>
    </MedicalLayout>
  );
};

// ============================================
// Usage in Next.js App Router
// ============================================
// app/about/page.tsx
export default function AboutPage() {
  return (
    <MedicalLayout>
      <h1>About Us</h1>
      {/* Your content */}
    </MedicalLayout>
  );
}

// app/services/page.tsx
export function ServicesPage() {
  return (
    <MedicalLayout background="gradient-to-br from-green-50 to-blue-50">
      <h1>Our Services</h1>
      {/* Your content */}
    </MedicalLayout>
  );
}

// app/contact/page.tsx
export function ContactPage() {
  return (
    <MedicalLayout maxWidth="max-w-4xl">
      <h1>Contact Us</h1>
      {/* Your content */}
    </MedicalLayout>
  );
}
