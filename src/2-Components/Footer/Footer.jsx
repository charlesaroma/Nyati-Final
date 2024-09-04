import React from "react";
import { BsTwitterX } from "react-icons/bs";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-[#18151c] w-full py-16 px-12 lg:px-[86px] overflow-hidden">
      <div className="max-w-[1240px] mx-auto grid lg:grid-cols-5 gap-8 text-gray-300">
        <div className="flex flex-col gap-[20px] text-center mx-auto lg:text-left lg:col-span-2">
          <h1 className="text-[18px] font-[Inter-Bold] text-[#F2F2F2] tracking-wide">
            Nyati Motion Pictures
          </h1>
          <p className="text-[#8b8789] font-[Inter-Regular] text-[14px] md:w-[400px] lg:w-[70%]">
            Nyati Motion Pictures (NMP) is a Ugandan film and video production
            company established in 2005 with a focus on the East African market.
          </p>
          <div
            spacing={"8px"}
            className="flex flex-col gap-[8px] text-[#F2F2F2] font-[Inter-Medium] text-[16px]"
          >
            <div>+256 778 787 660 </div>
            <div>P.o Box 74733, Kampala </div>
            <div>
              info@nyatimotionpictures.com <br />
              nyatimotionpictures@gmail.com
            </div>
          </div>
        </div>

        {/* Watch Footer Section */}
        <div className="flex flex-col gap-[20px] text-center mx-auto lg:text-left">
          {" "}
          <h1 className="text-[18px] font-[Inter-Bold] text-[#F2F2F2] tracking-wide">
            Watch
          </h1>
          <div className="flex flex-col gap-4">
            <div className="text-[#8b8789] font-[Inter-Medium] text-[16px]">
              Tuko Pamoja{" "}
            </div>
            <div className="text-[#8b8789] font-[Inter-Medium] text-[16px]">
              Fate(2006){" "}
            </div>
            <div className="text-[#8b8789] font-[Inter-Medium] text-[16px]">
              Fair Play{" "}
            </div>
            <div className="text-[#8b8789] font-[Inter-Medium] text-[16px]">
              Windows of Hope (2011){" "}
            </div>
            <div className="text-[#8b8789] font-[Inter-Medium] text-[16px]">
              <NavLink to="/film">
                <span className="hover:text-[#dcdbdc]">View All</span>
              </NavLink>
            </div>
          </div>
        </div>

        {/* About Section */}
        <div className="flex flex-col gap-[20px] text-center mx-auto lg:text-left">
          {" "}
          <h1 className="text-[18px] font-[Inter-Bold] text-[#F2F2F2] tracking-wide">
            About
          </h1>
          <div className="flex flex-col gap-4">
            <div className="text-[#8b8789] font-[Inter-Medium] text-[16px]">
              <NavLink to="/about">
                <span className="hover:text-[#dcdbdc]">Company</span>
              </NavLink>
            </div>

            <div className="text-[#8b8789] font-[Inter-Medium] text-[16px]">
              <NavLink to="/team">
                <span className="hover:text-[#dcdbdc]">Team</span>
              </NavLink>
            </div>

            <div className="text-[#8b8789] font-[Inter-Medium] text-[16px]">
              <NavLink to="/services">
                <span className="hover:text-[#dcdbdc]">
                  Services & Ongoing Production(s)
                </span>
              </NavLink>
            </div>
            <div className="text-[#8b8789] font-[Inter-Medium] text-[16px]">
              <NavLink to="/film">
                <span className="hover:text-[#dcdbdc]">
                  Films
                </span>
              </NavLink>
            </div>
            <div className="text-[#8b8789] font-[Inter-Medium] text-[16px]">
              <NavLink to="/contact">
                <span className="hover:text-[#dcdbdc]">Contact Us</span>
              </NavLink>
            </div>
            <div className="text-[#8b8789] font-[Inter-Medium] text-[16px]">
              <NavLink to="/internetarchive">
                <span className="hover:text-[#dcdbdc]">Archive</span>
              </NavLink>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-[20px] text-center mx-auto lg:text-left">
          {/* {" "}
          <h1 className="text-[18px] font-[Inter-Bold] text-[#F2F2F2] tracking-wide">
            Explore
          </h1>
          <div >
            <div className="text-[#8b8789] font-[Inter-Medium] text-[16px]">
              Upcoming Events{" "}
            </div>
            <div className="text-[#8b8789] font-[Inter-Medium] text-[16px]">
              Ongoing Projects{" "}
            </div>         
          </div> */}
        </div>
      </div>
      <div className="max-w-[1240px] mx-auto mt-10 flex justify-center lg:justify-start">
        <div className=" flex items w-max max-auto text-[#F2F2F2] gap-[30px]">
          <BsTwitterX size={22} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
