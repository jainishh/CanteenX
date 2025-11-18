import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar.jsx";
import Footer from "./components/Footer/Footer";

// Pages
import Home from "./pages/CustomerPages/Home/Home";
import MenuParent from "./pages/CustomerPages/Menu/MenuParent/MenuParent";
import ReviewsParent from "./pages/CustomerPages/Reviews/ReviewsParent/ReviewsParent";
import OrdersParent from "./pages/CustomerPages/Orders/OrdersParent/OrdersParent";
import ContactParent from "./pages/CustomerPages/Contact/ContactParent/ContactParent";
import TeamParent from "./pages/CustomerPages/Team/TeamParent/TeamParent";
import NotFound from "./pages/NotFound/NotFound";

const App = () => {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="menu" element={<MenuParent />} />
        <Route path="reviews" element={<ReviewsParent />} />
        <Route path="orders" element={<OrdersParent />} />
        <Route path="contact" element={<ContactParent />} />
        <Route path="team" element={<TeamParent />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </>
  );
};

export default App;
