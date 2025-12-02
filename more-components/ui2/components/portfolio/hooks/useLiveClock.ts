/**
 * useLiveClock Hook
 * Custom hook for live clock functionality with proper cleanup
 * Updates every second with HH:MM:SS format (24-hour)
 */

import { useState, useEffect } from 'react';

export const useLiveClock = (): string => {
  const [time, setTime] = useState<string>('');

  useEffect(() => {
    // Initialize time immediately
    const updateClock = () => {
      const d = new Date();
      const hh = String(d.getHours()).padStart(2, '0');
      const mm = String(d.getMinutes()).padStart(2, '0');
      const ss = String(d.getSeconds()).padStart(2, '0');
      setTime(`${hh}:${mm}:${ss}`);
    };

    // Set initial time
    updateClock();

    // Update every second
    const interval = setInterval(updateClock, 1000);

    // Cleanup on unmount
    return () => clearInterval(interval);
  }, []);

  return time;
};

export default useLiveClock;
