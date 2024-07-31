import React from "react";
import Bg from "../../1-Assets/Frame 101.png";
import BgIcon from "../../1-Assets/Logo_About.png";
import { Icon } from "@iconify/react";

const AHeroSection = ({ scrollFunc }) => {
  return (
    <div className=" box-border flex flex-col w-full h-screen flex-grow xl:min-h-full lg:h-screen relative overflow-hidden">
      <img
        src={Bg}
        alt=""
        className="flex absolute top-0 object-cover h-full w-full slect-none bg-gradient-to-b from-transparent to-secondary-700"
        style={{
          filter: "brightness(50%)", // Adjust brightness if needed
        }}
      />
      <div className="relative min-h-[80vh] h-full xl:h-screen flex flex-col items-center justify-center">
        {/* hero && logo */}
        <div className="box-border  py-20 md:py-24 flex flex-col max-w-[90%] gap-[10px] md:gap-[25px] xl:max-w-[631px] mx-auto max-h-max">
          {/* logo */}
          <div className="w-full  h-[125px] md:h-[200px] lg:h-[200px] xl:h-[200px] 2xl:h-[200px] flex justify-center items-center">
            <img
              src={BgIcon}
              alt="Logo"
              className="w-[125px] md:w-[200px] lg:w-[200px] xl:w-[200px] h-full object-cover"
            />
          </div>

          {/* head text */}
          <div className="flex flex-col gap-[15px]">
            <h1 className="font-bold font-[Inter-Bold] text-[30px] sm:text-4xl md:text-[38px] xl:text-5xl 2xl:text-6xl md:leading-tight text-[#F2F2F2] text-center">
              Where Epic Stories{" "}
              <span className="block">Transcend Entertainment</span>
            </h1>
          </div>
          
          {/** floating icons */}
          <div className="absolute hidden  bottom-[8px] left-[24px] w-[246px] h-max rounded-[9.78px] p-[8px] lg:flex flex-col gap-[12px]">
            <div className="flex flex-col w-max items-center gap-[15px]">
              <a
                href="https://api.whatsapp.com/send?phone=256778787660&text=%20"
                target="_blank"
                rel="noreferrer"
              >
                <Icon
                  icon="ic:baseline-whatsapp"
                  width="20px"
                  height="20px"
                  style={{ color: "#E8CFD2" }}
                  className="flex justify-center p-[4px] items-center w-[34px] h-[34px] bg-gradient-to-r from-[rgba(238,80,112,0.03)] to-[rgba(238,80,112,0.30)] rounded-[10px] shadow-[0px_0.529px_5.295px_rgba(255,255,255,0.35)_inset] backdrop-blur-[3.31px] hover:scale-110"
                />
              </a>
              <a
                href="https://x.com/NyatiMPictures"
                target="_blank"
                rel="noreferrer"
              >
                <Icon
                  icon="prime:twitter"
                  width="20px"
                  height="20px"
                  style={{ color: "#E8CFD2" }}
                  className="flex justify-center cursor-pointer p-[5px] items-center w-[34px] h-[34px] bg-gradient-to-r from-[rgba(238,80,112,0.03)] to-[rgba(238,80,112,0.30)] rounded-[10px] shadow-[0px_0.529px_5.295px_rgba(255,255,255,0.35)_inset] backdrop-blur-[3.31px] hover:scale-110"
                />
              </a>
              <div className="flex  h-[63px] w-[2px]  bg-[#F2F2F266] " />
            </div>

            <p className="text-[#E8CFD2]">info@nyatimotionpictures.com</p>
          </div>

          {/** floating arrow down btn */}

          <div className="absolute w-max cursor-pointer bottom-3 left-0 right-0 mx-auto flex flex-col items-center gap-2">
            <h2 className="w-full hidden md:block text-[#E8CFD2]">
              learn more
            </h2>
            <Icon
              onClick={scrollFunc}
              icon="solar:round-alt-arrow-down-broken"
              width="2rem"
              height="2rem"
              style={{ color: "#E8CFD2" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AHeroSection;
