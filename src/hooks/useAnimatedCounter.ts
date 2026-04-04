import { useEffect, useState } from "react";

export function useAnimatedCounter(end: number, duration = 2000, start = 0, isActive = true) {
  const [count, setCount] = useState(start);

  useEffect(() => {
    if (!isActive) return;
    let startTime: number;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * (end - start) + start));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [end, duration, start, isActive]);

  return count;
}
