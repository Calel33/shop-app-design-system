/**
 * Portfolio Grid Component - Usage Examples
 * 
 * This file demonstrates various ways to use the Portfolio Grid components
 */

import { PortfolioGrid, PortfolioCard, PortfolioHeader } from './index';
import type { PortfolioColumn, PortfolioItem } from '../types/portfolio.types';

// ============================================================================
// Example 1: Basic Usage with Sample Data
// ============================================================================

export function BasicPortfolioExample() {
  const portfolioData: { columns: PortfolioColumn[] } = {
    columns: [
      {
        items: [
          {
            id: '1',
            image: 'https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/af5c4f11-0653-43c0-b21e-5b8cc085c9f3_800w.jpg',
            alt: 'Cloud Analytics dashboard project',
            category: 'SaaS • Product',
            title: 'Cloud Analytics',
            link: '#work',
            height: 'h-56',
          },
          {
            id: '2',
            image: 'https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/60f49edd-2009-43cf-a12a-d82fd91aae5e_800w.jpg',
            alt: 'E-commerce platform',
            category: 'E-commerce • Platform',
            title: 'Shop Pro',
            link: '#work',
            height: 'h-72',
          },
          {
            id: '3',
            image: 'https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/27aa90c0-b947-4bfd-b8da-7cf0ab291ab1_800w.jpg',
            alt: 'Portfolio website',
            category: 'Portfolio • Website',
            title: 'Creative Hub',
            link: '#work',
            height: 'h-48',
          },
        ],
      },
      {
        items: [
          {
            id: '4',
            image: 'https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/b19e7d3a-309c-4d55-9373-80ca043c0f49_800w.jpg',
            alt: 'Product launch landing page',
            category: 'Platform • Website',
            title: 'Boltshift Launch',
            link: '#work',
            height: 'h-64',
          },
          {
            id: '5',
            image: 'https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/a76e4f7e-e0f8-4732-8b99-5b3abe6fd91d_800w.jpg',
            alt: 'Mobile app design',
            category: 'Mobile • App',
            title: 'FitTracker',
            link: '#work',
            height: 'h-56',
          },
          {
            id: '6',
            image: 'https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/cac77434-d322-40be-a298-4e2198a61175_800w.jpg',
            alt: 'Data visualization',
            category: 'Data • Visualization',
            title: 'DataFlow',
            link: '#work',
            height: 'h-56',
          },
        ],
      },
      {
        items: [
          {
            id: '7',
            image: 'https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/7df94c66-5d1e-4235-a476-1d2d8881a456_800w.jpg',
            alt: 'Design system',
            category: 'Design • System',
            title: 'Nexus System',
            link: '#work',
            height: 'h-72',
          },
          {
            id: '8',
            image: 'https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/b1350108-f0ef-4f66-83ae-fe50447f6f74_800w.jpg',
            alt: 'Brand identity and campaign visuals',
            category: 'Identity • Campaign',
            title: 'Quotient Rebrand',
            link: '#work',
            height: 'h-48',
          },
          {
            id: '9',
            image: 'https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/68a7825c-0f07-4225-a8e0-d22929426aa3_800w.jpg',
            alt: 'Web application',
            category: 'Web • Application',
            title: 'TaskFlow Pro',
            link: '#work',
            height: 'h-56',
          },
        ],
      },
    ],
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <PortfolioGrid
        columns={portfolioData.columns}
        title="A few projects I'm proud of."
        sectionLabel="(03) Selected Work"
        ctaText="View Portfolio"
        ctaLink="#work"
        viewAllText="View All Work"
        viewAllLink="#work"
      />
    </div>
  );
}

// ============================================================================
// Example 2: Custom Section Labels and Titles
// ============================================================================

export function CustomLabelsExample() {
  const portfolioData: { columns: PortfolioColumn[] } = {
    columns: [
      {
        items: [
          {
            id: '1',
            image: '/images/project1.jpg',
            alt: 'Featured project',
            category: 'Web • Design',
            title: 'Featured Project',
            link: '/projects/1',
            height: 'h-64',
          },
        ],
      },
    ],
  };

  return (
    <PortfolioGrid
      columns={portfolioData.columns}
      title="My Latest Work"
      sectionLabel="(01) Featured Projects"
      subtitle="Explore my recent design and development projects"
      ctaText="See All Projects"
      ctaLink="/portfolio"
      viewAllText="Browse Full Portfolio"
      viewAllLink="/portfolio"
    />
  );
}

// ============================================================================
// Example 3: Using Individual Components
// ============================================================================

export function IndividualComponentsExample() {
  const sampleItem: PortfolioItem = {
    id: '1',
    image: '/images/project.jpg',
    alt: 'Sample project',
    category: 'Web • Development',
    title: 'Sample Project',
    link: '/projects/1',
    height: 'h-56',
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <PortfolioHeader
        sectionLabel="(02) Recent Work"
        title="Featured Projects"
        ctaText="View More"
        ctaLink="/portfolio"
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5 mt-8">
        <PortfolioCard item={sampleItem} />
        <PortfolioCard item={{ ...sampleItem, id: '2', height: 'h-72' }} />
        <PortfolioCard item={{ ...sampleItem, id: '3', height: 'h-48' }} />
      </div>
    </div>
  );
}

// ============================================================================
// Example 4: Dynamic Data from API
// ============================================================================

export function DynamicDataExample() {
  const [portfolioData, setPortfolioData] = React.useState<{ columns: PortfolioColumn[] }>({
    columns: [],
  });
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    // Simulate API call
    const fetchPortfolioData = async () => {
      try {
        // Replace with your actual API call
        const response = await fetch('/api/portfolio');
        const data = await response.json();
        setPortfolioData(data);
      } catch (error) {
        console.error('Error fetching portfolio data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPortfolioData();
  }, []);

  if (loading) {
    return <div className="text-center py-20">Loading portfolio...</div>;
  }

  return (
    <PortfolioGrid
      columns={portfolioData.columns}
      title="My Portfolio"
      sectionLabel="(01) Projects"
    />
  );
}

// ============================================================================
// Example 5: With Custom Styling
// ============================================================================

export function CustomStylingExample() {
  const portfolioData: { columns: PortfolioColumn[] } = {
    columns: [
      {
        items: [
          {
            id: '1',
            image: '/images/project1.jpg',
            alt: 'Custom styled project',
            category: 'Design • Development',
            title: 'Custom Project',
            link: '#',
            height: 'h-64',
          },
        ],
      },
    ],
  };

  return (
    <div className="bg-gradient-to-br from-blue-50 to-white min-h-screen">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <PortfolioGrid
          columns={portfolioData.columns}
          title="Creative Portfolio"
          sectionLabel="(01) Featured"
          className="custom-portfolio-section"
        />
      </div>
    </div>
  );
}

// ============================================================================
// Example 6: Minimal Configuration
// ============================================================================

export function MinimalExample() {
  const portfolioData: { columns: PortfolioColumn[] } = {
    columns: [
      {
        items: [
          {
            id: '1',
            image: '/images/project1.jpg',
            alt: 'Project 1',
            category: 'Web',
            title: 'Project 1',
            link: '#',
            height: 'h-56',
          },
        ],
      },
    ],
  };

  return (
    <PortfolioGrid
      columns={portfolioData.columns}
      title="My Work"
    />
  );
}

// ============================================================================
// Example 7: With Different Card Heights (Masonry Effect)
// ============================================================================

export function MasonryLayoutExample() {
  const portfolioData: { columns: PortfolioColumn[] } = {
    columns: [
      {
        items: [
          { id: '1', image: '/img1.jpg', alt: 'Project 1', category: 'Web', title: 'Project 1', link: '#', height: 'h-48' },
          { id: '2', image: '/img2.jpg', alt: 'Project 2', category: 'App', title: 'Project 2', link: '#', height: 'h-72' },
          { id: '3', image: '/img3.jpg', alt: 'Project 3', category: 'Design', title: 'Project 3', link: '#', height: 'h-56' },
        ],
      },
      {
        items: [
          { id: '4', image: '/img4.jpg', alt: 'Project 4', category: 'Web', title: 'Project 4', link: '#', height: 'h-64' },
          { id: '5', image: '/img5.jpg', alt: 'Project 5', category: 'App', title: 'Project 5', link: '#', height: 'h-48' },
          { id: '6', image: '/img6.jpg', alt: 'Project 6', category: 'Design', title: 'Project 6', link: '#', height: 'h-72' },
        ],
      },
      {
        items: [
          { id: '7', image: '/img7.jpg', alt: 'Project 7', category: 'Web', title: 'Project 7', link: '#', height: 'h-56' },
          { id: '8', image: '/img8.jpg', alt: 'Project 8', category: 'App', title: 'Project 8', link: '#', height: 'h-64' },
          { id: '9', image: '/img9.jpg', alt: 'Project 9', category: 'Design', title: 'Project 9', link: '#', height: 'h-48' },
        ],
      },
    ],
  };

  return (
    <PortfolioGrid
      columns={portfolioData.columns}
      title="Masonry Portfolio Grid"
      sectionLabel="(01) Creative Work"
    />
  );
}

// ============================================================================
// Example 8: Integration with React Router
// ============================================================================

export function ReactRouterExample() {
  // Note: This example assumes you're using React Router
  // You would need to modify PortfolioCard.tsx to use Link from react-router-dom

  const portfolioData: { columns: PortfolioColumn[] } = {
    columns: [
      {
        items: [
          {
            id: '1',
            image: '/images/project1.jpg',
            alt: 'Project 1',
            category: 'Web • Development',
            title: 'Project 1',
            link: '/projects/1', // React Router path
            height: 'h-56',
          },
        ],
      },
    ],
  };

  return (
    <PortfolioGrid
      columns={portfolioData.columns}
      title="My Projects"
      viewAllLink="/portfolio" // React Router path
    />
  );
}

// ============================================================================
// Example 9: Complete Page Layout
// ============================================================================

export function CompletePageExample() {
  const portfolioData: { columns: PortfolioColumn[] } = {
    columns: [
      {
        items: [
          {
            id: '1',
            image: 'https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/af5c4f11-0653-43c0-b21e-5b8cc085c9f3_800w.jpg',
            alt: 'Cloud Analytics',
            category: 'SaaS • Product',
            title: 'Cloud Analytics',
            link: '#work',
            height: 'h-56',
          },
        ],
      },
      {
        items: [
          {
            id: '2',
            image: 'https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/b19e7d3a-309c-4d55-9373-80ca043c0f49_800w.jpg',
            alt: 'Boltshift Launch',
            category: 'Platform • Website',
            title: 'Boltshift Launch',
            link: '#work',
            height: 'h-64',
          },
        ],
      },
      {
        items: [
          {
            id: '3',
            image: 'https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/7df94c66-5d1e-4235-a476-1d2d8881a456_800w.jpg',
            alt: 'Nexus System',
            category: 'Design • System',
            title: 'Nexus System',
            link: '#work',
            height: 'h-72',
          },
        ],
      },
    ],
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-50 to-white">
      {/* Header */}
      <header className="border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold">My Portfolio</h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-12">
        <PortfolioGrid
          columns={portfolioData.columns}
          title="A few projects I'm proud of."
          sectionLabel="(03) Selected Work"
          ctaText="View Portfolio"
          ctaLink="#work"
          viewAllText="View All Work"
          viewAllLink="#work"
        />
      </main>

      {/* Footer */}
      <footer className="border-t border-neutral-200 mt-20">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <p className="text-center text-neutral-600">© 2025 Portfolio</p>
        </div>
      </footer>
    </div>
  );
}

// ============================================================================
// Default Export - Use this in your app
// ============================================================================

export default BasicPortfolioExample;
