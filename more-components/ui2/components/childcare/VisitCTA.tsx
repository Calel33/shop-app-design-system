/**
 * VisitCTA Component
 * Visit request form with image
 * @module childcare/VisitCTA
 */

import { useState, FormEvent } from 'react';
import { MapPin, Send } from 'lucide-react';
import type { VisitCTAProps, VisitFormData } from '../types/childcare.types';

export const VisitCTA = ({
  locationBadge = '21 Oakview Lane, Riverpark',
  title,
  description,
  image,
  imageAlt,
  onSubmit,
  className = '',
}: VisitCTAProps) => {
  const [formData, setFormData] = useState<VisitFormData>({
    name: '',
    email: '',
    preferredDate: '',
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (onSubmit) {
      onSubmit(formData);
    } else {
      alert('Thanks! We will confirm your visit shortly.');
    }
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      preferredDate: '',
    });
  };

  const handleChange = (field: keyof VisitFormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <section className={`pb-20 ${className}`} id="visit">
      <div className="sm:px-6 lg:px-8 max-w-7xl mr-auto ml-auto pr-4 pl-4">
        <div className="overflow-hidden bg-zinc-50 border-black/10 border rounded-2xl shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)]">
          <div className="grid md:grid-cols-2">
            <div className="sm:p-10 pt-8 pr-8 pb-8 pl-8">
              <div className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-[11px] font-medium backdrop-blur border-black/10 bg-black/5 text-black/80 font-nunito">
                <MapPin className="h-3.5 w-3.5" />
                {locationBadge}
              </div>
              <h3 className="mt-4 text-2xl sm:text-3xl tracking-tight font-nunito font-semibold">
                {title}
              </h3>
              <p className="mt-2 text-sm text-black/70 font-nunito">
                {description}
              </p>

              <form
                className="grid gap-3 sm:grid-cols-2 mt-6 gap-x-3 gap-y-3"
                onSubmit={handleSubmit}
              >
                <input
                  className="placeholder-black/40 outline-none focus:ring-2 focus:ring-white/20 text-sm bg-black/5 w-full border-black/10 border rounded-lg pt-3 pr-3.5 pb-3 pl-3.5"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={(e) => handleChange('name', e.target.value)}
                  required
                />
                <input
                  type="email"
                  className="placeholder-black/40 outline-none focus:ring-2 focus:ring-white/20 text-sm bg-black/5 w-full border-black/10 border rounded-lg pt-3 pr-3.5 pb-3 pl-3.5"
                  placeholder="Email"
                  value={formData.email}
                  onChange={(e) => handleChange('email', e.target.value)}
                  required
                />
                <input
                  className="placeholder-black/40 outline-none focus:ring-2 focus:ring-white/20 sm:col-span-2 text-sm bg-black/5 w-full border-black/10 border rounded-lg pt-3 pr-3.5 pb-3 pl-3.5"
                  placeholder="Preferred date"
                  value={formData.preferredDate}
                  onChange={(e) => handleChange('preferredDate', e.target.value)}
                />
                <button
                  type="submit"
                  className="mt-1 inline-flex items-center justify-center gap-2 rounded-lg px-4 py-3 text-sm font-semibold transition sm:col-span-2 bg-black text-neutral-100 hover:bg-black/90 font-nunito"
                >
                  <Send className="h-4 w-4" />
                  Request a Visit
                </button>
              </form>
              <p className="mt-3 text-[11px] text-black/60 font-nunito">
                We'll reply within one business day.
              </p>
            </div>
            <div className="relative">
              <img
                className="w-full h-full object-cover rounded-2xl"
                src={image}
                alt={imageAlt}
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-l to-transparent md:bg-gradient-to-t md:from-neutral-950/0 from-neutral-50/40"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
