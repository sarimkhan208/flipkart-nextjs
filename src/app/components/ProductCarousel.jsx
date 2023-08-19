'use client'
import React, { useState } from 'react';
import {FaAngleRight,FaAngleLeft} from 'react-icons/fa'
import CarouselCards from './CarouselCards';
const ProductCarousel = ({ title,products,content }) => {

  const scrollLeft = ()=>{
    document.getElementById(content).scrollLeft -= 800
    console.log(document.getElementById(content))
  }

  
  const scrollRight = ()=>{
    document.getElementById(content).scrollLeft += 800
  }
  

  return (
        <div className='my-3 bg-white flex justify-center items-center pl-12 ' >
          <div className='p-4 w-[300px]' >
            <div className='text-3xl text-center font-normal' >{title}</div>
            <div className='mt-5 text-center '  ><button className='bg-blue-400 text-sm font-semibold p-2 text-white' >VIEW ALL</button></div>
          </div>

          <div id={content} className='scroll-smooth flex items-center justify-start overflow-x-auto scrollbar-hide' >
            
            <div onClick={scrollLeft} className='absolute left-0 bg-white cursor-pointer drop-shadow-lg h-[100px] w-[50px] rounded-r-md  flex justify-center items-center ' ><FaAngleLeft className='text-[30px]'/></div>
            {
              products?.map((el)=>(
                <div>
                  <CarouselCards key={el.id} title={el.title} price={el.price} image={el.image} desc={el.desc} />
                </div>
                
              ))
            }
            <div onClick={scrollRight} className='absolute right-0 bg-white cursor-pointer drop-shadow-lg h-[100px] w-[50px] rounded-l-md  flex justify-center items-center ' ><FaAngleRight className='text-[30px]'/></div>
          </div>
        </div>
  );
};

export default ProductCarousel;
