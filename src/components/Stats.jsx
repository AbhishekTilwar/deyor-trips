import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { stats } from '../data/tours';

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function Stats() {
  const ref = useRef(null);

  useGSAP(() => {
    const container = ref.current;
    if (!container) return;

    const items = container.querySelectorAll('.stat-item');
    if (!items.length) return;

    gsap.set(items, { opacity: 1, y: 0 });

    ScrollTrigger.create({
      trigger: container,
      start: 'top 95%',
      once: true,
      onEnter: () => {
        gsap.fromTo(items,
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6, stagger: 0.12, ease: 'power3.out' }
        );

        items.forEach((item) => {
          const valueEl = item.querySelector('.stat-value');
          const target = parseInt(valueEl.dataset.value, 10);
          const suffix = valueEl.dataset.suffix || '';
          const obj = { val: 0 };

          gsap.to(obj, {
            val: target,
            duration: 2,
            ease: 'power2.out',
            onUpdate: () => {
              valueEl.textContent = Math.round(obj.val).toLocaleString('en-IN') + suffix;
            },
          });
        });
      },
    });
  }, { scope: ref });

  return (
    <section className="stats" ref={ref}>
      <div className="container">
        <div className="stats-grid">
          {stats.map((stat) => (
            <div key={stat.label} className="stat-item">
              <span className="stat-value" data-value={stat.value} data-suffix={stat.suffix}>
                {stat.value.toLocaleString('en-IN')}{stat.suffix}
              </span>
              <span className="stat-label">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
