import React from 'react';
import type { MeditationSession } from '../types/wellness.types';
import { useScrollAnimation } from '@/ui/hooks/useScrollAnimation';

interface MeditationCardProps {
  session: MeditationSession;
  delay?: number;
}

export const MeditationCard: React.FC<MeditationCardProps> = ({ session, delay = 0 }) => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });
  return (
    <article
      ref={ref as React.RefObject<HTMLDivElement>}
      className={
        'relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow transition ' +
        'hover:scale-[1.03] hover:shadow-lg ' +
        (isVisible ? 'opacity-100 translate-y-0 blur-0' : 'opacity-0 translate-y-4 blur-[2px]')
      }
      style={{ transitionDuration: '700ms', transitionDelay: `${delay}ms` }}
    >
      <div className="relative h-40">
        <img src={session.backgroundImage} alt="" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
        {session.badge && (
          <span className="absolute top-3 left-3 rounded-full bg-white/10 px-2 py-1 text-xs backdrop-blur">
            {session.badge}
          </span>
        )}
      </div>
      <div className="p-4 text-white">
        <div className="text-xs uppercase tracking-wider opacity-70">{session.category}</div>
        <h3 className="mt-1 text-lg font-semibold">{session.title}</h3>
        <div className="mt-2 flex items-center justify-between text-sm text-white/80">
          <span>{session.duration} min</span>
          {session.stats?.streak ? <span>🔥 {session.stats.streak} day streak</span> : <span />}
        </div>
      </div>
    </article>
  );
};

export default MeditationCard;
