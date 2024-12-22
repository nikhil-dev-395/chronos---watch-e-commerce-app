import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
/* FILES */
import Home from "./pages/Home/Home.jsx";
import Navbar from "./pages/Navbar/Navbar.jsx";
import Footer from "./pages/Footer/Footer.jsx";
import Cart from "./pages/Cart/Cart.jsx"
const App = () => {
  return (
    <div className="bg-[#050811] cursor-default">
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
