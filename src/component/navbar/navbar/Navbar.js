import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({size}) => {
  // const Menubar = (e)=>{
  // const Show = ()=>{
  //   if(true){

  //   }
  // }
  // }
  return (
    <>
      {/* <div className="relative w-full space-x-12"> */}
      <div>
        <nav className="bg-slate-800 flex items-center max-lg:grid max-lg:grid-cols-12 lg:justify-between  ">
          {/* <div className='flex justify-between bg-slate-800 text-white '> */}
          <div className="flex text-3xl pt-4 bg-slate-800 text-amber-500 ml-4 max-lg:col-span-11 max-lg:text-center " >
            <i className="p-2 fas fa-utensils max-lg:mx-2 text-amber-500"></i>
            <h1 className="font-bold  text-amber-500">Restoran</h1>
          </div>
          {/* <hr/> */}

          <div className="lg:flex lg:justify-between  max-lg:absolute justify-center bg-slate-800 max-lg:bg-slate-800 max-lg:min-h-[30vh] max-lg:w-full max-lg:left-0 max-lg:top-[9%] mr-5">
            <ul className="flex max-lg:flex-col max-lg:px-6 lg:space-x-4 lg:pt-1 justify-center lg:items-center text-white ">
              <li className="hover:text-amber-500 max-lg:p-2">
                <Link to="/">HOME</Link>
              </li>
              <li className="hover:text-amber-500 max-lg:p-2">
                <Link to="/about">ABOUT</Link>
              </li>
              <li className="hover:text-amber-500 max-lg:p-2">
                <Link to="/services">SERVICES</Link>
              </li>
              <li className="hover:text-amber-500 max-lg:p-2">
                <Link to="/menu">MENU</Link>
              </li>
              <li className="hover:text-amber-500 max-lg:p-2">
                <Link to="/contact">CONTACT</Link>
                {/* <a href="/bookatable">BOOK A TABLE</a> */}
              </li>
              {/* <li  className="hover:text-amber-500 max-lg:p-2">
              <Link to="/cart">Cart</Link>
              </li> */}
            </ul>
            <div className="max-lg:m-2">
            <Link to="/login">
              <button className="bg-amber-500 text-white rounded-sm p-2 m-2 max-lg:block max-lg:mx-6">LOGIN</button>

              </Link>
              <Link to="/bookatable">
              <button className="bg-amber-500 text-white rounded-sm p-2 m-2 max-lg:block max-lg:mx-6">BOOK A TABLE</button>
              </Link>
              <Link to="/order">
              <button className="bg-amber-500 text-white rounded-sm p-2 m-2 max-lg:block max-lg:mx-6">ORDER</button>
              <span className="text-white">{size}</span>
              </Link>
              {/* <button>
                <i className=" p-4 rounded-full text-white bg-amber-500 fa-solid fa-cart-shopping  max-lg:hidden"></i>
              </button> */}
            </div>
          </div>
          {/* <span className="lg:hidden text-white text-2xl max-lg:text-end max-lg:mx-4">
            <i class="fa-solid fa-bag-shopping "></i>
          </span> */}
          {/* <button className="max-lg:col-span-1" >
            <i className="fa-solid fa-bars mr-2 text-2xl text-white lg:hidden overflow:hidden"></i>
          </button> */}

          {/* </div> */}
          {/* </div> */}
        </nav>
      </div>
      <hr />
    </>
  );
};

export default Navbar;
