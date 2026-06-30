import React, { useEffect, useRef, useState } from 'react';
import { useInView } from '@/hooks/useInView';

interface AnimatedCounterProps {
  target:     number;
  suffix?:    string;
  prefix?:    string;
  duration?:  number; // ms
  decimals?:  number;
  className?: string;
}

function easeOutQuart(t: number) {
  return 1 - Math.pow(1 - t, 4);
}

export const AnimatedCounter: React.FC<AnimatedCounterProps> = ({
  target,
  suffix    = '',
  prefix    = '',
  duration  = 2200,
  decimals  = 0,
  className = '',
}) => {
  const [count, setCount] = useState(0);
  const { ref, inView }   = useInView({ threshold: 0.5 });
  const started           = useRef(false);
  const raf               = useRef<number | null>(null);

  useEffect(() => {
    if (!inView || started.current) return;
    started.current = true;

    const start    = performance.now();
    const animate  = (now: number) => {
      const elapsed  = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased    = easeOutQuart(progress);
      setCount(parseFloat((eased * target).toFixed(decimals)));
      if (progress < 1) raf.current = requestAnimationFrame(animate);
      else              setCount(target);
    };

    raf.current = requestAnimationFrame(animate);
    return () => { if (raf.current) cancelAnimationFrame(raf.current); };
  }, [inView, target, duration, decimals]);

  const display = decimals > 0 ? count.toFixed(decimals) : Math.floor(count).toLocaleString();

  return (
    <span
      ref={ref as React.RefObject<HTMLSpanElement>}
      className={`counter-value ${className}`}
      aria-label={`${prefix}${target}${suffix}`}
    >
      {prefix}{display}{suffix}
    </span>
  );
};
