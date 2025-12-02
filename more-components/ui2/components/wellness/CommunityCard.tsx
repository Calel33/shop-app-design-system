import React from 'react';

export const CommunityCard: React.FC = () => {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-white">
      <h3 className="text-lg font-semibold mb-2">Community</h3>
      <p className="text-sm text-white/80">Join live sessions and share your progress.</p>
      <div className="mt-3 flex -space-x-2">
        {Array.from({ length: 5 }).map((_, i) => (
          <span key={i} className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/10 border border-white/10 text-xs">{i + 1}</span>
        ))}
      </div>
      <button className="mt-4 rounded-full border border-white/15 px-3 py-1 text-sm hover:bg-white/10">Explore</button>
    </div>
  );
};

export default CommunityCard;
