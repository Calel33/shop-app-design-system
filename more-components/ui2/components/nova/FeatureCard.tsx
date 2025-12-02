import React from 'react';
import { ArrowRight } from 'lucide-react';
import { FeatureCardProps } from './types';

export const FeatureCard = ({
  icon: Icon,
  iconColor,
  iconBgColor,
  title,
  description,
  metrics,
}: FeatureCardProps) => {
  return (
    <div className="hover:shadow-xl transition-shadow duration-300 bg-gradient-to-br from-gray-900 to-gray-900/60 border border-gray-800 rounded-2xl p-6 shadow-lg">
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className={`h-10 w-10 rounded-full ${iconBgColor} flex items-center justify-center ring-1 ${iconColor.replace('text-', 'ring-')}/20`}>
          <Icon className={`w-5 h-5 ${iconColor}`} />
        </div>
        <button className="text-gray-500 hover:text-gray-300 transition-colors">
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

      {/* Content */}
      <h3 className="text-lg font-semibold text-white mb-2 tracking-tight font-sans">{title}</h3>
      <p className="text-sm text-gray-400 mb-6 font-sans">{description}</p>

      {/* Metrics */}
      <div className="space-y-3 text-sm">
        {metrics.map((metric, index) => (
          <div key={index} className="flex items-center justify-between">
            <span className="text-gray-300 font-sans">{metric.label}</span>
            <span className={`${metric.color} font-medium font-sans`}>{metric.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
