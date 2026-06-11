import { useEffect, useRef, useState, type ReactNode } from 'react';

interface LazyOnViewProps {
  children: ReactNode;
  minHeight?: number;
  rootMargin?: string;
  id?: string;
  forceVisible?: boolean;
}

export const LazyOnView = ({
  children,
  minHeight = 480,
  rootMargin = '100px',
  id,
  forceVisible = false,
}: LazyOnViewProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [intersected, setIntersected] = useState(false);
  const visible = forceVisible || intersected;

  useEffect(() => {
    if (visible) return;
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIntersected(true);
          observer.disconnect();
        }
      },
      { rootMargin },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [rootMargin, visible]);

  return (
    <div ref={ref} id={id} className="section-defer" style={visible ? undefined : { minHeight }}>
      {visible ? children : null}
    </div>
  );
};

export const SectionFallback = () => (
  <div className="w-full py-16 flex justify-center" aria-hidden>
    <div className="w-8 h-8 border-2 border-tatweer-orange border-t-transparent rounded-full animate-spin" />
  </div>
);
