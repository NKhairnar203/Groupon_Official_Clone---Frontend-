import React, { useState, useEffect } from "react";
import Logo from "../assets/logo1.svg";
import {
  RiSearchLine,
  RiHeartLine,
  RiShoppingCart2Line,
  RiNotification3Line,
  RiCloseLine,
} from "@remixicon/react";
import Badge from "@mui/joy/Badge";
import PositionedMenu from "./PositionedMenu";
import axios from "axios";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [thing, setThing] = useState(false);

  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [closeDiv, setCloseDiv] = useState(false);

  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => {
    // Fetch products from the backend
    const fetchProducts = async () => {
      try {
        const response = await axios.get("http://localhost:8080/api/deals");
        setProducts(response.data);
        setFilteredProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, []);

  useEffect(() => {
    if (searchQuery) {
      const results = products.filter(
        (product) =>
          product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          product.category.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredProducts(results);
      setShowDropdown(true);
    } else {
      setFilteredProducts([]);
      setShowDropdown(false);
    }
  }, [searchQuery, products]);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <header className="pt-3 h-[123px] max-lg:h-auto shadow-md">
      <div className="max-w-[1233px] h-14 max-lg:h-auto mx-auto flex-wrap flex justify-between  ">
        {/* Logo */}
        <div className="flex justify-center items-center w-40">
          <img className=" h-6 w-32" height={"40px"} width={"160px"} src={Logo} alt="logo" />
        </div>

        {/* Search Input */}
        <div className="flex items-center max-md:hidden  w-full lg:w-auto mx-2">
          <div className=" flex justify-between items-center pl-2 pr-2 h-12 text-sm border border-gray-300 rounded-3xl w-2xl focus:outline-none">
            <RiSearchLine className="w-5 h-5" />

            <input
              type="text"
              className="relative outline-none px-2 min-w-[500px] max-lg:w-full"
              placeholder="Search for deals"
              value={searchQuery}
              onChange={handleSearch}
              onFocus={() => setShowDropdown(true)}
              onBlur={() => setTimeout(() => setShowDropdown(false), 100)}
            />

            {/* Dropdown */}
            {searchQuery && filteredProducts.length > 0 && (
              <div className="absolute top-20 left-72 right-0 mt-2 bg-white border border-gray-300 rounded shadow-lg max-w-[580px] max-h-64 overflow-y-auto z-10">
                {filteredProducts.map((product) => (
                  <Link
                    onClick={() => setShowDropdown(false)}
                    key={product.id}
                    to={`/deal-detail/${product._id}`}
                    className="block px-4 py-2 hover:bg-gray-100 flex items-center"
                  >
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-10 h-10 object-cover rounded mr-4"
                    />
                    <div>
                      <p className="font-semibold">{product.name}</p>
                      <p className="text-sm text-gray-600">${product.price}</p>
                    </div>
                  </Link>
                ))}
              </div>
            )}

            <button className=" bg-green-700 text-white p-2 rounded-full">
              <RiSearchLine className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Icon Buttons with Badges */}
        <div className="flex items-center gap-4 space-x-4">
          <Badge badgeContent={1} badgeInset="-16%">
            <RiHeartLine />
          </Badge>
          <Badge badgeContent={1} badgeInset="-16%">
            <RiShoppingCart2Line />
          </Badge>
          <Badge badgeContent={1} badgeInset="-16%">
            <RiNotification3Line />
          </Badge>
          <PositionedMenu />
        </div>
      </div>
      <div className="flex md:hidden my-3 items-center max-lg:block max-lg:px-5 w-full lg:w-auto mx-2">
        <div className=" flex justify-between items-center pl-2 pr-2 h-12 text-sm border border-gray-300 rounded-3xl w-2xl focus:outline-none">
          <RiSearchLine className="w-5 h-5" />

          <input
            type="text"
            className="relative outline-none px-2  max-lg:w-full"
            placeholder="Search for deals"
            value={searchQuery}
            onChange={handleSearch}
            onFocus={() => setShowDropdown(true)}
            onBlur={() => setTimeout(() => setShowDropdown(false), 100)}
          />

          
          {searchQuery && filteredProducts.length > 0 && (
            <div className="absolute top-20 left-72 right-0 mt-2 bg-white border border-gray-300 rounded shadow-lg max-w-[580px] max-h-64 overflow-y-auto z-10">
              {filteredProducts.map((product) => (
                <Link
                  onClick={() => setShowDropdown(false)}
                  key={product.id}
                  to={`/deal-detail/${product._id}`}
                  className="block px-4 py-2 hover:bg-gray-100 flex items-center"
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-10 h-10 object-cover rounded mr-4"
                  />
                  <div>
                    <p className="font-semibold">{product.name}</p>
                    <p className="text-sm text-gray-600">${product.price}</p>
                  </div>
                </Link>
              ))}
            </div>
          )}

          <button className=" bg-green-700 text-white p-2 rounded-full">
            <RiSearchLine className="w-5 h-5" />
          </button>
        </div>
      </div>
      <div className="max-w-[1233px] h-14 max-lg:h-auto mx-auto max-lg:text-sm">
        <ul className="flex justify-between items-end h-full">
          <div
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className=" relative hover:cursor-pointer px-4 pb-3 border-b-4 border-white  hover:border-green-700  "
          >
            <p>Beauty & Spas</p>
          </div>
          {isHovered && (
            <div
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              className=" absolute z-50 top-28 w-[500px] bg-white h-auto p-8 text-white text-xl mt-4 rounded-xl shadow-lg"
            >
              <div className="flex justify-between text-black">
                <h2 className="font-bold">Beauty & Spas</h2>
                <RiCloseLine
                  onClick={() => setIsHovered(false)}
                  className="hover:cursor-pointer"
                  size={"30px"}
                />
              </div>
              <div className="flex text-[15px] gap-20 w-full mt-4 text-black">
                <ul className="flex flex-col gap-2">
                  <li>Massage</li>
                  <li>Hair Removal</li>
                  <li>Face & Skin Care</li>
                  <li>Cosmetic Procedure</li>
                  <li>Spas</li>
                  <li>Hair & Styling</li>
                </ul>
                <ul className="flex flex-col gap-2">
                  <li>Health & Fitness</li>
                  <li>Weight Loss</li>
                  <li>Nail Salons</li>
                  <li>Dental</li>
                  <li>Brows & Lashes</li>
                  <li>Tanning</li>
                </ul>
              </div>
            </div>
          )}
          <div className="hover:cursor-pointer px-4 pb-3 border-b-4 border-white  hover:border-green-700">
            <p>Things To Do</p>
          </div>
          <div className="hover:cursor-pointer px-4 pb-3 border-b-4 border-white  hover:border-green-700">
            <p>Gifts</p>
          </div>
          <div className="hover:cursor-pointer px-4 pb-3 border-b-4 border-white  hover:border-green-700">
            <p>Auto & Home</p>
          </div>
          <div
            onMouseEnter={() => setThing(true)}
            onMouseLeave={() => setThing(false)}
            className=" relative hover:cursor-pointer px-4 pb-3 border-b-4 border-white  hover:border-green-700"
          >
            <p>Food & Drink</p>
          </div>
          {thing && (
            <div
              onMouseEnter={() => setThing(true)}
              onMouseLeave={() => setThing(false)}
              className=" absolute z-50 bg-white  top-28 left-[600px] w-[500px] h-auto p-8 text-white text-xl mt-4 rounded-xl shadow-lg"
            >
              <div className="flex justify-between text-black">
                <h2 className="font-bold">Food & Drink</h2>
                <RiCloseLine
                  onClick={() => setThing(false)}
                  className="hover:cursor-pointer"
                  size={"30px"}
                />
              </div>
              <div className="flex text-[15px] gap-20 w-full mt-4 text-black">
                <ul className="flex flex-col gap-2">
                  <li>Restaurants</li>
                  <li>Cafe & Treats</li>
                  <li>Bakeries</li>
                  <li>Bars</li>
                  <li>Breaweries, Wineries</li>
                  <li>Groceries & Markets</li>
                </ul>
                <ul className="flex flex-col gap-2">
                  <li>American Restaurants</li>
                  <li>Asian Restaurants</li>
                  <li>Latin American Restaurants</li>
                  <li>Pizza</li>
                  <li>Seafood Restaurants</li>
                  <li>steakhouse</li>
                </ul>
              </div>
            </div>
          )}
          <div className="hover:cursor-pointer px-4 pb-3 border-b-4 border-white  hover:border-green-700">
            <p>Local</p>
          </div>
          <div className="hover:cursor-pointer px-4 pb-3 border-b-4 border-white  hover:border-green-700">
            <p>Tavel</p>
          </div>
          <div className="hover:cursor-pointer px-4 pb-3 border-b-4 border-white  hover:border-green-700">
            <p>Goods</p>
          </div>
          <div className="hover:cursor-pointer px-4 pb-3 border-b-4 border-white  hover:border-green-700">
            <p>Coupons</p>
          </div>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
