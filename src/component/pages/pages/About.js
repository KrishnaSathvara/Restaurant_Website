import React from "react";
import Footer from "../../Footer/Footer";

const About = () => {
  return (
    <>
    <div className="grid grid-cols-12 gap-10 p-16 max-md:grid-cols-6 ">
      <div className="col-span-6">
        <div className="grid grid-cols-2 gap-4 ">
          <div className="">
            <img
              src="Images/about-1.jpg"
              alt=""
              className="h-full w-full"
            />
          </div>

          <div className="relative">
            <img
              src="Images/about-2.jpg"
              alt=""
              className="absolute bottom-0 left-0 h-64"
            />
          </div>

          <div className="relative ">
            <img
              src="Images/about-3.jpg"
              alt=""
              className="absolute top-0 right-0 h-64"
            />
          </div>

          <div>
            <img
              src="Images/about-4.jpg"
              alt=""
            />
          </div>
        </div>
      </div>

      <div className=" col-span-6 py-20">
        <h4 className="text-amber-500 font-pacifico">About Us_____</h4>
        <h1 className="text-5xl font-bold text-slate-800">Welcome to <i className="p-2 text-amber-500 fas fa-utensils"></i>Restoran</h1>
        <br />
        <p className="text-xl">
        Welcome to Our <strong >Restoran</strong> We are delighted to have you as our guest. Step into our warm and inviting atmosphere, where delicious aromas and exceptional service await you. Indulge in our culinary delights, carefully crafted by our talented chefs using the freshest ingredients. <br/><br />
        Whether you're here for a romantic dinner, a casual lunch, or a celebratory occasion, our dedicated staff is here to ensure that your dining experience exceeds your expectations. <br /><br />
        Thank you for choosing Restoran. Get ready to embark on a culinary journey like no other.
          <br />
         
          
        </p>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default About;
