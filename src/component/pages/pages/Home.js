import React from 'react'
import './Home.css';
import Testimonial from '../../Menu/Testimonial';
import Footer from '../../Footer/Footer';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
   <>
   <div className='max-lg:mt-80 row py-5  w-full bg-slate-800'>
   <div className='container py-5 m-5'>
   <div className='grid grid-cols-2 items-center '>
    <div className=' justify-items-center items-center text-white mx-16 lg:max-12 max-md:mx-10'>
      <h1 className='font-bold text-5xl p-4'>Enjoy Our <br /> Delicious Meal</h1>
      <p className='font-semibold font:Pacifico,cursive p-4'>Welcome to Our Restoran, where culinary excellence meets exceptional service. Our menu showcases a fusion of flavors, featuring dishes crafted with the finest ingredients. From succulent seafood to mouthwatering steaks, our diverse selection caters to every palate. Immerse yourself in our inviting ambiance, where every detail is designed to enhance your dining experience. Join us for an unforgettable meal at Restoran, where gastronomy takes center stage. <br />
        duo justo manga dolore earat amet </p>
        <div className="ml-4">
        <button className="bg-amber-500 text-white py-2 px-4 rounded-sm"><Link to="/bookatable">BOOK A TABLE</Link></button>
        </div>
    </div>
    <div className="w-2/3 image-round items-center lg:w-2/3 mx-24 max-md:mx-12 max-md:w-2/3">
     <img id="Image" className="transition-all rotate-180  border-white rounded-full" src="Images/hero.png" alt="hhhh"/>
     <img src="E:\React\Resturant website\react-resturant\hero.png" alt="" />
    </div>
   </div>
   </div>
   </div>
   <Testimonial/>
   <Footer/>
   </>
  )
}

export default Home;