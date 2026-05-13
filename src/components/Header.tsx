'use client';

import Image from 'next/image';

/**
 * Main navigation header component for the website.
 * Contains the logo, company name, and contact shortcuts.
 */
export default function Header() {
  return (
    <div className="bg-[#fcfbf7] w-full border-b border-gray-200 shadow-sm relative z-50">
      <header className="max-w-7xl mx-auto px-4 py-3 md:py-4 flex flex-col md:flex-row justify-between items-center text-[#28322c]">
        {/* Logo and Branding */}
        <div className="flex flex-col items-center md:flex-row md:items-center space-y-2 md:space-y-0 md:space-x-6 mb-3 md:mb-0 text-center md:text-left">
          <div className="w-12 h-12 md:w-24 md:h-24 rounded-full shadow-md border border-gray-200 bg-white flex items-center justify-center overflow-hidden relative shrink-0">
            <Image
              src="/logo-finale-latest.png"
              alt="Papalambrou Logo"
              fill
              sizes="(max-width: 768px) 48px, 256px"
              className="object-contain scale-[1.3] md:scale-[1.6] origin-center translate-y-[1px] drop-shadow-sm"
              priority
              quality={100}
            />
          </div>
          <h1 className="text-lg md:text-3xl font-black tracking-tight text-gray-900 uppercase leading-tight">
            Παπαλάμπρου Ιωάννης <br className="block md:hidden" /> Α.Ε.
          </h1>
        </div>

        {/* Contact Shortcuts */}
        <div className="flex flex-col items-center md:items-end space-y-1 text-[#28322c]">
          <div className="flex flex-col md:flex-row items-center md:items-end space-y-1 md:space-y-0 md:space-x-6 font-bold">
            <div className="flex items-center space-x-2">
              <PhoneIcon className="w-3.5 h-3.5 md:w-5 md:h-5 text-[#4d5f52]" />
              <span className="tracking-tight text-sm md:text-lg">6932296045</span>
            </div>
            <div className="flex items-center space-x-2">
              <PhoneIcon className="w-3.5 h-3.5 md:w-5 md:h-5 text-[#4d5f52]" />
              <span className="tracking-tight text-sm md:text-lg">24620 82362</span>
            </div>
          </div>
          <div className="flex items-center space-x-2 font-bold">
            <EmailIcon className="w-3.5 h-3.5 md:w-5 md:h-5 text-[#4d5f52]" />
            <span className="text-gray-700 text-xs md:text-lg">ioannispapalamprou@yahoo.gr</span>
          </div>
        </div>
      </header>
    </div>
  );
}

function PhoneIcon({ className }: { className?: string }) {
  return (
    <svg className={className} aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    </svg>
  );
}

function EmailIcon({ className }: { className?: string }) {
  return (
    <svg className={className} aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  );
}
