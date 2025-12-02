import { Truck, Store, MapPin } from 'lucide-react';
import { DeliveryOptionsProps } from './types';

export const DeliveryOptions = ({ options, onCheckLocations }: DeliveryOptionsProps) => {
  const getIcon = (type: string) => {
    switch (type) {
      case 'standard':
      case 'express':
      case 'same-day':
        return <Truck className="h-4 w-4 text-green-600" />;
      case 'pickup':
        return <Store className="h-4 w-4 text-blue-600" />;
      default:
        return <Truck className="h-4 w-4 text-gray-600" />;
    }
  };

  return (
    <div className="border border-gray-200 rounded-2xl p-6">
      <h4 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
        <MapPin className="h-4 w-4 text-blue-600" />
        Delivery & Pickup
      </h4>
      
      <div className="space-y-3 text-sm">
        {options.map((option) => (
          <div key={option.id} className="flex items-center justify-between py-2">
            <div className="flex items-center gap-3">
              {getIcon(option.type)}
              <div>
                <p className="font-medium text-gray-900">{option.label}</p>
                {option.description && (
                  <p className="text-gray-600 text-xs">{option.description}</p>
                )}
              </div>
            </div>
            <span className="font-medium text-gray-900">{option.timeframe}</span>
          </div>
        ))}
        
        {onCheckLocations && (
          <div className="pt-3 border-t border-gray-200">
            <button
              onClick={onCheckLocations}
              className="text-blue-600 hover:underline text-sm font-medium"
            >
              Check more locations
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
