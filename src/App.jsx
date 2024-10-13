import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Sidebar from "./admin/components/Sidebar";
import Header from "./admin/components/Header";
import Dashboard from "./admin/components/Dashboard";
import Users from "./admin/admin-pages/Users";
import Products from "./admin/admin-pages/Products";
import Orders from "./admin/admin-pages/Orders";
import AllRoutes from "./components/AllRoutes";

const App = () => {
  return (
    <Router>
    <AllRoutes/>
      {/* <div className="flex">
        <Sidebar />
        <div className="flex-1 ml-64">
          <Header />
          <div className="p-6">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/users" element={<Users />} />
              <Route path="/products" element={<Products />} />
              <Route path="/orders" element={<Orders />} />
            </Routes>
          </div>
        </div>
      </div> */}
    </Router>
  );
};

export default App;
