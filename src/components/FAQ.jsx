import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { faqs } from '../data/faqs';
import { useSectionReveal } from '../hooks/useScrollReveal';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);
  const sectionRef = useSectionReveal();

  return (
    <section className="faq-section" ref={sectionRef}>
      <div className="container">
        <div className="section-header center">
          <span className="section-label">FAQ</span>
          <h2 className="section-title">Have Any Doubts?</h2>
        </div>
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`faq-item ${openIndex === index ? 'open' : ''}`}
            >
              <button
                className="faq-question"
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
              >
                <span>{faq.question}</span>
                <ChevronDown size={20} className="faq-chevron" />
              </button>
              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
