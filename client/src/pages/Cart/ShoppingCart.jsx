import React from "react";
import Cart from "../../components/shoppingcart/Cart.jsx";
import { Contact02Icon, ContactIcon } from "hugeicons-react";

const ShoppingCart = () => {
  return (
    <section className="w-full md:max-w-[90%] max-w-[95%] h-full py-4  mx-auto">
      <h1 className="text-3xl font-thin uppercase">shopping cart</h1>

      {/* cartContainer our cart and billing section will be avail...  */}
      <div className="grid grid-cols-2 h-full pt-4" id="cartContainer">
        <div
          id="left"
          className=" flex flex-wrap h-screen  overflow-y-auto gap-y-7 md:gap-y-5 hide-scrollbar md:py-3 mt-6 md:mt-3"
        >
          <Cart />
          <Cart />
          <Cart />
          <Cart />
          <Cart />
          <Cart />
          <Cart />
          <Cart />
        </div>
        <div id="right" className="">
          {/* Checkout Section */}
          <div className="max-w-md mx-auto  px-3 pt-6 rounded-lg shadow-md">
            {/* Tax */}
            <div className="flex justify-between  pb-3 mb-3">
              <h1 className="text-gray-400 md:uppercase capitalize text-sm tracking-widest">
                Tax (18%)
              </h1>
              <span className="text-white font-thin text-xs">₹ 894</span>
            </div>

            {/* Total Exclusive of Tax */}
            <div className="flex justify-between  pb-3 mb-3">
              <h1 className="text-gray-400 md:uppercase capitalize md:text-sm text-xs tracking-widest">
                Total excl.tax
              </h1>
              <span className="text-white font-thin md:text-sm text-xs">
                ₹ 1,894
              </span>
            </div>

            {/* Total Inclusive of Tax */}
            <div className="flex justify-between gap-1">
              <h1 className="text-green-400 md:uppercase capitalize md:text-lg text-xs font-mono ">
                Total incl.tax
              </h1>
              <span className="text-green-400 font-bold md:text-lg text-xs">
                ₹ 1,788
              </span>
            </div>

            <div className="">
              <button className="bg-sky-600 py-3 px-4 rounded-2xl mt-10 uppercase ">
                checkout
              </button>
            </div>

            <div className="">
              {/* direct contact */}
              <div className="flex flex-wrap md:flex-nowrap items-center justify-between md:pt-14">
                <span className="flex md:text-xl text-[11px] pt-4 uppercase gap-4 items-center py-3 md:py-0">
                  {" "}
                  direct contact
                  <ContactIcon />
                </span>
                <a href="tel:9359480462">
                  <img
                    src="/Images/nike.jpg"
                    className="w-16 rounded-full"
                    alt="Call"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShoppingCart;
