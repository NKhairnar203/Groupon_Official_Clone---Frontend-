import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="w-64 h-full bg-gray-800 text-white fixed">
      <h2 className="text-2xl font-semibold p-4">Admin Panel</h2>
      <ul>
        <li className="p-4 hover:bg-gray-700">
          <Link to="/">Dashboard</Link>
        </li>
        <li className="p-4 hover:bg-gray-700">
          <Link to="/users">Users</Link>
        </li>
        <li className="p-4 hover:bg-gray-700">
          <Link to="/products">Products</Link>
        </li>
        <li className="p-4 hover:bg-gray-700">
          <Link to="/orders">Orders</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
