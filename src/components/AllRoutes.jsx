import React from "react";
import Home from "../pages/Home";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const AllRoutes = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default AllRoutes;
