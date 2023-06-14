// import React, { useContext } from "react";
// import { useState } from "react";
// // import { Data } from "../Data";
// import CartContext from "./CartContext";

// const Cart = ()=>{
//     const {prod} = useContext(CartContext)
//     const [Quantity,setQuantity] = useState(1);

//     const Increment = ()=>{
//         // if(item.id== Data.Breakfast.id){
//         setQuantity(Quantity + 1)
        
//     }
//  const Decrement = ()=>{
//     if(Quantity > 1){
//     setQuantity(Quantity - 1)
//     }
//     }

//     return(
//         <>
//         {/* <h2>{prod}</h2> */}
//         <div>This is a car</div>
//         <header>
//             <h2 className="text-sm p-2 font-medium">Continue Shopping</h2>
//             <hr/>
//             </header>
//         <section>
      
//             <div>
//                 <h2 className="text-xl font-semibold p-2">Shopping Cart</h2>
//                 <div className="box-content p-4">
//                     <div className="grid grid-cols-5  bg-gray-300 p-8">
//                        {prod.map((item)=>{
//                             return(
//                                 <>
                                
//                         <div>
//                             <div className="w-24 h-24">
//                             <img src={item.image}/>
//                             </div>
//                         </div>
//                         <div>
//                         <h3>{item.name}</h3>
//                         </div>
//                         <div>
//                             {item.price}
//                         </div>
//                         <div>
//                         <button onClick={()=>Decrement()}>
//                         <i className="fa-solid fa-minus px-2"></i>
//                         </button>
//                         <input type="text" className="w-10 text-center" value={Quantity} />
//                         <button onClick={()=>Increment()}>
//                         <i className="fa-solid fa-plus px-2"></i>
//                         </button>
//                         </div>
//                         <div>
//                             <button className="border-2 bg-amber-500 text-white border-black px-2">Remove</button>
//                         </div>
                
//                     </>
//                     )
//                 })}
              
//                 </div>
//             </div>
//         </div>
//         </section>
//         </>
//     )
// }
// export default Cart;