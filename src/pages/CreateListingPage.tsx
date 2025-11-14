import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card';
import { Input } from '@/components/ui/Input';
import { Select } from '@/components/ui/Select';
import { Button } from '@/components/ui/Button';
import { Alert, AlertDescription } from '@/components/ui/Alert';
import { categories, cities } from '@/data/mockData';
import { Save, Send, Upload } from 'lucide-react';

export function CreateListingPage() {
  const [formData, setFormData] = useState({
    name: '',
    category: '',
    description: '',
    address: '',
    city: '',
    phone: '',
    website: '',
    hours: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleSaveDraft = () => {
    console.log('Saved as draft:', formData);
  };

  return (
    <div className="space-y-6 max-w-4xl">
      <div>
        <h1 className="text-h1 font-bold mb-2">Create Listing</h1>
        <p className="text-body text-muted-foreground">
          Add a new business to the directory
        </p>
      </div>

      <Alert>
        <AlertDescription>
          All listings must be approved by an administrator before appearing publicly.
        </AlertDescription>
      </Alert>

      <form onSubmit={handleSubmit}>
        <Card>
          <CardHeader>
            <CardTitle>Business Information</CardTitle>
            <CardDescription>Enter the details of your business</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Basic Info */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-small font-medium mb-2">
                  Business Name <span className="text-destructive">*</span>
                </label>
                <Input
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Enter business name"
                />
              </div>
              <div>
                <label className="block text-small font-medium mb-2">
                  Category <span className="text-destructive">*</span>
                </label>
                <Select
                  required
                  value={formData.category}
                  onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                >
                  <option value="">Select category</option>
                  {categories.map((cat) => (
                    <option key={cat} value={cat}>{cat}</option>
                  ))}
                </Select>
              </div>
            </div>

            <div>
              <label className="block text-small font-medium mb-2">
                Description <span className="text-destructive">*</span>
              </label>
              <textarea
                required
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                placeholder="Describe your business..."
                className="flex min-h-[120px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-body ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              />
            </div>

            {/* Location */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-small font-medium mb-2">
                  Address <span className="text-destructive">*</span>
                </label>
                <Input
                  required
                  value={formData.address}
                  onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                  placeholder="Street address"
                />
              </div>
              <div>
                <label className="block text-small font-medium mb-2">
                  City <span className="text-destructive">*</span>
                </label>
                <Select
                  required
                  value={formData.city}
                  onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                >
                  <option value="">Select city</option>
                  {cities.map((city) => (
                    <option key={city} value={city}>{city}</option>
                  ))}
                </Select>
              </div>
            </div>

            {/* Map Pin Placement */}
            <div>
              <label className="block text-small font-medium mb-2">
                Map Location <span className="text-destructive">*</span>
              </label>
              <div className="aspect-video bg-muted rounded-lg flex items-center justify-center border border-border">
                <p className="text-muted-foreground">Click to place pin on map (Mapbox integration)</p>
              </div>
            </div>

            {/* Contact */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-small font-medium mb-2">
                  Phone <span className="text-destructive">*</span>
                </label>
                <Input
                  required
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="+501-XXX-XXXX"
                />
              </div>
              <div>
                <label className="block text-small font-medium mb-2">Website</label>
                <Input
                  type="url"
                  value={formData.website}
                  onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                  placeholder="https://example.com"
                />
              </div>
            </div>

            <div>
              <label className="block text-small font-medium mb-2">
                Business Hours <span className="text-destructive">*</span>
              </label>
              <Input
                required
                value={formData.hours}
                onChange={(e) => setFormData({ ...formData, hours: e.target.value })}
                placeholder="e.g., Mon-Fri: 9:00 AM - 5:00 PM"
              />
            </div>

            {/* Images */}
            <div>
              <label className="block text-small font-medium mb-2">
                Images (Max 5)
              </label>
              <div className="border-2 border-dashed border-border rounded-lg p-8 text-center">
                <Upload className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                <p className="text-body text-muted-foreground mb-2">
                  Drag and drop images here, or click to browse
                </p>
                <p className="text-small text-muted-foreground">
                  PNG, JPG up to 5MB each
                </p>
                <Button variant="outline" className="mt-4" type="button">
                  Choose Files
                </Button>
              </div>
            </div>

            {/* Tags */}
            <div>
              <label className="block text-small font-medium mb-2">Tags</label>
              <Input
                placeholder="e.g., seafood, beachfront, family-friendly (comma separated)"
              />
            </div>
          </CardContent>
        </Card>

        {/* Actions */}
        <div className="flex gap-4 mt-6">
          <Button type="button" variant="outline" onClick={handleSaveDraft}>
            <Save className="h-5 w-5 mr-2" />
            Save Draft
          </Button>
          <Button type="submit">
            <Send className="h-5 w-5 mr-2" />
            Submit for Approval
          </Button>
        </div>
      </form>
    </div>
  );
}

