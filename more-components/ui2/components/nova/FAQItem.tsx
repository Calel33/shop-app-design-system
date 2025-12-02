import React from 'react';
import { FAQItemProps } from './types';

export const FAQItem = ({ question, answer }: FAQItemProps) => {
  return (
    <div className="border border-white/10 rounded-2xl p-6 hover:bg-white/[0.02] transition">
      <h3 className="text-lg font-semibold text-white mb-3 font-sans">{question}</h3>
      <p className="text-gray-400 text-sm leading-relaxed font-sans">{answer}</p>
    </div>
  );
};
