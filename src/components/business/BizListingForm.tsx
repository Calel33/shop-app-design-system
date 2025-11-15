import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { Input } from '@/components/ui/Input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Tabs, TabList, Tab } from '@/components/ui/Tabs';
import { PhotoUpload } from '@/components/ui/PhotoUpload';

interface BizListingFormProps extends React.HTMLAttributes<HTMLDivElement> {}

type BizListingTab = 'basic' | 'hours' | 'photos' | 'contact';

export function BizListingForm({ className, ...props }: BizListingFormProps) {
  const [activeTab, setActiveTab] = useState<BizListingTab>('basic');

  return (
    <Card className={cn('h-full flex flex-col rounded-none border-0 border-r border-border', className)} {...props}>
      <Tabs value={activeTab} onValueChange={(value) => setActiveTab(value as BizListingTab)}>
        <TabList>
          <Tab value="basic">Basic Info</Tab>
          <Tab value="hours">Hours</Tab>
          <Tab value="photos">Photos</Tab>
          <Tab value="contact">Contact Details</Tab>
        </TabList>
      </Tabs>

      <div className="flex-1 overflow-y-auto p-6 space-y-6">
        {activeTab === 'basic' && <BasicInfoSection />}
        {activeTab === 'hours' && <HoursSection />}
        {activeTab === 'photos' && <PhotosSection />}
        {activeTab === 'contact' && <ContactSection />}
      </div>
    </Card>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="space-y-2">
      <label className="text-small font-medium text-foreground">{label}</label>
      {children}
    </div>
  );
}

function BasicInfoSection() {
  return (
    <div className="space-y-6">
      <Field label="Business Name">
        <Input defaultValue="The Corner Café" placeholder="Enter business name" />
      </Field>
      <Field label="Category">
        <Input defaultValue="Restaurant & Dining" placeholder="Select a category" />
      </Field>
      <Field label="Description">
        <textarea
          className="min-h-[100px] w-full rounded-lg border border-input bg-background px-3 py-2 text-small shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          defaultValue="A cozy neighborhood café serving freshly roasted coffee, homemade pastries, and light meals. Perfect spot for meetings, studying, or catching up with friends in a warm, welcoming atmosphere."
        />
      </Field>
      <Field label="Address">
        <Input defaultValue="123 Main Street, Downtown" placeholder="Enter full address" />
      </Field>
      <Field label="Tags">
        <Input
          defaultValue="coffee, breakfast, wifi, outdoor seating"
          placeholder="Add tags separated by commas"
        />
      </Field>
      <Field label="Business Photos">
        <PhotoUpload />
      </Field>
    </div>
  );
}

function HoursSection() {
  return (
    <Card className="border-dashed border-border/60 bg-muted/40">
      <CardHeader>
        <CardTitle className="text-h4">Hours scheduler</CardTitle>
      </CardHeader>
      <CardContent className="text-small text-muted-foreground">
        Detailed hours controls will live here. For now this is a placeholder matching the mockup layout.
      </CardContent>
    </Card>
  );
}

function PhotosSection() {
  return (
    <div className="space-y-4">
      <Field label="Business Photos">
        <PhotoUpload />
      </Field>
      <p className="text-small text-muted-foreground">
        You can upload up to 5 photos. Drag and drop files or click to browse from your device.
      </p>
    </div>
  );
}

function ContactSection() {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      <Field label="Phone">
        <Input defaultValue="(555) 123-4567" placeholder="Enter phone number" />
      </Field>
      <Field label="Website">
        <Input defaultValue="www.cornercafe.com" placeholder="Enter website" />
      </Field>
      <Field label="Email">
        <Input defaultValue="hello@cornercafe.com" placeholder="Enter email address" />
      </Field>
      <Field label="Contact Person">
        <Input defaultValue="Ana Martinez" placeholder="Enter contact person" />
      </Field>
    </div>
  );
}
