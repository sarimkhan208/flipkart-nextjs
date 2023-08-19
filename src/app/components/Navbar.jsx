import React from 'react'

const Navbar = () => {
  return (
    <div className='bg-blue-600 h-16'>
      <div className='w-4/5 m-auto bg-blue-600 items-center flex justify-evenly h-full text-white' >

        <div>
            <img src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/flipkart-plus_8d85f4.png" width={'100px'} height={'50px'} />
        </div>

        <div>
            <input type="text" placeholder='   Search for Products brands and more' 
            className='bg-white w-96 h-10' 
             />
        </div>

        <div>
            <button className='w-36 h-8 bg-white text-blue-600 font-bold' >
                Login
            </button>
        </div>

        <div>
            Become a Seller
        </div>

        <div>
            More
        </div>

        <div>
            Cart
        </div>


      </div>
    </div>
  )
}

export default Navbar
