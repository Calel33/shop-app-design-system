/**
 * Bento grid layout with all medical service cards
 * @module BentoGrid
 */

import React from 'react';
import {
  Stethoscope,
  Brain,
  Heart,
  Activity,
  Eye,
  UserCheck,
  Star,
  Zap,
  Clock,
  Microscope,
} from 'lucide-react';
import { BentoCard } from './BentoCard';
import type { BentoGridProps } from '../types/medical.types';

export const BentoGrid: React.FC<BentoGridProps> = ({ className = '' }) => {
  return (
    <section
      className={`grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 h-[800px] lg:h-[600px] ${className}`}
    >
      {/* Main Hero Card */}
      <BentoCard
        className="col-span-2 md:col-span-2 lg:col-span-3 row-span-1"
        animationType="scale-in"
        animationDelay={400}
      >
        <div className="relative rounded-3xl overflow-hidden shadow-2xl group h-full hover:-translate-y-0.5 transition-transform duration-300">
          <img
            src="https://images.unsplash.com/photo-1516670428252-df97bba108d1?w=1080&q=80"
            alt="Medical professionals"
            className="w-full h-full transition-transform duration-700 group-hover:scale-105 object-cover"
          />

          <div className="absolute bottom-6 left-6 right-6 lg:right-auto lg:max-w-xs">
            <div className="backdrop-blur-[20px] bg-white/95 border border-white/20 p-4 lg:p-5 rounded-2xl shadow-xl">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center shrink-0">
                  <Stethoscope className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold leading-tight">
                    Expert Medical Care
                  </h3>
                  <p className="text-sm text-gray-600 mt-2 leading-relaxed">
                    Board-certified physicians with 20+ years of experience in
                    advanced medical treatments.
                  </p>
                  <div className="flex items-center gap-4 mt-3">
                    <div className="text-center">
                      <div className="font-semibold text-blue-600 text-sm">
                        98%
                      </div>
                      <div className="text-xs text-gray-500">Success Rate</div>
                    </div>
                    <div className="text-center">
                      <div className="font-semibold text-blue-600 text-sm">
                        24/7
                      </div>
                      <div className="text-xs text-gray-500">Emergency</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </BentoCard>

      {/* Specialties Card */}
      <BentoCard
        className="col-span-2 md:col-span-2 lg:col-span-2 row-span-1"
        animationType="slide-up"
        animationDelay={600}
      >
        <div className="h-full rounded-3xl bg-gradient-to-br from-blue-800 to-blue-900 text-white p-6 lg:p-8 relative overflow-hidden shadow-2xl group hover:-translate-y-0.5 transition-transform duration-300">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-4 right-4 w-24 h-24 rounded-full bg-white/10"></div>
            <div className="absolute bottom-4 left-4 w-16 h-16 rounded-full bg-white/5"></div>
          </div>

          <div className="relative z-10 h-full flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur">
                  <Brain className="w-5 h-5 text-blue-200" />
                </div>
                <div className="px-3 py-1 bg-white/20 rounded-full text-xs font-medium backdrop-blur">
                  Medical Specialties
                </div>
              </div>

              <h3 className="text-xl lg:text-2xl font-semibold leading-tight mb-4">
                Comprehensive Healthcare Solutions
              </h3>

              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-3">
                  <Heart className="w-4 h-4 text-blue-300 shrink-0" />
                  <span>Cardiology & Heart Care</span>
                </li>
                <li className="flex items-center gap-3">
                  <Brain className="w-4 h-4 text-blue-300 shrink-0" />
                  <span>Neurology & Brain Health</span>
                </li>
                <li className="flex items-center gap-3">
                  <Activity className="w-4 h-4 text-blue-300 shrink-0" />
                  <span>Orthopedic Surgery</span>
                </li>
                <li className="flex items-center gap-3">
                  <Eye className="w-4 h-4 text-blue-300 shrink-0" />
                  <span>Ophthalmology Services</span>
                </li>
              </ul>
            </div>

            <div className="flex items-center justify-between mt-6">
              <div className="text-xs text-blue-200">Insurance Accepted</div>
              <button className="bg-white/20 hover:bg-white/30 backdrop-blur px-3 py-2 rounded-full text-sm font-medium transition-colors">
                View All
              </button>
            </div>
          </div>
        </div>
      </BentoCard>

      {/* Patient Reviews */}
      <BentoCard
        className="col-span-1 md:col-span-1 lg:col-span-1 row-span-1"
        animationType="slide-left"
        animationDelay={800}
      >
        <div className="h-full rounded-3xl bg-white p-6 flex flex-col justify-between shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100 group hover:-translate-y-0.5">
          <div>
            <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
              <UserCheck className="w-5 h-5 text-green-600" />
            </div>
            <div className="flex space-x-1 mb-3">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-4 h-4 fill-green-400 text-green-400"
                />
              ))}
            </div>
            <p className="text-sm text-gray-600 leading-relaxed mb-4">
              "Outstanding care and professionalism. The team saved my life."
            </p>
          </div>
          <div className="flex items-center gap-3">
            <img
              src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=1080&q=80"
              alt="Michael R."
              className="w-8 h-8 object-cover rounded-full"
            />
            <div>
              <div className="font-medium text-sm">Michael R.</div>
              <div className="text-xs text-gray-500">Heart Surgery Patient</div>
            </div>
          </div>
        </div>
      </BentoCard>

      {/* Emergency Services */}
      <BentoCard
        className="col-span-1 md:col-span-1 lg:col-span-2 row-span-1"
        animationType="slide-up"
        animationDelay={1000}
      >
        <div className="h-full rounded-3xl bg-gradient-to-br from-red-100 to-red-50 p-6 flex flex-col justify-between shadow-lg hover:shadow-xl transition-shadow duration-300 group hover:-translate-y-0.5">
          <div>
            <div className="w-10 h-10 bg-red-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
              <Zap className="w-5 h-5 text-white" />
            </div>
            <h3 className="text-lg lg:text-xl font-semibold leading-tight mb-3">
              24/7 Emergency Care
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed mb-4">
              Round-the-clock emergency services with rapid response times.
            </p>
            <div className="flex items-center gap-2 text-sm font-medium text-red-700">
              <Clock className="w-4 h-4" />
              Average response: 8 minutes
            </div>
          </div>
          <div className="flex justify-end mt-4">
            <div className="w-16 h-16 opacity-60 group-hover:opacity-100 transition-opacity">
              <img
                src="https://images.unsplash.com/photo-1643780668909-580822430155?w=1080&q=80"
                alt="Emergency"
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
          </div>
        </div>
      </BentoCard>

      {/* Technology Card */}
      <BentoCard
        className="col-span-1 md:col-span-1 lg:col-span-2 row-span-1"
        animationType="scale-in"
        animationDelay={1200}
      >
        <div className="h-full rounded-3xl bg-gradient-to-br from-indigo-50 to-purple-50 p-6 flex flex-col justify-between shadow-lg hover:shadow-xl transition-shadow duration-300 group hover:-translate-y-0.5">
          <div>
            <div className="w-10 h-10 bg-indigo-100 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
              <Microscope className="w-5 h-5 text-indigo-600" />
            </div>
            <h3 className="text-lg lg:text-xl font-semibold leading-tight mb-3">
              Advanced Medical Technology
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed mb-4">
              State-of-the-art equipment and innovative treatment methods.
            </p>
            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-600">Diagnostic accuracy</span>
                <span className="font-semibold text-indigo-600">99.2%</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-600">Treatment success</span>
                <span className="font-semibold text-indigo-600">96.8%</span>
              </div>
            </div>
          </div>
        </div>
      </BentoCard>

      {/* Facility Image */}
      <BentoCard
        className="col-span-2 md:col-span-2 lg:col-span-2 row-span-1"
        animationType="slide-left"
        animationDelay={600}
      >
        <div className="relative rounded-3xl overflow-hidden shadow-xl group h-full hover:-translate-y-0.5 transition-transform duration-300">
          <img
            src="https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=1080&q=80"
            alt="Medical facility"
            className="w-full h-full transition-transform duration-700 group-hover:scale-105 object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

          <div className="absolute bottom-6 left-6 right-6 text-white">
            <h3 className="text-xl font-semibold mb-2">
              Modern Medical Facility
            </h3>
            <p className="text-sm text-white/90 mb-4">
              World-class infrastructure designed for patient comfort and care
            </p>
            <button className="bg-white/20 hover:bg-white/30 backdrop-blur px-4 py-2 rounded-lg text-sm font-medium transition-colors">
              Virtual Tour
            </button>
          </div>
        </div>
      </BentoCard>
    </section>
  );
};

BentoGrid.displayName = 'BentoGrid';
