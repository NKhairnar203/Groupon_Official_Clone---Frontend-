import React, { useState } from "react";
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

const Navbar = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [thing, setThing] = useState(false);

  return (
    <header className="pt-3 h-[123px] shadow-md">
      <div className="max-w-[1233px] h-14 mx-auto flex justify-between  ">
        {/* Logo */}
        <div className="flex justify-center items-center w-40">
          <img className=" h-6 w-32" height={"40px"} src={Logo} alt="logo" />
        </div>

        {/* Search Input */}
        <div className="flex items-center  w-full lg:w-auto mx-2">
          <div className=" flex justify-between items-center pl-2 pr-2 h-12 text-sm border border-gray-300 rounded-3xl w-2xl focus:outline-none">
            <RiSearchLine className="w-5 h-5" />

            <input
              type="text"
              className=" outline-none px-2 w-[500px]"
              placeholder="Search for deals"
            />
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
      <div className="max-w-[1233px] h-14 mx-auto ">
        <ul className="flex justify-between items-end h-full">
          <div
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className=" relative hover:cursor-pointer px-4 pb-3 border-b-4 border-white  hover:border-green-700"
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
