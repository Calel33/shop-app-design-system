import { LayoutDashboard, Bell, Settings } from 'lucide-react';
import { AppPreviewCardProps } from './types';

export const AppPreviewCard = ({ 
  appName, 
  screenshot,
  icons 
}: AppPreviewCardProps) => {
  const defaultIcons = [
    { name: 'Dashboard', component: LayoutDashboard },
    { name: 'Notifications', component: Bell },
    { name: 'Settings', component: Settings }
  ];

  const displayIcons = icons || defaultIcons;

  return (
    <div 
      className="flex flex-col overflow-hidden rounded-xl shadow-sm ring-1 bg-card ring-border opacity-0 animate-fade-in-up"
      style={{ animationDelay: '0.35s', animationFillMode: 'forwards' }}
    >
      <div className="flex items-center justify-between gap-2 p-4">
        <span className="font-semibold">{appName}</span>
        <div className="flex gap-3">
          {displayIcons.map((icon, index) => {
            const IconComponent = icon.component;
            return (
              <IconComponent 
                key={index}
                className="h-5 w-5 text-muted-foreground" 
                aria-label={icon.name}
              />
            );
          })}
        </div>
      </div>
      <img 
        src={screenshot}
        alt={`${appName} dashboard preview screenshot`}
        className="h-full w-full object-cover transition hover:scale-105 duration-500 ease-out"
        loading="lazy"
      />
    </div>
  );
};
