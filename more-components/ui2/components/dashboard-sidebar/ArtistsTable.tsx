import React from 'react';
import { Circle, MoreHorizontal } from 'lucide-react';
import type { ArtistsTableProps } from './types';

export const ArtistsTable: React.FC<ArtistsTableProps> = ({ artists, onArtistAction }) => {
  const statusColors = {
    green: 'bg-green-500/20 text-green-300',
    yellow: 'bg-yellow-500/20 text-yellow-300',
    gray: 'bg-gray-500/20 text-gray-300',
  };

  return (
    <div className="bg-slate-900/40 backdrop-blur-lg border border-white/10 rounded-xl overflow-hidden">
      <div className="overflow-x-auto">
        <table className="min-w-full text-sm">
          <thead className="text-left text-white/60 border-b border-white/10">
            <tr>
              <th className="py-4 px-3 lg:px-5">Artist</th>
              <th className="py-4 px-3 lg:px-5 hidden sm:table-cell">Genre</th>
              <th className="py-4 px-3 lg:px-5 hidden md:table-cell">Status</th>
              <th className="py-4 px-3 lg:px-5 hidden lg:table-cell">Location</th>
              <th className="py-4 px-3 lg:px-5"></th>
            </tr>
          </thead>
          <tbody>
            {artists.map((artist) => (
              <tr key={artist.id} className="hover:bg-white/5 transition">
                <td className="py-3 px-3 lg:px-5 flex items-center gap-2">
                  <img
                    src={artist.avatar}
                    alt={artist.name}
                    className="h-6 w-6 rounded-full object-cover"
                  />
                  <span className="truncate">{artist.name}</span>
                </td>
                <td className="py-3 px-3 lg:px-5 hidden sm:table-cell">
                  {artist.genre}
                  {artist.isFeatured && <span className="text-cyan-400 ml-1">★</span>}
                </td>
                <td className="py-3 px-3 lg:px-5 hidden md:table-cell">
                  <span
                    className={`inline-flex items-center gap-1 text-xs px-2 py-1 rounded-full ${
                      statusColors[artist.status.variant]
                    }`}
                  >
                    <Circle className="h-2 w-2 fill-current" />
                    {artist.status.label}
                  </span>
                </td>
                <td className="py-3 px-3 lg:px-5 hidden lg:table-cell">{artist.location}</td>
                <td className="py-3 px-3 lg:px-5 text-right">
                  <button
                    onClick={() => onArtistAction?.(artist.id)}
                    aria-label="Artist actions"
                  >
                    <MoreHorizontal className="h-4 w-4" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
