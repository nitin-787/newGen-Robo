"use client";
import React, { useEffect, useRef, useState } from "react";

interface ScrollSliderProps {
  children: React.ReactNode[];
}

export default function ScrollSlider({ children }: ScrollSliderProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isOverflowing, setIsOverflowing] = useState(false);

  // Check if content overflows horizontally
  const checkOverflow = () => {
    if (!scrollRef.current) return;
    const el = scrollRef.current;
    setIsOverflowing(el.scrollWidth > el.clientWidth);
  };

  // Auto scroll to next item every 3 seconds
  useEffect(() => {
    if (!isOverflowing) return; // don't auto scroll if no overflow

    const interval = setInterval(() => {
      if (!scrollRef.current) return;
      const el = scrollRef.current;
      const maxIndex = children.length - 1;
      const nextIndex = activeIndex === maxIndex ? 0 : activeIndex + 1;

      const child = el.children[nextIndex] as HTMLElement;
      if (child) {
        el.scrollTo({ left: child.offsetLeft, behavior: "smooth" });
        setActiveIndex(nextIndex);
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [activeIndex, children.length, isOverflowing]);

  // Update active index on manual scroll
  useEffect(() => {
    if (!scrollRef.current) return;

    const el = scrollRef.current;

    const onScroll = () => {
      const scrollLeft = el.scrollLeft;
      let newIndex = 0;
      for (let i = 0; i < el.children.length; i++) {
        const child = el.children[i] as HTMLElement;
        if (child.offsetLeft - scrollLeft <= 1) {
          newIndex = i;
        }
      }
      setActiveIndex(newIndex);
    };

    el.addEventListener("scroll", onScroll, { passive: true });

    return () => el.removeEventListener("scroll", onScroll);
  }, []);

  // Check overflow on mount and on resize
  useEffect(() => {
    checkOverflow();
    window.addEventListener("resize", checkOverflow);
    return () => window.removeEventListener("resize", checkOverflow);
  }, []);

  return (
    <div>
      <div
        ref={scrollRef}
        className="flex overflow-x-auto gap-6 snap-x snap-mandatory hide-scrollbar"
      >
        {children.map((child, i) => (
          <div key={i} className="snap-start flex-shrink-0">
            {child}
          </div>
        ))}
      </div>

      {/* Dots: show only if overflowing */}
      {isOverflowing && (
        <div className="flex justify-center mt-4 gap-3">
          {children.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                if (!scrollRef.current) return;
                const el = scrollRef.current;
                const child = el.children[i] as HTMLElement;
                if (child) {
                  el.scrollTo({ left: child.offsetLeft, behavior: "smooth" });
                  setActiveIndex(i);
                }
              }}
              className={`w-3 h-3 rounded-full transition-colors ${
                i === activeIndex ? "bg-sky-600" : "bg-sky-300"
              }`}
              aria-label={`Scroll to item ${i + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
