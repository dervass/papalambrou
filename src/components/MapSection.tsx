'use client';

/**
 * Displays the Google Maps location and a link to Google Maps.
 */
export default function MapSection() {
  return (
    <div className="w-full bg-white rounded-3xl shadow-md overflow-hidden border border-gray-100 p-2">
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
      <div className="text-center space-y-3 py-4">
        <h3 className="font-black text-sm uppercase tracking-widest text-gray-900">
          ΔΕΙΤΕ ΠΟΥ ΒΡΙΣΚΟΜΑΣΤΕ
        </h3>
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
  );
}
