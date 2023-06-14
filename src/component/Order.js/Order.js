import React from "react";
import { useSelector } from "react-redux";
import { useCallback } from "react";
// import useRazorpay from "react-razorpay";

import { Link } from "react-router-dom";
import OrderCard from "./OrderCard";
import Footer from "../Footer/Footer";

const Order = () => {
  // const [product,setProduct] = useState(false);
  const { orderList: list, total } = useSelector((state) => state.order);

  // const handlePayment = useCallback(() => {
  //   const order = await createOrder(params);

  //   const options: RazorpayOptions = {
  //     key: "rzp_test_z6uWG2LqOlXFCT",
  //     amount: "3000",
  //     currency: "INR",
  //     name: "Acme Corp",
  //     description: "Test Transaction",
  //     image: "https://example.com/your_logo",
  //     order_id: order.id,
  //     handler: (res) => {
  //       console.log(res);
  //     },
  //     prefill: {
  //       name: "Piyush Garg",
  //       email: "youremail@example.com",
  //       contact: "9999999999",
  //     },
  //     notes: {
  //       address: "Razorpay Corporate Office",
  //     },
  //     theme: {
  //       color: "#3399cc",
  //     },
  //   };

  //   const rzpay = new Razorpay(options);
  //   rzpay.open();
  // }, [Razorpay]);


  console.log(total);
  return (
    <>
    <div>
      <div className="py-4">
        <div className="">
          <h1 className="text-4xl text-center font-semibold">Orders</h1>
        </div>
      </div>

      <hr />
      
      <div className="2xl:px-36 xl:px-28 md:px-12 sm:px-8 px-2 py-8">
        {list && list.length === 0 ? (
          <div>
            <h1 className="font-bold text-base">No products in the cart.</h1>
          </div>
        ) : (
          <div className="grid grid-cols-7 gap-3">
            <div className="col-span-5">
              <div className="grid grid-cols-9 py-4 text-neutral-500">
                <div className="col-span-4">
                  <div>
                    <h1>product</h1>
                  </div>
                </div>
                <div className="col-span-5 ">
                  <div className="grid grid-cols-8">
                    <div className="col-span-2 grid place-content-center">
                      <h1>Price</h1>
                    </div>
                    <div className="col-span-3 grid place-content-center">
                      <h1>Quantity</h1>
                    </div>
                    <div className="col-span-2 grid place-content-center">
                      Total
                    </div>
                    <div className="col-span-1"></div>
                  </div>
                </div>
              </div>
              <hr />
              {list.map((item) => {
                return <>{<OrderCard item={item} />}</>;
              })}

              <hr />
              <div className="py-6">
                <div>
                  <div>
                    <form action="">
                      <div className="flex">
                        <input
                          type="text"
                          className="px-5 py-1.5 w-80 text-lg focus:outline-none border-[1px] focus:border-green  bg-primary focus:bg-white"
                          placeholder="coupen code"
                          name=""
                          id=""
                        />
                        <div className="px-2">
                          <button className="px-3.5 py-1.5 text-lg  border-[1px] border-green transition duration-300 ease-out hover:bg-green hover:text-white text-green">
                            <i className="fa-solid fa-arrow-right-long text-sm"></i>
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-2">
              <div className="p-6 border-dashed border-[1px] bg-primary">
                <form action="">
                  <div>
                    <div>
                      <h1 className="text-lg font-medium pb-2">Cart Total</h1>
                      <hr />
                      <div className="py-4 grid grid-cols-2">
                        <p className="font-medium">Subtotal:</p>
                        <p className="grid place-content-end">
                          {total.toFixed(2)}₹
                        </p>
                      </div>
                      <hr />
                      <div className="py-2 pb-4">
                        <div className="py-2">
                          <h1 className=" font-medium">Shipping:</h1>
                        </div>
                        <div className="py-2">
                          <div>
                            <div className="grid grid-cols-2 py-1">
                              <div className="flex">
                                <div className="grid pt-1.5">
                                  <input
                                    type="radio"
                                    name=""
                                    className="h-4 w-4 "
                                    size="15"
                                    id=""
                                  />
                                </div>
                                <label htmlFor="shipping" className="pl-2">
                                  Free Shippimg
                                </label>
                              </div>
                              <div className="grid place-content-end">
                                <p>₹0.00</p>
                              </div>
                            </div>
                            <div className="grid grid-cols-2 py-1">
                              <div className="flex">
                                <div className="grid pt-1.5">
                                  <input
                                    type="radio"
                                    name=""
                                    className="h-4 w-4 "
                                    size="15"
                                    id=""
                                  />
                                </div>
                                <label htmlFor="shipping" className="pl-2">
                                  Standart:
                                </label>
                              </div>
                              <div className="grid place-content-end">
                                <p>₹10.00</p>
                              </div>
                            </div>
                            <div className="grid grid-cols-2 py-1">
                              <div className="flex">
                                <div className="grid pt-1.5">
                                  <input
                                    type="radio"
                                    name=""
                                    className="h-4 w-4 "
                                    size="15"
                                    id=""
                                  />
                                </div>
                                <label htmlFor="shipping" className="pl-2">
                                  Express:
                                </label>
                              </div>
                              <div className="grid place-content-end">
                                <p>₹20.00</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div>
                          <div>
                            <h1 className="font-medium">
                              Estimate for Your Country
                            </h1>
                          </div>
                          <div className="py-1">
                            <button className="border-b-[1px] text-neutral-400 border-neutral-500 hover:border-green hover:text-green">
                              Change address
                            </button>
                          </div>
                        </div>
                      </div>
                      <hr />
                      <div className="">
                        <div className="grid grid-cols-2 py-4 text-green font-medium">
                          <p className="font-medium text-lg">Total:</p>
                          <p className="grid place-content-end">
                            {(30 + total).toFixed(2)}₹
                          </p>
                        </div>
                        <div>
                          <button className="w-full border-2 border-green py-2 transition duration-300 ease-out hover:bg-green hover:text-white text-green" >
                            PROCEED TO CHECKOUT
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
              <div>
                <div className="py-4">
                  <button className="w-full border-2 py-2 hover:bg-primary hover:text-green transition duration-300 ease-out">
                    <p>
                      CONTINUE SHOPPING
                      <span className="px-2">
                        <i className="fa-solid fa-arrows-rotate"></i>
                      </span>
                    </p>
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      
      </div>

    <Footer/>
    </>
  );
};

export default Order;
