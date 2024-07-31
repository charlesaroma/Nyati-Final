import React from "react";
import DiscoverCard from "../../2-Components/Cards/DiscoverCard";
import pamojaImage from "../../1-Assets/donate_pamoja.png";
import conquerImage from "../../1-Assets/donate_conquer.png";
import Buttons from "../../2-Components/Buttons/Buttons";

const discoverItems = [
  {
    title: "Tuko Pamoja",
    bgImage: pamojaImage,
    subtext: "",
    author: "Cindy Magara",
    type: "",
  },
  {
    title: "Conquer or Die",
    bgImage: conquerImage,
    subtext: "",
    author: "Cindy Magara",
    type: "",
  },
];

const DProjectSection = ({ handleAmountOpen }) => {
  return (
    <div className="bg-secondary-900 flex flex-col items-center justify-center px-[30px] py-[54px] sm:px-16 sm:py-16 w-screen">
      <div className="flex flex-col w-full lg:max-w-[1000px] gap-[30px]">
        {/** discover text */}
        <div className="flex flex-col gap-[20px] text-center mb-2">
          <h2 className="text-xl text-[#F2F2F2] font-[Inter-SemiBold] ">
            Sponsoring opportunities..
          </h2>
          {/* Main heading */}
          <h1 className="capitalize text-3xl lg:text-4xl font-[Inter-Bold] text-[#F2F2F2] mb-8">
            Upcoming Projects You can support
          </h1>
        </div>
        {/** discover content */}
        <div className="flex flex-row gap-[20px] flex-wrap items-center justify-center">
          {discoverItems.map((data, index) => {
            return <DiscoverCard data={data} btype={true} />;
          })}
        </div>

        <div className="flex justify-center lg:justify-center">
          <Buttons
            className="bg-[#EE5170] w-[190.34px] h-[41.38px] rounded-[49.66px]
              font-[Inter-SemiBold] font-semibold text-16 lg:text-[15px] leading-19.36 text-[#FFFAF6] cursor-pointer lg:mt-[10px]"
            onClick={handleAmountOpen}
          >
            Send Us A Donation
          </Buttons>
        </div>
      </div>
    </div>
  );
};

export default DProjectSection;
