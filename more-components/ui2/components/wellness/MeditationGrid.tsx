import React from 'react';
import type { MeditationGridProps } from '../types/wellness.types';
import { MeditationCard } from './MeditationCard';
import { SessionLibraryCard } from './SessionLibraryCard';
import { ProgressAnalyticsCard } from './ProgressAnalyticsCard';
import { CommunityCard } from './CommunityCard';

export const MeditationGrid: React.FC<MeditationGridProps> = ({ sessions, categories: _categories, userProgress }) => {
  const delays = [0, 100, 200, 300, 400, 500];
  return (
    <section className="w-[min(1100px,92%)] mx-auto py-10">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {sessions.slice(0, 3).map((s, i) => (
          <MeditationCard key={s.id} session={s} delay={delays[i % delays.length]} />
        ))}
        <SessionLibraryCard sessions={sessions.slice(3, 8)} />
        {userProgress && (
          <ProgressAnalyticsCard
            hoursThisMonth={userProgress.hoursThisMonth}
            focusImprovement={userProgress.focusImprovement}
            stressReduction={userProgress.stressReduction}
          />
        )}
        <CommunityCard />
        {sessions.slice(3, 6).map((s, i) => (
          <MeditationCard key={s.id} session={s} delay={delays[(i + 3) % delays.length]} />
        ))}
      </div>
    </section>
  );
};

export default MeditationGrid;
