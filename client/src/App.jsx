import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
/* FILES */
import Home from "./pages/Home/Home.jsx";
import Navbar from "./pages/Navbar/Navbar.jsx";
import Footer from "./pages/Footer/Footer.jsx";
import WatchPage from "./pages/watch/WatchPage.jsx";
import ShoppingCart from "./pages/Cart/ShoppingCart.jsx";
const App = () => {
  return (
    <div className="bg-[#050811] cursor-default text-white">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<ShoppingCart />} path="/ShoppingCart" />
          <Route element={<WatchPage />} path="/watches" />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
