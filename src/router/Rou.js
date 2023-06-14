import React,{useState} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "../component/navbar/navbar/Navbar";
// import Footer from "../Footer/Footer";
import Home from "../component/pages/pages/Home";
import About from "../component/pages/pages/About";
import Contact from "../component/pages/pages/Contact";
import Menu from "../component/Menu/Menu";
import Cart from "../component/Menu/Cart";
import Order from "../component/Order.js/Order"
import Login from "../component/Login";
import Services from "../component/pages/pages/Services";
import { Provider } from "react-redux";
import store from '../component/store/Store'
import BookaTable from "../component/pages/pages/Bookatable";
import SignUp from "../component/SignUp";
// import BookaTable from "../component/pages/pages/Bookatable";

const Rou = () => {
// const {prod} = props;
  // const handleClick = (item)=>{

  // }
  // const [prod,setProd]=useState([]);
  return (
    <>
    <Provider store={store}>
      <BrowserRouter>
        <Navbar size={Cart.length}/>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/menu" element={<Menu/>} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/bookatable" element={<BookaTable />} />
          <Route path="/order" element={<Order />}/>
        </Routes>

       {/* <SignUp/> */}
      </BrowserRouter>
      </Provider>
    </>
  );
};

export default Rou;
