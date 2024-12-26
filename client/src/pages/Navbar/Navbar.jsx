import React from "react";

import {
  FavouriteIcon,
  Menu01Icon,
  ShoppingBasket01Icon,
  UserCircleIcon,
} from "hugeicons-react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const pathLocation = useLocation();

  return (
    <>
      <header>
        <nav className="w-full max-w-[90%] mx-auto flex items-center justify-between py-6 text-slate-50 text-sm">
          <h2 className="font-bold text-[2rem] uppercase text-white ">
            chronos
          </h2>

          <ul className=" gap-x-7 text-[1rem] text-slate-300 uppercase hidden md:flex">
            <li>
              <Link
                to="/watches"
                className={
                  pathLocation.pathname === "/watches" ? "text-orange-700" : ""
                }
              >
                watches
              </Link>
            </li>
            <li>
              <Link
                to="/warranty"
                className={
                  pathLocation.pathname === "/warranty" ? "text-orange-700" : ""
                }
              >
                {" "}
                warranty & services
              </Link>
            </li>
            <li>
              <Link
                to="/stores"
                className={
                  pathLocation.pathname === "/stores" ? "text-orange-700" : ""
                }
              >
                stores
              </Link>
            </li>
          </ul>

          <ul className=" gap-x-8 hidden md:flex">
            <li className="flex gap-3">
              {/* money type */}
              <div>
                <select
                  id="money-type"
                  name="money-type"
                  className="rounded-2xl bg-purple-200/90 text-black border backdrop-blur-lg accent-transparent py-2 px-3 outline-none "
                >
                  <option value="analog">INR</option>
                  <option for="money-type">EUR </option>
                  <option value="digital">USD</option>
                </select>
              </div>
              {/* language type */}
              <div>
                <select
                  id="language-type"
                  name="language-type"
                  className="rounded-2xl bg-indigo-200/60 py-2 px-3 outline-none inline-block text-black"
                >
                  <option for="language-type">ENG </option>
                  <option value="analog">FR</option>
                  <option value="digital">GER</option>
                </select>
              </div>
            </li>
            <li className="relative ">
              <FavouriteIcon size={30} strokeWidth={0.8} color="white" />
              {/* <ShoppingBasket01Icon /> */}
              <span className="bg-slate-500 text-white px-1 rounded-3xl absolute top-5 left-2  ">
                0
              </span>
            </li>{" "}
            <li>
              <UserCircleIcon size={30} strokeWidth={0.8} color="white" />
            </li>
            <li className="relative ">
              <ShoppingBasket01Icon size={30} strokeWidth={0.8} color="white" />
              <span className="bg-slate-50 text-slate-900 px-1 rounded-3xl absolute top-5 left-2  ">
                0
              </span>
            </li>
          </ul>

          {/* menu */}
          <div className="block md:hidden">
            <Menu01Icon />
          </div>
        </nav>
        {/* new navbar for small devices */}
        {/* TODO : remove hidden from here while developing new nav for small devices */}
        <div className="bg-slate-500 w-full h-screen hidden md:hidden">
          <ul className=" gap-x-7 text-[1rem] text-slate-300 uppercase \">
            <li>
              <Link
                to="/watches"
                className={
                  pathLocation.pathname === "/watches" ? "text-orange-700" : ""
                }
              >
                watches
              </Link>
            </li>
            <li>
              <Link
                to="/warranty"
                className={
                  pathLocation.pathname === "/warranty" ? "text-orange-700" : ""
                }
              >
                {" "}
                warranty & services
              </Link>
            </li>
            <li>
              <Link
                to="/stores"
                className={
                  pathLocation.pathname === "/stores" ? "text-orange-700" : ""
                }
              >
                stores
              </Link>
            </li>
          </ul>
        </div>
      </header>
    </>
  );
};

export default Navbar;
