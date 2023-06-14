import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Navbar from "./Navbar";
// import Product from "./Product";
import Menu from "./Menu";
import Cart from "./Cart";
import { CartContext } from "./cartContect";

const MainCart = () => {
  const [prod, setProd] = useState([]);
  console.log(prod)
  // const [total,setTotal] = useState([]);

  const AddtoCart = (val) => {
    setProd([...prod, val]);
  };

//   const removehandler = (val) => {
//     const filter = prod.filter((item) => item.id !== val.id);
//     setProd(filter);
//   };
// const Amount = (val)=>{
//   setTotal();
// }
  return (
    <div>
      <CartContext.Provider
        value={{
          prod: prod,
          AddtoCart: AddtoCart,
        //   removehandler: removehandler,
        }}
      >
        <BrowserRouter>
          {/* <Navbar /> */}
          <Routes>
            <Route path="/menu" element={<Menu />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </BrowserRouter>
      </CartContext.Provider>
    </div>
  );
};

export default MainCart;
