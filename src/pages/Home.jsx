import { useState } from 'react';
import Hero from '../components/Hero';
import HeroReviewTicker from '../components/HeroReviewTicker';
import Stats from '../components/Stats';
import CategoryScroller from '../components/CategoryScroller';
import FeaturedBanner from '../components/FeaturedBanner';
import PromoCards from '../components/PromoCards';
import TourCarousel from '../components/TourCarousel';
import CollectionCarousel from '../components/CollectionCarousel';
import Reviews from '../components/Reviews';
import WhyChooseUs from '../components/WhyChooseUs';
import BlogSection from '../components/BlogSection';
import FAQ from '../components/FAQ';
import Newsletter from '../components/Newsletter';
import { tours, collections, promoCards } from '../data/tours';
import { blogs } from '../data/blogs';

const newLaunchTabs = [
  { id: 'all', label: 'All' },
  { id: 'international', label: 'International' },
  { id: 'bike', label: 'Bike Trips' },
  { id: 'spiti', label: 'Spiti' },
  { id: 'community', label: 'Community' },
];

export default function Home() {
  const [newLaunchTab, setNewLaunchTab] = useState('all');

  const featuredTour = tours.find((t) => t.id === 'spain-ibiza-tomatina') || tours[0];

  const newLaunches = tours.filter((t) => t.featured).filter(
    (t) => newLaunchTab === 'all' || t.category === newLaunchTab || t.type === newLaunchTab
  );

  const bikeTrips = tours.filter((t) => t.category === 'bike');
  const treks = tours.filter((t) => t.category === 'treks');
  const international = tours.filter((t) => t.type === 'international');

  return (
    <>
      <Hero />
      <HeroReviewTicker />
      <Stats />
      <CategoryScroller />
      <FeaturedBanner tour={featuredTour} />
      <PromoCards promos={promoCards} />
      <TourCarousel
        label="New Launches"
        title="Featured Tours by Deyor"
        tours={newLaunches.length ? newLaunches : tours.filter((t) => t.featured)}
        tabs={newLaunchTabs}
        activeTab={newLaunchTab}
        onTabChange={setNewLaunchTab}
      />
      <CollectionCarousel collections={collections} />
      <TourCarousel
        label="Bike Trips"
        title="India's Best Bike Trips"
        tours={bikeTrips}
        viewAllLink="/tours?category=bike"
      />
      <TourCarousel
        label="International"
        title="Deyor World"
        tours={international}
        viewAllLink="/tours?category=international"
      />
      <TourCarousel
        label="Treks"
        title="Himalayan Treks"
        tours={treks}
        viewAllLink="/tours?category=treks"
      />
      <Reviews />
      <WhyChooseUs />
      <BlogSection blogs={blogs} />
      <FAQ />
      <Newsletter />
    </>
  );
}
