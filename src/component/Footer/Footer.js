import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
// import emailjs from "@emailjs/browser";
const Footer = () => {
  return (
    <>
      {/* <div className='box-content'> */}
     
      <div className=" container py-5 grid  text-white w-full bg-slate-800 m-4">
        <div className="grid grid-cols-4 max-lg:grid-cols-2 max-sm:grid-cols-1 ">
          <div className="grid mx-4 max-lg:mx-16 max-md:mx-10">
            <h1 className="text-2xl text-amber-500 mb-4 font-pacifico">
              Company
            </h1>
            <div className="flex space-x-2">
              <i class="fa-solid fa-angle-right p-1"></i>
              <a href="">About Us</a>
            </div>
            <div className="flex space-x-2">
              <i class="fa-solid fa-angle-right p-1"></i>
              <a href="">Contact Us</a>
            </div>
            <div className="flex space-x-2">
              <i class="fa-solid fa-angle-right p-1"></i>
              <a href="">Reservation</a>
            </div>
            <div className="flex space-x-2">
              <i class="fa-solid fa-angle-right p-1"></i>
              <a href="">Privacy Policy</a>
            </div>
            <div className="flex space-x-2">
              <i class="fa-solid fa-angle-right p-1"></i>
              <a href="">Terms & Condition</a>
            </div>
          </div>
          <div className="grid max-lg:mx-16 max-md:mx-10">
            <h1 className="text-2xl text-amber-500 font-pacifico mb-4">Contact</h1>
            <div className="flex space-x-2">
              <i class="fa-solid fa-location-dot p-2"></i>
              <p>xyz ahmedabad,Gujarat</p>
            </div>
            <div className="flex space-x-2">
              <i class="fa-solid fa-phone p-2"></i>
              <p>91 8792315016</p>
            </div>
            <div className="flex space-x-2">
              <i className="fa-solid fa-envelope p-2"></i>
              <p>info@example.com</p>
            </div>

            <div>
              <i className="fa-brands fa-twitter p-2 m-1 border-2 rounded-full"></i>
              <i class="fa-brands fa-facebook-f p-2 m-1 border-2 rounded-full"></i>
              <i className="fa-brands fa-youtube p-2 m-1 border-2 rounded-full"></i>
              <i className="fa-brands fa-linkedin p-2 m-1 border-2 rounded-full"></i>
            </div>
          </div>
          <div className="grid max-lg:mx-16 max-md:mx-10">
            <h1 className="text-2xl text-amber-500 mb-4 font-pacifico">Opening</h1>
            <a href="">Monday - Saturday</a>
            <a href="">9AM - 11PM</a>
            <a href="">Sunday</a>
            <a href="">10AM - 8PM</a>
            {/* <a href="">Terms & Condition</a> */}
          </div>
          <div className="grid max-lg:mx-16 max-md:mx-10">
            <h1 className="text-2xl text-amber-500 font-pacifico mb-4">newsletter</h1>
            <p>Dolor amet sit justo amet elitr clita ipsim elitr esr.</p>
            <div className="">
              <div className="flex ">
                <div>
                  <input
                    type="text"
                    placeholder="Your email"
                    className="p-4 w-80 text-black max-md:w-52 max-sm:w-64 max-2xl:w-72 max-xl:w-60"
                  />
                </div>
                <div>
                  <button className="bg-amber-500 px-4 py-2 mx-[-100px] my-2">
                    <Link to="signup">
                    SIGNUP
                    </Link>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr className="m-5"/>
        <div className="flex justify-between">
          <div>
            <p className="ml-5 hover:text-amber-500">@ 2023 BrowserStack. All rights reserved.</p>
          </div>
          <div className="">
            <a href="#" className="px-4 hover:text-amber-500">Terms of Service</a>
            <a href="#" className="px-4 hover:text-amber-500">Privacy Policy</a>
            <a href="#" className="px-4 hover:text-amber-500">Cookie Policy</a>
            <a href="#" className="px-4 hover:text-amber-500">Sitemap</a>
          </div>
        </div>
      </div>
    </>
  );
};
export default Footer;
