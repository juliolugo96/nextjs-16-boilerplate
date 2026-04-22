'use client';

import React from 'react';

export const useIntersection = <TElement extends Element>(
  options?: IntersectionObserverInit,
) => {
  const ref = React.useRef<TElement | null>(null);
  const [isVisible, setIsVisible] = React.useState(false);

  React.useEffect(() => {
    if (!ref.current || isVisible) {
      return undefined;
    }

    const observer = new IntersectionObserver(([entry]) => {
      if (entry?.isIntersecting) {
        setIsVisible(true);
      }
    }, options);

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, [isVisible, options]);

  return {
    ref,
    isVisible,
  };
};
