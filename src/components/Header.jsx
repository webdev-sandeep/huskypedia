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
    <div className="flex justify-between text-secondary-color font-semibold text-2xl fixed top-0 z-10 w-full">
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
          {/* <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 100 100"
            width="100"
            height="100"
            preserveAspectRatio="xMidYMid meet"
            className="w-full h-full"
          >
            <defs>
              <clipPath id="__lottie_element_42">
                <rect width="100" height="100" x="0" y="0"></rect>
              </clipPath>
            </defs>
            <g clip-path="url(#__lottie_element_42)">
              <g
                transform="matrix(1.0654900074005127,0.00006973616109462455,-0.00006973616109462455,1.0654900074005127,-3.248016357421875,-3.2779884338378906)"
                opacity="1"
                className="block"
              >
                <g
                  opacity="1"
                  transform="matrix(1,0,0,1,39.970001220703125,50)"
                >
                  <path
                    fill="rgb(45,69,80)"
                    fill-opacity="1"
                    d=" M-1.7519989013671875,-0.16100001335144043 C-2.410998821258545,27.381000518798828 22.09200096130371,32.61399841308594 28.525999069213867,33.83399963378906 C23.034000396728516,36.84299850463867 16.732999801635742,38.555999755859375 10.029999732971191,38.555999755859375 C-11.263999938964844,38.555999755859375 -28.525999069213867,21.29400062561035 -28.525999069213867,0 C-28.525999069213867,-21.29400062561035 -11.263999938964844,-38.555999755859375 10.029999732971191,-38.555999755859375 C16.732999801635742,-38.555999755859375 23.034000396728516,-36.84299850463867 28.524999618530273,-33.83399963378906 C17.281999588012695,-32.14500045776367 -1.1369990110397339,-25.902000427246094 -1.7519989013671875,-0.16100001335144043z"
                  ></path>
                </g>
              </g>
            </g>
          </svg> */}
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
          className="block hover:bg-bright-color hover:border-skin-color p-4"
        >
          Sign In
        </Link>
      </div>
    </div>
  );
};

export default Header;
