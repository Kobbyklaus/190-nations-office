"use client";

import { useState, useEffect, useRef } from "react";

export function useCountUp(target, duration = 2000, startOnView = true) {
  // Render the final value on first paint so SSR/no-JS users see the real number.
  // The animation re-runs from 0 once the section enters the viewport on the client.
  const [count, setCount] = useState(target);
  const [started, setStarted] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    if (!startOnView) {
      setCount(0);
      setStarted(true);
      return;
    }
    const el = ref.current;
    if (!el) return;

    setCount(0);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [startOnView]);

  useEffect(() => {
    if (!started) return;

    const startTime = performance.now();

    function animate(now) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(target);
      }
    }

    requestAnimationFrame(animate);
  }, [started, target, duration]);

  return { count, ref };
}
