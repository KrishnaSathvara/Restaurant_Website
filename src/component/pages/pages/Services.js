import React from "react";
import Footer from "../../Footer/Footer";

const Services = () => {
  return (
    <>
      {/* <div>Services</div> */}
      <div>
        <div className="mb-5">
          <p className="text-amber-500 text-center font-pacifico">____Our Services____</p>
          <h1 className="text-3xl text-slate-800 font-bold text-center">
            Explore Our Services
          </h1>
        </div>
      </div>
      <div className="flex ml-80 ">
        <div className="shadow-xl border-2 m-2 w-72 h-60 rounded-sm hover:bg-amber-500 hover:text-white">
          <div className="w-32 m-5 mb-2 ">
            <i className="fa fa-3x fa-user-tie  mb-6   "></i>
          </div>
          <div className="mx-5 hover:text-white">
            <h1 className="text-xl font-bold">Master Chefs</h1>
            <p className="mt-2">
              Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet
              diam
            </p>
          </div>
        </div>
        <div className="shadow-xl border-2 m-2 w-72 h-60 rounded-sm hover:text-white hover:bg-amber-500">
          <div className="w-32 m-5 mb-2">
            <i class="fa fa-3x fa-utensils text-primary mb-4 "></i>
          </div>
          <div className="mx-5 hover:text-white">
            <h1 className="text-xl font-bold">Quality Food</h1>
            <p className="mt-2">
              Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet
              diam
            </p>
          </div>
        </div>
        <div className="shadow-xl border-2 m-2 w-72 h-60 rounded-sm hover:text-white hover:bg-amber-500">
          <div className="w-32 m-5 mb-2 ">
            <i class="fa fa-3x fa-cart-plus text-primary mb-4 "></i>
          </div>
          <div className="mx-5 hover:text-white">
            <h1 className="text-xl font-bold">Online Order</h1>
            <p className="mt-2">
              Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet
              diam
            </p>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default Services;
