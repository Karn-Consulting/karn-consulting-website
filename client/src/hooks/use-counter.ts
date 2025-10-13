import { useState, useEffect, useRef } from "react";

interface UseCounterProps {
  end: number;
  duration?: number;
  startOnView?: boolean;
  prefix?: string;
  suffix?: string;
  decimals?: number;
}

export function useCounter({ 
  end, 
  duration = 2000, 
  startOnView = true,
  prefix = "",
  suffix = "",
  decimals = 0
}: UseCounterProps) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(!startOnView);
  const elementRef = useRef<HTMLElement>(null);
  const hasStarted = useRef(false);

  // Intersection Observer to detect when element comes into view
  useEffect(() => {
    if (!startOnView || !elementRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted.current) {
          setIsVisible(true);
          hasStarted.current = true;
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(elementRef.current);

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [startOnView]);

  // Counter animation
  useEffect(() => {
    if (!isVisible) return;

    const startTime = Date.now();
    const endTime = startTime + duration;

    const updateCount = () => {
      const now = Date.now();
      const progress = Math.min((now - startTime) / duration, 1);
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentCount = Math.floor(end * easeOutQuart * Math.pow(10, decimals)) / Math.pow(10, decimals);
      
      setCount(currentCount);

      if (progress < 1) {
        requestAnimationFrame(updateCount);
      } else {
        setCount(end);
      }
    };

    requestAnimationFrame(updateCount);
  }, [end, duration, isVisible, decimals]);

  const formattedValue = `${prefix}${count.toFixed(decimals)}${suffix}`;

  return {
    value: formattedValue,
    ref: elementRef,
    rawValue: count
  };
}