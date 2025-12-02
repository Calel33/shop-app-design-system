/**
 * GlassInput Component
 * Glass-effect input field with dark theme styling
 */

import React from 'react';
import { GlassInputProps } from './types';

export const GlassInput: React.FC<GlassInputProps> = ({
  label,
  id,
  type = 'text',
  placeholder,
  value,
  onChange,
  onBlur,
  error,
  touched,
  required = false,
  maxLength,
  className = '',
}) => {
  const hasError = touched && error;

  return (
    <div className={`flex flex-col ${className}`}>
      <label
        htmlFor={id}
        className="block text-sm font-medium text-gray-300 mb-1"
      >
        {label}
        {required && <span className="text-red-400 ml-1">*</span>}
      </label>
      <input
        type={type}
        id={id}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onBlur={onBlur}
        placeholder={placeholder}
        required={required}
        maxLength={maxLength}
        className={`
          w-full px-4 py-3 rounded-lg 
          bg-black text-white 
          border transition-all
          focus:outline-none
          ${
            hasError
              ? 'border-red-500 focus:border-red-500 focus:ring-1 focus:ring-red-500'
              : 'border-white/10 focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/30'
          }
        `}
        aria-invalid={hasError ? "true" : "false"}
        aria-describedby={hasError ? `${id}-error` : undefined}
        aria-required={required}
      />
      {hasError && (
        <span
          id={`${id}-error`}
          className="text-red-400 text-xs mt-1"
          role="alert"
        >
          {error}
        </span>
      )}
    </div>
  );
};
