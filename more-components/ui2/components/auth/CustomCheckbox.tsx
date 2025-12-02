/**
 * CustomCheckbox Component
 * Styled checkbox with animated check icon
 */

import React from 'react';
import { Check } from 'lucide-react';
import type { CustomCheckboxProps } from './types';

export const CustomCheckbox: React.FC<CustomCheckboxProps> = ({
  id,
  name,
  label,
  checked,
  onChange,
  className = '',
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.checked);
  };

  return (
    <label
      htmlFor={id}
      className={`flex items-center gap-2 cursor-pointer select-none ${className}`}
    >
      <input
        id={id}
        name={name}
        type="checkbox"
        checked={checked}
        onChange={handleChange}
        className="sr-only peer"
      />
      <span className="h-4 w-4 rounded-md ring-1 ring-gray-600/40 bg-gray-900/50 flex items-center justify-center peer-checked:bg-gray-200 peer-checked:ring-gray-200 transition-all duration-200 peer-focus-visible:ring-2 peer-focus-visible:ring-gray-400">
        <Check
          className={`h-3 w-3 text-gray-900 transition-opacity duration-200 ${
            checked ? 'opacity-100' : 'opacity-0'
          }`}
          strokeWidth={3}
        />
      </span>
      <span className="text-xs text-gray-300">{label}</span>
    </label>
  );
};

export default CustomCheckbox;
