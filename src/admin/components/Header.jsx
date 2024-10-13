import React from "react";

const Header = () => {
  return (
    <header className="flex justify-between items-center p-4 bg-gray-100 shadow">
      <h1 className="text-xl font-bold">Admin Dashboard</h1>
      <button className="bg-blue-500 text-white px-4 py-2 rounded">
        Logout
      </button>
    </header>
  );
};

export default Header;
