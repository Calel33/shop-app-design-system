import { useState } from 'react';
import { ThemeProvider } from '@/contexts/ThemeContext';
import { Sidebar } from '@/components/layout/Sidebar';
import { Header } from '@/components/layout/Header';
import { HomePage } from '@/pages/HomePage';
import { SearchPage } from '@/pages/SearchPage';
import { MapViewPage } from '@/pages/MapViewPage';
import { OwnerDashboardPage } from '@/pages/OwnerDashboardPage';
import { CreateListingPage } from '@/pages/CreateListingPage';
import { AdminQueuePage } from '@/pages/AdminQueuePage';
import { AdminCategoriesPage } from '@/pages/AdminCategoriesPage';
import { RestaurantsPage } from '@/pages/RestaurantsPage';
import { ComponentsPage } from '@/pages/ComponentsPage';
import { ThemeShowcasePage } from '@/pages/ThemeShowcasePage';
import { AdminDashboardPage } from '@/pages/AdminDashboardPage';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage />;
      case 'search':
        return <SearchPage />;
      case 'map':
        return <MapViewPage />;
      case 'restaurants':
        return <RestaurantsPage />;
      case 'owner-dashboard':
        return <OwnerDashboardPage />;
      case 'create-listing':
        return <CreateListingPage />;
      case 'admin-queue':
        return <AdminQueuePage />;
      case 'admin-categories':
        return <AdminCategoriesPage />;
      case 'components':
        return <ComponentsPage />;
      case 'theme-showcase':
        return <ThemeShowcasePage />;
      case 'admin-dashboard':
        return <AdminDashboardPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background">
        <Sidebar
          currentPage={currentPage}
          onNavigate={setCurrentPage}
          isOpen={sidebarOpen}
        />
        
        <div className={`transition-all duration-300 ${sidebarOpen ? 'lg:pl-64' : ''}`}>
          <Header onToggleSidebar={() => setSidebarOpen(!sidebarOpen)} />
          
          <main className="p-6">
            {renderPage()}
          </main>
        </div>

        {/* Mobile overlay */}
        {sidebarOpen && (
          <div
            className="fixed inset-0 bg-black/50 z-30 lg:hidden"
            onClick={() => setSidebarOpen(false)}
          />
        )}
      </div>
    </ThemeProvider>
  );
}

export default App;

