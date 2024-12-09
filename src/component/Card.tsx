"use client"
import React, { FC } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay,Pagination } from "swiper/modules";

interface CardsProp {
  id:number;
  image:string;
}

const Card : FC = () => {
  const Cards: CardsProp[] = [
    {id: 1, image: "https://placehold.co/300x200"},
    {id: 2, image: "https://placehold.co/300x200"},
    {id: 3, image: "https://placehold.co/300x200"},
    {id: 4, image: "https://placehold.co/300x200"},
    {id: 5, image: "https://placehold.co/300x200"},
  ]
  return (
    <>
        <div className="slider-container py-[80px] px-[80px] flex justify-center items-center m-3 bg-[#725f5f]">
        <Swiper 
        modules={[Navigation,Autoplay,Pagination] }
        pagination={{ clickable: true }}
        spaceBetween={30}
        slidesPerView={3}
        navigation
        loop={true}
        
      >
        {Cards.map(({id,image})=>(
    <SwiperSlide key={id} >
    <div className="border-3 bg-transparent border-[3px] border-solid m-5  max-w-sm border-white p-2 overflow-hidden shadow-md w-[350px] h-[100%] rounded-2xl">
      <div className="border-[#1b1b1b] px-2 py-2 bg-white  rounded-2xl   border-[2px]">
        <img src={image} alt={id.toString()} className="w-full rounded-lg " />
        <div className="flex items-center justify-center mt-3">
          <button className="bg-[#dcb658] py-2 mb-5 px-5 hover:bg-[#a38844] text-lg text-[#444034]">
            Order Online
          </button>
        </div>
      </div>
    </div>
    </SwiperSlide>
        ))}
      
      </Swiper>
      </div>
    </>
  );
};

export default Card;
