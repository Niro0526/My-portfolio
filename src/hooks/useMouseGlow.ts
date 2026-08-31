import { useRef, useCallback } from 'react';

/**
 * Creates a mouse-following radial glow spotlight on an element.
 */
export function useMouseGlow() {
  const ref = useRef<HTMLDivElement>(null);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    el.style.setProperty('--glow-x', `${x}px`);
    el.style.setProperty('--glow-y', `${y}px`);
  }, []);

  return { ref, handleMouseMove };
}
