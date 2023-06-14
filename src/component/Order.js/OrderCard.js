import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { remove, upadateCart } from "../store/orderslice";

const OrderCard = ({ item }) => {
  const dispatch = useDispatch();

  const [amount, setAmount] = useState(item.qty);

  function setDecrease() {
    if (amount === 1) {
      setAmount(1);
    } else {
      setAmount((qan) => qan - 1);
      setType("dec");
    }
  }

  function setIncrease() {
    if (amount === 10) {
      setAmount(10);
    } else {
      setAmount((qan) => qan + 1);
      setType("inc");
    }
  }
  function setType(type) {
    const data = {
      ...item,
      quantity: amount,
      type: type,
    };
    dispatch(upadateCart(data));
  }

  const removehandler = (itemId) => {
    dispatch(remove(itemId));
  };
  return (
    <div className="grid grid-cols-9  py-6">
      <div className="col-span-4">
        <div className="flex items-center">
          <img src={item.image} className="w-16 h-16" alt="" />
          <h1 className="pl-4 text-lg">
            {/* Beige knitted elastic runner shoes */}
            {item.name}
          </h1>
        </div>
      </div>
      <div className="col-span-5 ">
        <div className="grid grid-cols-8 h-full">
          <div className="col-span-2 grid place-content-center ">
            <h1 className=" text-lg"> {item.price}₹</h1>
          </div>
          <div className="col-span-3 grid place-content-center">
            <h1 className=" text-lg">
              <div className=" w-full">
                <div>
                  <div className="flex justify-start bg- w-full">
                    <div className="bg-offwhite border-collapse">
                      <button
                        className="lg:w-10 lg:h-10 w-6 h-6 border-2 "
                        onClick={setDecrease}
                      >
                        -
                      </button>
                    </div>
                    <div className="lg:w-10 lg:h-10 w-6 h-6 border-y-2  grid place-content-center bg-offwhite">
                      <span>{amount}</span>
                    </div>
                    <div className="bg-offwhite">
                      <button
                        className="lg:w-10 lg:h-10 w-6 h-6 border-2"
                        onClick={setIncrease}
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </h1>
          </div>
          <div className="col-span-2 grid place-content-center">
            <div className="text-lg text-green font-medium">
              <p> {(amount * item.price).toFixed(2)}₹</p>
            </div>
          </div>
          <div className="col-span-1 grid items-center place-content-center">
            <button onClick={() => removehandler(item.id)}>
              <i className="fa-solid fa-xmark"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderCard;
