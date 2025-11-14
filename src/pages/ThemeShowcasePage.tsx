import { ThemePreview, ThemeComparisonCard } from '@/components/ui/ThemePreview';
import { Button } from '@/components/ui/Button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/Card';
import { Input } from '@/components/ui/Input';
import { Select } from '@/components/ui/Select';
import { Checkbox } from '@/components/ui/Checkbox';
import { Badge } from '@/components/ui/Badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/Alert';
import { Avatar, AvatarGroup } from '@/components/ui/Avatar';
import { FilterChip } from '@/components/ui/FilterChip';
import { Skeleton } from '@/components/ui/Skeleton';
import { ThemeToggle } from '@/components/ui/ThemeToggle';
import { useTheme } from '@/contexts/ThemeContext';
import { Info, Sun, Moon } from 'lucide-react';

export function ThemeShowcasePage() {
  const { theme } = useTheme();

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-h1 font-bold mb-2">Theme Showcase</h1>
          <p className="text-body text-muted-foreground">
            View all components in both light and dark themes side-by-side
          </p>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 px-3 py-2 bg-muted rounded-lg">
            {theme === 'light' ? (
              <>
                <Sun className="h-4 w-4 text-muted-foreground" />
                <span className="text-small font-medium">Light Mode Active</span>
              </>
            ) : (
              <>
                <Moon className="h-4 w-4 text-muted-foreground" />
                <span className="text-small font-medium">Dark Mode Active</span>
              </>
            )}
          </div>
          <ThemeToggle variant="button" showLabel />
        </div>
      </div>

      {/* Info Card */}
      <Card className="bg-primary/5 border-primary/20">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Info className="h-5 w-5" />
            About This Page
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-body">
            This page displays all design system components in both light and dark themes simultaneously.
            Use this to ensure your components look great in all theme modes and maintain proper contrast and readability.
          </p>
        </CardContent>
      </Card>

      {/* Single Theme Preview */}
      <section>
        <h2 className="text-h2 font-bold mb-4">Single Theme Preview</h2>
        <ThemePreview>
          <Card>
            <CardHeader>
              <CardTitle>Preview Card</CardTitle>
              <CardDescription>Example component rendered in the active theme.</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-body mb-4">
                This card uses the same design tokens and styles as the rest of the system, rendered in your current theme.
              </p>
              <Button variant="primary">Primary Action</Button>
            </CardContent>
          </Card>
        </ThemePreview>
      </section>

      {/* Typography */}
      <section>
        <h2 className="text-h2 font-bold mb-4">Typography</h2>
        <ThemeComparisonCard 
          title="Heading Styles" 
          description="All heading levels and body text"
        >
          <div className="space-y-3">
            <h1 className="text-h1 font-bold">Heading 1 - 32px</h1>
            <h2 className="text-h2 font-bold">Heading 2 - 24px</h2>
            <h3 className="text-h3 font-semibold">Heading 3 - 18px</h3>
            <p className="text-body">Body text - 16px. This is regular paragraph text.</p>
            <p className="text-small text-muted-foreground">Small text - 14px. Used for captions and labels.</p>
          </div>
        </ThemeComparisonCard>
      </section>

      {/* Buttons */}
      <section>
        <h2 className="text-h2 font-bold mb-4">Buttons</h2>
        <div className="space-y-6">
          <ThemeComparisonCard 
            title="Button Variants" 
            description="All button style variants"
          >
            <div className="flex flex-wrap gap-3">
              <Button variant="primary">Primary</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="destructive">Destructive</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="ghost">Ghost</Button>
            </div>
          </ThemeComparisonCard>

          <ThemeComparisonCard 
            title="Button Sizes" 
            description="Different button sizes"
          >
            <div className="flex flex-wrap items-center gap-3">
              <Button size="sm">Small</Button>
              <Button size="md">Medium</Button>
              <Button size="lg">Large</Button>
            </div>
          </ThemeComparisonCard>

          <ThemeComparisonCard 
            title="Button States" 
            description="Disabled and loading states"
          >
            <div className="flex flex-wrap gap-3">
              <Button disabled>Disabled</Button>
              <Button variant="outline" disabled>Disabled Outline</Button>
            </div>
          </ThemeComparisonCard>
        </div>
      </section>

      {/* Badges */}
      <section>
        <h2 className="text-h2 font-bold mb-4">Badges</h2>
        <ThemeComparisonCard 
          title="Badge Variants" 
          description="Status and category badges"
        >
          <div className="flex flex-wrap gap-2">
            <Badge variant="default">Default</Badge>
            <Badge variant="draft">Draft</Badge>
            <Badge variant="submitted">Submitted</Badge>
            <Badge variant="approved">Approved</Badge>
            <Badge variant="rejected">Rejected</Badge>
            <Badge variant="secondary">Secondary</Badge>
            <Badge variant="destructive">Destructive</Badge>
          </div>
        </ThemeComparisonCard>
      </section>

      {/* Alerts */}
      <section>
        <h2 className="text-h2 font-bold mb-4">Alerts</h2>
        <ThemeComparisonCard 
          title="Alert Variants" 
          description="Different alert types for various messages"
        >
          <div className="space-y-3">
            <Alert variant="default">
              <AlertTitle>Information</AlertTitle>
              <AlertDescription>
                This is an informational message to provide context.
              </AlertDescription>
            </Alert>
            <Alert variant="success">
              <AlertTitle>Success</AlertTitle>
              <AlertDescription>
                Your operation completed successfully!
              </AlertDescription>
            </Alert>
            <Alert variant="destructive">
              <AlertTitle>Error</AlertTitle>
              <AlertDescription>
                Something went wrong. Please try again.
              </AlertDescription>
            </Alert>
          </div>
        </ThemeComparisonCard>
      </section>

      {/* Cards */}
      <section>
        <h2 className="text-h2 font-bold mb-4">Cards</h2>
        <ThemeComparisonCard 
          title="Card Component" 
          description="Card with header, content, and footer"
        >
          <Card>
            <CardHeader>
              <CardTitle>Card Title</CardTitle>
              <CardDescription>This is a card description that provides context</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-body">
                Card content goes here. This is where you would place the main content of your card.
                It can contain text, images, or any other components.
              </p>
            </CardContent>
            <CardFooter className="flex gap-2">
              <Button variant="primary" size="sm">Primary Action</Button>
              <Button variant="outline" size="sm">Secondary</Button>
            </CardFooter>
          </Card>
        </ThemeComparisonCard>
      </section>

      {/* Form Elements */}
      <section>
        <h2 className="text-h2 font-bold mb-4">Form Elements</h2>
        <div className="space-y-6">
          <ThemeComparisonCard 
            title="Text Inputs" 
            description="Various input field types"
          >
            <div className="space-y-3 max-w-md">
              <Input type="text" placeholder="Text input" />
              <Input type="email" placeholder="Email input" />
              <Input type="password" placeholder="Password input" />
              <Input type="text" placeholder="Disabled input" disabled />
            </div>
          </ThemeComparisonCard>

          <ThemeComparisonCard 
            title="Select Dropdown" 
            description="Dropdown selection component"
          >
            <div className="max-w-md">
              <Select>
                <option value="">Choose an option</option>
                <option value="1">Option 1</option>
                <option value="2">Option 2</option>
                <option value="3">Option 3</option>
              </Select>
            </div>
          </ThemeComparisonCard>

          <ThemeComparisonCard 
            title="Checkboxes" 
            description="Checkbox input elements"
          >
            <div className="space-y-2">
              <Checkbox id="check1" label="Option 1" />
              <Checkbox id="check2" label="Option 2" defaultChecked />
              <Checkbox id="check3" label="Disabled option" disabled />
            </div>
          </ThemeComparisonCard>
        </div>
      </section>

      {/* Avatars */}
      <section>
        <h2 className="text-h2 font-bold mb-4">Avatars</h2>
        <div className="space-y-6">
          <ThemeComparisonCard 
            title="Avatar Sizes" 
            description="Different avatar sizes"
          >
            <div className="flex items-center gap-4">
              <Avatar size="sm" fallback="SM" />
              <Avatar size="md" fallback="MD" />
              <Avatar size="lg" fallback="LG" />
            </div>
          </ThemeComparisonCard>

          <ThemeComparisonCard 
            title="Avatar Group" 
            description="Multiple avatars with overflow"
          >
            <AvatarGroup max={3}>
              <Avatar fallback="JD" />
              <Avatar fallback="AB" />
              <Avatar fallback="CD" />
              <Avatar fallback="EF" />
              <Avatar fallback="GH" />
            </AvatarGroup>
          </ThemeComparisonCard>
        </div>
      </section>

      {/* Filter Chips */}
      <section>
        <h2 className="text-h2 font-bold mb-4">Filter Chips</h2>
        <ThemeComparisonCard 
          title="Filter Chip Variants" 
          description="Chips for filtering and selection"
        >
          <div className="flex flex-wrap gap-2">
            <FilterChip label="Category" />
            <FilterChip label="Active Filter" active />
            <FilterChip label="With Dropdown" showDropdown />
            <FilterChip label="Removable" showClose onClose={() => {}} />
          </div>
        </ThemeComparisonCard>
      </section>

      {/* Skeletons */}
      <section>
        <h2 className="text-h2 font-bold mb-4">Loading States</h2>
        <ThemeComparisonCard 
          title="Skeleton Loaders" 
          description="Loading placeholders"
        >
          <div className="space-y-3">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-3/4" />
            <Skeleton className="h-4 w-1/2" />
          </div>
        </ThemeComparisonCard>
      </section>
    </div>
  );
}

