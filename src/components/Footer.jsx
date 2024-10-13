import React from "react";
import {
  RiArrowLeftRightLine,
  RiArrowRightLine,
  RiArrowRightSLine,
  RiFacebookBoxLine,
  RiGlobalLine,
  RiGlobeLine,
  RiInstagramLine,
  RiLinkedinBoxLine,
  RiTwitterXLine,
  RiXboxLine,
} from "@remixicon/react";

const Footer = () => {
  return (
    <footer className="w-full bg-[#EDEFF1]">
      <div className="max-w-[1233px] mx-auto py-9">
        <div className="grid grid-cols-3 mt-4 gap-10 ">
          <div>
            <h2
              className="text-[#333333] mb-3 text-[18px] font-bold mb
            [10px]"
            >
              Groupon Sites
            </h2>
            <button className="flex bg-white w-[300px] rounded-3xl p-2">
              <RiGlobalLine className="mr-2" /> USA
            </button>
          </div>
          <div>
            <h2
              className="text-[#333333] mb-3 text-[18px] font-bold mb
            [10px]"
            >
              Sign up for the latest deals
            </h2>
            <div className="flex gap-2">
              <input
                className="border border-black rounded-sm px-2 h-10 w-[240px]"
                type="text"
                placeholder="Email Address"
              />
              <button className="h-10 text-white w-10 flex justify-center rounded-full items-center bg-green-600">
                <RiArrowRightSLine />
              </button>
            </div>
            <p className="my-2 text-xs">
              By subscribing, I agree to the Terms of Use and have read the
              Privacy Statement.
            </p>
          </div>
          <div>
            <h2
              className="text-[#333333] mb-3 text-[18px] font-bold mb
            [10px]"
            >
              Follow Us
            </h2>
            <div className="flex gap-5">
              <RiFacebookBoxLine />
              <RiInstagramLine />
              <RiTwitterXLine />
              <RiLinkedinBoxLine />
            </div>
          </div>
        </div>

        <div className="flex justify-between mt-16">
          <ul className="leading-10">
            <li className="font-bold">Support</li>
            <li>Help Center</li>
            <li>Report Infringement</li>
            <li>Refund Policies</li>
            <li>Merchant Class Action Settlement Notice</li>
          </ul>
          <ul className="leading-10">
            <li className="font-bold">Sell on Groupon</li>
            <li>Join Groupon Marketplace</li>
            <li>Run a Groupon Campaign</li>
            <li>How does Groupon work for Merchants </li>
            <li>Sponsor your Campaign</li>
            <li>Affiliate Program</li>
            <li>Vendor Code of Conduct</li>
          </ul>
          <ul className="leading-10">
            <li className="font-bold">Company</li>
            <li>About Groupon </li>
            <li>Jobs</li>
            <li>Press</li>
            <li>Investor Relations</li>
            <li>Management Team</li>
          </ul>
          <ul className="leading-10">
            <li className="font-bold">Quick Links</li>
            <li>Treat Yourself</li>
            <li>Things To Do</li>
            <li>Coupons</li>
            <li>Gifts for Occasions</li>
          </ul>
        </div>
      </div>
      <div className="flex justify-center items-center h-20 text-xs bg-white">
        <p>
          © 2024 Groupon, Inc. All Rights Reserved. Terms and Conditions - Privacy
          Statement - Do Not Sell or Share My Personal Information - Accessibility -
          Sitemap - Customer - Support - Licenses
        </p>
      </div>
    </footer>
  );
};

export default Footer;
