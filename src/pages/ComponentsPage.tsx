import { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/Card';
import { Input } from '@/components/ui/Input';
import { Select } from '@/components/ui/Select';
import { Checkbox } from '@/components/ui/Checkbox';
import { Badge } from '@/components/ui/Badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/Alert';
import { Skeleton } from '@/components/ui/Skeleton';
import { Avatar, AvatarGroup } from '@/components/ui/Avatar';
import { FilterChip, FilterChipGroup } from '@/components/ui/FilterChip';
import { Pagination } from '@/components/ui/Pagination';
import { ThemeToggle } from '@/components/ui/ThemeToggle';
import { ThemeComparisonCard } from '@/components/ui/ThemePreview';
import { AlertCircle, CheckCircle2, Info, Copy, Check, Search, Mail, Bell, Calendar, User, MapPin } from 'lucide-react';
import { MetaItem } from '@/components/ui/MetaItem';
import { SidePanel } from '@/components/ui/SidePanel';
import { BusinessCard, BusinessCardData } from '@/components/admin/BusinessCard';
import { FilterBar } from '@/components/admin/FilterBar';
import { BulkActionsBar } from '@/components/admin/BulkActionsBar';

export function ComponentsPage() {
  const [inputValue, setInputValue] = useState('');
  const [selectValue, setSelectValue] = useState('');
  const [checked, setChecked] = useState(false);
  const [copiedSection, setCopiedSection] = useState<string | null>(null);
  const [sidePanelOpen, setSidePanelOpen] = useState(false);
  const [selectedBusinesses, setSelectedBusinesses] = useState<Set<string>>(new Set());

  const copyCode = (code: string, section: string) => {
    navigator.clipboard.writeText(code);
    setCopiedSection(section);
    setTimeout(() => setCopiedSection(null), 2000);
  };

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-h1 font-bold mb-2">Design System Components</h1>
        <p className="text-body text-muted-foreground">
          Complete library of reusable UI components with code examples
        </p>
      </div>

      {/* Table of Contents */}
      <Card className="bg-primary/5">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Info className="h-5 w-5" />
            Quick Navigation
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-small">
            <a href="#theme-toggle" className="text-primary hover:underline">Theme Toggle</a>
            <a href="#theme-preview" className="text-primary hover:underline">Theme Preview</a>
            <a href="#typography" className="text-primary hover:underline">Typography</a>
            <a href="#colors" className="text-primary hover:underline">Colors</a>
            <a href="#spacing" className="text-primary hover:underline">Spacing</a>
            <a href="#buttons" className="text-primary hover:underline">Buttons</a>
            <a href="#inputs" className="text-primary hover:underline">Form Inputs</a>
            <a href="#badges" className="text-primary hover:underline">Badges</a>
            <a href="#alerts" className="text-primary hover:underline">Alerts</a>
            <a href="#cards" className="text-primary hover:underline">Cards</a>
            <a href="#skeletons" className="text-primary hover:underline">Skeletons</a>
            <a href="#shadows" className="text-primary hover:underline">Shadows</a>
            <a href="#radius" className="text-primary hover:underline">Border Radius</a>
            <a href="#avatar" className="text-primary hover:underline">Avatar</a>
            <a href="#filter-chips" className="text-primary hover:underline">Filter Chips</a>
            <a href="#pagination" className="text-primary hover:underline">Pagination</a>
            <a href="#input-icons" className="text-primary hover:underline">Input Icons</a>
            <a href="#icon-buttons" className="text-primary hover:underline">Icon Buttons</a>
            <a href="#meta-item" className="text-primary hover:underline">Meta Item</a>
            <a href="#side-panel" className="text-primary hover:underline">Side Panel</a>
            <a href="#business-card" className="text-primary hover:underline">Business Card</a>
            <a href="#filter-bar" className="text-primary hover:underline">Filter Bar</a>
            <a href="#bulk-actions" className="text-primary hover:underline">Bulk Actions</a>
          </div>
        </CardContent>
      </Card>

      {/* Theme Toggle */}
      <section id="theme-toggle">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-h2 font-bold">Theme Toggle</h2>
          <Button
            variant="outline"
            size="sm"
            onClick={() => copyCode('<ThemeToggle variant="switch" />', 'theme-toggle')}
          >
            {copiedSection === 'theme-toggle' ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
          </Button>
        </div>
        <Card>
          <CardHeader>
            <CardDescription>
              Toggle between light and dark themes. Supports localStorage persistence and system preference detection.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="text-h3 font-semibold mb-3">Switch Variant</h3>
              <div className="flex flex-wrap gap-6 p-6 bg-muted/30 rounded-lg">
                <div className="space-y-2">
                  <p className="text-small text-muted-foreground">Default</p>
                  <ThemeToggle variant="switch" />
                </div>
                <div className="space-y-2">
                  <p className="text-small text-muted-foreground">With Label</p>
                  <ThemeToggle variant="switch" showLabel />
                </div>
              </div>
              <div className="bg-muted/30 p-3 rounded-md mt-3">
                <code className="text-small">
                  {`<ThemeToggle variant="switch" />`}
                  <br />
                  {`<ThemeToggle variant="switch" showLabel />`}
                </code>
              </div>
            </div>
            <div>
              <h3 className="text-h3 font-semibold mb-3">Button Variant</h3>
              <div className="flex flex-wrap gap-6 p-6 bg-muted/30 rounded-lg">
                <div className="space-y-2">
                  <p className="text-small text-muted-foreground">Icon Only</p>
                  <ThemeToggle variant="button" />
                </div>
                <div className="space-y-2">
                  <p className="text-small text-muted-foreground">With Label</p>
                  <ThemeToggle variant="button" showLabel />
                </div>
              </div>
              <div className="bg-muted/30 p-3 rounded-md mt-3">
                <code className="text-small">
                  {`<ThemeToggle variant="button" />`}
                  <br />
                  {`<ThemeToggle variant="button" showLabel />`}
                </code>
              </div>
            </div>
            <div>
              <h3 className="text-h3 font-semibold mb-3">Features</h3>
              <ul className="list-disc list-inside space-y-2 text-body">
                <li>Automatic localStorage persistence</li>
                <li>System preference detection (prefers-color-scheme)</li>
                <li>Smooth transitions between themes</li>
                <li>Accessible with ARIA labels and keyboard support</li>
                <li>Two variants: switch and button</li>
                <li>Optional label display</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Theme Preview */}
      <section id="theme-preview">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-h2 font-bold">Theme Preview</h2>
          <Button
            variant="outline"
            size="sm"
            onClick={() => copyCode('<ThemePreview>{children}</ThemePreview>', 'theme-preview')}
          >
            {copiedSection === 'theme-preview' ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
          </Button>
        </div>
        <Card>
          <CardHeader>
            <CardDescription>
              Preview components in both light and dark themes side-by-side to ensure they look great in all modes.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-8">
            <div>
              <h3 className="text-h3 font-semibold mb-4">Component Comparison</h3>
              <div className="space-y-6">
                <ThemeComparisonCard
                  title="Buttons"
                  description="See how buttons appear in both themes"
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
                  title="Badges"
                  description="Badge variants in different themes"
                >
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="default">Default</Badge>
                    <Badge variant="draft">Draft</Badge>
                    <Badge variant="submitted">Submitted</Badge>
                    <Badge variant="approved">Approved</Badge>
                    <Badge variant="rejected">Rejected</Badge>
                  </div>
                </ThemeComparisonCard>

                <ThemeComparisonCard
                  title="Alerts"
                  description="Alert components with different variants"
                >
                  <div className="space-y-3">
                    <Alert variant="default">
                      <AlertTitle>Information</AlertTitle>
                      <AlertDescription>This is an informational message.</AlertDescription>
                    </Alert>
                    <Alert variant="success">
                      <AlertTitle>Success</AlertTitle>
                      <AlertDescription>Operation completed successfully.</AlertDescription>
                    </Alert>
                    <Alert variant="destructive">
                      <AlertTitle>Error</AlertTitle>
                      <AlertDescription>Something went wrong.</AlertDescription>
                    </Alert>
                  </div>
                </ThemeComparisonCard>

                <ThemeComparisonCard
                  title="Cards"
                  description="Card component with content"
                >
                  <Card>
                    <CardHeader>
                      <CardTitle>Card Title</CardTitle>
                      <CardDescription>This is a card description</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-body">Card content goes here with some example text.</p>
                    </CardContent>
                    <CardFooter>
                      <Button variant="primary" size="sm">Action</Button>
                    </CardFooter>
                  </Card>
                </ThemeComparisonCard>

                <ThemeComparisonCard
                  title="Form Inputs"
                  description="Input fields and form elements"
                >
                  <div className="space-y-3">
                    <Input type="text" placeholder="Enter text..." />
                    <Select>
                      <option value="">Choose an option</option>
                      <option value="1">Option 1</option>
                      <option value="2">Option 2</option>
                    </Select>
                    <Checkbox label="I agree to the terms" />
                  </div>
                </ThemeComparisonCard>
              </div>
            </div>

            <div>
              <h3 className="text-h3 font-semibold mb-3">Usage</h3>
              <div className="bg-muted/30 p-4 rounded-md">
                <code className="text-small">
                  {`import { ThemePreview, ThemeComparisonCard } from '@/components/ui/ThemePreview';

// Simple preview
<ThemePreview>
  <Button variant="primary">Click me</Button>
</ThemePreview>

// With title and description
<ThemeComparisonCard
  title="Button Component"
  description="Primary button in both themes"
>
  <Button variant="primary">Click me</Button>
</ThemeComparisonCard>`}
                </code>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Typography */}
      <section id="typography">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-h2 font-bold">Typography</h2>
          <Button
            variant="outline"
            size="sm"
            onClick={() => copyCode('className="text-h1 font-bold"', 'typography')}
          >
            {copiedSection === 'typography' ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
          </Button>
        </div>
        <Card>
          <CardHeader>
            <CardDescription>Font families: Anek Latin (sans), Andada Pro (serif), Sometype Mono (mono)</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <div className="p-4 bg-muted/30 rounded-lg">
                <h1 className="text-h1 font-bold mb-2">Heading 1</h1>
                <code className="text-small text-muted-foreground">text-h1 font-bold</code>
                <p className="text-small text-muted-foreground mt-1">32px / 40px line-height</p>
              </div>
              <div className="p-4 bg-muted/30 rounded-lg">
                <h2 className="text-h2 font-bold mb-2">Heading 2</h2>
                <code className="text-small text-muted-foreground">text-h2 font-bold</code>
                <p className="text-small text-muted-foreground mt-1">24px / 32px line-height</p>
              </div>
              <div className="p-4 bg-muted/30 rounded-lg">
                <h3 className="text-h3 font-semibold mb-2">Heading 3</h3>
                <code className="text-small text-muted-foreground">text-h3 font-semibold</code>
                <p className="text-small text-muted-foreground mt-1">18px / 24px line-height</p>
              </div>
              <div className="p-4 bg-muted/30 rounded-lg">
                <p className="text-body mb-2">Body text for paragraphs and general content</p>
                <code className="text-small text-muted-foreground">text-body</code>
                <p className="text-small text-muted-foreground mt-1">16px / 22px line-height</p>
              </div>
              <div className="p-4 bg-muted/30 rounded-lg">
                <p className="text-small mb-2">Small text for captions and labels</p>
                <code className="text-small text-muted-foreground">text-small</code>
                <p className="text-small text-muted-foreground mt-1">14px / 20px line-height</p>
              </div>
            </div>
            <div className="border-t border-border pt-4">
              <h4 className="font-semibold mb-3">Font Families</h4>
              <div className="space-y-2">
                <p className="font-sans">Sans-serif: Anek Latin <code className="text-small">font-sans</code></p>
                <p className="font-serif">Serif: Andada Pro <code className="text-small">font-serif</code></p>
                <p className="font-mono">Monospace: Sometype Mono <code className="text-small">font-mono</code></p>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Buttons */}
      <section id="buttons">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-h2 font-bold">Buttons</h2>
          <Button
            variant="outline"
            size="sm"
            onClick={() => copyCode('<Button variant="primary">Click me</Button>', 'buttons')}
          >
            {copiedSection === 'buttons' ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
          </Button>
        </div>
        <Card>
          <CardContent className="space-y-6 pt-6">
            <div>
              <h3 className="text-h3 font-semibold mb-3">Variants</h3>
              <div className="flex flex-wrap gap-3 mb-3">
                <Button variant="primary">Primary</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="destructive">Destructive</Button>
                <Button variant="outline">Outline</Button>
                <Button variant="ghost">Ghost</Button>
              </div>
              <div className="flex flex-wrap gap-3 mb-3">
                <Button variant="success">Success</Button>
                <Button variant="warning">Warning</Button>
                <Button variant="danger">Danger</Button>
              </div>
              <div className="bg-muted/30 p-3 rounded-md">
                <code className="text-small">variant="primary" | "secondary" | "destructive" | "outline" | "ghost" | "success" | "warning" | "danger"</code>
              </div>
            </div>
            <div>
              <h3 className="text-h3 font-semibold mb-3">Sizes</h3>
              <div className="flex flex-wrap items-center gap-3 mb-3">
                <Button size="sm">Small</Button>
                <Button size="md">Medium (default)</Button>
                <Button size="lg">Large</Button>
              </div>
              <div className="bg-muted/30 p-3 rounded-md">
                <code className="text-small">size="sm" | "md" | "lg"</code>
              </div>
            </div>
            <div>
              <h3 className="text-h3 font-semibold mb-3">States</h3>
              <div className="flex flex-wrap gap-3 mb-3">
                <Button>Default</Button>
                <Button className="hover:bg-primary/90">Hover</Button>
                <Button disabled>Disabled</Button>
              </div>
              <div className="bg-muted/30 p-3 rounded-md">
                <code className="text-small">disabled prop for disabled state</code>
              </div>
            </div>
            <div>
              <h3 className="text-h3 font-semibold mb-3">With Icons</h3>
              <div className="flex flex-wrap gap-3">
                <Button><CheckCircle2 className="h-4 w-4 mr-2" />With Icon</Button>
                <Button variant="outline"><Copy className="h-4 w-4 mr-2" />Copy</Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Form Elements */}
      <section id="inputs">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-h2 font-bold">Form Elements</h2>
          <Button
            variant="outline"
            size="sm"
            onClick={() => copyCode('<Input placeholder="Enter text..." />', 'inputs')}
          >
            {copiedSection === 'inputs' ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
          </Button>
        </div>
        <Card>
          <CardContent className="space-y-6 pt-6">
            <div>
              <h3 className="text-h3 font-semibold mb-3">Input</h3>
              <div className="space-y-3">
                <Input
                  placeholder="Enter text..."
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                />
                <Input type="email" placeholder="Email address" />
                <Input type="password" placeholder="Password" />
                <Input disabled placeholder="Disabled input" />
              </div>
              <div className="bg-muted/30 p-3 rounded-md mt-3">
                <code className="text-small">&lt;Input type="text" placeholder="..." /&gt;</code>
              </div>
            </div>
            <div>
              <h3 className="text-h3 font-semibold mb-3">Select</h3>
              <Select value={selectValue} onChange={(e) => setSelectValue(e.target.value)}>
                <option value="">Choose an option</option>
                <option value="1">Option 1</option>
                <option value="2">Option 2</option>
                <option value="3">Option 3</option>
              </Select>
              <div className="bg-muted/30 p-3 rounded-md mt-3">
                <code className="text-small">&lt;Select&gt;&lt;option&gt;...&lt;/option&gt;&lt;/Select&gt;</code>
              </div>
            </div>
            <div>
              <h3 className="text-h3 font-semibold mb-3">Textarea</h3>
              <textarea
                placeholder="Enter longer text..."
                className="flex min-h-[100px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-body ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              />
              <div className="bg-muted/30 p-3 rounded-md mt-3">
                <code className="text-small">Standard textarea with design system styles</code>
              </div>
            </div>
            <div>
              <h3 className="text-h3 font-semibold mb-3">Checkbox</h3>
              <div className="space-y-2">
                <Checkbox
                  id="example1"
                  label="I agree to the terms and conditions"
                  checked={checked}
                  onChange={(e) => setChecked(e.target.checked)}
                />
                <Checkbox id="example2" label="Subscribe to newsletter" />
                <Checkbox id="example3" label="Disabled checkbox" disabled />
              </div>
              <div className="bg-muted/30 p-3 rounded-md mt-3">
                <code className="text-small">&lt;Checkbox label="..." /&gt;</code>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Badges */}
      <section id="badges">
        <h2 className="text-h2 font-bold mb-4">Badges</h2>
        <Card>
          <CardContent className="pt-6 space-y-4">
            <div>
              <h3 className="text-h3 font-semibold mb-3">Status Variants</h3>
              <div className="flex flex-wrap gap-3">
                <Badge variant="default">Default</Badge>
                <Badge variant="draft">Draft</Badge>
                <Badge variant="submitted">Submitted</Badge>
                <Badge variant="approved">Approved</Badge>
                <Badge variant="rejected">Rejected</Badge>
                <Badge variant="secondary">Secondary</Badge>
                <Badge variant="destructive">Destructive</Badge>
              </div>
            </div>
            <div>
              <h3 className="text-h3 font-semibold mb-3">Priority Variants</h3>
              <div className="flex flex-wrap gap-3">
                <Badge variant="warning">High Priority</Badge>
                <Badge variant="info">Normal Priority</Badge>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Alerts */}
      <section>
        <h2 className="text-h2 font-bold mb-4">Alerts</h2>
        <div className="space-y-4">
          <Alert variant="default">
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>Information</AlertTitle>
            <AlertDescription>
              This is an informational alert message.
            </AlertDescription>
          </Alert>
          <Alert variant="success">
            <CheckCircle2 className="h-4 w-4" />
            <AlertTitle>Success</AlertTitle>
            <AlertDescription>
              Your listing has been successfully submitted for review.
            </AlertDescription>
          </Alert>
          <Alert variant="destructive">
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>
              There was an error processing your request.
            </AlertDescription>
          </Alert>
        </div>
      </section>

      {/* Cards */}
      <section>
        <h2 className="text-h2 font-bold mb-4">Cards</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Card Title</CardTitle>
              <CardDescription>Card description goes here</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-body">This is the card content area.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Another Card</CardTitle>
              <CardDescription>With different content</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-body">Cards can contain any content.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Skeletons */}
      <section>
        <h2 className="text-h2 font-bold mb-4">Loading States</h2>
        <Card>
          <CardContent className="space-y-4 pt-6">
            <Skeleton className="h-12 w-full" />
            <Skeleton className="h-12 w-3/4" />
            <Skeleton className="h-12 w-1/2" />
          </CardContent>
        </Card>
      </section>

      {/* Colors */}
      <section id="colors">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-h2 font-bold">Color Palette</h2>
          <Button
            variant="outline"
            size="sm"
            onClick={() => copyCode('bg-primary text-primary-foreground', 'colors')}
          >
            {copiedSection === 'colors' ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
          </Button>
        </div>
        <Card>
          <CardContent className="pt-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="space-y-2">
                <div className="h-20 rounded-lg bg-primary flex items-center justify-center">
                  <span className="text-primary-foreground font-medium">Aa</span>
                </div>
                <p className="text-small font-medium">Primary</p>
                <code className="text-small text-muted-foreground">bg-primary</code>
              </div>
              <div className="space-y-2">
                <div className="h-20 rounded-lg bg-secondary flex items-center justify-center">
                  <span className="text-secondary-foreground font-medium">Aa</span>
                </div>
                <p className="text-small font-medium">Secondary</p>
                <code className="text-small text-muted-foreground">bg-secondary</code>
              </div>
              <div className="space-y-2">
                <div className="h-20 rounded-lg bg-accent flex items-center justify-center">
                  <span className="text-accent-foreground font-medium">Aa</span>
                </div>
                <p className="text-small font-medium">Accent</p>
                <code className="text-small text-muted-foreground">bg-accent</code>
              </div>
              <div className="space-y-2">
                <div className="h-20 rounded-lg bg-destructive flex items-center justify-center">
                  <span className="text-destructive-foreground font-medium">Aa</span>
                </div>
                <p className="text-small font-medium">Destructive</p>
                <code className="text-small text-muted-foreground">bg-destructive</code>
              </div>
              <div className="space-y-2">
                <div className="h-20 rounded-lg bg-muted border border-border flex items-center justify-center">
                  <span className="text-muted-foreground font-medium">Aa</span>
                </div>
                <p className="text-small font-medium">Muted</p>
                <code className="text-small text-muted-foreground">bg-muted</code>
              </div>
              <div className="space-y-2">
                <div className="h-20 rounded-lg bg-card border border-border flex items-center justify-center">
                  <span className="text-card-foreground font-medium">Aa</span>
                </div>
                <p className="text-small font-medium">Card</p>
                <code className="text-small text-muted-foreground">bg-card</code>
              </div>
              <div className="space-y-2">
                <div className="h-20 rounded-lg bg-background border border-border flex items-center justify-center">
                  <span className="text-foreground font-medium">Aa</span>
                </div>
                <p className="text-small font-medium">Background</p>
                <code className="text-small text-muted-foreground">bg-background</code>
              </div>
              <div className="space-y-2">
                <div className="h-20 rounded-lg border-2 border-border flex items-center justify-center">
                  <span className="text-foreground font-medium">Border</span>
                </div>
                <p className="text-small font-medium">Border</p>
                <code className="text-small text-muted-foreground">border-border</code>
              </div>
            </div>
            <div className="mt-6 p-4 bg-muted/30 rounded-lg">
              <h4 className="font-semibold mb-2">Chart Colors</h4>
              <div className="flex gap-2">
                <div className="h-8 w-8 rounded bg-chart-1" title="Chart 1" />
                <div className="h-8 w-8 rounded bg-chart-2" title="Chart 2" />
                <div className="h-8 w-8 rounded bg-chart-3" title="Chart 3" />
                <div className="h-8 w-8 rounded bg-chart-4" title="Chart 4" />
                <div className="h-8 w-8 rounded bg-chart-5" title="Chart 5" />
              </div>
              <code className="text-small text-muted-foreground mt-2 block">bg-chart-1 through bg-chart-5</code>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Spacing */}
      <section id="spacing">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-h2 font-bold">Spacing Scale</h2>
          <Button
            variant="outline"
            size="sm"
            onClick={() => copyCode('p-4 m-6 gap-2', 'spacing')}
          >
            {copiedSection === 'spacing' ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
          </Button>
        </div>
        <Card>
          <CardHeader>
            <CardDescription>8pt grid system: 0, 4px, 8px, 12px, 16px, 24px, 32px, 40px, 48px, 56px, 64px, 80px, 96px, 112px</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {[0, 1, 2, 3, 4, 6, 8, 10, 12, 14, 16, 20, 24, 28].map((size) => (
                <div key={size} className="flex items-center gap-4">
                  <code className="text-small w-16">{size}</code>
                  <div className="h-8 bg-primary" style={{ width: `${size * 4}px` }} />
                  <span className="text-small text-muted-foreground">{size * 4}px</span>
                </div>
              ))}
            </div>
            <div className="mt-4 p-4 bg-muted/30 rounded-lg">
              <code className="text-small">Use: p-4, m-6, gap-2, space-x-4, etc.</code>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Shadows */}
      <section id="shadows">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-h2 font-bold">Shadows</h2>
          <Button
            variant="outline"
            size="sm"
            onClick={() => copyCode('shadow-md', 'shadows')}
          >
            {copiedSection === 'shadows' ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
          </Button>
        </div>
        <Card>
          <CardContent className="pt-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {['2xs', 'xs', 'sm', 'DEFAULT', 'md', 'lg', 'xl', '2xl'].map((shadow) => (
                <div key={shadow} className="space-y-2">
                  <div className={`h-20 rounded-lg bg-card border border-border flex items-center justify-center shadow-${shadow === 'DEFAULT' ? '' : shadow}`}>
                    <span className="text-small font-medium">{shadow}</span>
                  </div>
                  <code className="text-small text-muted-foreground">shadow-{shadow === 'DEFAULT' ? '' : shadow}</code>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Border Radius */}
      <section id="radius">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-h2 font-bold">Border Radius</h2>
          <Button
            variant="outline"
            size="sm"
            onClick={() => copyCode('rounded-lg', 'radius')}
          >
            {copiedSection === 'radius' ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
          </Button>
        </div>
        <Card>
          <CardContent className="pt-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="space-y-2">
                <div className="h-20 bg-primary rounded-sm flex items-center justify-center">
                  <span className="text-primary-foreground font-medium">sm</span>
                </div>
                <code className="text-small text-muted-foreground">rounded-sm</code>
                <p className="text-small text-muted-foreground">calc(1rem - 4px)</p>
              </div>
              <div className="space-y-2">
                <div className="h-20 bg-primary rounded-md flex items-center justify-center">
                  <span className="text-primary-foreground font-medium">md</span>
                </div>
                <code className="text-small text-muted-foreground">rounded-md</code>
                <p className="text-small text-muted-foreground">calc(1rem - 2px)</p>
              </div>
              <div className="space-y-2">
                <div className="h-20 bg-primary rounded-lg flex items-center justify-center">
                  <span className="text-primary-foreground font-medium">lg</span>
                </div>
                <code className="text-small text-muted-foreground">rounded-lg</code>
                <p className="text-small text-muted-foreground">1rem</p>
              </div>
              <div className="space-y-2">
                <div className="h-20 bg-primary rounded-xl flex items-center justify-center">
                  <span className="text-primary-foreground font-medium">xl</span>
                </div>
                <code className="text-small text-muted-foreground">rounded-xl</code>
                <p className="text-small text-muted-foreground">calc(1rem + 4px)</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Avatar */}
      <section id="avatar">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-h2 font-bold">Avatar</h2>
          <Button
            variant="outline"
            size="sm"
            onClick={() => copyCode('<Avatar src="..." alt="User" />', 'avatar')}
          >
            {copiedSection === 'avatar' ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
          </Button>
        </div>
        <Card>
          <CardContent className="space-y-6 pt-6">
            <div>
              <h3 className="text-h3 font-semibold mb-3">Sizes</h3>
              <div className="flex items-center gap-4 mb-3">
                <Avatar size="sm" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100" alt="User" />
                <Avatar size="md" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100" alt="User" />
                <Avatar size="lg" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100" alt="User" />
                <Avatar size="xl" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100" alt="User" />
              </div>
              <code className="text-small text-muted-foreground">size="sm" | "md" | "lg" | "xl"</code>
            </div>
            <div>
              <h3 className="text-h3 font-semibold mb-3">Fallback</h3>
              <div className="flex items-center gap-4 mb-3">
                <Avatar fallback="JD" alt="John Doe" />
                <Avatar fallback="AB" alt="Alice Brown" />
                <Avatar alt="User" />
              </div>
              <code className="text-small text-muted-foreground">Shows initials or first letter when no image</code>
            </div>
            <div>
              <h3 className="text-h3 font-semibold mb-3">Avatar Group</h3>
              <AvatarGroup max={3}>
                <Avatar src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100" alt="User 1" />
                <Avatar src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100" alt="User 2" />
                <Avatar src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100" alt="User 3" />
                <Avatar src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100" alt="User 4" />
                <Avatar src="https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100" alt="User 5" />
              </AvatarGroup>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Filter Chips */}
      <section id="filter-chips">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-h2 font-bold">Filter Chips</h2>
          <Button
            variant="outline"
            size="sm"
            onClick={() => copyCode('<FilterChip label="Filter" />', 'filter-chips')}
          >
            {copiedSection === 'filter-chips' ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
          </Button>
        </div>
        <Card>
          <CardContent className="space-y-6 pt-6">
            <div>
              <h3 className="text-h3 font-semibold mb-3">Basic</h3>
              <FilterChipGroup>
                <FilterChip label="Category" />
                <FilterChip label="Location" />
                <FilterChip label="Price" />
              </FilterChipGroup>
            </div>
            <div>
              <h3 className="text-h3 font-semibold mb-3">With Dropdown</h3>
              <FilterChipGroup>
                <FilterChip label="Price" showDropdown />
                <FilterChip label="Cuisine" showDropdown />
                <FilterChip label="Rating" showDropdown />
              </FilterChipGroup>
            </div>
            <div>
              <h3 className="text-h3 font-semibold mb-3">Active State</h3>
              <FilterChipGroup>
                <FilterChip label="All" active />
                <FilterChip label="Restaurants" />
                <FilterChip label="Hotels" />
              </FilterChipGroup>
            </div>
            <div>
              <h3 className="text-h3 font-semibold mb-3">With Close</h3>
              <FilterChipGroup>
                <FilterChip label="Seafood" showClose active />
                <FilterChip label="Italian" showClose active />
                <FilterChip label="Vegan" showClose active />
              </FilterChipGroup>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Pagination */}
      <section id="pagination">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-h2 font-bold">Pagination</h2>
          <Button
            variant="outline"
            size="sm"
            onClick={() => copyCode('<Pagination currentPage={1} totalPages={10} onPageChange={...} />', 'pagination')}
          >
            {copiedSection === 'pagination' ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
          </Button>
        </div>
        <Card>
          <CardContent className="space-y-6 pt-6">
            <div>
              <h3 className="text-h3 font-semibold mb-3">Default</h3>
              <Pagination currentPage={1} totalPages={5} onPageChange={() => {}} />
            </div>
            <div>
              <h3 className="text-h3 font-semibold mb-3">Middle Page</h3>
              <Pagination currentPage={5} totalPages={10} onPageChange={() => {}} />
            </div>
            <div>
              <h3 className="text-h3 font-semibold mb-3">Many Pages</h3>
              <Pagination currentPage={15} totalPages={50} onPageChange={() => {}} />
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Input with Icons */}
      <section id="input-icons">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-h2 font-bold">Input with Icons</h2>
          <Button
            variant="outline"
            size="sm"
            onClick={() => copyCode('<Input leftIcon={<Search />} />', 'input-icons')}
          >
            {copiedSection === 'input-icons' ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
          </Button>
        </div>
        <Card>
          <CardContent className="space-y-4 pt-6">
            <div>
              <h3 className="text-h3 font-semibold mb-3">Left Icon</h3>
              <Input leftIcon={<Search className="h-5 w-5" />} placeholder="Search..." />
            </div>
            <div>
              <h3 className="text-h3 font-semibold mb-3">Right Icon</h3>
              <Input rightIcon={<Mail className="h-5 w-5" />} placeholder="Email address" type="email" />
            </div>
            <div>
              <h3 className="text-h3 font-semibold mb-3">Both Icons</h3>
              <Input
                leftIcon={<Search className="h-5 w-5" />}
                rightIcon={<Bell className="h-5 w-5" />}
                placeholder="Search notifications..."
              />
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Icon-Only Buttons */}
      <section id="icon-buttons">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-h2 font-bold">Icon-Only Buttons</h2>
          <Button
            variant="outline"
            size="sm"
            onClick={() => copyCode('<Button iconOnly><Icon /></Button>', 'icon-buttons')}
          >
            {copiedSection === 'icon-buttons' ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
          </Button>
        </div>
        <Card>
          <CardContent className="space-y-6 pt-6">
            <div>
              <h3 className="text-h3 font-semibold mb-3">Variants</h3>
              <div className="flex gap-3">
                <Button iconOnly variant="primary"><Bell className="h-5 w-5" /></Button>
                <Button iconOnly variant="secondary"><Search className="h-5 w-5" /></Button>
                <Button iconOnly variant="outline"><Mail className="h-5 w-5" /></Button>
                <Button iconOnly variant="ghost"><Info className="h-5 w-5" /></Button>
              </div>
            </div>
            <div>
              <h3 className="text-h3 font-semibold mb-3">Sizes</h3>
              <div className="flex items-center gap-3">
                <Button iconOnly size="sm"><Bell className="h-4 w-4" /></Button>
                <Button iconOnly size="md"><Bell className="h-5 w-5" /></Button>
                <Button iconOnly size="lg"><Bell className="h-6 w-6" /></Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Admin Components Section Header */}
      <div className="pt-8 border-t border-border">
        <h2 className="text-h1 font-bold mb-2">Admin Dashboard Components</h2>
        <p className="text-body text-muted-foreground mb-8">
          Components extracted from the admin dashboard HTML mockup
        </p>
      </div>

      {/* Meta Item */}
      <section id="meta-item">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-h2 font-bold">Meta Item</h2>
          <Button
            variant="outline"
            size="sm"
            onClick={() => copyCode('<MetaItem icon={<Icon />}>Text</MetaItem>', 'meta-item')}
          >
            {copiedSection === 'meta-item' ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
          </Button>
        </div>
        <Card>
          <CardHeader>
            <CardDescription>
              Small icon + text display component for metadata information
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <MetaItem icon={<Calendar className="h-4 w-4" />}>
                Submitted 2 days ago
              </MetaItem>
              <MetaItem icon={<User className="h-4 w-4" />}>
                John Doe
              </MetaItem>
              <MetaItem icon={<MapPin className="h-4 w-4" />}>
                123 Main Street, Downtown
              </MetaItem>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Side Panel */}
      <section id="side-panel">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-h2 font-bold">Side Panel</h2>
          <Button
            variant="outline"
            size="sm"
            onClick={() => copyCode('<SidePanel isOpen={true} onClose={() => {}} title="Title">Content</SidePanel>', 'side-panel')}
          >
            {copiedSection === 'side-panel' ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
          </Button>
        </div>
        <Card>
          <CardHeader>
            <CardDescription>
              Sliding drawer panel from the right side with backdrop overlay
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button onClick={() => setSidePanelOpen(true)}>
              Open Side Panel
            </Button>
          </CardContent>
        </Card>
      </section>

      {/* Filter Bar */}
      <section id="filter-bar">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-h2 font-bold">Filter Bar</h2>
          <Button
            variant="outline"
            size="sm"
            onClick={() => copyCode('<FilterBar filters={filters} />', 'filter-bar')}
          >
            {copiedSection === 'filter-bar' ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
          </Button>
        </div>
        <Card>
          <CardHeader>
            <CardDescription>
              Multiple filter dropdowns with labels for filtering data
            </CardDescription>
          </CardHeader>
          <CardContent>
            <FilterBar
              filters={[
                {
                  id: 'category',
                  label: 'Category',
                  value: 'all',
                  onChange: () => {},
                  options: [
                    { value: 'all', label: 'All Categories' },
                    { value: 'restaurant', label: 'Restaurants' },
                    { value: 'retail', label: 'Retail' },
                  ],
                },
                {
                  id: 'status',
                  label: 'Status',
                  value: 'all',
                  onChange: () => {},
                  options: [
                    { value: 'all', label: 'All Status' },
                    { value: 'active', label: 'Active' },
                    { value: 'pending', label: 'Pending' },
                  ],
                },
              ]}
            />
          </CardContent>
        </Card>
      </section>

      {/* Bulk Actions Bar */}
      <section id="bulk-actions">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-h2 font-bold">Bulk Actions Bar</h2>
          <Button
            variant="outline"
            size="sm"
            onClick={() => copyCode('<BulkActionsBar selectedCount={2} totalCount={10} onSelectAll={() => {}} />', 'bulk-actions')}
          >
            {copiedSection === 'bulk-actions' ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
          </Button>
        </div>
        <Card>
          <CardHeader>
            <CardDescription>
              Select all checkbox with selected count display for bulk operations
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <BulkActionsBar
              selectedCount={0}
              totalCount={10}
              onSelectAll={() => {}}
            />
            <BulkActionsBar
              selectedCount={3}
              totalCount={10}
              onSelectAll={() => {}}
            />
            <BulkActionsBar
              selectedCount={10}
              totalCount={10}
              onSelectAll={() => {}}
            />
          </CardContent>
        </Card>
      </section>

      {/* Business Card */}
      <section id="business-card" className="pt-4">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-h2 font-bold">Business Card</h2>
          <Button
            variant="outline"
            size="sm"
            onClick={() => copyCode('<BusinessCard business={business} ... />', 'business-card')}
          >
            {copiedSection === 'business-card' ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
          </Button>
        </div>
        <Card>
          <CardHeader>
            <CardDescription>
              Admin review card for managing individual business submissions.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <BusinessCard
              business={{
                id: 'demo-1',
                name: 'Blue Lagoon Bar & Grill',
                category: 'Restaurant',
                address: '123 Beachfront Ave, San Pedro',
                imageUrl: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=400',
                ownerName: 'Maria Gonzalez',
                ownerEmail: 'maria@example.com',
                submittedDate: '2025-10-01',
                priority: 'high',
              } satisfies BusinessCardData}
              isSelected={selectedBusinesses.has('demo-1')}
              onSelect={(id, selected) => {
                setSelectedBusinesses(prev => {
                  const next = new Set(prev);
                  if (selected) {
                    next.add(id);
                  } else {
                    next.delete(id);
                  }
                  return next;
                });
              }}
              onApprove={() => {}}
              onRequestChanges={() => {}}
              onReject={() => {}}
              onViewDetails={() => {}}
            />
          </CardContent>
        </Card>
      </section>

      {/* Side Panel Component */}
      <SidePanel
        isOpen={sidePanelOpen}
        onClose={() => setSidePanelOpen(false)}
        title="Example Side Panel"
      >
        <div className="space-y-4">
          <p className="text-body">
            This is an example of a side panel. It slides in from the right and includes a backdrop overlay.
          </p>
          <div className="space-y-2">
            <h3 className="font-semibold">Features:</h3>
            <ul className="list-disc list-inside space-y-1 text-small text-muted-foreground">
              <li>Slides in from the right</li>
              <li>Backdrop overlay</li>
              <li>Close on escape key</li>
              <li>Prevents body scroll when open</li>
              <li>Responsive width</li>
            </ul>
          </div>
          <Button onClick={() => setSidePanelOpen(false)}>
            Close Panel
          </Button>
        </div>
      </SidePanel>
    </div>
  );
}

