import { Link } from 'react-router-dom';
import { Clock } from 'lucide-react';
import HorizontalScroll from './HorizontalScroll';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function BlogSection({ blogs }) {
  const sectionRef = useScrollReveal({ childSelector: '.section-animate' });

  return (
    <section className="blog-section" ref={sectionRef}>
      <div className="container">
        <div className="section-header section-animate">
          <span className="section-label">Blogs</span>
          <h2 className="section-title">Our Travel Stories</h2>
        </div>
      </div>
      <div className="container-fluid">
        <HorizontalScroll>
          {blogs.map((blog) => (
            <article key={blog.id} className="blog-card section-animate">
              <img src={blog.image} alt={blog.title} loading="lazy" />
              <div className="blog-body">
                <div className="blog-meta">
                  <span>Published {blog.date}</span>
                  <span><Clock size={12} /> {blog.readTime}</span>
                </div>
                <h3>{blog.title}</h3>
                <p>{blog.excerpt}</p>
                <Link to="/about" className="blog-link">Read More</Link>
              </div>
            </article>
          ))}
        </HorizontalScroll>
      </div>
    </section>
  );
}
