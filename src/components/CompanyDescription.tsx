'use client';

/**
 * Displays the company history and core values.
 */
export default function CompanyDescription() {
  return (
    <div className="bg-[#e7d9bd] rounded-[1.5rem] md:rounded-[2.5rem] p-6 md:p-10 shadow-2xl border border-white/20 flex flex-col items-center md:items-start text-center md:text-left">
      <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-6 uppercase tracking-tight text-center md:text-left">Η Εταιρεία μας</h2>
      
      <div className="text-gray-800 text-xs md:text-sm leading-relaxed font-bold space-y-4 max-w-prose">
        <p>
          Η ΠΑΠΑΛΑΜΠΡΟΥ Α.Ε. είναι μια ισχυρή οικογενειακή επιχείρηση με έδρα τα Γρεβενά, η οποία ξεχωρίζει για την ποιότητα και την αξιοπιστία της από το 1995.
        </p>
        <p>
          Με επικεφαλής τον Ιωάννη Παπαλάμπρου και τον γιο του Παναγιώτη, συνδυάζουμε την πολυετή εμπειρία με την συνεχή εξέλιξη. Εξειδικευόμαστε στο εμπόριο άριστων στερεών καυσίμων και στις ασφαλείς μεταφορές σε όλη την Ελλάδα, χτίζοντας καθημερινά σχέσεις εμπιστοσύνης με τους πελάτες μας.
        </p>
        <p>
          Σε εμάς θα βρείτε ποιοτικά καυσόξυλα και ξυλοκάρβουνα, φιλοδοξώντας να προσφέρουμε την καλύτερη δυνατή εξυπηρέτηση και ασφάλεια.
        </p>
      </div>

      <div className="mt-8 md:mt-10 grid grid-cols-3 gap-4 md:gap-8 w-full border-t border-black/5 pt-8 md:pt-10">
        <ValueItem 
          icon={<SecurityIcon />}
          label="ΑΣΦΑΛΕΙΑ"
        />
        <ValueItem 
          icon={<QualityIcon />}
          label="ΠΟΙΟΤΗΤΑ"
        />
        <ValueItem 
          icon={<TransportIcon />}
          label="ΜΕΤΑΦΟΡΕΣ"
        />
      </div>
    </div>
  );
}

function ValueItem({ icon, label }: { icon: React.ReactNode, label: string }) {
  return (
    <div className="flex flex-col items-center text-center space-y-3">
      {icon}
      <span className="font-bold text-sm md:text-lg uppercase tracking-tight leading-tight">
        {label}
      </span>
    </div>
  );
}

// Icons
function SecurityIcon() {
  return <svg className="w-8 h-8 md:w-10 md:h-10 text-[#28322c]" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>;
}

function QualityIcon() {
  return <svg className="w-8 h-8 md:w-10 md:h-10 text-[#28322c]" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-6.857 2.143L12 21l-2.143-6.857L3 12l6.857-2.143L12 3z" /></svg>;
}

function TransportIcon() {
  return <svg className="w-8 h-8 md:w-10 md:h-10 text-[#28322c]" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" /></svg>;
}
