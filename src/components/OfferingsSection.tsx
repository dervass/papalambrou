export default function OfferingsSection() {
  return (
    <section className="max-w-7xl mx-auto w-full px-8 py-32">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Products Column */}
        <div id="products" className="group">
          <div className="glass-green rounded-3xl p-10 text-center transition-all hover:bg-white/5 border border-white/10 hover:border-brand-green/30 relative overflow-hidden h-full flex flex-col items-center justify-center">
            <h2 className="text-4xl font-black text-white mb-8 tracking-tight drop-shadow-md">Προϊόντα</h2>
            <div className="w-full aspect-square max-w-[300px] bg-white/5 rounded-2xl border border-white/10 flex flex-col items-center justify-center p-8 group-hover:bg-white/10 transition-all">
              <div className="w-20 h-20 bg-brand-green/20 rounded-2xl flex items-center justify-center mb-6 border border-white/10">
                <svg className="w-10 h-10 text-brand-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
              </div>
              <p className="text-white/40 italic font-medium leading-relaxed">
                Placeholder για Εικόνες Προϊόντων,<br />Περιγραφές ή Κατάλογο
              </p>
            </div>
            {/* Decorative background element */}
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-brand-green/10 rounded-full blur-3xl transition-all group-hover:bg-brand-green/20"></div>
          </div>
        </div>

        {/* Services Column */}
        <div className="group">
          <div className="glass-green rounded-3xl p-10 text-center transition-all hover:bg-white/5 border border-white/10 hover:border-brand-green/30 relative overflow-hidden h-full flex flex-col items-center justify-center">
            <h2 className="text-4xl font-black text-white mb-8 tracking-tight drop-shadow-md">Υπηρεσίες</h2>
            <div className="w-full aspect-square max-w-[300px] bg-white/5 rounded-2xl border border-white/10 flex flex-col items-center justify-center p-8 group-hover:bg-white/10 transition-all">
              <div className="w-20 h-20 bg-brand-green/20 rounded-2xl flex items-center justify-center mb-6 border border-white/10">
                <svg className="w-10 h-10 text-brand-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <p className="text-white/40 italic font-medium leading-relaxed">
                Placeholder για Λίστα ή<br />Περιγραφή Υπηρεσιών
              </p>
            </div>
            {/* Decorative background element */}
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-brand-green/10 rounded-full blur-3xl transition-all group-hover:bg-brand-green/20"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
