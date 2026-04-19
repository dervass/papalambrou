'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Pagination } from 'swiper/modules';
import Image from 'next/image';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';

const images = [
  { src: '/woodss1.jpg', alt: 'Woods 1' },
  { src: '/woodss2.jpg', alt: 'Woods 2' },
  { src: '/woodss3.jpg', alt: 'Woods 3' },
];

export default function Hero() {
  return (
    <section className="w-full py-12 lg:py-20">
      <div className="max-w-7xl mx-auto px-8 w-full">
        <div className="glass-green rounded-[2.5rem] p-8 lg:p-12 flex flex-col items-center text-center overflow-hidden">
          <h1 className="text-5xl font-black text-white mb-10 tracking-tighter drop-shadow-xl">
            Φωτογραφίες
          </h1>
          
          <div className="w-full aspect-[21/9] rounded-3xl overflow-hidden border border-white/10 shadow-2xl relative">
            <Swiper
              modules={[Autoplay, EffectFade, Pagination]}
              effect="fade"
              autoplay={{ delay: 5000, disableOnInteraction: false }}
              pagination={{ clickable: true }}
              loop={true}
              className="h-full w-full"
            >
              {images.map((img, index) => (
                <SwiperSlide key={index}>
                  <div className="relative h-full w-full">
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      className="object-cover"
                      priority={index === 0}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}
