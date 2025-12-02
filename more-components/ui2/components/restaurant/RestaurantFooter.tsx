import React from 'react';
import { Utensils } from 'lucide-react';
import { RestaurantFooterProps } from './types';
import { ReservationForm } from './ReservationForm';

export const RestaurantFooter: React.FC<RestaurantFooterProps> = ({
  brandName,
  description,
  address,
  hours,
  phoneNumber,
  reservationFeatures = [
    'Tables for 2-12 guests available daily',
    'Private dining rooms for special occasions',
    'Wine pairings and sommelier recommendations',
  ],
  onReservationSubmit,
}) => {
  return (
    <footer className="w-full sm:px-6 md:px-10 max-w-7xl mr-auto ml-auto pt-12 pr-4 pb-10 pl-4">
      <div className="relative overflow-hidden bg-neutral-900 rounded-3xl">
        <div className="relative z-10 sm:p-12 md:p-16 pt-12 pr-8 pb-8 pl-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 border-white/10 border-b pb-12">
            <div className="lg:col-span-4">
              {/* Brand */}
              <div className="flex items-center gap-2 mb-4">
                <Utensils className="w-5 h-5 text-white/80" strokeWidth={1.5} />
                <h3 className="text-2xl font-semibold text-white tracking-tight font-playfair">
                  {brandName}
                </h3>
              </div>
              
              <p className="max-w-3xl text-white/70">{description}</p>

              {/* Reservation Form */}
              {onReservationSubmit && (
                <ReservationForm
                  onSubmit={onReservationSubmit}
                  phoneNumber={phoneNumber}
                  features={reservationFeatures}
                />
              )}
            </div>
          </div>

          {/* Bottom Info */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-3 border-white/10 border-t mt-10 pt-6 items-start justify-between">
            <p className="text-white/60 text-sm">
              © {new Date().getFullYear()} {brandName}. All rights reserved.
            </p>
            <div className="flex items-center gap-4 text-white/60 text-sm">
              <span>{address}</span>
              <span className="hidden sm:block text-white/20">•</span>
              <span>{hours}</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
