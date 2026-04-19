export default function ContactSection() {
  return (
    <section id="contact" className="max-w-7xl mx-auto px-8 py-24 w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
        <div className="glass-green rounded-3xl p-10 space-y-10 flex flex-col justify-center">
          <div className="space-y-4">
            <h2 className="text-4xl font-bold text-white tracking-tight drop-shadow-sm">Στοιχεία Επικοινωνίας</h2>
            <p className="text-white/60 text-lg">Βρείτε μας στα παρακάτω κανάλια επικοινωνίας και κοινωνικής δικτύωσης.</p>
          </div>
          
          <div className="space-y-6">
            <div className="flex flex-col space-y-2 pb-6 border-b border-white/10">
              <span className="text-sm font-bold uppercase tracking-wider text-brand-green">Τηλέφωνο</span>
              <span className="text-2xl font-medium text-white">+30 210 0000000</span>
            </div>
            
            <div className="flex flex-col space-y-2 pb-6 border-b border-white/10">
              <span className="text-sm font-bold uppercase tracking-wider text-brand-green">Email</span>
              <span className="text-2xl font-medium text-white">info@papalambrou.gr</span>
            </div>
            
            <div className="flex flex-col space-y-2 pb-6 border-b border-white/10">
              <span className="text-sm font-bold uppercase tracking-wider text-brand-green">Instagram</span>
              <a href="#" className="text-2xl font-medium text-white hover:text-brand-green transition-colors">@papalambrou</a>
            </div>
            
            <div className="flex flex-col space-y-2">
              <span className="text-sm font-bold uppercase tracking-wider text-brand-green">Facebook</span>
              <a href="#" className="text-2xl font-medium text-white hover:text-brand-green transition-colors">Papalambrou Official</a>
            </div>
          </div>
        </div>
        
        <div className="glass rounded-3xl p-10 flex flex-col items-center justify-center text-center">
          <div className="w-20 h-20 bg-white/5 rounded-full flex items-center justify-center mb-8 border border-white/10">
            <svg className="w-10 h-10 text-brand-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <p className="text-white/40 italic font-medium max-w-xs leading-relaxed">
            Placeholder για Σύντομο &quot;Σχετικά με Εμάς&quot;, Φόρμα Επικοινωνίας ή Google Map
          </p>
        </div>
      </div>
    </section>
  );
}
