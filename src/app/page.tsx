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
                src="/transparent-logo.png"
                alt="Papalambrou Logo"
                fill
                className="object-contain scale-[1.6] origin-center translate-y-[1px] drop-shadow-sm"
                priority
              />
            </div>
            <h1 className="text-2xl md:text-3xl font-black tracking-tight text-gray-900 uppercase">
              Παπαλάμπρου Ιωάννης Α.Ε.
            </h1>
          </div>

          <div className="flex flex-col items-center md:items-end space-y-1">
            <div className="flex items-center space-x-2">
              <svg className="w-5 h-5 text-[#508964]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
              <span className="font-bold tracking-wide">+30 6932296045</span>
            </div>
            <div className="flex items-center space-x-2">
              <svg className="w-5 h-5 text-[#508964]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
              <span>ioannispapalamprou@yahoo.gr</span>
            </div>
          </div>
        </header>
      </div>

      <div className="wood-rings-bg relative w-full flex flex-col md:flex-row pb-16 pt-12">
        <div className="w-full md:w-1/2 flex justify-end">
          <div className="w-full max-w-[600px] px-4 md:pr-8 md:pl-4 flex flex-col justify-center">
            <h2 className="text-3xl md:text-4xl lg:text-[2.6rem] font-bold mb-4 leading-tight text-white drop-shadow-md">
              Ποιότητα και Αξιοπιστία από το 1995
            </h2>

            <p className="mb-8 text-sm font-bold tracking-widest uppercase text-white/90 leading-relaxed drop-shadow-md">
              ΚΑΥΣΟΞΥΛΑ - ΚΑΡΒΟΥΝΑ - ΣΤΕΡΕΑ ΚΑΥΣΙΜΑ
            </p>

            <div
              id="contact"
              className="bg-[#425447] rounded-3xl p-6 md:p-8 text-white shadow-xl relative overflow-hidden"
            >
              <div className="space-y-4">
                <div>
                  <p className="text-xs font-semibold text-[#a5b6aa] mb-1 tracking-wider uppercase flex items-center gap-1">
                    <span className="text-base">📍</span> ΕΔΡΑ
                  </p>
                  <p className="text-xl font-medium leading-snug">
                    3ο χλμ Γρεβενών - Ιωαννίνων
                    <br />
                    51100 / Γρεβενά
                  </p>
                </div>
                <div className="border-t border-white/20 pt-4">
                  <p className="text-xs font-semibold text-[#a5b6aa] mb-1 tracking-wider uppercase">ΤΗΛΕΦΩΝΑ ΕΠΙΚΟΙΝΩΝΙΑΣ</p>
                  <p className="text-xl font-medium">6932296045 / 2462082362</p>
                </div>
                <div className="border-t border-white/20 pt-4">
                  <p className="text-xs font-semibold text-[#a5b6aa] mb-1 tracking-wider uppercase">EMAIL</p>
                  <p className="text-xl font-medium">ioannispapalamprou@yahoo.gr</p>
                </div>
                <div className="border-t border-white/20 pt-4">
                  <a href="https://www.instagram.com/papalamprou_ioannis_ae/" target="_blank" rel="noopener noreferrer" className="text-xl font-medium uppercase tracking-wider hover:text-[#a5b6aa] transition-all block underline underline-offset-4 decoration-white/40 hover:decoration-[#a5b6aa]">
                    INSTAGRAM
                  </a>
                </div>
                <div className="border-t border-white/20 pt-4">
                  <a href="https://www.facebook.com/p/%CE%A0%CE%B1%CF%80%CE%B1%CE%BB%CE%AC%CE%BC%CF%80%CF%81%CE%BF%CF%85-%CE%99%CF%89%CE%AC%CE%BD%CE%BD%CE%B7%CF%82-%CE%91%CE%95-61562409920251/" target="_blank" rel="noopener noreferrer" className="text-xl font-medium uppercase tracking-wider hover:text-[#a5b6aa] transition-all block underline underline-offset-4 decoration-white/40 hover:decoration-[#a5b6aa]">
                    FACEBOOK
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/2 flex justify-start mt-12 md:mt-0">
          <div className="w-full max-w-[600px] px-4 md:pl-8 md:pr-4 flex flex-col justify-center">
            <div className="bg-[#f3dfc1] rounded-[2.5rem] p-8 md:p-12 text-[#28322c] shadow-xl relative overflow-hidden h-full flex flex-col justify-center border border-[#e5d0b3]">
              <div className="space-y-6 text-lg md:text-xl font-bold leading-relaxed">
                <p>
                  Η Εταιρεία μας
                  Η ΠΑΠΑΛΑΜΠΡΟΥ Α.Ε. είναι μια αμιγώς οικογενειακή επιχείρηση με έδρα τα Γρεβενά, η οποία ξεχωρίζει για την ποιότητα και την αξιοπιστία της από το 1995. Με επικεφαλής τον Ιωάννη Παπαλάμπρου και τον γιο του, Παναγιώτη, συνδυάζουμε την πολυετή εμπειρία με τη σύγχρονη εξυπηρέτηση. Εξειδικευόμαστε στο εμπόριο κορυφαίων στερεών καυσίμων και στις ασφαλείς μεταφορές σε όλη την Ελλάδα, χτίζοντας καθημερινά σχέσεις εμπιστοσύνης με τους πελάτες μας.
                </p>
                <p>
                  Σε εμάς θα βρείτε ποιοτικά καυσόξυλα και κάρβουνα, φυλασσόμενα σε στεγασμένο χώρο.
                </p>
                <p>
                  Εξειδικευμένο προσωπικό εξασφαλίζει ασφαλείς μεταφορές σε όλη την Ελλάδα.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#f9faf9] w-full py-20 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-3xl p-8 md:p-10 shadow-sm border border-gray-100 flex flex-col justify-start">
            <h2 className="text-2xl font-black mb-8 text-gray-900 border-b border-gray-100 pb-4 w-full text-center uppercase tracking-tight">Προϊόντα</h2>
            <ul className="text-gray-700 leading-relaxed font-bold text-lg space-y-4 text-left">
              <li className="flex items-center gap-2"><span className="text-[#508964]">•</span> Καυσόξυλα</li>
              <li className="flex items-center gap-2"><span className="text-[#508964]">•</span> Κάρβουνα</li>
              <li className="flex items-center gap-2"><span className="text-[#508964]">•</span> Ξύλα για σόμπα</li>
              <li className="flex items-center gap-2"><span className="text-[#508964]">•</span> Ξύλα για ξυλολέβητα</li>
              <li className="flex items-center gap-2"><span className="text-[#508964]">•</span> Στερεά καύσιμα</li>
              <li className="flex items-center gap-2"><span className="text-[#508964]">•</span> Ξύλα για τζάκι</li>
            </ul>
          </div>

          <div className="bg-white rounded-3xl p-8 md:p-10 shadow-sm border border-gray-100 flex flex-col justify-start">
            <h2 className="text-2xl font-black mb-8 text-gray-900 border-b border-gray-100 pb-4 w-full text-center uppercase tracking-tight">Υπηρεσίες</h2>
            <ul className="text-gray-700 leading-relaxed font-bold text-lg space-y-4 text-left">
              <li className="flex items-start gap-2">
                <span className="text-[#508964] mt-1.5">•</span> 
                <span>Εθνικές Μεταφορές: Μεταφορές σε όλη την Ελλάδα με ιδιόκτητα φορτηγά</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#508964] mt-1.5">•</span> 
                <span>Μεταφορές Ξηράς</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#508964] mt-1.5">•</span> 
                <span>Εξειδικευμένο Προσωπικό</span>
              </li>
            </ul>
          </div>

          <div className="flex flex-col items-center">
            <div className="w-full bg-white rounded-3xl shadow-md overflow-hidden border border-gray-100 p-2 mb-6">
              <div className="w-full aspect-[4/3] bg-gray-100 relative rounded-2xl overflow-hidden">
                <iframe
                  src="https://maps.google.com/maps?q=40.0295642,21.3396969&z=15&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
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

      <GallerySection />

      <footer className="bg-[#28322c] text-[#8a9a8f] text-sm py-8">
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p>© 2024 PAPALAMBROU A.E. | Με επιφύλαξη παντός δικαιώματος.</p>
          <div className="flex space-x-6">
            <a href="#top" className="hover:text-white transition-colors">Πίσω στην Αρχική</a>
            <a href="#contact" className="hover:text-white transition-colors">Επικοινωνία</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
