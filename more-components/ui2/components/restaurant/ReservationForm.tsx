import React, { useState } from 'react';
import { Calendar, Check, Phone } from 'lucide-react';
import { ReservationFormProps, ReservationData } from './types';

export const ReservationForm: React.FC<ReservationFormProps> = ({
  onSubmit,
  phoneNumber,
  features = [],
}) => {
  const [formData, setFormData] = useState<ReservationData>({
    name: '',
    phone: '',
    partySize: 2,
    dateTime: '',
    specialRequests: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === 'partySize' ? parseInt(value) : value,
    }));
  };

  return (
    <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-5 sm:p-6 md:p-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left column: Info */}
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 ring-1 ring-neutral-200 text-xs text-slate-950 bg-neutral-200 rounded-full pt-1.5 pr-3 pb-1.5 pl-3">
            <span className="h-1.5 w-1.5 rounded-full bg-green-400 animate-pulse" />
            Now accepting reservations
          </div>
          
          <h4 className="text-white font-semibold tracking-tight">
            Make a reservation
          </h4>
          
          <ul className="space-y-2 text-sm text-neutral-300">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start gap-2">
                <Check className="w-4 h-4 text-green-400 mt-0.5" strokeWidth={1.5} />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
          
          {phoneNumber && (
            <div className="flex items-center gap-3 pt-2 text-sm">
              <a
                href={`tel:${phoneNumber}`}
                className="inline-flex items-center gap-2 text-white hover:text-amber-300 transition"
              >
                <Phone className="w-4 h-4" strokeWidth={1.5} />
                {phoneNumber}
              </a>
            </div>
          )}
        </div>

        {/* Right column: Form */}
        <form onSubmit={handleSubmit} className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="sm:col-span-1">
            <label htmlFor="name" className="block text-xs font-medium text-white/80 mb-1">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              placeholder="Your name"
              className="w-full placeholder-white/40 outline-none focus:ring-2 focus:ring-red-400/60 focus:border-red-300 transition text-sm text-white bg-white/10 border-white/10 border rounded-xl pt-2.5 pr-3 pb-2.5 pl-3"
            />
          </div>
          
          <div className="sm:col-span-1">
            <label htmlFor="phone" className="block text-xs font-medium text-white/80 mb-1">
              Phone
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              required
              value={formData.phone}
              onChange={handleChange}
              placeholder="+1 (234) 567-8900"
              className="w-full placeholder-white/40 outline-none focus:ring-2 focus:ring-red-400/60 focus:border-red-300 transition text-sm text-white bg-white/10 border-white/10 border rounded-xl pt-2.5 pr-3 pb-2.5 pl-3"
            />
          </div>
          
          <div className="sm:col-span-1">
            <label htmlFor="partySize" className="block text-xs font-medium text-white/80 mb-1">
              Party size
            </label>
            <select
              id="partySize"
              name="partySize"
              value={formData.partySize}
              onChange={handleChange}
              className="w-full appearance-none outline-none focus:ring-2 focus:ring-red-400/60 focus:border-red-300 transition text-sm text-white bg-white/10 border-white/10 border rounded-xl pt-2.5 pr-3 pb-2.5 pl-3"
            >
              <option className="bg-neutral-900" value="2">2 guests</option>
              <option className="bg-neutral-900" value="4">4 guests</option>
              <option className="bg-neutral-900" value="6">6 guests</option>
              <option className="bg-neutral-900" value="8">8+ guests</option>
            </select>
          </div>
          
          <div className="sm:col-span-1">
            <label htmlFor="dateTime" className="block text-xs font-medium text-white/80 mb-1">
              Date & Time
            </label>
            <input
              type="datetime-local"
              id="dateTime"
              name="dateTime"
              value={formData.dateTime}
              onChange={handleChange}
              className="w-full outline-none focus:ring-2 focus:ring-red-400/60 focus:border-red-300 transition text-sm text-white bg-white/10 border-white/10 border rounded-xl pt-2.5 pr-3 pb-2.5 pl-3"
            />
          </div>
          
          <div className="sm:col-span-2">
            <label htmlFor="specialRequests" className="block text-xs font-medium text-white/80 mb-1">
              Special requests
            </label>
            <textarea
              id="specialRequests"
              name="specialRequests"
              rows={3}
              value={formData.specialRequests}
              onChange={handleChange}
              placeholder="Allergies, dietary restrictions, celebrations..."
              className="w-full placeholder-white/40 outline-none focus:ring-2 focus:ring-red-400/60 focus:border-red-300 transition text-sm text-white bg-white/10 border-white/10 border rounded-xl pt-2.5 pr-3 pb-2.5 pl-3"
            />
          </div>
          
          <div className="sm:col-span-2 flex justify-end">
            <button
              type="submit"
              className="inline-flex gap-2 ring-1 ring-red-300 hover:bg-red-300 transition text-sm font-medium text-neutral-900 bg-red-400 rounded-xl pt-2.5 pr-4 pb-2.5 pl-4 shadow items-center"
            >
              <Calendar className="w-4 h-4" strokeWidth={1.5} />
              Reserve table
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
