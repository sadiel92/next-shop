'use client';

import React, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import "./slideshow.css";
import { Autoplay, FreeMode, Navigation, Pagination, Thumbs } from "swiper/modules";


interface Props {
    images: string[];
    title: string;
    className?: string; 
}

export const ProductMobileSlideshow = ({ images, title, className }: Props) => {
  return (
    <div className={ className }>
        <Swiper
        style={{
          width: '100vw',
          height: '500px'
        }}
        loop={true}
        pagination={true}
        autoplay={{
            delay: 2500
        }}
        modules={[FreeMode, Thumbs, Autoplay, Pagination]}
        className="mySwiper2"
      >
        {
            images.map( image => (
              <SwiperSlide  key={ image }>
                <Image
                  width={ 600 }
                  height={ 500 }
                  src={ `/products/${ image }` }
                  alt={ title }
                  className="object-fill"
                />
              </SwiperSlide>
            ))
        }
      </Swiper>
    </div>
  );
};
