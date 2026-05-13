'use client';

import Header from '@/components/Header';
import Hero from '@/components/Hero';
import OfferingsSection from '@/components/OfferingsSection';
import GallerySection from '@/components/GallerySection';
import Footer from '@/components/Footer';

/**
 * Main landing page for Papalambrou Ιωάννης Α.Ε.
 * Composes various sections into a single-page layout.
 */
export default function Home() {
  return (
    <main id="top" className="w-full antialiased">
      <Header />
      <Hero />
      <OfferingsSection />
      <GallerySection />
      <Footer />
    </main>
  );
}
