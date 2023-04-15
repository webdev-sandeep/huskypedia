import React, { useState } from "react";
import brandLogo from "../assets/images/icons/husky-brand.png";
import { Link } from "react-router-dom";

const Header = () => {
  const [activeLink, setActiveLink] = useState("Home");
  const navLinks = [
    { path: "/", name: "Home" },
    { path: "/gallery", name: "Gallery" },
    { path: "/huskypedia", name: "Huskypedia" },
  ];
  return (
    <div className="flex justify-between font-semibold text-2xl fixed top-0 z-10 w-full">
      <div className="logo w-64">
        <img src={brandLogo} alt="brand-name" className="w-full object-cover" />
      </div>
      <div className="navbar flex">
        {navLinks.map((link, index) => {
          return (
            <Link
              to={link.path}
              className={`p-4 border-b-2 hover:bg-bright-color hover:border-skin-color block ${
                activeLink === link.name
                  ? "border-secondary-color"
                  : "border-primary-color"
              }`}
              key={index}
            >
              {link.name}
            </Link>
          );
        })}
      </div>
      <div className="flex px-6">
        <button className="block w-8 h-full py-4">
          <svg
            className="w-full h-full"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M2 12a10 10 0 0 0 13 9.54a10 10 0 0 1 0-19.08A10 10 0 0 0 2 12Z"
            />
          </svg>
        </button>
        <Link
          to={"/login"}
          className="block hover:bg-bright-color border-b-2 border-transparent hover:border-skin-color p-4"
        >
          Sign In
        </Link>
      </div>
    </div>
  );
};

export default Header;
