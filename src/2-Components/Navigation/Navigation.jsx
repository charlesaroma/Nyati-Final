import React, { useState } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import Buttons from "../Buttons/Buttons";
import { Icon } from "@iconify/react";
import Metadata from '../../1-Assets/data/web_metadata.json';

const obj = Metadata;
const result = obj[Object.keys(obj)[0]];
const Logo = result.content[2].files[1];

const Navigation = () => {
  let navigate = useNavigate();

  const [aboutDropdown, setAboutDropdown] = useState(false);

  const toggleDropdown = () => {
    setAboutDropdown(!aboutDropdown);
  };

  const closeDropdown = () => {
    setAboutDropdown(false);
  };

  const MenuItemData = [
    { title: "Home", path: "/" },
    { 
      title: "About Us", 
      path: "#", // Dummy path for About Us
      isDropdown: true,
      dropdownItems: [
        { title: "About Company", path: "/about" },
        { title: "Our Services", path: "/services" }
      ],
    },
    { title: "Nyati Films", path: "/film" },
    { title: "Team", path: "/team" },
    { title: "Contact Us", path: "/contact" }
  ];

  return (
    <nav className="w-screen h-[85px] absolute z-[10] top-0 flex items-center justify-between px-2 lg:px-12  xl:px-16 !overflow-hidden">
      {/** Laptop - logo */}
      <div className="hidden lg:flex">
        <Buttons
          onClick={() => navigate("/")}
          variant="ghost"
          size="icon"
          className="w-max h-max p-0 hover:bg-secondary-50 hover:bg-opacity-30"
        >
          <img
            src={Logo}
            className="lg:w-[55.74px] lg:h-[56.02px] xl:w-[65.74px] xl:h-[66.02px] navbar-brand cursor-pointer"
            alt="logo"
          />
        </Buttons>
      </div>

      {/** Laptop - menu items */}
      <div className="h-full hidden lg:flex">
        <ul className="flex justify-center items-center space-x-10 text-base text-[#FFFAF6] h-full">
          {MenuItemData.map((data, index) => (
            <li 
              key={index} 
              className="relative decoration-none"
              onMouseLeave={closeDropdown}
            >
              <NavLink
                to={data.path}
                className={({ isActive }) =>
                  isActive && !data.isDropdown
                    ? "flex border-b-[#EE5170] border-b-2 cursor-pointer py-4 px-3"
                    : "flex border-b-2 border-b-transparent cursor-pointer py-4 px-3 hover:border-b-[#EE5170]"
                }
                onClick={data.isDropdown ? toggleDropdown : closeDropdown}
              >
                {data.title}
                {data.isDropdown && (
                  <Icon 
                    icon="akar-icons:chevron-down"
                    className="ml-2"
                  />
                )}
              </NavLink>

              {data.isDropdown && aboutDropdown && (
                <ul className="absolute top-full left-0 mt-2 w-full h-full bg-white text-black shadow-lg rounded-md">
                  {data.dropdownItems.map((item, idx) => (
                    <li key={idx} className="px-4 py-2 hover:bg-gray-100">
                      <NavLink 
                        to={item.path}
                        className={({ isActive }) =>
                          isActive
                            ? "block text-[#EE5170]"
                            : "block"
                        }
                        onClick={closeDropdown}
                      >
                        {item.title}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>

      {/** mobile - menu items */}
      <div className="h-full w-full lg:hidden flex">
        <ul className="w-full flex justify-around items-center text-sm md:text-base text-[#FFFAF6] h-full">
          {MenuItemData.map((data, index) => (
            <li key={index} className="">
              <NavLink
                to={data.path}
                className={({ isActive }) =>
                  isActive
                    ? "flex border-b-[#EE5170] border-b-2 cursor-pointer py-4 px-3 text-[#EE5170] bg-[#36323E] bg-opacity-40"
                    : "flex border-b-2 border-b-transparent cursor-pointer py-4 px-3 hover:border-b-[#EE5170]"
                }
              >
                {data.title}
              </NavLink>
            </li>
          ))}
          
          {/** mobile - action btn */}
          <div className="lg:hidden flex">
            <Buttons
              variant="default"
              className="font-[Roboto-Medium] text-[12.96px] md:text-[15.96px] flex items-center justify-center gap-[5px] rounded-lg h-max"
              onClick={() => navigate("/donate")}
            >
              Donate
            </Buttons>
          </div>
        </ul>
      </div>

      {/** action button */}
      <div className="hidden lg:flex">
        <Buttons
          variant="default"
          className="px-5 xl:px-0 xl:w-[190.34px] xl:h-[41.38px] rounded-[49.66px] font-medium font-[Roboto-Medium] lg:text-[12.96px] xl:text-[15.96px] text-[#FFFAF6] cursor-pointer"
          onClick={() => navigate("/donate")}
        >
          Donate to Nyati
        </Buttons>
      </div>
    </nav>
  );
};

export default Navigation;
