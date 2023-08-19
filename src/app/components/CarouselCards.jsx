import React from 'react'

const CarouselCards = ({title,price,desc,image}) => {
  return (
    <div className='w-[200px] h-[350px] py-[20px] mx-[20px] text-center cursor-pointer' >
        <div className='w-full h-[230px] flex justify-center items-center ' >
            <img src={image} alt='image' class="inline-block transition-transform transform-gpu hover:scale-110" />
        </div>
        <h3 className='font-semibold' >{title}</h3>
        <h2 className='text-green-600' >{price}</h2>
        <h3 className='text-gray-400'>{desc}</h3>
    </div>
  )
}

export default CarouselCards
