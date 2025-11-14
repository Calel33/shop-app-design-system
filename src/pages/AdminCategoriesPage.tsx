import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { categories } from '@/data/mockData';
import { Plus, Edit, Trash2 } from 'lucide-react';

export function AdminCategoriesPage() {
  const [newCategory, setNewCategory] = useState('');

  return (
    <div className="space-y-6 max-w-4xl">
      <div>
        <h1 className="text-h1 font-bold mb-2">Manage Categories</h1>
        <p className="text-body text-muted-foreground">
          Add, edit, or remove business categories
        </p>
      </div>

      {/* Add New Category */}
      <Card>
        <CardHeader>
          <CardTitle>Add New Category</CardTitle>
          <CardDescription>Create a new business category</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex gap-4">
            <Input
              placeholder="Category name..."
              value={newCategory}
              onChange={(e) => setNewCategory(e.target.value)}
              className="flex-1"
            />
            <Button>
              <Plus className="h-5 w-5 mr-2" />
              Add Category
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Existing Categories */}
      <Card>
        <CardHeader>
          <CardTitle>Existing Categories</CardTitle>
          <CardDescription>{categories.length} categories</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            {categories.map((category) => (
              <div
                key={category}
                className="flex items-center justify-between p-3 rounded-lg border border-border hover:bg-muted/50"
              >
                <span className="font-medium">{category}</span>
                <div className="flex gap-2">
                  <Button variant="ghost" size="sm">
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="sm">
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Tags Management */}
      <Card>
        <CardHeader>
          <CardTitle>Manage Tags</CardTitle>
          <CardDescription>Common tags for business listings</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {['diving', 'snorkeling', 'seafood', 'beachfront', 'family-friendly', 'tours', 'luxury', 'budget-friendly'].map((tag) => (
              <div
                key={tag}
                className="inline-flex items-center gap-2 px-3 py-1 bg-muted rounded-md"
              >
                <span className="text-small">{tag}</span>
                <button className="text-muted-foreground hover:text-foreground">
                  <Trash2 className="h-3 w-3" />
                </button>
              </div>
            ))}
          </div>
          <div className="flex gap-4 mt-4">
            <Input placeholder="New tag..." className="flex-1" />
            <Button variant="outline">
              <Plus className="h-5 w-5 mr-2" />
              Add Tag
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

