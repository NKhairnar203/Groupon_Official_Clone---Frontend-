import React, { useState, useEffect } from "react";
import Button from "@mui/joy/Button";
import Stack from "@mui/joy/Stack";
import Typography from "@mui/joy/Typography";

import MenuItem from "@mui/joy/MenuItem";
import {
  RiAppleFill,
  RiFacebookCircleFill,
  RiGoogleFill,
} from "@remixicon/react";
import { useAuth } from "../context/AuthProvider";
import { FaHeart, FaGift, FaBell, FaTimes } from "react-icons/fa";
import {
  AiOutlineTag,
  AiOutlineUser,
  AiOutlineArrowRight,
  AiOutlineQuestionCircle,
  AiOutlineEye,
} from "react-icons/ai";
import { BsFillGridFill } from "react-icons/bs";

const AfterLogin = () => {
  const { LogoutUser } = useAuth();
  const [user, setUser] = React.useState(
    JSON.parse(localStorage.getItem("user"))
  );

  return (
    <Stack
      direction="column"
      spacing={2.5}
      sx={{
        justifyContent: "center",
        alignItems: "center",
        paddingX: 3,
        paddingY: 2,
        width: "340px",
      }}
    >
      <div className="flex justify-between w-full items-center mb-6">
        <h2 className="text-xl font-semibold">
          Hi, {user.name.toUpperCase()}!
        </h2>
        <button>
          <FaTimes className="text-gray-500" />
        </button>
      </div>
      {/* User Info */}
      <div className="flex justify-between w-full items-center mb-6">
        <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center text-lg font-bold text-white">
          G
        </div>
        <div className="ml-3">
          <p className="font-medium">{user.name.toUpperCase()}</p>
          <p className="text-sm text-gray-600">{user.email}</p>
        </div>
        <AiOutlineArrowRight className="ml-auto text-gray-400" />
      </div>

      {/* Menu Items */}
      <div className="w-full">
        <ul className="space-y-4 w-full">
          <li className="w-full flex justify-between items-center text-gray-700 hover:text-green-500">
            <div className="flex items-center">
              <AiOutlineTag className="mr-3" />
              My Groupons
            </div>
          </li>
          <li className="flex justify-between items-center text-gray-700 hover:text-green-500">
            <div className="flex items-center">
              <FaHeart className="mr-3" />
              My Wishlist
            </div>

            <span className="ml-auto text-sm text-gray-500">2</span>
          </li>
          <li className="flex items-center text-gray-700 hover:text-green-500">
            <BsFillGridFill className="mr-3" />
            Preferences
          </li>
          <li className="flex items-center text-gray-700 hover:text-green-500">
            <AiOutlineUser className="mr-3" />
            My Groupon+ Deals
          </li>
          <li className="flex items-center text-gray-700 hover:text-green-500">
            <AiOutlineTag className="mr-3" />
            Groupon Bucks
            <span className="ml-auto text-green-500">$0.00</span>
          </li>
          <li className="flex items-center text-gray-700 hover:text-green-500">
            <FaGift className="mr-3" />
            Redeem Gift Card
          </li>
          <li className="flex items-center text-gray-700 hover:text-green-500">
            <AiOutlineEye className="mr-3" />
            Recently Viewed
          </li>
          <li className="flex items-center text-gray-700 hover:text-green-500">
            <FaBell className="mr-3" />
            Notifications
            <span className="ml-auto text-sm text-gray-500">7</span>
          </li>
          <li className="flex items-center text-gray-700 hover:text-green-500">
            <AiOutlineQuestionCircle className="mr-3" />
            Give us Feedback
          </li>
        </ul>
      </div>
      <div>
        <p className="text-[10px] text-center">
          {" "}
          This site is protected by reCAPTCHA and the Google Privacy Policy and
          Terms of Service apply.
        </p>
        <p className=" mt-2 text-[10px] text-center">
          By clicking an option above, I agree to the Terms and Conditions and
          have read the Privacy Statement.
        </p>
      </div>
      <div>
        <button onClick={LogoutUser} className="text-red-500 my-3">
          Log Out
        </button>
      </div>
    </Stack>
  );
};

export default AfterLogin;

