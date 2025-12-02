import { Minus, Plus } from 'lucide-react';
import { QuantitySelectorProps } from './types';

export const QuantitySelector = ({
  value,
  min = 1,
  max = 99,
  onChange,
  disabled = false,
}: QuantitySelectorProps) => {
  const handleDecrement = () => {
    if (value > min) {
      onChange(value - 1);
    }
  };

  const handleIncrement = () => {
    if (value < max) {
      onChange(value + 1);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseInt(e.target.value, 10);
    if (!isNaN(newValue) && newValue >= min && newValue <= max) {
      onChange(newValue);
    }
  };

  return (
    <div className="flex items-center border border-gray-300 rounded-xl">
      <button
        onClick={handleDecrement}
        disabled={disabled || value <= min}
        className="p-3 hover:bg-gray-100 transition-colors rounded-l-xl disabled:opacity-50 disabled:cursor-not-allowed"
        aria-label="Decrease quantity"
      >
        <Minus className="h-4 w-4" />
      </button>
      <input
        type="number"
        value={value}
        onChange={handleInputChange}
        disabled={disabled}
        min={min}
        max={max}
        className="w-16 text-center border-x border-gray-300 py-3 outline-none disabled:bg-gray-50"
        aria-label="Quantity"
      />
      <button
        onClick={handleIncrement}
        disabled={disabled || value >= max}
        className="p-3 hover:bg-gray-100 transition-colors rounded-r-xl disabled:opacity-50 disabled:cursor-not-allowed"
        aria-label="Increase quantity"
      >
        <Plus className="h-4 w-4" />
      </button>
    </div>
  );
};
