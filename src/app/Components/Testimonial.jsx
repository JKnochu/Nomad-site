'use client'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { testimonialsImages as images } from '../libs/data';
import { BsFillChatSquareQuoteFill } from "react-icons/bs";

import { Pagination } from 'swiper/modules';
import 'swiper/css/pagination';
import 'swiper/css';
import Image from 'next/image';

const Testimonial = () => {
  return (
    <div className='min-h-[80vh]'>
      <div className='flex flex-col gap-5 items-center mb-5'>
        <h2 className='text-4xl md:text-6xl font-bold text-primary-100'>Testimonials</h2>
        <p className='text-xl'>What clients are saying</p>
      </div>
      <Swiper
          pagination={{ dynamicBullets: true }}
          modules={[Pagination]}
          className="h-[600px] w-full max-w-5xl mx-auto"
        >
          {images.map((item)=>(
            <SwiperSlide key={item.name} className='h-full w-full flex flex-col justify-center items-center pt-[130px] px-5 md:px-[100px] hover:cursor-grab'>
              <div className='flex justify-center mb-5 animate-bounce'>
                <BsFillChatSquareQuoteFill className='w-16 h-16' />
              </div>
              <h4 className='text-xl md:text-3xl text-center font-bold mb-10'>{item.phrase}</h4>
              <div className='flex items-center justify-center gap-5'>
                <div className='w-[50px] h-[50px]'>
                  <Image className='w-full h-full rounded-full object-cover' src={item.img} alt={item.name} width={50} height={50} /> 
                </div>
                <div className='flex flex-col '>
                  <strong className='md:text-xl font-semibold'>{item.name}</strong>
                  <small className='md:text-xl font-light'>{item.pos}</small>
                </div>
              </div>
            </SwiperSlide>
          ))}
        
        </Swiper>
    </div>
  )
}

export default Testimonial