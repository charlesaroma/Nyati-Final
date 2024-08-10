import React from 'react'
import Metadata from "../../1-Assets/data/web_metadata.json";

const obj = Metadata;
const result = obj[Object.keys(obj)[5]];
const Content = result.content[0].files[0];

const PDHero = () => {
  return (
    <div
      className={`flex flex-col h-[60vh] md:h-[70vh] w-screen bg-cover bg-no-repeat bg-fixed relative items-center md:items-center  justify-center overflow-hidden`}
    >
      <img
        src={Content}
        alt=""
       className="flex absolute top-0 object-cover h-full w-full select-none bg-gradient-to-b from-transparent to-secondary-700"
        style={{
          filter: "brightness(20%)", // Adjust brightness if needed
        }}
      />
      <div className="flex flex-col h-full w-full relative items-center md:items-start justify-end overflow-hidden  bg-gradient-to-b from-transparent to-secondary-800">
        <div className="flex flex-col max-w-[300px] pb-[5%] md:mx-16 xl:mx-0  gap-[14px] md:gap-[24px] lg:gap-[61px]  md:max-w-[586px] xl:max-w-[520.89px]   xl:text-left z-40 text-[#ffffff]">
          <div className="flex flex-col gap-[10px] md:gap-[21px]">
            <p className="font-[Inter-Bold] text-[24px] md:text-5xl text-whites-40 select-none">
              Conquer or Die
            </p>
            <p className="font-Regular font-[Inter-Regular] text-[16px] text-center sm:text-[17.78px] md:text-[17.78px] xl:text-[17.78px] 2xl:text-[17.78px] md:text-left xl:leading-normal text-[#EEF1F4]">
            This is majorly a fiction representation of the stories told in Tuko Pamoja.
            </p>
            <p className="font-extrabold font-[Inter-Regular] text-[16px] text-center sm:text-[17.78px] md:text-[17.78px] xl:text-[17.78px] 2xl:text-[17.78px] md:text-left xl:leading-normal text-[#EEF1F4]">
            Production Stage: Pre-production
            </p>
          </div>

          <div className="w-full flex flex-row items-center justify-center md:justify-start">
            <div className="font-[Inter-Regular] text-[#FFFAF6] flex flex-row  w-max space-x-6 md:space-x-8 xl:text-base gap-y-3 items-center justify-center md:justify-start">
              <div className="w-[124px]">Live-action</div>
              <ul className="font-[Inter-Regular] text-[#FFFAF6] flex list-disc w-full space-x-6 md:space-x-8 text-base flex-wrap gap-y-3 items-start justify-center md:justify-start">
                <li className="w-max">Historical series</li>
                <li className="w-max">5 Season </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PDHero