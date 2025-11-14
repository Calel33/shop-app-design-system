import { useState } from 'react';
import { AdminSidebar } from '@/components/admin/AdminSidebar';
import { BusinessCard, BusinessCardData } from '@/components/admin/BusinessCard';
import { FilterBar } from '@/components/admin/FilterBar';
import { BulkActionsBar } from '@/components/admin/BulkActionsBar';
import { SidePanel } from '@/components/ui/SidePanel';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { Pagination } from '@/components/ui/Pagination';
import { Download, CheckCheck } from 'lucide-react';

// Mock data
const mockBusinesses: BusinessCardData[] = [
  {
    id: '1',
    name: 'Bella Vista Bistro',
    category: 'Italian Restaurant',
    address: '1247 Oak Street, Downtown',
    imageUrl: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=400&fit=crop',
    ownerName: 'Maria Rossi',
    ownerEmail: 'maria@bellavistabistro.com',
    submittedDate: 'Submitted 2 days ago',
    priority: 'high',
  },
  {
    id: '2',
    name: 'Chapter & Verse Books',
    category: 'Bookstore',
    address: '892 Elm Avenue, Arts District',
    imageUrl: 'https://images.unsplash.com/photo-1495446815901-a7297e633e8d?w=400&h=400&fit=crop',
    ownerName: 'David Chen',
    ownerEmail: 'david@chapterverse.com',
    submittedDate: 'Submitted 1 day ago',
    priority: 'normal',
  },
  {
    id: '3',
    name: 'Zen Flow Yoga Studio',
    category: 'Health & Wellness',
    address: '456 Wellness Way, Riverside',
    imageUrl: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&h=400&fit=crop',
    ownerName: 'Sarah Williams',
    ownerEmail: 'sarah@zenflowstudio.com',
    submittedDate: 'Submitted 3 hours ago',
    priority: 'high',
  },
  {
    id: '4',
    name: 'Grind Coffee Co.',
    category: 'Cafe',
    address: '234 Main Street, Historic Quarter',
    imageUrl: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=400&h=400&fit=crop',
    ownerName: 'Mike Johnson',
    ownerEmail: 'mike@grindcoffee.co',
    submittedDate: 'Submitted 4 days ago',
    priority: 'normal',
  },
  {
    id: '5',
    name: 'Premier Auto Care',
    category: 'Automotive',
    address: '567 Industrial Blvd, East Side',
    imageUrl: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=400&h=400&fit=crop',
    ownerName: 'Robert Garcia',
    ownerEmail: 'robert@premierauto.com',
    submittedDate: 'Submitted 1 week ago',
    priority: 'normal',
  },
  {
    id: '6',
    name: 'Urban Threads Boutique',
    category: 'Fashion & Retail',
    address: '789 Fashion Square, Shopping District',
    imageUrl: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=400&fit=crop',
    ownerName: 'Lisa Park',
    ownerEmail: 'lisa@urbanthreads.com',
    submittedDate: 'Submitted 6 hours ago',
    priority: 'high',
  },
];

export function AdminDashboardPage() {
  const [currentAdminPage, setCurrentAdminPage] = useState('pending-approvals');
  const [selectedBusinesses, setSelectedBusinesses] = useState<Set<string>>(new Set());
  const [categoryFilter, setCategoryFilter] = useState('all');
  const [priorityFilter, setPriorityFilter] = useState('all');
  const [timeFilter, setTimeFilter] = useState('all');
  const [sidePanelOpen, setSidePanelOpen] = useState(false);
  const [selectedBusinessId, setSelectedBusinessId] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);

  const handleSelectBusiness = (id: string, selected: boolean) => {
    const newSelected = new Set(selectedBusinesses);
    if (selected) {
      newSelected.add(id);
    } else {
      newSelected.delete(id);
    }
    setSelectedBusinesses(newSelected);
  };

  const handleSelectAll = (checked: boolean) => {
    if (checked) {
      setSelectedBusinesses(new Set(mockBusinesses.map(b => b.id)));
    } else {
      setSelectedBusinesses(new Set());
    }
  };

  const handleApprove = (id: string) => {
    console.log('Approve:', id);
    // Implement approval logic
  };

  const handleRequestChanges = (id: string) => {
    console.log('Request changes:', id);
    // Implement request changes logic
  };

  const handleReject = (id: string) => {
    console.log('Reject:', id);
    // Implement rejection logic
  };

  const handleViewDetails = (id: string) => {
    setSelectedBusinessId(id);
    setSidePanelOpen(true);
  };

  const filters = [
    {
      id: 'category',
      label: 'Category',
      value: categoryFilter,
      onChange: setCategoryFilter,
      options: [
        { value: 'all', label: 'All Categories' },
        { value: 'restaurant', label: 'Restaurants' },
        { value: 'retail', label: 'Retail' },
        { value: 'services', label: 'Services' },
        { value: 'healthcare', label: 'Healthcare' },
      ],
    },
    {
      id: 'priority',
      label: 'Priority',
      value: priorityFilter,
      onChange: setPriorityFilter,
      options: [
        { value: 'all', label: 'All Priorities' },
        { value: 'high', label: 'High Priority' },
        { value: 'normal', label: 'Normal' },
      ],
    },
    {
      id: 'time',
      label: 'Submitted',
      value: timeFilter,
      onChange: setTimeFilter,
      options: [
        { value: 'all', label: 'All Time' },
        { value: 'today', label: 'Today' },
        { value: 'week', label: 'This Week' },
        { value: 'month', label: 'This Month' },
      ],
    },
  ];

  const selectedBusiness = selectedBusinessId 
    ? mockBusinesses.find(b => b.id === selectedBusinessId)
    : null;

  return (
    <div className="flex min-h-screen bg-background">
      {/* Admin Sidebar */}
      <AdminSidebar 
        currentPage={currentAdminPage}
        onNavigate={setCurrentAdminPage}
      />

      {/* Main Content */}
      <main className="flex-1 p-8">
        {/* Page Header */}
        <div className="flex items-center justify-between mb-8 flex-wrap gap-4">
          <div className="flex items-center gap-4">
            <h1 className="text-h1 font-bold">Pending Approvals</h1>
            <Badge variant="warning" className="text-sm">
              {mockBusinesses.length} pending
            </Badge>
          </div>
          <div className="flex gap-3">
            <Button variant="outline" size="md">
              <Download className="h-4 w-4 mr-2" />
              Export
            </Button>
            <Button 
              variant="primary" 
              size="md"
              disabled={selectedBusinesses.size === 0}
            >
              <CheckCheck className="h-4 w-4 mr-2" />
              Approve Selected
            </Button>
          </div>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-between mb-6 flex-wrap gap-4">
          <FilterBar filters={filters} />
          <BulkActionsBar
            selectedCount={selectedBusinesses.size}
            totalCount={mockBusinesses.length}
            onSelectAll={handleSelectAll}
          />
        </div>

        {/* Business Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 mb-8">
          {mockBusinesses.map((business) => (
            <BusinessCard
              key={business.id}
              business={business}
              isSelected={selectedBusinesses.has(business.id)}
              onSelect={handleSelectBusiness}
              onApprove={handleApprove}
              onRequestChanges={handleRequestChanges}
              onReject={handleReject}
              onViewDetails={handleViewDetails}
            />
          ))}
        </div>

        {/* Footer with Pagination */}
        <div className="flex items-center justify-between pt-6 border-t border-border">
          <p className="text-small text-muted-foreground">
            Showing {mockBusinesses.length} of 23 pending approvals
          </p>
          <Pagination
            currentPage={currentPage}
            totalPages={4}
            onPageChange={setCurrentPage}
          />
        </div>
      </main>

      {/* Side Panel for Details */}
      <SidePanel
        isOpen={sidePanelOpen}
        onClose={() => setSidePanelOpen(false)}
        title="Business Details"
      >
        {selectedBusiness && (
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold mb-2">Business Name</h3>
              <p className="text-muted-foreground">{selectedBusiness.name}</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Category</h3>
              <p className="text-muted-foreground">{selectedBusiness.category}</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Address</h3>
              <p className="text-muted-foreground">{selectedBusiness.address}</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Owner</h3>
              <p className="text-muted-foreground">{selectedBusiness.ownerName}</p>
              <p className="text-small text-muted-foreground">{selectedBusiness.ownerEmail}</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Submitted</h3>
              <p className="text-muted-foreground">{selectedBusiness.submittedDate}</p>
            </div>
          </div>
        )}
      </SidePanel>
    </div>
  );
}

