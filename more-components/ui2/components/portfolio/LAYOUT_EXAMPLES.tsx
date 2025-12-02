/**
 * Portfolio Layout Component - Usage Examples
 * 
 * This file demonstrates various ways to use the PortfolioLayout component
 */

import { PortfolioLayout } from './PortfolioLayout';
import { PortfolioGrid } from './PortfolioGrid';
import type { PortfolioColumn } from '../types/portfolio.types';

// Sample data for examples
const samplePortfolioData: { columns: PortfolioColumn[] } = {
  columns: [
    {
      items: [
        {
          id: '1',
          image: 'https://via.placeholder.com/800x600',
          alt: 'Sample Project',
          category: 'Web • Design',
          title: 'Sample Project',
          link: '#',
          height: 'h-56',
        },
      ],
    },
  ],
};

// ============================================================================
// Example 1: Basic Layout (No Header)
// ============================================================================

export function BasicLayoutExample() {
  return (
    <PortfolioLayout>
      <h1 className="text-4xl font-bold mb-8">Welcome to My Portfolio</h1>
      <p className="text-neutral-600 mb-12">
        Explore my latest projects and creative work.
      </p>
      <PortfolioGrid
        columns={samplePortfolioData.columns}
        title="Featured Work"
        sectionLabel="(01) Projects"
      />
    </PortfolioLayout>
  );
}

// ============================================================================
// Example 2: Layout with Header
// ============================================================================

export function LayoutWithHeaderExample() {
  return (
    <PortfolioLayout
      showHeader={true}
      headerContent={
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-neutral-900">My Portfolio</h1>
          <nav className="flex gap-6">
            <a href="#work" className="text-sm text-neutral-600 hover:text-neutral-900">
              Work
            </a>
            <a href="#about" className="text-sm text-neutral-600 hover:text-neutral-900">
              About
            </a>
            <a href="#contact" className="text-sm text-neutral-600 hover:text-neutral-900">
              Contact
            </a>
          </nav>
        </div>
      }
    >
      <PortfolioGrid
        columns={samplePortfolioData.columns}
        title="My Projects"
        sectionLabel="(01) Featured"
      />
    </PortfolioLayout>
  );
}

// ============================================================================
// Example 3: Custom Background
// ============================================================================

export function CustomBackgroundExample() {
  return (
    <PortfolioLayout background="gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold mb-4">Creative Portfolio</h1>
        <p className="text-xl text-neutral-600">
          Showcasing design and development excellence
        </p>
      </div>
      <PortfolioGrid
        columns={samplePortfolioData.columns}
        title="Featured Projects"
        sectionLabel="(01) Work"
      />
    </PortfolioLayout>
  );
}

// ============================================================================
// Example 4: Custom Container Width
// ============================================================================

export function CustomWidthExample() {
  return (
    <PortfolioLayout maxWidth="max-w-6xl">
      <PortfolioGrid
        columns={samplePortfolioData.columns}
        title="Compact Portfolio"
        sectionLabel="(01) Projects"
      />
    </PortfolioLayout>
  );
}

// ============================================================================
// Example 5: Full-Width Layout
// ============================================================================

export function FullWidthExample() {
  return (
    <PortfolioLayout maxWidth="max-w-full" contentClassName="px-8">
      <div className="max-w-7xl mx-auto mb-12">
        <h1 className="text-4xl font-bold">Full Width Portfolio</h1>
      </div>
      <PortfolioGrid
        columns={samplePortfolioData.columns}
        title="All Projects"
        sectionLabel="(01) Work"
      />
    </PortfolioLayout>
  );
}

// ============================================================================
// Example 6: Dark Background
// ============================================================================

export function DarkBackgroundExample() {
  return (
    <PortfolioLayout
      background="gradient-to-br from-neutral-900 to-neutral-800"
      className="text-white"
    >
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-white mb-4">Dark Portfolio</h1>
        <p className="text-neutral-300">
          A sleek, modern portfolio with dark aesthetics
        </p>
      </div>
      <PortfolioGrid
        columns={samplePortfolioData.columns}
        title="Featured Work"
        sectionLabel="(01) Projects"
      />
    </PortfolioLayout>
  );
}

// ============================================================================
// Example 7: Multi-Section Layout
// ============================================================================

export function MultiSectionExample() {
  return (
    <PortfolioLayout showHeader={true}>
      {/* Hero Section */}
      <section className="mb-20 text-center">
        <h1 className="text-6xl font-bold mb-6">John Doe</h1>
        <p className="text-xl text-neutral-600 mb-8">
          Designer & Developer
        </p>
        <button className="px-6 py-3 bg-neutral-900 text-white rounded-full hover:bg-neutral-800">
          View My Work
        </button>
      </section>

      {/* Portfolio Section */}
      <section className="mb-20">
        <PortfolioGrid
          columns={samplePortfolioData.columns}
          title="Featured Projects"
          sectionLabel="(01) Work"
        />
      </section>

      {/* About Section */}
      <section className="mb-20">
        <h2 className="text-3xl font-bold mb-6">About Me</h2>
        <p className="text-neutral-600 max-w-3xl">
          I'm a passionate designer and developer with 10+ years of experience
          creating beautiful, functional digital experiences.
        </p>
      </section>
    </PortfolioLayout>
  );
}

// ============================================================================
// Example 8: Minimal Layout
// ============================================================================

export function MinimalLayoutExample() {
  return (
    <PortfolioLayout
      background="white"
      contentClassName="py-32"
    >
      <PortfolioGrid
        columns={samplePortfolioData.columns}
        title="Work"
        sectionLabel=""
      />
    </PortfolioLayout>
  );
}

// ============================================================================
// Example 9: Layout with Footer
// ============================================================================

export function LayoutWithFooterExample() {
  return (
    <PortfolioLayout showHeader={true}>
      <PortfolioGrid
        columns={samplePortfolioData.columns}
        title="My Portfolio"
        sectionLabel="(01) Projects"
      />

      {/* Footer */}
      <footer className="mt-32 pt-12 border-t border-neutral-200">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <p className="text-neutral-600">© 2025 Portfolio. All rights reserved.</p>
          </div>
          <div className="flex gap-6">
            <a href="#twitter" className="text-neutral-600 hover:text-neutral-900">
              Twitter
            </a>
            <a href="#linkedin" className="text-neutral-600 hover:text-neutral-900">
              LinkedIn
            </a>
            <a href="#github" className="text-neutral-600 hover:text-neutral-900">
              GitHub
            </a>
          </div>
        </div>
      </footer>
    </PortfolioLayout>
  );
}

// ============================================================================
// Example 10: Responsive Layout with Sidebar
// ============================================================================

export function LayoutWithSidebarExample() {
  return (
    <PortfolioLayout maxWidth="max-w-full">
      <div className="flex flex-col lg:flex-row gap-8 max-w-7xl mx-auto">
        {/* Sidebar */}
        <aside className="lg:w-64 flex-shrink-0">
          <div className="sticky top-8">
            <h2 className="text-xl font-bold mb-4">Categories</h2>
            <ul className="space-y-2">
              <li>
                <a href="#all" className="text-neutral-600 hover:text-neutral-900">
                  All Projects
                </a>
              </li>
              <li>
                <a href="#web" className="text-neutral-600 hover:text-neutral-900">
                  Web Design
                </a>
              </li>
              <li>
                <a href="#app" className="text-neutral-600 hover:text-neutral-900">
                  App Development
                </a>
              </li>
              <li>
                <a href="#branding" className="text-neutral-600 hover:text-neutral-900">
                  Branding
                </a>
              </li>
            </ul>
          </div>
        </aside>

        {/* Main Content */}
        <div className="flex-1">
          <PortfolioGrid
            columns={samplePortfolioData.columns}
            title="All Projects"
            sectionLabel="(01) Portfolio"
          />
        </div>
      </div>
    </PortfolioLayout>
  );
}

// ============================================================================
// Default Export
// ============================================================================

export default BasicLayoutExample;
