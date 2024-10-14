import React from "react";
import Home from "../pages/Home";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ProductDetail from "../pages/ProductDetail";
import BuyPage from "../pages/BuyPage";

const PrivateRoute = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  if (!user) {
    alert("Please, Login First!");
  }
};

const AllRoutes = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/deal-detail/:id" element={<ProductDetail />} />
        <Route
          path="/buy-detail/:id"
          element={
            // <PrivateRoute>
              <BuyPage />
            // </PrivateRoute>
          }
        />
      </Routes>
      <Footer />
    </div>
  );
};

export default AllRoutes;
