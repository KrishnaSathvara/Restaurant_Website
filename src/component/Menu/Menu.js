import React, { useState } from "react";
import { useContext } from "react";
import CartContext from "./CartContext";
import { Link } from "react-router-dom";
import { Data } from "../Data";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../store/orderslice";
import Footer from "../Footer/Footer";
// import Cart from "./Cart";

const Menu = () => {
  const dispatch = useDispatch();

  const AddtoCart = useContext(CartContext);
  // const [prod,setProd]=useState([]);

  const [items, setItems] = useState(Data.Breakfast);
  const filterItem = (cateItem) => {
    const updatedItem = Data.Breakfast.filter((currentEle) => {
      return currentEle.category === cateItem;
    });
    setItems(updatedItem);
  };

  // const AddtoCart = (val)=>{
  //     setProd([...prod,val]);
  //     // console.log(val)
  // }

  const handleAdd = (item) => {
    // dispatch((item));
    dispatch(add(item));
    // console.log(item);
  };
  return (
    <>
      {/* <Cart prod={prod} setProd={setProd}/> */}
      <div>
        <div className="text-center ">
          <h5 className="text-amber-500 font-pacifico font-medium">
            Food Menu
          </h5>
          <h1 className="mb-5 text-3xl font-semibold">Most Popular Items</h1>
        </div>
        <div className="mb-10">
          <ul className="flex justify-center">
            <li className="border-b-2 hover:border-amber-500">
              <button onClick={() => setItems(Data.Breakfast)}>
                <h3 className="font-medium p-4">All</h3>
              </button>
            </li>
            <li className="border-b-2 hover:border-amber-500">
              <a href="#" className="flex">
                <i class="fa-solid fa-mug-saucer p-2 text-xl text-amber-500"></i>
                <div>
                  <button onClick={() => filterItem("Breakfast")}>
                    <h6 className="text-sm">Popular</h6>
                    <h3 className="font-medium">Breakfast</h3>
                  </button>
                </div>
              </a>
            </li>
            <li className="border-b-2 hover:border-amber-500">
              <a href="#" className="flex">
                <i class="fa-solid fa-burger p-2 text-xl text-amber-500"></i>
                <div>
                  <button onClick={() => filterItem("Lunch")}>
                    <h6 className="text-sm">Special</h6>
                    <h3 className="font-medium">Lunch</h3>
                  </button>
                </div>
              </a>
            </li>
            <li className="border-b-2 hover:border-amber-500">
              <a href="#" className="flex">
                <i class="fa-solid fa-utensils p-2 text-xl text-amber-500"></i>
                <div>
                  <button onClick={() => filterItem("Dinner")}>
                    <h6 className="text-sm">Lovely</h6>
                    <h3 className="font-medium">Dinner</h3>
                  </button>
                </div>
              </a>
            </li>
          </ul>
        </div>

        <div className="grid grid-cols-3 gap-6 mx-16 max-sm:mx-5 max-md:mx-20 max-lg:mx-40 max-lg:my-52 max-lg:grid-cols-1 max-xl:mx-12 max-xl:grid-cols-2 ">
          {items.map((item) => {
            return (
              <>
                {/* <div className="shadow-xl border-2 mb-5 w-[450px] h-40 rounded-sm hover:transition-transform ">
        <div className="grid grid-cols-8 ">
          <div className="col-span-3 mr-2 hover:scale-110">
            <img src={item.image} className="w-40  " alt="Images"/>
          </div>
          <div className="col-span-5 mt-2">
            <h2 className="font-bold text-xl">{item.name}</h2>
            <p className="mt-2">{item.description}</p>
            <div className="flex justify-between mt-2">
            <div>
              <h4>Price : {item.price}</h4>
            </div>
            <div className="mr-2">
              <button className="border-2 rounded-sm px-2 bg-amber-500 text-white hover:scale-110">Order Now</button>
            </div>
            </div>
          </div>
        </div>
        </div> */}
                <div className="shadow-xl border-2 mb-5 w-[450px] rounded-sm hover:transition-transform ">
                  <div className="grid grid-cols-6 gap-4">
                    <div className="col-span-2 hover:scale-110">
                      <img src={item.image} className="h-32 w-full" alt="" />
                    </div>
                    <div className="col-span-4">
                      <div>
                        <h2 className="font-bold text-xl">{item.name}</h2>
                        <p>{item.description}</p>
                      </div>
                      <div className="flex justify-between">
                        <div>
                          <h4 className="font-semibold">
                            Price :{" "}
                            <span className="text-amber-500">{item.price}</span>
                          </h4>
                        </div>
                        <div className="mr-2 hover:scale-110">
                          {/* <Link to="/cart"> */}

                          <button
                            onClick={() => handleAdd(item)}
                            className="border-2 rounded-sm px-2 bg-amber-500 text-white hover:scale-110"
                          >
                            Order Now
                          </button>
                          {/* </Link> */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
      <Footer/>
    </>
  );
};
export default Menu;
