import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';

export interface FoodContactInfo {
  phone: string;
  address: string;
  website?: string;
  email?: string;
}

export interface FoodHoursRow {
  day: string;
  time: string;
}

export interface FoodQuickAction {
  id: string;
  label: string;
}

interface FoodSidebarProps {
  contact: FoodContactInfo;
  hours: FoodHoursRow[];
  actions: FoodQuickAction[];
  notes: string[];
}

export function FoodSidebar({ contact, hours, actions, notes }: FoodSidebarProps) {
  return (
    <aside className="flex flex-col gap-4">
      <Card className="space-y-3 p-4 md:p-5">
        <h3 className="flex items-center gap-2 text-sm font-semibold text-foreground">
          <span className="text-base">☎</span>
          <span>Contact information</span>
        </h3>
        <div className="space-y-2 text-xs text-muted-foreground">
          <div>{contact.phone}</div>
          <div>{contact.address}</div>
          {contact.website && <div>{contact.website}</div>}
          {contact.email && <div>{contact.email}</div>}
        </div>
      </Card>

      <Card className="space-y-3 p-4 md:p-5">
        <h3 className="flex items-center gap-2 text-sm font-semibold text-foreground">
          <span className="text-base">⏰</span>
          <span>Hours of operation</span>
        </h3>
        <div className="space-y-1 text-xs text-muted-foreground">
          {hours.map((row) => (
            <div key={row.day} className="flex items-center justify-between border-b border-border/40 pb-1 last:border-b-0 last:pb-0">
              <span className="font-medium text-foreground/90">{row.day}</span>
              <span>{row.time}</span>
            </div>
          ))}
        </div>
      </Card>

      <Card className="space-y-3 p-4 md:p-5">
        <h3 className="flex items-center gap-2 text-sm font-semibold text-foreground">
          <span className="text-base">🍽</span>
          <span>Quick actions</span>
        </h3>
        <div className="flex flex-col gap-2">
          {actions.map((action) => (
            <Button key={action.id} variant={action.id === 'call' ? 'primary' : 'outline'} size="sm" className="justify-between">
              <span>{action.label}</span>
            </Button>
          ))}
        </div>
      </Card>

      <Card className="space-y-3 p-4 md:p-5">
        <h3 className="flex items-center gap-2 text-sm font-semibold text-foreground">
          <span className="text-base">ℹ</span>
          <span>Good to know</span>
        </h3>
        <ul className="space-y-2 text-xs text-muted-foreground">
          {notes.map((note, index) => (
            <li key={index}>{note}</li>
          ))}
        </ul>
      </Card>
    </aside>
  );
}
