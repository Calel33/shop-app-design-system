import React from 'react';
import { Calendar, Clock, MapPin, Share2, Video } from 'lucide-react';
import { Meeting } from '../types/scheduling.types';
import { GuestList } from './GuestList';

export interface MeetingCardProps {
  meeting: Meeting;
  onJoin?: () => void;
  onShare?: () => void;
}

export const MeetingCard: React.FC<MeetingCardProps> = ({ meeting, onJoin, onShare }) => {
  const dateStr = new Intl.DateTimeFormat(undefined, { weekday: 'short', month: 'short', day: 'numeric' }).format(meeting.date);

  return (
    <section className="rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur-lg p-5 md:p-6">
      <h3 className="text-white font-medium tracking-tight">{meeting.title}</h3>
      <div className="mt-3 space-y-2 text-sm text-white/70">
        <div className="flex items-center gap-2">
          <Calendar size={16} /> <span>{dateStr}</span>
        </div>
        <div className="flex items-center gap-2">
          <Clock size={16} /> <span>{meeting.startTime}–{meeting.endTime} ({meeting.timezone})</span>
        </div>
        <div className="flex items-center gap-2">
          <MapPin size={16} /> <span>Video conference</span>
        </div>
      </div>

      <div className="mt-5">
        <div className="text-xs text-white/60 mb-2">Guests</div>
        <GuestList guests={meeting.guests} />
      </div>

      <div className="mt-6 flex flex-wrap gap-3">
        <button
          type="button"
          onClick={onJoin}
          className="inline-flex items-center gap-2 rounded-md bg-white text-neutral-900 px-4 py-2 text-sm font-medium shadow-sm hover:bg-white/90 focus:outline-none focus:ring-2 focus:ring-white/20"
        >
          <Video size={16} /> Join Meeting
        </button>
        <button
          type="button"
          onClick={onShare}
          className="inline-flex items-center gap-2 rounded-md bg-white/10 text-white px-4 py-2 text-sm font-medium ring-1 ring-white/15 hover:bg-white/15 focus:outline-none focus:ring-2 focus:ring-white/20"
        >
          <Share2 size={16} /> Share Invite
        </button>
      </div>
    </section>
  );
};

export default MeetingCard;
