import { useEffect, useRef, useState } from "react";

export const useOnScreen = () => {
  const [elementRef, setElementRef] = useState<Element | null>(null);
  const observer = useRef<IntersectionObserver>();
  const [onScreen, setOnScreen] = useState(false);

  useEffect(() => {
    if (!observer.current)
      observer.current = new IntersectionObserver(([entry]) => {
        setOnScreen(entry.isIntersecting);
      });

    const currentElement = elementRef;
    const currentObserver = observer.current;

    if (currentElement) {
      currentObserver.observe(currentElement);
    }

    return () => {
      if (currentElement) currentObserver.unobserve(currentElement);
    };
  }, [elementRef]);

  return { setElementRef, onScreen };
};
