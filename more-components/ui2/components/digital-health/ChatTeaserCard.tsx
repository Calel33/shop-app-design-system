import { ChatTeaserCardProps } from './types';
import { MessageBubble } from './MessageBubble';

export const ChatTeaserCard = ({ 
  title, 
  messages, 
  avatar,
  backgroundImage 
}: ChatTeaserCardProps) => {
  const backgroundStyle = backgroundImage 
    ? { backgroundImage: `url(${backgroundImage})` }
    : {};

  return (
    <div 
      className="flex flex-col rounded-xl p-6 shadow-sm ring-1 sm:col-span-2 bg-card ring-border bg-cover justify-between opacity-0 animate-fade-in-up"
      style={{ 
        ...backgroundStyle,
        animationDelay: '0.75s', 
        animationFillMode: 'forwards' 
      }}
    >
      <h2 className="text-6xl font-normal tracking-tight leading-tight font-playfair">
        {title}
      </h2>
      
      <div className="mt-6 flex flex-col gap-2">
        {messages.map((message) => (
          <MessageBubble
            key={message.id}
            text={message.text}
            variant={message.sender === 'patient' ? 'received' : 'sent'}
          />
        ))}
      </div>
      
      {avatar && (
        <div className="mt-4 flex items-center gap-2 self-end">
          <img 
            src={avatar.src}
            alt={avatar.name}
            className="h-6 w-6 rounded-full object-cover"
            loading="lazy"
          />
          <span className="text-sm font-medium">{avatar.name}</span>
        </div>
      )}
    </div>
  );
};
