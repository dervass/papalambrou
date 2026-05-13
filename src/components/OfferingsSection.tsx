'use client';

import MapSection from './MapSection';

/**
 * Displays the product catalog and service offerings.
 * Organizes content into two main columns with distinct styles.
 */
export default function OfferingsSection() {
  const products = [
    'Καυσόξυλα',
    'Ξυλοκάρβουνα',
    'Ξύλα για σόμπα',
    'Ξύλα για ξυλολέβητα',
    'Στερεά καύσιμα',
    'Ξύλα για τζάκι',
  ];

  const services = [
    'Εθνικές Μεταφορές: Μεταφορές σε όλη την Ελλάδα με ιδιόκτητα φορτηγά',
    'Μεταφορές Ξηράς',
    'Εξειδικευμένο Προσωπικό',
  ];

  return (
    <div className="bg-[#f9faf9] w-full py-10 md:py-20 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Products Card */}
        <div className="bg-white rounded-3xl p-6 md:p-10 shadow-sm border border-gray-100 flex flex-col items-center md:items-start justify-start">
          <SectionHeader title="Προϊόντα" />
          <ul className="text-gray-700 leading-relaxed font-bold text-base md:text-lg space-y-4 md:space-y-6">
            {products.map((item, index) => (
              <li key={index} className="flex items-center gap-3">
                <div className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-[#f3dfc1] flex items-center justify-center shrink-0">
                  <ProductIcon />
                </div>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Services Card */}
        <div className="bg-white rounded-3xl p-6 md:p-10 shadow-sm border border-gray-100 flex flex-col items-center md:items-start justify-start">
          <SectionHeader title="Υπηρεσίες" />
          <ul className="text-gray-700 leading-relaxed font-bold text-base md:text-lg space-y-4 md:space-y-6">
            {services.map((item, index) => (
              <li key={index} className="flex items-start gap-3">
                <div className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-[#4d5f52] flex items-center justify-center shrink-0 mt-1">
                  <ServiceCheckIcon />
                </div>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Map Column */}
        <div className="flex flex-col items-center">
          <MapSection />
        </div>
      </div>
    </div>
  );
}

function SectionHeader({ title }: { title: string }) {
  return (
    <div className="mb-6 md:mb-8 flex flex-col items-center md:items-start">
      <h2 className="text-2xl md:text-3xl font-black text-gray-900 uppercase tracking-tight text-center md:text-left">{title}</h2>
      <div className="w-12 h-1 bg-[#4d5f52] mt-2"></div>
    </div>
  );
}

function ProductIcon() {
  return (
    <svg className="w-4 h-4 text-[#4d5f52]" fill="currentColor" viewBox="0 0 24 24">
      <path d="M17,8C8,10 5.9,16.17 3.82,21.34L5.71,22L6.66,19.7C7.14,19.87 7.64,20 8,20C19,20 22,3 22,3C21,5 14,5.25 9,6.25C4,7.25 2,11.5 2,13.5C2,15.5 3.75,17.25 3.75,17.25C7,8 17,8 17,8Z"/>
    </svg>
  );
}

function ServiceCheckIcon() {
  return (
    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
    </svg>
  );
}
