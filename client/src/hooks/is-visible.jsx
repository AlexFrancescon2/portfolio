import { useEffect, useRef, useState } from "react";

const useIsVisible = (options) => {
  const [isVisible, setIsVisible] = useState(false);
  const visibleRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsVisible(entry.isIntersecting);
    }, options);

    if (visibleRef.current) {
      observer.observe(visibleRef.current);
    }

    return () => {
      if (visibleRef.current) {
        observer.unobserve(visibleRef.current);
      }
    };
  }, [options]);

  return [visibleRef, isVisible];
};

export default useIsVisible;
