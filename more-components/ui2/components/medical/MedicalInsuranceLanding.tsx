/**
 * Medical Insurance Network Landing Page Component
 * Landing page for medical insurance network with provider directory,
 * coverage plans, and enrollment features
 * @module MedicalInsuranceLanding
 */

'use client';

import React, { useState } from 'react';
import { Navigation } from './Navigation';
import { BentoCard } from './BentoCard';
import { useScrollAnimation } from './hooks/useScrollAnimation';

interface InsurancePlan {
  name: string;
  price: string;
  features: string[];
  popular?: boolean;
}

interface NetworkProvider {
  name: string;
  specialty: string;
  rating: number;
  acceptsNewPatients: boolean;
}

/**
 * Medical Insurance Network Landing Page
 * Features:
 * - Insurance plan comparison
 * - Provider network search
 * - Coverage calculator
 * - Enrollment CTA
 * - Network statistics
 */
export const MedicalInsuranceLanding: React.FC = () => {
  const [selectedPlan, setSelectedPlan] = useState<string>('premium');
  const [searchSpecialty, setSearchSpecialty] = useState<string>('');
  
  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation();
  const { ref: plansRef, isVisible: plansVisible } = useScrollAnimation();
  const { ref: providersRef, isVisible: providersVisible } = useScrollAnimation();

  const insurancePlans: InsurancePlan[] = [
    {
      name: 'Basic',
      price: '$199/month',
      features: [
        'Primary care visits',
        'Emergency coverage',
        'Preventive care',
        'Generic prescription coverage'
      ]
    },
    {
      name: 'Premium',
      price: '$399/month',
      features: [
        'All Basic features',
        'Specialist visits',
        'Mental health coverage',
        'Brand name prescriptions',
        'Dental & vision included'
      ],
      popular: true
    },
    {
      name: 'Comprehensive',
      price: '$599/month',
      features: [
        'All Premium features',
        'Zero deductible',
        'International coverage',
        'Alternative medicine',
        'Premium dental & vision'
      ]
    }
  ];

  const networkProviders: NetworkProvider[] = [
    { name: 'Dr. Sarah Johnson', specialty: 'Family Medicine', rating: 4.8, acceptsNewPatients: true },
    { name: 'Dr. Michael Chen', specialty: 'Cardiology', rating: 4.9, acceptsNewPatients: false },
    { name: 'Dr. Emily Rodriguez', specialty: 'Pediatrics', rating: 4.7, acceptsNewPatients: true },
    { name: 'Dr. James Wilson', specialty: 'Orthopedics', rating: 4.6, acceptsNewPatients: true }
  ];

  return (
    <div className="bg-gradient-to-br from-blue-50 via-white to-emerald-50/30 text-gray-900 antialiased min-h-screen">
      {/* Navigation */}
      <Navigation />

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-20">
        {/* Hero Section */}
        <section 
          ref={heroRef}
          className={`text-center py-16 lg:py-24 transition-all duration-700 ${
            heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
            Comprehensive Health Coverage
            <span className="block text-4xl lg:text-5xl font-semibold text-blue-600 mt-2">
              for You and Your Family
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Join our network of 10,000+ healthcare providers with flexible plans that fit your needs and budget.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold">
              Get Instant Quote
            </button>
            <button className="px-8 py-3 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors font-semibold">
              Find Providers
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { label: 'Network Providers', value: '10,000+' },
              { label: 'States Covered', value: '50' },
              { label: 'Member Satisfaction', value: '96%' },
              { label: 'Claims Processed', value: '24h Avg' }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-blue-600">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Insurance Plans */}
        <section 
          ref={plansRef}
          className={`py-16 transition-all duration-700 ${
            plansVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12">Choose Your Coverage</h2>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {insurancePlans.map((plan, index) => (
              <BentoCard 
                key={plan.name}
                animationDelay={index * 100}
                className={`relative p-6 bg-white rounded-xl border-2 ${
                  plan.popular 
                    ? 'border-blue-500 shadow-xl scale-105' 
                    : 'border-gray-200 shadow-md'
                } hover:shadow-lg transition-all duration-300`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <div className="text-3xl font-bold text-blue-600">{plan.price}</div>
                </div>
                
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button 
                  onClick={() => setSelectedPlan(plan.name.toLowerCase())}
                  className={`w-full py-3 rounded-lg font-semibold transition-colors ${
                    selectedPlan === plan.name.toLowerCase()
                      ? 'bg-green-600 text-white'
                      : plan.popular
                      ? 'bg-blue-600 text-white hover:bg-blue-700'
                      : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                  }`}
                >
                  {selectedPlan === plan.name.toLowerCase() ? 'Selected' : 'Select Plan'}
                </button>
              </BentoCard>
            ))}
          </div>
        </section>

        {/* Provider Network */}
        <section 
          ref={providersRef}
          className={`py-16 transition-all duration-700 ${
            providersVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12">Our Provider Network</h2>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-12">
            <div className="relative">
              <input
                type="text"
                placeholder="Search by specialty, name, or location..."
                value={searchSpecialty}
                onChange={(e) => setSearchSpecialty(e.target.value)}
                className="w-full px-6 py-4 pr-12 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
              />
              <button className="absolute right-2 top-1/2 transform -translate-y-1/2 p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </div>
          </div>

          {/* Provider Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {networkProviders.map((provider, index) => (
              <BentoCard 
                key={index}
                animationDelay={index * 100}
                className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-blue-600 font-bold text-lg">
                      {provider.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div className="ml-3">
                    <h4 className="font-semibold text-gray-900">{provider.name}</h4>
                    <p className="text-sm text-gray-600">{provider.specialty}</p>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <span className="text-yellow-500">★</span>
                    <span className="ml-1 text-sm font-medium">{provider.rating}</span>
                  </div>
                  {provider.acceptsNewPatients && (
                    <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">
                      Accepting Patients
                    </span>
                  )}
                </div>
              </BentoCard>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-emerald-600 rounded-2xl p-12 text-white">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Ready to Get Covered?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Join thousands of satisfied members who trust us with their healthcare needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors font-semibold">
                Start Enrollment
              </button>
              <button className="px-8 py-3 border-2 border-white text-white rounded-lg hover:bg-white/10 transition-colors font-semibold">
                Schedule a Consultation
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

MedicalInsuranceLanding.displayName = 'MedicalInsuranceLanding';

export default MedicalInsuranceLanding;
