import React from "react";
import Bg from "../../1-Assets/Background.png";

const InternetArchiveHeroSection = () => {
  return (
    <section className="relative flex justify-center items-center h-[60vh] md:h-[70vh]">
      {/* Background */}
      <img
        src={Bg}
        alt="Background"
        className="absolute top-0 left-0 object-cover h-full w-full select-none z-0"
        style={{
          filter: "brightness(50%)", // Adjust brightness if needed
        }}
      />
      {/* Hero Title */}
      <div className="relative z-10 flex flex-col text-center items-center space-y-10">
        <h1 className="text-[#F2F2F2] text-2xl max-w-[300px] md:max-w-full lg:max-w-[460px] lg:text-4xl text-center select-none capitalize font-bold">
          Where Epic Stories Transcend Entertainment
        </h1>
      </div>
      {/* Archives here */}
    </section>
  );
};

export default InternetArchiveHeroSection;
