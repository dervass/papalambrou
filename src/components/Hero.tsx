'use client';

import ContactInfo from './ContactInfo';
import CompanyDescription from './CompanyDescription';

/**
 * Hero Section component.
 * Displays the main value proposition, contact details, and company history.
 * Wrapped in a characteristic wood-rings background.
 */
export default function HeroSection() {
  return (
    <div className="wood-rings-bg relative w-full py-10 md:py-20">
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center md:items-start gap-8">
        {/* Left Column: Branding and Contact */}
        <div className="w-full md:w-1/2 flex flex-col items-center text-center">
          <div className="mb-6">
            <h2 className="text-3xl md:text-4xl lg:text-[2.6rem] font-bold mb-2 leading-tight text-white drop-shadow-md mx-auto">
              Ποιότητα και Αξιοπιστία<br />από το 1995
            </h2>
            <p className="text-[10px] md:text-sm font-bold tracking-widest uppercase text-white/90 leading-relaxed drop-shadow-md">
              ΚΑΤΕΔΑΦΙΣΗ - ΣΥΛΛΟΘΡΑΥΣΗ - ΣΙΔΕΡΑ - ΚΑΥΣΙΜΑ
            </p>
          </div>

          <ContactInfo />
        </div>

        {/* Right Column: Company Info */}
        <div className="w-full md:w-1/2 flex flex-col mt-8 md:mt-0">
          <CompanyDescription />
        </div>
      </div>
    </div>
  );
}
