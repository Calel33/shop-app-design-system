import React from 'react';
import type { MeditationSession } from '../types/wellness.types';

interface SessionLibraryCardProps {
  sessions: MeditationSession[];
}

export const SessionLibraryCard: React.FC<SessionLibraryCardProps> = ({ sessions }) => {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-white">
      <h3 className="text-lg font-semibold mb-2">Session Library</h3>
      <ul className="space-y-2">
        {sessions.map((s) => (
          <li key={s.id} className="flex items-center justify-between rounded-lg bg-white/5 px-3 py-2">
            <div>
              <div className="text-sm font-medium">{s.title}</div>
              <div className="text-xs text-white/70">{s.category} · {s.duration} min</div>
            </div>
            <button className="text-xs rounded-full border border-white/15 px-2 py-1 hover:bg-white/10">Play</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SessionLibraryCard;
