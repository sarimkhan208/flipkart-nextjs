'use client'
import React from 'react';
import Navbar from './components/Navbar'
import ProductCarousel from './components/ProductCarousel';
import "./globals.css"

export default function Home() {
  
  return (
    <div className='bg-gray-100' >
      <Navbar/>

      {/* CATEGORIES */}

      <div className='flex justify-evenly items-center p-5 bg-white border-b-2 border-gray-200' >

        <div className='hover:text-blue-600 cursor-pointer' >
          <div  ><img src='https://rukminim2.flixcart.com/flap/128/128/image/29327f40e9c4d26b.png?q=100' height={'65px'} width={'65px'}  /></div>
          <div className='text-center text-sm font-semibold ' >Grocery</div>
        </div>

        <div className='hover:text-blue-600 cursor-pointer'>
          <div><img src='https://rukminim2.flixcart.com/flap/128/128/image/22fddf3c7da4c4f4.png?q=100' height={'65px'} width={'65px'}  /></div>
          <div className='text-center text-sm font-semibold ' >Mobile</div>
        </div>

        <div className='hover:text-blue-600 cursor-pointer'>
          <div><img src='https://rukminim2.flixcart.com/fk-p-flap/128/128/image/0d75b34f7d8fbcb3.png?q=100' height={'65px'} width={'65px'}  /></div>
          <div className='text-center text-sm font-semibold ' >Fashion</div>
        </div>

        <div className='hover:text-blue-600 cursor-pointer'>
          <div><img src='https://rukminim2.flixcart.com/flap/128/128/image/69c6589653afdb9a.png?q=100' height={'65px'} width={'65px'}  /></div>
          <div className='text-center text-sm font-semibold ' >Electronics</div>
        </div>

        <div className='hover:text-blue-600 cursor-pointer'>
          <div className='pl-4' ><img src='https://rukminim2.flixcart.com/flap/128/128/image/ab7e2b022a4587dd.jpg?q=100' height={'65px'} width={'65px'}  /></div>
          <div className='text-center text-sm font-semibold ' >Home & Furniture</div>
        </div>

        <div className='hover:text-blue-600 cursor-pointer'>
          <div><img src='https://rukminim2.flixcart.com/flap/128/128/image/0ff199d1bd27eb98.png?q=100' height={'65px'} width={'65px'}  /></div>
          <div className='text-center text-sm font-semibold ' >Application</div>
        </div>

        <div className='hover:text-blue-600 cursor-pointer'>
          <div><img src='https://rukminim2.flixcart.com/flap/128/128/image/71050627a56b4693.png?q=100' height={'65px'} width={'65px'}  /></div>
          <div className='text-center text-sm font-semibold ' >Travel</div>
        </div>

        <div className='hover:text-blue-600 cursor-pointer'>
          <div className='justify-center pl-7' ><img  src='https://rukminim2.flixcart.com/flap/128/128/image/dff3f7adcf3a90c6.png?q=100' height={'65px'} width={'65px'}  /></div>
          <div className='text-center text-sm font-semibold ' >Beauty Toys and More</div>
        </div>

        <div className='hover:text-blue-600 cursor-pointer'>
          <div><img src='https://rukminim2.flixcart.com/fk-p-flap/128/128/image/05d708653beff580.png?q=100' height={'65px'} width={'65px'}  /></div>
          <div className='text-center text-sm font-semibold ' >Two Wheelers</div>
        </div>

      </div>

        {/* CARAOUSEL */}
     
        <ProductCarousel content={data1.content} title={data1.title} products={data1.products} />
        <ProductCarousel content={data2.content} title={data2.title} products={data2.products} />
        <ProductCarousel content={data3.content} title={data3.title} products={data3.products} />
        <ProductCarousel content={data4.content} title={data4.title} products={data4.products} />

     
    </div>
  )
}


const data1 = {
  title : "Best of Electronics",
  content : "content1",
    products : [
      {
        id:"1",
        title:"Top Mirrorless Camere",
        price:"Shop Now",
        desc:"Canon sony acer",
        image:"https://rukminim2.flixcart.com/image/200/200/kokdci80/dslr-camera/v/e/x/z-24-200mm-z5-nikon-original-imag2zuekuxgxsgg.jpeg?q=70"
      },
      {
        id:"2",
        title:"Premium Power Band",
        price:"Shop Now",
        desc:"Mi realme",
        image:"https://rukminim2.flixcart.com/image/200/200/xif0q/power-bank/d/a/f/-original-imagky3e8yp5ebvr.jpeg?q=70"
      },
      {
        id:"3",
        title:"Monitors 9",
        price:"from $659",
        desc:"acer",
        image:"https://rukminim2.flixcart.com/image/200/200/xif0q/monitor/m/a/b/-original-imagsatbymyszzjf.jpeg?q=70"
      },
      {
        id:"4",
        title:"Printers",
        price:"from $658",
        desc:"HP",
        image:"https://rukminim2.flixcart.com/image/200/200/printer/j/j/y/hp-laserjet-m1005-multifunction-original-imadxhzpeb9qbrfg.jpeg?q=70"
      },
      {
        id:"5",
        title:"Printers",
        price:"from $2366",
        desc:"Caon",
        image:"https://rukminim2.flixcart.com/image/200/200/xif0q/printer/q/m/u/-original-imags2yrktrsf4f9.jpeg?q=70"
      },
      {
        id:"6",
        title:"Best of Shaves",
        price:"from $1699",
        desc:"Phillips & Havells",
        image:"https://rukminim2.flixcart.com/image/200/200/kactpjk0/shaver/m/6/z/philips-s1121-45-s1121-45-original-imafry2qgxcwnm9r.jpeg?q=70"
      },
      {
        id:"7",
        title:"Asus Monitors",
        price:"from $1099",
        desc:"Top Rated",
        image:"https://rukminim2.flixcart.com/image/200/200/kx7vc7k0/monitor/c/9/2/pg259qnr-full-hd-24-5-90lm05q3-b01310-asus-original-imag9q5g8n4zdf6h.jpeg?q=70"
      },
    ]
}


const data2 = {
  title : "Beauty, Food, Toys and more0",
  content : "content2",
    products : [
      {
        id:"1",
        title:"Tricycle and Ridons",
        price:"Upto 70% Off",
        desc:"Figurines, Battle, Toys and more  ",
        image:"https://rukminim2.flixcart.com/image/200/200/kzegk280/action-figure/9/v/t/3-30155-mcfarlane-2-5-original-imagbeyyzehpyk2m.jpeg?q=70"
      },
      {
        id:"2",
        title:"Remote Control Toys",
        price:"Upto 80% Off",
        desc:"Buy Now!",
        image:"https://rukminim2.flixcart.com/image/200/200/k0plpjk0/remote-control-toy/9/g/k/4-function-remote-control-high-speed-big-racing-car-toy-funkey-original-imafkg33umd8dy93.jpeg?q=70"
      },
      {
        id:"3",
        title:"Coffee Powder",
        price:"Upto 80% Off ",
        desc:"Nescafe Continental and more",
        image:"https://rukminim2.flixcart.com/image/200/200/kzzw5u80/coffee/s/b/x/-original-imagbwf3wvhzfh5z.jpeg?q=70"
      },
      {
        id:"4",
        title:"Car Lubricats",
        price:"Upto 45% Off",
        desc:"I, Shell, Castrol and more",
        image:"https://rukminim2.flixcart.com/image/200/200/jc0ttow0/vehicle-lubricant/5/h/q/1-3000-4t-plus-20w40-hc-tech-engine-oil-for-bikes-motul-original-imaff8z4xtq5ry6a.jpeg?q=70"
      },
      {
        id:"5",
        title:"Musical keyboards",
        price:"Upto 70% Off",
        desc:"Beston redbox and more",
        image:"https://rukminim2.flixcart.com/image/200/200/xif0q/musical-keyboard/g/p/p/37-0-45-37-keys-beston-original-imagheyfjcy32gwq.jpeg?q=70"
      },
      {
        id:"6",
        title:"Dry Fruits",
        price:"Upto 60% Off",
        desc:"Happilo Farmly and more",
        image:"https://rukminim2.flixcart.com/image/200/200/k6fd47k0/nut-dry-fruit/p/z/7/200-100-natural-california-pouch-happilo-original-imafzvw2tcazeur6.jpeg?q=70"
      },
      {
        id:"7",
        title:"Puzzles and Cubes",
        price:"From 79",
        desc:"Unmissable offers!",
        image:"https://rukminim2.flixcart.com/image/200/200/kl5hh8w0/puzzle/g/n/g/60-wooden-earth-jigsaw-puzzle-60-pcs-webby-original-imagyc8hsdztzdzb.jpeg?q=70"
      },
      {
        id:"8",
        title:"Fictions books",
        price:"Upto 70% Off",
        desc:"Shop Now!",
        image:"https://rukminim2.flixcart.com/image/200/200/kkec4280/book/2/b/8/the-girl-in-room-105-original-imafzr6nczgggedw.jpeg?q=70"
      },
    ]
}



const data3 = {
  title : "Hanpicked Home Decor",
  content : "content3",
    products : [
      {
        id:"1",
        title:"Condiments Sets",
        price:"Min. 50% Off",
        desc:"",
        image:"https://rukminim2.flixcart.com/image/200/200/xif0q/shopsy-rakhi-set/b/i/x/1-2-in-1-dumpling-maker-mould-manual-press-maker-manibam-impex-original-imagn4556mhpuafj.jpeg?q=70"
      },
      {
        id:"2",
        title:"Sofa Sets",
        price:"Min. 50% Off",
        desc:"",
        image:"https://rukminim2.flixcart.com/image/200/200/xif0q/sofa-set/t/e/a/beige-white-polyester-3-2-2-1-silvester-u-shape-9-seater-fabric-original-imagzfptymbpsanj.jpeg?q=70"
      },
      {
        id:"3",
        title:"Plants Seeds",
        price:"Min. 50% Off",
        desc:"",
        image:"https://rukminim2.flixcart.com/image/200/200/ju5u1zk0/plant-seed/w/j/k/40-frsd40-rosemerc-original-imaffcdztamrfv9h.jpeg?q=70"
      },
      {
        id:"4",
        title:"Recliners",
        price:"Min. 50% Off",
        desc:"",
        image:"https://rukminim2.flixcart.com/image/200/200/xif0q/recliner/v/m/t/63-5-1-seater-black-leatherette-86-rocker-black-flipkart-perfect-original-imagpyujpjt3pzgd.jpeg?q=70"
      },
      {
        id:"5",
        title:"Incense Sticks",
        price:"Min. 50% Off",
        desc:"",
        image:"https://rukminim2.flixcart.com/image/200/200/keokpe80/incense-stick/a/h/j/ghjj-900-kyada-fab-original-imafvb3q4gtfut5r.jpeg?q=70"
      },
      {
        id:"6",
        title:"Water Bottle and Flask",
        price:"Min. 50% Off",
        desc:"",
        image:"https://rukminim2.flixcart.com/image/200/200/xif0q/bottle/u/g/p/1000-stainless-steel-2-1-litre-water-bottle-set-of-2-kimaya-original-imaggd3xcggqgseg.jpeg?q=70"
      },
      {
        id:"7",
        title:"Sofas",
        price:"Min. 50% Off",
        desc:"",
        image:"https://rukminim2.flixcart.com/image/200/200/ktbu6q80/inflatable-sofa/t/h/g/830-1-seater-pvc-980-1-68-a-82001-ms-modstyle-1660-original-imag6p3gdqnhxy6c.jpeg?q=70"
      },
    ]
}



const data4 = {
  title : "Home & Kitchen Essentials",
  content : "content4",
    products : [
      {
        id:"1",
        title:"Wall Decor Items",
        price:"Upto 70% Off",
        desc:"Big Discount",
        image:"https://rukminim2.flixcart.com/image/200/200/kirr24w0-0/wall-decoration/f/z/b/rafuf-wooden-intersecting-wall-shelves-set-of-8-black-white-8-original-imafyhg9dzdvyhnz.jpeg?q=70"
      },
      {
        id:"2",
        title:"Power and Hand ToolKi",
        price:"Upto 80% Off",
        desc:"Best Selling",
        image:"https://rukminim2.flixcart.com/image/200/200/power-hand-tool-kit/v/v/g/gsb-500-re-kit-bosch-original-imaeg63dbybtqzfy.jpeg?q=70"
      },
      {
        id:"3",
        title:"Sanatizer Sprayers",
        price:"Upto 75% Off",
        desc:"Best Selling",
        image:"https://rukminim2.flixcart.com/image/200/200/xif0q/hose-connector/b/q/b/1-2-brass-nozzle-water-spray-gun-hose-nozzles-pipe-for-gardening-original-imaghbm9jgx9vgxh.jpeg?q=70"
      },
      {
        id:"4",
        title:"Diyas Candle Holders",
        price:"Upto 80% Off",
        desc:"Best Selling",
        image:"https://rukminim2.flixcart.com/image/200/200/j5bceq80/diya/s/t/g/etl2042-etrendz-original-imaecayyx9nedubp.jpeg?q=70"
      },
      {
        id:"5",
        title:"Showpieces",
        price:"Upto 70% Off",
        desc:"Big Discount",
        image:"https://rukminim2.flixcart.com/image/200/200/krtjgcw0/showpiece-figurine/q/8/d/sg-royalbox-original-imag5gy2rxubzkgq.jpeg?q=70"
      },
      {
        id:"6",
        title:"Welding Machine",
        price:"Upto 50% Off",
        desc:"Best Selling",
        image:"https://rukminim2.flixcart.com/image/200/200/xif0q/welding-machine/c/7/3/15-m220-76-arc-igbt-220a-with-hot-start-anti-stick-functions-arc-original-imaggaxpxcs4ffwg.jpeg?q=70"
      },
      {
        id:"7",
        title:"Paint Holders",
        price:"Upto 40% Off",
        desc:"Big Discount",
        image:"https://rukminim2.flixcart.com/image/200/200/k02qnww0/paint-roller/p/h/r/wood-grain-for-wall-decore-wood-design-special-effect-shine-original-imafg3hq3p8ggc8a.jpeg?q=70"
      },
    ]
}

