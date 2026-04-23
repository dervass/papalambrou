import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin", "greek"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin", "greek"],
});

export const metadata: Metadata = {
  title: "Παπαλάμπρου Ιωάννης Α.Ε. | Καυσόξυλα & Εθνικές Μεταφορές",
  description: "Ποιότητα και Αξιοπιστία από το 1995. Καυσόξυλα, ΞΥΛΟΚΑΡΒΟΥΝΑ, Στερεά καύσιμα και Εθνικές Μεταφορές στα Γρεβενά.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="el"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Παπαλάμπρου Ιωάννης Α.Ε.",
              image: "https://papalamprouae.gr/transparent-logo.png",
              telephone: "+302462082362",
              email: "ioannispapalamprou@yahoo.gr",
              address: {
                "@type": "PostalAddress",
                streetAddress: "3ο χλμ Γρεβενών - Ιωαννίνων",
                addressLocality: "Γρεβενά",
                postalCode: "51100",
                addressCountry: "GR",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 40.0295642,
                longitude: 21.3396969,
              },
              sameAs: [
                "https://www.facebook.com/p/%CE%A0%CE%B1%CF%80%CE%B1%CE%BB%CE%AC%CE%BC%CF%80%CF%81%CE%BF%CF%85-%CE%99%CF%89%CE%AC%CE%BD%CE%BD%CE%B7%CF%82-%CE%91%CE%95-61562409920251/",
                "https://www.instagram.com/papalamprou_ioannis_ae/",
              ],
            }),
          }}
        />
      </body>
    </html>
  );
}
