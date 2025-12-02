import { MessageBubbleProps } from './types';

export const MessageBubble = ({ text, variant }: MessageBubbleProps) => {
  const variantStyles = {
    sent: 'bg-[hsl(var(--chart-5))] text-emerald-100 self-end',
    received: 'bg-card self-start'
  };

  return (
    <div className={`rounded-lg px-3 py-2 text-sm max-w-sm ${variantStyles[variant]}`}>
      {text}
    </div>
  );
};
