import { TestimonialCardProps } from './types';
import { MeteorBackground } from './MeteorBackground';
import { QuoteIcon } from './QuoteIcon';

export const TestimonialCard = ({ 
  testimonial, 
  hasMeteor = false, 
  meteorDelay = 0,
  className = '' 
}: TestimonialCardProps) => {
  const { quote, author } = testimonial;
  const { name, role, company, avatar, avatarAlt } = author;

  // Fallback avatar using initials if no image provided
  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map((word) => word.charAt(0))
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  const displayRole = company ? `${role}, ${company}` : role;

  return (
    <div className={`relative bg-gray-900/60 backdrop-blur-sm border border-gray-800/30 rounded-xl p-6 shadow-md overflow-hidden dark:bg-gray-900/80 dark:border-gray-700/40 ${className}`}>
      {hasMeteor && <MeteorBackground delay={meteorDelay} />}
      
      <div className="relative z-10">
        <QuoteIcon />
        
        <blockquote className="text-gray-300 dark:text-gray-200 mb-6 leading-relaxed">
          "{quote}"
        </blockquote>
        
        <footer className="flex items-center">
          <div className="w-12 h-12 rounded-full mr-4 border border-indigo-500/30 overflow-hidden">
            {avatar ? (
              <img 
                src={avatar} 
                alt={avatarAlt || `${name}'s avatar`}
                className="w-full h-full object-cover"
                onError={(e) => {
                  // Fallback to initials if image fails to load
                  e.currentTarget.style.display = 'none';
                  const fallback = e.currentTarget.nextElementSibling as HTMLElement;
                  if (fallback) fallback.style.display = 'flex';
                }}
              />
            ) : null}
            <div 
              className={`w-full h-full bg-indigo-600 dark:bg-indigo-500 text-white text-sm font-medium flex items-center justify-center ${avatar ? 'hidden' : 'flex'}`}
              style={{ display: avatar ? 'none' : 'flex' }}
            >
              {getInitials(name)}
            </div>
          </div>
          
          <div>
            <cite className="font-medium text-white not-italic">{name}</cite>
            <p className="text-gray-400 dark:text-gray-500 text-sm">{displayRole}</p>
          </div>
        </footer>
      </div>
    </div>
  );
};