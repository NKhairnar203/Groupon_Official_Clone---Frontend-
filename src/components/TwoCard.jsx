import React from "react";
import halloween from "../assets/Halloween.jpeg";
import street from "../assets/Streess.jpeg";
const TwoCard = () => {
  return (
    <div className="grid grid-cols-2 gap-7 my-10">
      <div className=" relative card rounded-lg">
        <img src={halloween} className="rounded-lg" alt="" />
 
        <div className=" absolute bottom-1 flex justify-between items-end text-white p-7">
          <div>
            <h2 className="font-bold text-3xl">
              Spooktacular Halloween Discounts!
            </h2>
            <p className="pr-14">
              Face your fears and unlock chilling discounts & exclusive thrills!
            </p>
          </div>
          <button className="w-32 bg-white h-12 font-semibold rounded-3xl text-black">
            See Deals
          </button>
        </div>
      </div>
      <div className=" relative card rounded-lg">
        <img src={street} className="rounded-lg" alt="" />

        <div className="card-body absolute bottom-1 flex justify-between items-end text-white p-7">
          <div>
            <h2 className="font-bold text-3xl">Drive Stress-Free!</h2>

            <p className="pr-14">Discounts on oil changes, tire care & more.</p>
          </div>
          <button className="w-32 bg-white h-12 font-semibold rounded-3xl text-black">
            See Deals
          </button>
        </div>
      </div>
    </div>
  );
};

export default TwoCard;
