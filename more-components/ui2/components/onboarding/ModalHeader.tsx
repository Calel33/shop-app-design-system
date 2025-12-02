/**
 * ModalHeader Component
 * Reusable modal header with title and close button
 */

import React from 'react';
import { X } from 'lucide-react';
import type { ModalHeaderProps } from './types';

export const ModalHeader: React.FC<ModalHeaderProps> = ({
  title,
  onClose,
  className = '',
}) => {
  return (
    <div className={`p-6 border-b border-neutral-800 ${className}`}>
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold text-white">{title}</h2>
        <button
          onClick={onClose}
          className="text-neutral-400 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-neutral-900 rounded"
          aria-label="Close modal"
        >
          <X className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
};

export default ModalHeader;
