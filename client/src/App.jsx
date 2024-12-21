import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Cart from "./components/Cart/Cart.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home.jsx";
const App = () => {
  return (
    <div className="bg-[#050811]">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route element={<Home />} path="/" />

          <Route element={<Cart />} path="/cart" />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
