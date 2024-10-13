import React, { useState } from "react";
import { FaHeart, FaRegHeart, FaGift, FaStar } from "react-icons/fa";

function DealCard({ name, image, address, price }) {
  const [liked, setLiked] = useState(false);

  const toggleLike = () => {
    setLiked(!liked);
  };

  console.log(image, name);

  return (
    <div className="max-w-[365px] mx-auto my-4 rounded-lg overflow-hidden bg-white hover:cursor-pointer">
      {/* Image Section with Popular Tag and Like Button */}
      <div className="relative">
        <img
          className="w-full h-48 rounded-md object-cover"
          src={
            image ||
            "https://img.grouponcdn.com/deal/FWq1ds1z5LvtYS8jhkKNMjLzRFS/FW-700x421/v1/t300x182.webp"
          }
          alt="Service"
        />
        <div className="absolute top-2 left-2 bg-pink-100 text-pink-800 text-xs font-semibold px-2 py-1 rounded-md flex items-center">
          <FaGift className="mr-1" />
          Popular Gift
        </div>
        <button
          onClick={toggleLike}
          className="absolute top-2 right-2 bg-white rounded-full p-2 text-red-500 shadow-md focus:outline-none"
        >
          {liked ? <FaHeart /> : <FaRegHeart />}
        </button>
      </div>

      {/* Content Section */}
      <div className="">
        <div className="text-gray-600 text-sm mb-1">
          Mirror Mirror Spa Salon
        </div>
        <div className="font-semibold text-md hover:underline mb-1">
          {name ||
            "Dummy Carts: Full-Body Relief with Massage Packages for One or Two at Wellness Foot Spa - Up to 60% Off"}
        </div>
        <div className="text-gray-500 text-sm mb-1">
          {address || "807 West Randolph Street, Chicago"}
        </div>

        {/* Pricing Section */}
        <div className="flex items-center justify-between">
          <div>
            <span className="text-gray-400 line-through mr-2">$40</span>
            <span className="text-green-600 font-bold">$29</span>
            <div className="text-red-600 font-bold">
              ${price || 26.1}{" "}
              <span className="text-red-500 bg-red-100 px-1 rounded text-xs mr-2">
                -28%
              </span>
              <span className="text-red-500 text-xs font-medium">
                Limited time
              </span>
            </div>

            <div className="text-purple-700 font-bold">
              $24.80{" "}
              <span className="font-semibold text-[13px]">
                with code SAVEMORE
              </span>
            </div>
          </div>
          {/* Rating Section */}
          <div className="flex items-center text-sm text-gray-700">
            <FaStar className="text-yellow-500 mr-1" />
            <span>4.1 (2,100)</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DealCard;
