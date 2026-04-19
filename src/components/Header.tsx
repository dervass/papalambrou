import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full header-solid">
      <div className="max-w-7xl mx-auto px-8 flex items-center justify-between">
        <nav className="flex items-center space-x-6">
          <Link href="#profile" className="px-6 py-2.5 rounded-xl bg-brand-green-dark border border-white/10 text-white text-lg font-bold hover:bg-brand-green transition-all hover:scale-105 active:scale-95 shadow-md">
            Προφίλ
          </Link>
          <Link href="#products" className="px-6 py-2.5 rounded-xl bg-brand-green-dark border border-white/10 text-white text-lg font-bold hover:bg-brand-green transition-all hover:scale-105 active:scale-95 shadow-md">
            Προϊόντα
          </Link>
          <Link href="#contact" className="px-6 py-2.5 rounded-xl bg-brand-green-dark border border-white/10 text-white text-lg font-bold hover:bg-brand-green transition-all hover:scale-105 active:scale-95 shadow-md">
            Επικοινωνία
          </Link>
        </nav>
        
        <div className="flex items-center">
          <div className="relative h-28 w-[550px]">
            <Image 
              src="/logo-finale-latest.png" 
              alt="Papalambrou Logo" 
              fill
              className="object-contain object-right"
              priority
            />
          </div>
        </div>
      </div>
    </header>
  );
}
