import { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import TourCard from '../components/TourCard';
import { tours, categories } from '../data/tours';
import { Search } from 'lucide-react';

export default function Tours() {
  const [searchParams] = useSearchParams();
  const initialCategory = searchParams.get('category') || 'all';
  const filterBestseller = searchParams.get('filter') === 'bestseller';

  const [activeCategory, setActiveCategory] = useState(initialCategory);
  const [searchQuery, setSearchQuery] = useState('');
  const [typeFilter, setTypeFilter] = useState('all');

  const filteredTours = useMemo(() => {
    let result = tours;

    if (filterBestseller) {
      result = result.filter((t) => t.bestSeller);
    } else if (activeCategory !== 'all') {
      result = result.filter((t) => t.category === activeCategory || t.type === activeCategory);
    }

    if (typeFilter !== 'all') {
      result = result.filter((t) => t.type === typeFilter);
    }

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      result = result.filter(
        (t) =>
          t.title.toLowerCase().includes(q) ||
          t.route.toLowerCase().includes(q) ||
          t.category.toLowerCase().includes(q)
      );
    }

    return result;
  }, [activeCategory, searchQuery, typeFilter, filterBestseller]);

  return (
    <div className="tours-page">
      <div className="page-hero">
        <div className="container">
          <h1>{filterBestseller ? 'Top Selling Trips' : 'Explore All Deyor Trips'}</h1>
          <p>Find your next adventure from 200+ curated tour packages</p>
        </div>
      </div>

      <div className="container tours-content">
        <div className="tours-filters">
          <div className="search-bar">
            <Search size={20} />
            <input
              type="text"
              placeholder="Search destinations, trips..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <div className="filter-group">
            <label>Type:</label>
            <select value={typeFilter} onChange={(e) => setTypeFilter(e.target.value)}>
              <option value="all">All</option>
              <option value="domestic">Domestic</option>
              <option value="international">International</option>
            </select>
          </div>
        </div>

        <div className="filter-tabs">
          {categories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              className={`filter-tab ${activeCategory === cat.id ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat.id)}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <p className="results-count">{filteredTours.length} trips found</p>

        <div className="tour-grid">
          {filteredTours.map((tour) => (
            <TourCard key={tour.id} tour={tour} />
          ))}
        </div>

        {filteredTours.length === 0 && (
          <div className="no-results">
            <p>No trips found matching your criteria.</p>
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => {
                setActiveCategory('all');
                setSearchQuery('');
                setTypeFilter('all');
              }}
            >
              Clear Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
