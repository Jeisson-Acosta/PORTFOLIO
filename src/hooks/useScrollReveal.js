import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * Staggers the reveal of every direct match of `selector` inside the
 * returned ref as it scrolls into view. Designed for card grids
 * (projects, skills, contact) so the "editor" feels alive without
 * being noisy.
 */
export function useScrollReveal(selector, options = {}) {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return undefined;

    const targets = container.querySelectorAll(selector);
    if (!targets.length) return undefined;

    const ctx = gsap.context(() => {
      gsap.set(targets, { opacity: 0, y: 24 });

      ScrollTrigger.batch(targets, {
        start: "top 88%",
        once: true,
        onEnter: (batch) =>
          gsap.to(batch, {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: "power3.out",
            stagger: 0.08,
            ...options,
          }),
      });
    }, container);

    return () => ctx.revert();
  }, [selector, options]);

  return containerRef;
}
