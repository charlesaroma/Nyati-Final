import React from 'react'
import pdImage from "../../1-Assets/ProdImages/pdBg.svg";

const PDHero = () => {
  return (
    <div
      className={`flex flex-col h-[60vh] md:h-[70vh] w-screen bg-cover bg-no-repeat bg-fixed relative items-center md:items-center  justify-center overflow-hidden`}
    >
      <img
        src={pdImage}
        alt=""
        className="flex absolute top-0 object-cover h-full w-full object-top select-none bg-gradient-to-b from-transparent to-secondary-700 z-2"
        style={{
          filter: "brightness(20%)", // Adjust brightness if needed
        }}
      />
      <div className="flex flex-col h-full w-full relative items-center md:items-start  justify-end overflow-hidden lg:max-w-[1000px]">
        <div className="flex flex-col max-w-[300px] pb-[5%] md:mx-16 xl:mx-0  gap-[14px] md:gap-[24px] lg:gap-[61px]  md:max-w-[586px] xl:max-w-[520.89px]   xl:text-left z-40 text-[#ffffff]">
          <div className="flex flex-col gap-[10px] md:gap-[21px]">
            <p className="font-Bold font-[Inter-Bold] text-center text-[30px] sm:text-[30px] md:text-5xl xl:text-6xl 2xl:text-6xl  md:text-left capitalize text-[#F2F2F2]">
              Conquer or Die
            </p>
            <p className="font-Regular font-[Inter-Regular] text-[16px] text-center sm:text-[17.78px] md:text-[17.78px] xl:text-[17.78px] 2xl:text-[17.78px] md:text-left xl:leading-normal text-[#EEF1F4]">
              Conquer or Die is woven around the predicaments of Uganda’s
              symbols of independent or colonial resistance.
            </p>
          </div>

          <div className="w-full flex flex-row items-center justify-center md:justify-start">
            <div className="font-[Inter-Regular] text-[#FFFAF6] flex flex-row  w-max space-x-6 md:space-x-8 xl:text-base gap-y-3 items-center justify-center md:justify-start">
              <div className="w-max">Film </div>
              <ul className="font-[Inter-Regular] text-[#FFFAF6] flex list-disc w-full space-x-6 md:space-x-8 text-base flex-wrap gap-y-3 items-start justify-center md:justify-start">
                <li className="w-max">Drama </li>
                <li className="w-max">Documentary </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PDHero