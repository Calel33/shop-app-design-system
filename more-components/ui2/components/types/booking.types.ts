import React from 'react';

export interface BookingFormData {
  checkIn: Date;
  checkOut: Date;
  guests: number;
  roomType: string;
}

export interface RoomCardProps {
  image: string;
  title: string;
  description: string;
  pricePerNight: number;
  badge?: {
    icon: React.ReactNode;
    label: string;
    color: 'blue' | 'indigo' | 'yellow';
  };
  onBook: () => void;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface HotelNavProps {
  brandName: string;
  tagline: string;
  navItems: NavItem[];
  phone: string;
  onReserve: () => void;
}
