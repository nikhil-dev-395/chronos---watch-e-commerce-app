import { BrowserRouter, Route, Routes } from "react-router-dom";
/* FILES */
import Home from "./pages/Home/Home.jsx";
import Navbar from "./pages/Navbar/Navbar.jsx";
import Footer from "./pages/Footer/Footer.jsx";
import WatchPage from "./pages/watch/WatchPage.jsx";
import ShoppingCart from "./pages/Cart/ShoppingCart.jsx";
import WatchDetails from "./pages/watch/WatchDetails.jsx";
import StorePage from "./pages/Store/StorePage.jsx";
import UserPage from "./pages/user/UserPage.jsx";
import ServiceAndWArranty from "./pages/service&Warranty/ServiceAndWArranty.jsx";

const App = () => {
  return (
    <div className="bg-primaryBg cursor-default text-white">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<ShoppingCart />} path="/ShoppingCart" />
          <Route element={<WatchPage />} path="/watches" />
          <Route element={<WatchDetails />} path="/WatchDetails" />
          <Route element={<StorePage />} path="/stores" />
          <Route element={<UserPage />} path="/user" />
          <Route element={<ServiceAndWArranty />} path="/service&warranty" />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
