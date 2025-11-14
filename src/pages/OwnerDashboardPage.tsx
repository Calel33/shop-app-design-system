import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { ownerListings } from '@/data/mockData';
import { Plus, Edit, Trash2, Eye } from 'lucide-react';

export function OwnerDashboardPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-h1 font-bold mb-2">My Listings</h1>
          <p className="text-body text-muted-foreground">
            Manage your business listings
          </p>
        </div>
        <Button>
          <Plus className="h-5 w-5 mr-2" />
          Create Listing
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardHeader>
            <CardDescription>Total Listings</CardDescription>
            <CardTitle className="text-h2">{ownerListings.length}</CardTitle>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader>
            <CardDescription>Approved</CardDescription>
            <CardTitle className="text-h2">
              {ownerListings.filter(l => l.status === 'approved').length}
            </CardTitle>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader>
            <CardDescription>Pending</CardDescription>
            <CardTitle className="text-h2">
              {ownerListings.filter(l => l.status === 'submitted').length}
            </CardTitle>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader>
            <CardDescription>Drafts</CardDescription>
            <CardTitle className="text-h2">
              {ownerListings.filter(l => l.status === 'draft').length}
            </CardTitle>
          </CardHeader>
        </Card>
      </div>

      {/* Listings Table */}
      <Card>
        <CardHeader>
          <CardTitle>Your Listings</CardTitle>
          <CardDescription>View and manage all your business listings</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 px-4 text-small font-semibold">Name</th>
                  <th className="text-left py-3 px-4 text-small font-semibold">Category</th>
                  <th className="text-left py-3 px-4 text-small font-semibold">Location</th>
                  <th className="text-left py-3 px-4 text-small font-semibold">Status</th>
                  <th className="text-right py-3 px-4 text-small font-semibold">Actions</th>
                </tr>
              </thead>
              <tbody>
                {ownerListings.map((listing) => (
                  <tr key={listing.id} className="border-b border-border hover:bg-muted/50">
                    <td className="py-3 px-4">
                      <div className="font-medium">{listing.name}</div>
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
                        <Button variant="ghost" size="sm">
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="sm">
                          <Trash2 className="h-4 w-4" />
                        </Button>
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

