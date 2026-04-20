'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';

const galleryImages = ['/woodss1.jpg', '/woodss2.jpg', '/woodss3.jpg'];

export default function GallerySection() {
  const [activeImage, setActiveImage] = useState(galleryImages[0]);

  return (
    <div
      className="w-full py-24 relative transition-all duration-700 bg-cover bg-center"
      style={{ backgroundImage: `url(${activeImage})` }}
    >
      <div className="absolute inset-0 bg-[rgba(40,50,42,0.85)] mix-blend-multiply backdrop-blur-[2px]" />

      <div className="max-w-6xl mx-auto px-4 md:px-8 relative z-10">
        <div className="bg-[#121a15]/90 backdrop-blur-sm rounded-[2rem] p-6 md:p-10 shadow-2xl border border-white/10 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 tracking-wider">
            Οι Εγκαταστάσεις &amp; Ο Στόλος Μας
          </h2>
          <div className="w-full rounded-xl overflow-hidden border border-white/20 relative aspect-[16/7] md:aspect-[21/9]">
            <Swiper
              modules={[Autoplay, EffectFade, Navigation]}
              effect="fade"
              autoplay={{ delay: 4000, disableOnInteraction: false }}
              navigation={true}
              loop
              onSlideChange={(swiper) => setActiveImage(galleryImages[swiper.realIndex])}
              className="w-full h-full [--swiper-navigation-color:rgba(255,255,255,0.3)] hover:[--swiper-navigation-color:rgba(255,255,255,0.8)] transition-all duration-300"
            >
              {galleryImages.map((src, idx) => (
                <SwiperSlide key={src}>
                  <div className="relative w-full h-full">
                    <Image
                      src={src}
                      alt={`Gallery image ${idx + 1}`}
                      fill
                      className="object-cover"
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
