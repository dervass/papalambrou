'use client';

import Image from 'next/image';

import GallerySection from '@/components/GallerySection';

export default function Home() {
  return (
    <main id="top" className="w-full antialiased">
      <div className="bg-[#fcfbf7] w-full border-b border-gray-200 sticky top-0 z-50 shadow-sm">
        <header className="max-w-7xl mx-auto px-4 md:px-8 py-4 flex flex-col md:flex-row justify-between items-center text-[#28322c]">
          <div className="flex items-center space-x-6 mb-4 md:mb-0">
            <div className="w-24 h-24 rounded-full shadow-md border border-gray-200 bg-white flex items-center justify-center overflow-hidden relative shrink-0">
              <Image
                src="/logo-finale-latest.png"
                alt="Papalambrou Logo"
                fill
                sizes="256px"
                className="object-contain scale-[1.6] origin-center translate-y-[1px] drop-shadow-sm"
                priority
                quality={100}
              />
            </div>
            <h1 className="text-2xl md:text-3xl font-black tracking-tight text-gray-900 uppercase">
              Παπαλάμπρου Ιωάννης Α.Ε.
            </h1>
          </div>

          <div className="flex flex-col items-center md:items-end space-y-1 text-[#28322c]">
            <div className="flex flex-col md:flex-row items-center md:items-end space-y-1 md:space-y-0 md:space-x-6">
              <div className="flex items-center space-x-2">
                <svg className="w-5 h-5 text-[#4d5f52]" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                <span className="font-bold tracking-tight text-lg">6932296045</span>
              </div>
              <div className="flex items-center space-x-2">
                <svg className="w-5 h-5 text-[#4d5f52]" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                <span className="font-bold tracking-tight text-lg">24620 82362</span>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <svg className="w-5 h-5 text-[#4d5f52]" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
              <span className="text-gray-700 font-bold text-lg">ioannispapalamprou@yahoo.gr</span>
            </div>
          </div>
        </header>
      </div>

      <div className="wood-rings-bg relative w-full py-10">
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col md:flex-row items-start gap-8">
          {/* Left Column */}
          <div className="w-full md:w-1/2 flex flex-col">
            <div className="mb-6">
              <h2 className="text-3xl md:text-4xl lg:text-[2.6rem] font-bold mb-2 leading-tight text-white drop-shadow-md">
                Ποιότητα και Αξιοπιστία από το 1995
              </h2>
              <p className="text-sm font-bold tracking-widest uppercase text-white/90 leading-relaxed drop-shadow-md">
                ΚΑΥΣΟΞΥΛΑ - ΞΥΛΟΚΑΡΒΟΥΝΑ - ΣΤΕΡΕΑ ΚΑΥΣΙΜΑ
              </p>
            </div>

            <div
              id="contact"
              className="bg-[#28322c] rounded-[2.5rem] p-8 text-white shadow-2xl relative overflow-hidden"
            >
              <h3 className="text-lg font-black mb-8 tracking-wider uppercase text-white/90">
                ΕΠΙΚΟΙΝΩΝΙΑ
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#1a241d] rounded-xl flex items-center justify-center shrink-0 border border-white/5">
                    <svg className="w-6 h-6 text-white" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                  </div>
                  <p className="text-lg md:text-xl font-bold leading-tight pt-1">
                    3ο χλμ Γρεβενών - Ιωαννίνων
                    <br />
                    51100 / Γρεβενά
                  </p>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#1a241d] rounded-xl flex items-center justify-center shrink-0 border border-white/5">
                    <svg className="w-6 h-6 text-white" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                  </div>
                  <p className="text-lg md:text-xl font-bold pt-1">6932296045 / 2462082362</p>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#1a241d] rounded-xl flex items-center justify-center shrink-0 border border-white/5">
                    <svg className="w-6 h-6 text-white" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                  </div>
                  <p className="text-lg md:text-xl font-bold pt-1">ioannispapalamprou@yahoo.gr</p>
                </div>

                <div className="flex flex-row items-center gap-10 pt-4">
                  <a href="https://www.instagram.com/papalamprou_ioannis_ae/" target="_blank" rel="noopener noreferrer" aria-label="Follow us on Instagram" className="flex items-center gap-3 group">
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center border border-white/20 group-hover:bg-white group-hover:text-[#28322c] transition-all">
                      <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                    </div>
                    <span className="text-base font-bold uppercase tracking-wider">Instagram</span>
                  </a>
                  <a href="https://www.facebook.com/p/%CE%A0%CE%B1%CF%80%CE%B1%CE%BB%CE%AC%CE%BC%CF%80%CF%81%CE%BF%CF%85-%CE%99%CF%89%CE%AC%CE%BD%CE%BD%CE%B7%CF%82-%CE%91%CE%95-61562409920251/" target="_blank" rel="noopener noreferrer" aria-label="Follow us on Facebook" className="flex items-center gap-3 group">
                    <div className="w-8 h-8 rounded-full flex items-center justify-center border border-white/20 group-hover:bg-white group-hover:text-[#28322c] transition-all">
                      <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/></svg>
                    </div>
                    <span className="text-base font-bold uppercase tracking-wider">Facebook</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="w-full md:w-1/2 flex flex-col mt-12 md:mt-0">
            <div className="bg-[#f3dfc1] rounded-[2.5rem] p-8 md:p-12 text-[#28322c] shadow-xl relative overflow-hidden flex-1 flex flex-col border border-[#e5d0b3]">
              <h2 className="text-3xl md:text-4xl font-black mb-8">Η Εταιρεία μας</h2>
              
              <div className="space-y-6 text-lg md:text-xl font-bold leading-relaxed mb-12">
                <p>
                  Η ΠΑΠΑΛΑΜΠΡΟΥ Α.Ε. είναι μια αμιγώς οικογενειακή επιχείρηση με έδρα τα Γρεβενά, η οποία ξεχωρίζει για την ποιότητα και την αξιοπιστία της από το 1995.
                </p>
                <p>
                  Με επικεφαλής τον Ιωάννη Παπαλάμπρου και τον γιο του, Παναγιώτη, συνδυάζουμε την πολυετή εμπειρία με τη σύγχρονη εξυπηρέτηση. Εξειδικευόμαστε στο εμπόριο κορυφαίων στερεών καυσίμων και στις ασφαλείς μεταφορές σε όλη την Ελλάδα, χτίζοντας καθημερινά σχέσεις εμπιστοσύνης με τους πελάτες μας.
                </p>
                <p>
                  Σε εμάς θα βρείτε ποιοτικά καυσόξυλα και ξυλοκάρβουνα, φυλασσόμενα σε στεγασμένο χώρο.
                </p>
                <p>
                  Εξειδικευμένο προσωπικό εξασφαλίζει ασφαλείς μεταφορές σε όλη την Ελλάδα.
                </p>
              </div>

              <div className="grid grid-cols-3 gap-4 pt-4 border-t border-[#dcc5a3] mt-auto">
                <div className="flex flex-col items-center text-center space-y-3">
                  <svg className="w-10 h-10 md:w-12 md:h-12 text-[#28322c]" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                  <span className="font-bold text-sm md:text-lg uppercase tracking-tight">Αξιοπιστία</span>
                </div>
                <div className="flex flex-col items-center text-center space-y-3">
                  <svg className="w-10 h-10 md:w-12 md:h-12 text-[#28322c]" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L4.5 20.29l.71.71L12 18l6.79 3 .71-.71z" /></svg>
                  <span className="font-bold text-sm md:text-lg uppercase tracking-tight">Ποιότητα</span>
                </div>
                <div className="flex flex-col items-center text-center space-y-3">
                  <svg className="w-10 h-10 md:w-12 md:h-12 text-[#28322c]" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" /></svg>
                  <span className="font-bold text-sm md:text-lg uppercase tracking-tight leading-tight">Ασφαλείς Μεταφορές</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#f9faf9] w-full py-20 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-3xl p-8 md:p-10 shadow-sm border border-gray-100 flex flex-col justify-start">
            <div className="mb-8">
              <h2 className="text-3xl font-black text-gray-900 uppercase tracking-tight text-left">Προϊόντα</h2>
              <div className="w-12 h-1 bg-[#4d5f52] mt-2"></div>
            </div>
            <ul className="text-gray-700 leading-relaxed font-bold text-lg space-y-6 text-left">
              <li className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[#f3dfc1] flex items-center justify-center shrink-0">
                  <svg className="w-4 h-4 text-[#4d5f52]" fill="currentColor" viewBox="0 0 24 24"><path d="M17,8C8,10 5.9,16.17 3.82,21.34L5.71,22L6.66,19.7C7.14,19.87 7.64,20 8,20C19,20 22,3 22,3C21,5 14,5.25 9,6.25C4,7.25 2,11.5 2,13.5C2,15.5 3.75,17.25 3.75,17.25C7,8 17,8 17,8Z"/></svg>
                </div>
                <span>Καυσόξυλα</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[#f3dfc1] flex items-center justify-center shrink-0">
                  <svg className="w-4 h-4 text-[#4d5f52]" fill="currentColor" viewBox="0 0 24 24"><path d="M17,8C8,10 5.9,16.17 3.82,21.34L5.71,22L6.66,19.7C7.14,19.87 7.64,20 8,20C19,20 22,3 22,3C21,5 14,5.25 9,6.25C4,7.25 2,11.5 2,13.5C2,15.5 3.75,17.25 3.75,17.25C7,8 17,8 17,8Z"/></svg>
                </div>
                <span>Ξυλοκάρβουνα</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[#f3dfc1] flex items-center justify-center shrink-0">
                  <svg className="w-4 h-4 text-[#4d5f52]" fill="currentColor" viewBox="0 0 24 24"><path d="M17,8C8,10 5.9,16.17 3.82,21.34L5.71,22L6.66,19.7C7.14,19.87 7.64,20 8,20C19,20 22,3 22,3C21,5 14,5.25 9,6.25C4,7.25 2,11.5 2,13.5C2,15.5 3.75,17.25 3.75,17.25C7,8 17,8 17,8Z"/></svg>
                </div>
                <span>Ξύλα για σόμπα</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[#f3dfc1] flex items-center justify-center shrink-0">
                  <svg className="w-4 h-4 text-[#4d5f52]" fill="currentColor" viewBox="0 0 24 24"><path d="M17,8C8,10 5.9,16.17 3.82,21.34L5.71,22L6.66,19.7C7.14,19.87 7.64,20 8,20C19,20 22,3 22,3C21,5 14,5.25 9,6.25C4,7.25 2,11.5 2,13.5C2,15.5 3.75,17.25 3.75,17.25C7,8 17,8 17,8Z"/></svg>
                </div>
                <span>Ξύλα για ξυλολέβητα</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[#f3dfc1] flex items-center justify-center shrink-0">
                  <svg className="w-4 h-4 text-[#4d5f52]" fill="currentColor" viewBox="0 0 24 24"><path d="M17,8C8,10 5.9,16.17 3.82,21.34L5.71,22L6.66,19.7C7.14,19.87 7.64,20 8,20C19,20 22,3 22,3C21,5 14,5.25 9,6.25C4,7.25 2,11.5 2,13.5C2,15.5 3.75,17.25 3.75,17.25C7,8 17,8 17,8Z"/></svg>
                </div>
                <span>Στερεά καύσιμα</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[#f3dfc1] flex items-center justify-center shrink-0">
                  <svg className="w-4 h-4 text-[#4d5f52]" fill="currentColor" viewBox="0 0 24 24"><path d="M17,8C8,10 5.9,16.17 3.82,21.34L5.71,22L6.66,19.7C7.14,19.87 7.64,20 8,20C19,20 22,3 22,3C21,5 14,5.25 9,6.25C4,7.25 2,11.5 2,13.5C2,15.5 3.75,17.25 3.75,17.25C7,8 17,8 17,8Z"/></svg>
                </div>
                <span>Ξύλα για τζάκι</span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-3xl p-8 md:p-10 shadow-sm border border-gray-100 flex flex-col justify-start">
            <div className="mb-8">
              <h2 className="text-3xl font-black text-gray-900 uppercase tracking-tight text-left">Υπηρεσίες</h2>
              <div className="w-12 h-1 bg-[#4d5f52] mt-2"></div>
            </div>
            <ul className="text-gray-700 leading-relaxed font-bold text-lg space-y-6 text-left">
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-[#4d5f52] flex items-center justify-center shrink-0 mt-1">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" /></svg>
                </div>
                <span>Εθνικές Μεταφορές: Μεταφορές σε όλη την Ελλάδα με ιδιόκτητα φορτηγά</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-[#4d5f52] flex items-center justify-center shrink-0 mt-1">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" /></svg>
                </div>
                <span>Μεταφορές Ξηράς</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-[#4d5f52] flex items-center justify-center shrink-0 mt-1">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" /></svg>
                </div>
                <span>Εξειδικευμένο Προσωπικό</span>
              </li>
            </ul>
          </div>

          <div className="flex flex-col items-center">
            <div className="w-full bg-white rounded-3xl shadow-md overflow-hidden border border-gray-100 p-2 mb-6">
              <div className="w-full aspect-[4/3] bg-gray-100 relative rounded-2xl overflow-hidden">
                <iframe
                  title="Τοποθεσία Παπαλάμπρου Ιωάννης Α.Ε. στο Google Maps"
                  src="https://maps.google.com/maps?q=40.0295642,21.3396969&z=15&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            <div className="text-center space-y-3">
              <h3 className="font-black text-sm uppercase tracking-widest text-gray-900">ΔΕΙΤΕ ΠΟΥ ΕΔΡΕΥΟΥΜΕ</h3>
              <a
                href="https://maps.app.goo.gl/f8gaPDM2VD69Pmj1A"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-white px-6 py-2 rounded-md font-black text-gray-900 shadow-sm border border-gray-200 hover:bg-gray-50 transition-colors uppercase tracking-widest text-[10px]"
              >
                ΕΠΙΣΚΕΦΘΕΙΤΕ ΤΟΝ ΧΩΡΟ ΜΑΣ!
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

      <GallerySection />

      {/* Footer Features Section */}
      <div className="bg-[#212d25] w-full py-10 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 bg-[#4d5f52] rounded-2xl flex items-center justify-center shrink-0 shadow-lg">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M17,8C8,10 5.9,16.17 3.82,21.34L5.71,22L6.66,19.7C7.14,19.87 7.64,20 8,20C19,20 22,3 22,3C21,5 14,5.25 9,6.25C4,7.25 2,11.5 2,13.5C2,15.5 3.75,17.25 3.75,17.25C7,8 17,8 17,8Z"/></svg>
            </div>
            <div className="text-white">
              <h4 className="font-black text-sm uppercase tracking-wider mb-1">ΠΟΙΟΤΙΚΑ ΠΡΟΪΟΝΤΑ</h4>
              <p className="text-xs text-white/60 leading-relaxed">Επιλεγμένα υλικά υψηλής θερμογόνου απόδοσης.</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-14 h-14 bg-[#4d5f52] rounded-2xl flex items-center justify-center shrink-0 shadow-lg">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
            </div>
            <div className="text-white">
              <h4 className="font-black text-sm uppercase tracking-wider mb-1">ΑΣΦΑΛΕΙΑ</h4>
              <p className="text-xs text-white/60 leading-relaxed">Ασφαλείς και έγκαιρες μεταφορές σε όλη την Ελλάδα.</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-14 h-14 bg-[#4d5f52] rounded-2xl flex items-center justify-center shrink-0 shadow-lg">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
            </div>
            <div className="text-white">
              <h4 className="font-black text-sm uppercase tracking-wider mb-1">ΕΜΠΕΙΡΙΑ</h4>
              <p className="text-xs text-white/60 leading-relaxed">Πολυετής οικογενειακή παράδοση και τεχνογνωσία.</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-14 h-14 bg-[#4d5f52] rounded-2xl flex items-center justify-center shrink-0 shadow-lg">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
            </div>
            <div className="text-white">
              <h4 className="font-black text-sm uppercase tracking-wider mb-1">ΕΞΥΠΗΡΕΤΗΣΗ</h4>
              <p className="text-xs text-white/60 leading-relaxed">Άμεση και φιλική εξυπηρέτηση κάθε πελάτη.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Bottom */}
      <footer className="bg-[#1a1a1a] text-white/40 py-6">
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-[10px] md:text-xs uppercase tracking-widest font-bold">
            © 2026 ΠΑΠΑΛΑΜΠΡΟΥ ΙΩΑΝΝΗΣ Α.Ε. | Με επιφύλαξη παντός δικαιώματος.
          </div>
          <div className="flex items-center gap-8">
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="text-[10px] md:text-xs uppercase tracking-widest font-bold hover:text-white transition-colors"
            >
              Επικοινωνία
            </button>
          </div>
        </div>
      </footer>
    </main>
  );
}
