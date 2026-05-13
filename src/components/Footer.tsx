'use client';

/**
 * Main footer component for the website.
 * Contains value proposition highlights and legal/copyright info.
 */
export default function Footer() {
  const highlights = [
    {
      title: 'ΠΟΙΟΤΙΚΑ ΠΡΟΪΟΝΤΑ',
      description: 'Επιλεγμένα υλικά υψηλής θερμογόνου απόδοσης.',
      icon: <ProductIcon />,
    },
    {
      title: 'ΑΣΦΑΛΕΙΑ',
      description: 'Ασφαλείς και έγκαιρες μεταφορές σε όλη την Ελλάδα.',
      icon: <SecurityIcon />,
    },
    {
      title: 'ΕΜΠΕΙΡΙΑ',
      description: 'Πολυετής οικογενειακή παράδοση και τεχνογνωσία.',
      icon: <ExperienceIcon />,
    },
    {
      title: 'ΕΞΥΠΗΡΕΤΗΣΗ',
      description: 'Άμεση και φιλική εξυπηρέτηση κάθε πελάτη.',
      icon: <SupportIcon />,
    },
  ];

  return (
    <footer className="w-full">
      {/* Highlights Section */}
      <div className="bg-[#212d25] w-full py-6 md:py-10 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {highlights.map((item, index) => (
            <div key={index} className="flex flex-col md:flex-row items-center md:items-center gap-3 md:gap-4 text-center md:text-left">
              <div className="w-12 h-12 md:w-14 md:h-14 bg-[#4d5f52] rounded-2xl flex items-center justify-center shrink-0 shadow-lg">
                {item.icon}
              </div>
              <div className="text-white">
                <h4 className="font-black text-xs md:text-sm uppercase tracking-wider mb-1">{item.title}</h4>
                <p className="text-[10px] md:text-xs text-white/60 leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Copyright and Bottom Navigation */}
      <div className="bg-[#1a1a1a] text-white/40 py-8 md:py-6">
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col md:flex-row justify-between items-center gap-6 md:gap-4 text-center">
          <div className="text-[10px] md:text-xs uppercase tracking-widest font-bold leading-relaxed">
            © 2026 ΠΑΠΑΛΑΜΠΡΟΥ ΙΩΑΝΝΗΣ Α.Ε. | ΜΕ ΕΜΠΕΙΡΙΑ ΠΑΝΤΟΥ. ΣΤΑΘΕΡΑ ΔΙΠΛΑ ΣΑΣ.
          </div>
          <div className="flex items-center justify-center gap-8">
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="text-[10px] md:text-xs uppercase tracking-widest font-bold hover:text-white transition-colors"
            >
              Επικοινωνία
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

// Icons
function ProductIcon() {
  return <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M17,8C8,10 5.9,16.17 3.82,21.34L5.71,22L6.66,19.7C7.14,19.87 7.64,20 8,20C19,20 22,3 22,3C21,5 14,5.25 9,6.25C4,7.25 2,11.5 2,13.5C2,15.5 3.75,17.25 3.75,17.25C7,8 17,8 17,8Z"/></svg>;
}

function SecurityIcon() {
  return <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>;
}

function ExperienceIcon() {
  return <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>;
}

function SupportIcon() {
  return <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>;
}
