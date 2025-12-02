/**
 * CountrySelector Component
 * Dropdown selector for country selection
 */

import React from 'react';
import { CountrySelectorProps } from './types';

export const CountrySelector: React.FC<CountrySelectorProps> = ({
  label,
  id,
  value,
  onChange,
  onBlur,
  countries,
  error,
  touched,
  required = false,
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
      <select
        id={id}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onBlur={onBlur}
        required={required}
        className={`
          w-full px-4 py-3 rounded-lg 
          bg-black text-white 
          border transition-all
          focus:outline-none
          cursor-pointer
          ${
            hasError
              ? 'border-red-500 focus:border-red-500 focus:ring-1 focus:ring-red-500'
              : 'border-white/10 focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/30'
          }
        `}
        aria-invalid={hasError ? "true" : "false"}
        aria-describedby={hasError ? `${id}-error` : undefined}
        aria-required={required}
      >
        <option value="" disabled>
          Select your country
        </option>
        {countries.map((country) => (
          <option key={country.code} value={country.code}>
            {country.flag ? `${country.flag} ${country.name}` : country.name}
          </option>
        ))}
      </select>
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
