import { useEffect, useRef } from 'react';

export function useRevealAnimation<T extends HTMLElement>(enabled = true, baseDelay = 0) {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    if (!enabled || !ref.current) return;
    const el = ref.current;
    const items = Array.from(el.querySelectorAll<HTMLElement>('[data-reveal]'));
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            items.forEach((item, idx) => {
              item.style.transition = 'opacity 700ms, transform 700ms, filter 700ms';
              item.style.transitionDelay = `${baseDelay + idx * 120}ms`;
              item.classList.remove('opacity-0', 'translate-y-3', 'blur-sm');
              item.classList.add('opacity-100', 'translate-y-0', 'blur-0');
            });
            io.disconnect();
          }
        });
      },
      { threshold: 0.2 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [enabled, baseDelay]);

  return ref;
}
