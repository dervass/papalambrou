'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';

const albums = {
  xila: [
    '/woods-1.jpg',
    '/woods-2.jpg',
    '/woods-3.jpg',
    '/woods-4.jpg',
    '/woods-5.jpg',
    '/woods-6.jpg',
    '/woods-7.jpg',
    '/woods-8.jpg',
    '/woods-9.jpg'
  ],
  xilokarbouna: [
    '/charcoal-1.jpg',
    '/charcoal-2.jpg',
    '/charcoal-3.jpg',
    '/charcoal-4.jpg',
    '/charcoal-5.jpg'
  ],
  stolos: [
    '/trucks-1.jpg',
    '/trucks-2.jpg',
    '/trucks-3.jpg',
    '/trucks-4.jpg',
    '/trucks-5.jpg'
  ]
};

type AlbumKey = keyof typeof albums;

export default function GallerySection() {
  const [currentAlbum, setCurrentAlbum] = useState<AlbumKey>('xila');
  const [activeImage, setActiveImage] = useState(albums.xila[0]);

  const handleAlbumChange = (albumId: AlbumKey) => {
    setCurrentAlbum(albumId);
    setActiveImage(albums[albumId][0]);
  };

  return (
    <div
      className="w-full py-24 relative transition-all duration-1000 bg-cover bg-center"
      style={{ backgroundImage: `url(${activeImage})` }}
    >
      {/* Dark overlay with blur to make the main gallery pop */}
      <div className="absolute inset-0 bg-[rgba(20,26,22,0.85)] backdrop-blur-[4px] transition-all duration-1000" />

      <div className="max-w-6xl mx-auto px-4 md:px-8 relative z-10">
        <div className="bg-[#121a15]/90 backdrop-blur-sm rounded-[2.5rem] p-6 md:p-12 shadow-2xl border border-white/10 text-center">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-10 tracking-widest uppercase">
            ΦΩΤΟΓΡΑΦΙΕΣ
          </h2>

          {/* Album Selection Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {[
              { id: 'xila', label: 'ΞΥΛΑ' },
              { id: 'xilokarbouna', label: 'ΞΥΛΟΚΑΡΒΟΥΝΑ' },
              { id: 'stolos', label: 'ΣΤΟΛΟΣ' }
            ].map((btn) => (
              <button
                key={btn.id}
                onClick={() => handleAlbumChange(btn.id as AlbumKey)}
                className={`px-10 py-4 rounded-full font-black tracking-[0.2em] text-[10px] md:text-xs uppercase transition-all duration-500 border-2 ${
                  currentAlbum === btn.id
                    ? 'bg-[#508964] border-[#508964] text-white shadow-[0_0_30px_rgba(80,137,100,0.5)] scale-110 z-20'
                    : 'bg-white/5 border-white/10 text-white/50 hover:bg-white/10 hover:border-white/30 hover:text-white hover:scale-105'
                }`}
              >
                {btn.label}
              </button>
            ))}
          </div>

          {/* Swiper Gallery */}
          <div className="w-full rounded-[2rem] overflow-hidden border border-white/20 relative aspect-[16/9] md:aspect-[21/9] shadow-inner-xl">
            <Swiper
              key={currentAlbum} // Force re-mount on album change to reset everything
              modules={[Autoplay, EffectFade, Navigation]}
              effect="fade"
              autoplay={{ delay: 4500, disableOnInteraction: false }}
              navigation={true}
              loop={albums[currentAlbum].length > 1}
              onSlideChange={(swiper) => {
                const realIndex = swiper.realIndex;
                setActiveImage(albums[currentAlbum][realIndex]);
              }}
              className="w-full h-full [--swiper-navigation-color:rgba(255,255,255,0.4)] hover:[--swiper-navigation-color:rgba(255,255,255,0.9)] transition-all duration-500"
            >
              {albums[currentAlbum].map((src, idx) => (
                <SwiperSlide key={`${currentAlbum}-${idx}`}>
                  <div className="relative w-full h-full">
                    <Image
                      src={src}
                      alt={`${currentAlbum} image ${idx + 1}`}
                      fill
                      className="object-cover transition-transform duration-[4500ms] hover:scale-110"
                      priority={idx === 0}
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
}
