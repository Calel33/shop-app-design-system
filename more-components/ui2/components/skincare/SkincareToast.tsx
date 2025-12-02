// SkincareToast.tsx - Toast notification component
import { useEffect } from 'react';
import { CheckCircle, XCircle, Info, X } from 'lucide-react';
import type { ToastProps } from '../types/skincare.types';

export function SkincareToast({
  message,
  type = 'success',
  duration = 3000,
  onClose,
}: ToastProps) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose?.();
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onClose]);

  const icons = {
    success: <CheckCircle className="w-5 h-5 text-green-500" />,
    error: <XCircle className="w-5 h-5 text-red-500" />,
    info: <Info className="w-5 h-5 text-blue-500" />,
  };

  return (
    <div className="fixed top-20 right-6 z-[100] max-w-sm animate-slide-in">
      <div className="flex items-center gap-3 p-4 rounded-lg bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 shadow-xl">
        {icons[type]}
        <p className="flex-1 text-sm font-medium text-neutral-900 dark:text-white">
          {message}
        </p>
        <button
          onClick={onClose}
          className="p-1 rounded hover:bg-neutral-100 dark:hover:bg-neutral-700 transition-colors"
          aria-label="Close notification"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
