// import logo from './logo.svg';
import './App.css';
import React from 'react';
import { useState } from 'react';
// import { ReactDOM, Router } from 'react-router-dom';
import Footer from './component/Footer/Footer';
import Bookatable from './component/pages/pages/Bookatable';
// import Menu from './component/Menu/Menu';
import Component from './component/Component';
import Testimonial from './component/Menu/Testimonial';
import Rou from './router/Rou';
// import Login from './component/Login';
// import Navbar from './component/navbar/navbar/Navbar';
// import Home from './component/pages/pages/Home';
// import FetchApi from './component/FetchApi';
// 
const App = ()=>{
 
  // const [prod,setProd]=useState([]);
  // const AddtoCart = (val)=>{
  //   setProd([...prod,val]);
  //   // console.log(val)

  return(
    <>
    {/* <Navbar/>
    <Home/> */}
   <Rou/>
    {/* <Login/> */}
    {/* <Bookatable/> */}
    {/* <Testimonial/>
    <Footer/> */}
    {/* <Component/> */}
    {/* <FetchApi/> */}
    </>
  )
  }
export default App;
