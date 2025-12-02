/**
 * FormField Component
 * Reusable input field with icon support and error states
 */

import React from 'react';
import type { FormFieldProps } from './types';

export const FormField: React.FC<FormFieldProps> = ({
  label,
  name,
  type,
  value,
  onChange,
  onBlur,
  placeholder,
  icon,
  rightIcon,
  onRightIconClick,
  error,
  required = false,
  autoComplete,
  className = '',
}) => {
  const hasError = Boolean(error);

  return (
    <div className={className}>
      <label htmlFor={name} className="block text-xs font-medium text-gray-300 mb-1.5">
        {label}
        {required && <span className="text-red-400 ml-1">*</span>}
      </label>
      <div className="relative">
        {/* Left Icon */}
        {icon && (
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
            {icon}
          </div>
        )}

        {/* Input */}
        <input
          id={name}
          name={name}
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onBlur={onBlur}
          required={required}
          autoComplete={autoComplete}
          placeholder={placeholder}
          className={`
            w-full rounded-lg bg-gray-900/50 text-gray-100 placeholder-gray-500
            ring-1 transition text-sm
            ${icon ? 'px-10' : 'px-4'}
            ${rightIcon ? 'pr-11' : ''}
            py-2.5
            ${hasError ? 'ring-red-500/50 focus:ring-red-500' : 'ring-gray-600/30 focus:ring-gray-400/50'}
            focus:ring-2 focus:outline-none
          `}
          aria-invalid={hasError}
          aria-describedby={hasError ? `${name}-error` : undefined}
        />

        {/* Right Icon */}
        {rightIcon && (
          <button
            type="button"
            onClick={onRightIconClick}
            className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-200 transition-colors focus:outline-none focus:text-gray-200"
            aria-label={type === 'password' ? 'Toggle password visibility' : undefined}
            tabIndex={onRightIconClick ? 0 : -1}
          >
            {rightIcon}
          </button>
        )}
      </div>

      {/* Error Message */}
      {hasError && (
        <p id={`${name}-error`} className="mt-1.5 text-xs text-red-400" role="alert">
          {error}
        </p>
      )}
    </div>
  );
};

export default FormField;
