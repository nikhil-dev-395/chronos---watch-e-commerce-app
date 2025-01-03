import React, { useState } from "react";
import {
  Cancel01Icon,
  FavouriteIcon,
  Menu01Icon,
  ShoppingBasket01Icon,
  UserCircleIcon,
} from "hugeicons-react";
import { Link, useLocation } from "react-router-dom";

/*    for navigating , this is just a reusable component  */
const NavItem = ({ path, label, onClick }) => {
  const pathLocation = useLocation();
  return (
    <li className="hover:text-yellow-600 text-3xl md:text-base font-bold">
      <Link
        to={path}
        onClick={onClick}
        className={pathLocation.pathname === path ? "text-orange-700" : ""}
      >
        {label}
      </Link>
    </li>
  );
};

/* main navbar component is start from here for desktop to mobile respectively */
const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  return (
    <header className="">
      <nav className="w-full max-w-[90%] mx-auto flex items-center justify-between py-6 text-slate-50 text-sm">
        <h2 className="font-bold text-[2rem] uppercase text-white">chronos</h2>

        <ul className="gap-x-7 text-[1rem] text-slate-300 uppercase hidden md:flex">
          <NavItem path="/" label="home" />
          <NavItem path="/watches" label="watches" />
          <NavItem path="/warranty" label="warranty & services" />
          <NavItem path="/stores" label="stores" />
        </ul>

        <ul className="gap-x-8 hidden md:flex">
          <li className="flex gap-3">
            <select
              id="money-type"
              name="money-type"
              className="rounded-2xl bg-purple-200/90 text-black border py-2 px-3 outline-none"
            >
              <option value="INR">INR</option>
              <option value="EUR">EUR</option>
              <option value="USD">USD</option>
            </select>
            <select
              id="language-type"
              name="language-type"
              className="rounded-2xl bg-indigo-200/60 py-2 px-3 outline-none text-black"
            >
              <option value="ENG">ENG</option>
              <option value="FR">FR</option>
              <option value="GER">GER</option>
            </select>
          </li>
          <li className="relative">
            <Link to="/favorite">
              <FavouriteIcon size={30} strokeWidth={0.8} color="white" />
              <span className="bg-slate-500 text-white px-1 rounded-3xl absolute top-5 left-2">
                0
              </span>
            </Link>
          </li>
          <li>
            <Link to="/user">
              <UserCircleIcon size={30} strokeWidth={0.8} color="white" />
            </Link>
          </li>
          <li className="relative">
            <Link to="/ShoppingCart">
              <ShoppingBasket01Icon size={30} strokeWidth={0.8} color="white" />
              <span className="bg-slate-50 text-slate-900 px-1 rounded-3xl absolute top-5 left-2">
                0
              </span>
            </Link>
          </li>
        </ul>

        <div
          className="block md:hidden"
          onClick={() => setMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <Cancel01Icon /> : <Menu01Icon />}
        </div>
      </nav>

      {/* mobile device navbar */}
      {isMenuOpen && (
        <div className=" fixed top-0 left-0 w-full h-screen bg-black z-50 ">
          <div className="flex items-center justify-between w-[90%] mx-auto pt-3">
            <h2 className="font-bold text-[2rem] uppercase text-white">
              chronos
            </h2>

            <div
              className="block md:hidden"
              onClick={() => setMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <Cancel01Icon /> : <Menu01Icon />}
            </div>
          </div>

          <ul className="gap-x-7 text-[1rem] text-slate-300 uppercase flex flex-col px-10 py-8 justify-center gap-y-8 ">
            <NavItem onClick={() => setMenuOpen(false)} path="/" label="home" />
            <NavItem
              onClick={() => setMenuOpen(false)}
              path="/watches"
              label="watches"
            />
            <NavItem
              onClick={() => setMenuOpen(false)}
              path="/warranty"
              label="warranty & services"
            />
            <NavItem
              onClick={() => setMenuOpen(false)}
              path="/stores"
              label="stores"
            />
            {/* favorite */}
            <div className="flex gap-4">
              <NavItem
                onClick={() => setMenuOpen(false)}
                path="/favorite"
                label="favorite"
              />
              <div className="relative">
                <FavouriteIcon size={30} strokeWidth={0.8} color="white" />
                <span className="bg-slate-500 text-white px-1 rounded-3xl absolute top-5 left-2">
                  0
                </span>
              </div>
            </div>

            {/* cart */}

            <div className="flex gap-4">
              <NavItem
                onClick={() => setMenuOpen(false)}
                path="/ShoppingCart"
                label="cart"
              />
              <div className="relative">
                <ShoppingBasket01Icon
                  size={30}
                  strokeWidth={0.8}
                  color="white"
                />
                <span className="bg-slate-500 text-white px-1 rounded-3xl absolute top-5 left-2">
                  0
                </span>
              </div>
            </div>
            {/*
             * REMEMBER : this is for selecting a money and language
             */}
            <li className="flex gap-7 pt-10">
              <select
                id="money-type"
                name="money-type"
                className="rounded-2xl bg-purple-200/90 text-black border py-2 px-3 outline-none"
              >
                <option value="INR">INR</option>
                <option value="EUR">EUR</option>
                <option value="USD">USD</option>
              </select>
              <select
                id="language-type"
                name="language-type"
                className="rounded-2xl bg-indigo-200/60 py-2 px-3 outline-none text-black"
              >
                <option value="ENG">ENG</option>
                <option value="FR">FR</option>
                <option value="GER">GER</option>
              </select>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
