import { Quote } from 'lucide-react';

export const QuoteIcon = ({ className = "w-6 h-6" }) => {
  return (
    <div className="flex mb-4">
      <div className="text-indigo-400 dark:text-indigo-300">
        <Quote className={className} />
      </div>
    </div>
  );
};