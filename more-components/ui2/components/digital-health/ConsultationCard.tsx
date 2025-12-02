import { Clock, MessageCircle } from 'lucide-react';
import { ConsultationCardProps } from './types';
import { CountdownBadge } from './CountdownBadge';

export const ConsultationCard = ({ 
  patient, 
  time, 
  countdown,
  onChatClick 
}: ConsultationCardProps) => {
  return (
    <div 
      className="flex flex-col gap-4 rounded-xl p-6 shadow-sm ring-1 bg-card ring-border opacity-0 animate-fade-in-up"
      style={{ animationDelay: '0.25s', animationFillMode: 'forwards' }}
    >
      <div className="flex items-center justify-between text-xs text-muted-foreground">
        <span className="inline-flex items-center gap-1">
          <Clock className="h-4 w-4" />
          {time.day} • {time.hour}
        </span>
        {countdown && <CountdownBadge label={countdown} variant="warning" />}
      </div>

      <div className="flex items-center gap-3">
        <div className="flex-1">
          <p className="text-sm font-medium">{patient.name}</p>
          <p className="text-xs text-muted-foreground">
            Patient • {patient.condition}
          </p>
        </div>
        <button 
          onClick={onChatClick}
          className="inline-flex items-center gap-1 rounded-lg px-3 py-1.5 text-xs font-medium bg-foreground text-background transition hover:opacity-90 focus-visible:ring focus-visible:ring-ring"
        >
          <MessageCircle className="h-4 w-4" />
          Chat now
        </button>
      </div>

      {patient.message && (
        <p className="rounded-lg bg-muted px-3 py-2 text-sm leading-relaxed">
          {patient.message}
        </p>
      )}
    </div>
  );
};
