import { useRef, useCallback } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger, useGSAP);

export function useScrollReveal(options = {}) {
  const ref = useRef(null);
  const {
    y = 40,
    duration = 0.7,
    stagger = 0.08,
    childSelector = '.section-animate',
    start = 'top 92%',
  } = options;

  useGSAP(() => {
    const container = ref.current;
    if (!container) return;

    const children = container.querySelectorAll(childSelector);
    if (!children.length) return;

    gsap.set(children, { opacity: 1, y: 0 });

    ScrollTrigger.batch(children, {
      onEnter: (batch) => {
        gsap.fromTo(
          batch,
          { y, opacity: 0 },
          { y: 0, opacity: 1, duration, stagger, ease: 'power3.out', overwrite: true }
        );
      },
      start,
      once: true,
    });
  }, { scope: ref });

  return ref;
}

export function useSectionReveal(options = {}) {
  const ref = useRef(null);
  const { y = 30, duration = 0.6, start = 'top 92%' } = options;

  useGSAP(() => {
    const el = ref.current;
    if (!el) return;

    gsap.set(el, { opacity: 1, y: 0 });

    ScrollTrigger.create({
      trigger: el,
      start,
      once: true,
      onEnter: () => {
        gsap.fromTo(el, { y, opacity: 0 }, { y: 0, opacity: 1, duration, ease: 'power2.out' });
      },
    });
  }, { scope: ref });

  return ref;
}

export function useHorizontalScroll() {
  const trackRef = useRef(null);

  const scroll = useCallback((direction) => {
    const track = trackRef.current;
    if (!track) return;
    const amount = track.clientWidth * 0.75;
    track.scrollBy({ left: direction * amount, behavior: 'smooth' });
  }, []);

  return { trackRef, scrollLeft: () => scroll(-1), scrollRight: () => scroll(1) };
}
