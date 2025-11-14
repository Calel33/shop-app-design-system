import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { Select } from '@/components/ui/Select';
import { mockBusinesses } from '@/data/mockData';
import { CheckCircle2, XCircle, Eye } from 'lucide-react';

export function AdminQueuePage() {
  const [statusFilter, setStatusFilter] = useState('submitted');

  const pendingListings = mockBusinesses.filter(
    b => statusFilter === 'all' ? true : b.status === statusFilter
  );

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-h1 font-bold mb-2">Review Queue</h1>
          <p className="text-body text-muted-foreground">
            Review and approve business listings
          </p>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardHeader>
            <CardDescription>Pending Review</CardDescription>
            <CardTitle className="text-h2">
              {mockBusinesses.filter(b => b.status === 'submitted').length}
            </CardTitle>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader>
            <CardDescription>Approved</CardDescription>
            <CardTitle className="text-h2">
              {mockBusinesses.filter(b => b.status === 'approved').length}
            </CardTitle>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader>
            <CardDescription>Rejected</CardDescription>
            <CardTitle className="text-h2">
              {mockBusinesses.filter(b => b.status === 'rejected').length}
            </CardTitle>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader>
            <CardDescription>Total Listings</CardDescription>
            <CardTitle className="text-h2">{mockBusinesses.length}</CardTitle>
          </CardHeader>
        </Card>
      </div>

      {/* Filters */}
      <Card>
        <CardContent className="pt-6">
          <div className="flex gap-4">
            <div className="flex-1">
              <label className="block text-small font-medium mb-2">Filter by Status</label>
              <Select value={statusFilter} onChange={(e) => setStatusFilter(e.target.value)}>
                <option value="all">All Statuses</option>
                <option value="submitted">Pending Review</option>
                <option value="approved">Approved</option>
                <option value="rejected">Rejected</option>
                <option value="draft">Drafts</option>
              </Select>
            </div>
            <div className="flex-1">
              <label className="block text-small font-medium mb-2">Sort By</label>
              <Select>
                <option value="date">Submission Date</option>
                <option value="name">Business Name</option>
                <option value="category">Category</option>
              </Select>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Listings Table */}
      <Card>
        <CardHeader>
          <CardTitle>Listings</CardTitle>
          <CardDescription>
            {pendingListings.length} listing(s) found
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 px-4 text-small font-semibold">Business</th>
                  <th className="text-left py-3 px-4 text-small font-semibold">Category</th>
                  <th className="text-left py-3 px-4 text-small font-semibold">Location</th>
                  <th className="text-left py-3 px-4 text-small font-semibold">Status</th>
                  <th className="text-right py-3 px-4 text-small font-semibold">Actions</th>
                </tr>
              </thead>
              <tbody>
                {pendingListings.map((listing) => (
                  <tr key={listing.id} className="border-b border-border hover:bg-muted/50">
                    <td className="py-3 px-4">
                      <div>
                        <div className="font-medium">{listing.name}</div>
                        <div className="text-small text-muted-foreground line-clamp-1">
                          {listing.description}
                        </div>
                      </div>
                    </td>
                    <td className="py-3 px-4 text-small text-muted-foreground">
                      {listing.category}
                    </td>
                    <td className="py-3 px-4 text-small text-muted-foreground">
                      {listing.city}
                    </td>
                    <td className="py-3 px-4">
                      <Badge variant={listing.status}>{listing.status}</Badge>
                    </td>
                    <td className="py-3 px-4">
                      <div className="flex items-center justify-end gap-2">
                        <Button variant="ghost" size="sm">
                          <Eye className="h-4 w-4" />
                        </Button>
                        {listing.status === 'submitted' && (
                          <>
                            <Button variant="ghost" size="sm" className="text-secondary">
                              <CheckCircle2 className="h-4 w-4" />
                            </Button>
                            <Button variant="ghost" size="sm" className="text-destructive">
                              <XCircle className="h-4 w-4" />
                            </Button>
                          </>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

