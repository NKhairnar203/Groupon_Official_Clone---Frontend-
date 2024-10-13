import React from "react";
import Container from "@mui/joy/Container";
import { TrendingToday } from "../components/TrendingToday";
import GiftCarousel from "../components/GiftCarousel";
import DealCart from "../components/DealCard"
import TwoCard from "../components/TwoCard";
import Products from "../components/Products";

const Home = () => {
  return (
    <>
      <div className="max-w-[1233px] mx-auto my-5">
        <div className=" bg-[rgb(243,243,244)] flex justify-between items-center gap-2 divide divide-x-2 p-5 text-xs font-semibold rounded-xl">
          <div>
            Up to 10% Off Fall Fun! Save on selected Activities, Beauty, Dining
            & More!{" "}
            <span className="text-green-500 max-w-[1233px] h-14">
              USE CODE SAVE
            </span>
          </div>
          <div className="pl-8">
            Explore Stunning Fall Landscapes. Discover autumn's beauty with
            unbeatable travel deals!
          </div>
          <div className="pl-8">
            Celebrate the Season! Staples Custom Cards & Invites: Same-Day
            Pickup Available
          </div>
        </div>
        <TrendingToday />
        {/* <GiftCarousel/> */}
        <div className="flex flex-wrap gap-5 justify-between ">
          <DealCart />
          <DealCart />
          <DealCart />
        </div>
        <TwoCard />
        <h2 className="my-6 text-center font-bold text-3xl">Main Deals For Sale</h2>
        <Products />
      </div>
    </>
  );
};

export default Home;
