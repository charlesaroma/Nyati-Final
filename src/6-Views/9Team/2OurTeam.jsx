import React from "react";
import TeamImages from "../../1-Assets/data/web_metadata.json";


const obj = TeamImages;
const result = obj[Object.keys(obj)[2]];
const TeamImage = result.content;

const Images = [
  {
    title: "TeamImage1",
    src: TeamImage[0].file,
  },
  {
    title: "TeamImage2",
    src: TeamImage[1].file,
  },
  {
    title: "TeamImage3",
    src: TeamImage[2].file,
  },
];



const OurTeam = () => {
  return (
    <div className="bg-[#141118] lg:h-[170vh] flex flex-col items-center justify-center px-[30px] sm:px-16 sm:py-16 w-screen overflow-hidden relative md:px-8">
      <div className="h-full w-full flex flex-col justify-center items-center gap-16 pb-40 lg:pb-0 lg:pt-[-100px]">
        {/* Sub heading and title */}
        <div className="flex flex-col gap-2 lg:gap-5 text-center pt-24 md:pt-10 lg:pt-10">
          <span className="font-[Inter-SemiBold] text-[18px] text-sm md:text-lg lg:text-2xl text-whites-50 font-semibold">
            Our Team
          </span>
          <div className="font-[Inter-Bold] font-bold text-[27px] text-xl lg:text-4xl capitalize text-whites-50">
            Meet the minds behind the Screen:{" "}
            <span className="block">Our exceptional team</span>
          </div>
        </div>
        {/* Team Images */}
        <div className="w-full flex flex-col md:flex-wrap lg:flex-row justify-center gap-16">
          {/* Team Member 1 */}
          <div className="relative flex flex-col items-center group">
            {/* image div */}
            <div className="relative w-[220px] h-[220px] bg-[#AB4157] flex flex-col items-center transition-all duration-100 ease-in-out group-hover:w-[310px]">
              <img
                src={Images[0].src}
                alt="Dr. Evelyn Cindy Magara"
                className="w-[220px] h-[270px] object-cover absolute bottom-0"
              />
            </div>
            {/* caption 1 */}
            <div className="relative mt-2 text-center">
              <figcaption className="text-white">
                Dr. Evelyn Cindy Magara
              </figcaption>
            </div>
            {/* Appear on Hover 1 */}
            <div className="absolute top-[230px] max-h-[300px] overflow-y-hidden hidden group-hover:block text-white bg-[#AB4157] mt-[-32px] w-[310px] z-[3] p-5 transition-all duration-100 ease-in-out">
              <div className="mt-2 text-base text-center">
                <figcaption className="text-white">
                  Dr. Evelyn Cindy Magara
                </figcaption>
              </div>
              <p className="text-xs lg:text-sm text-justify">
                Dr. Evelyn Cindy Magara is an acclaimed film director hailing
                from Uganda, renowned for her innovative storytelling and
                compelling visual style. Raised in Kampala, Dr. Magara developed
                a passion for cinema early on, inspired by the rich cultural
                narratives of her homeland. She pursued her studies in film at
                Makerere University and later earned a doctorate in Film Studies
                from the University of California, Los Angeles (UCLA).
              </p>
            </div>
          </div>

          {/* Team Member 2 */}
          <div className="relative flex flex-col items-center group">
            {/* image div */}
            <div className="relative w-[220px] h-[220px] bg-[#F19E5B] flex flex-col items-center transition-all duration-100 ease-in-out group-hover:w-[310px]">
              <img
                src={Images[1].src}
                alt="Wilfred Tusiime"
                className="w-[220px] h-[270px] object-cover absolute bottom-0"
              />
            </div>
            {/* caption 2 */}
            <div className="relative mt-2 text-center">
              <figcaption className="text-white">Wilfred Tusiime</figcaption>
            </div>
            {/* Appear on Hover 2 */}
            <div className="absolute top-[230px] max-h-[300px] overflow-y-hidden hidden group-hover:block text-white bg-[#F19E5B] mt-[-32px] w-[310px] z-[3] p-5 transition-all duration-100 ease-in-out">
              <div className="mt-2 text-base text-center">
                <figcaption className="text-white">Rogers Atukunda</figcaption>
              </div>
              <p className="text-xs lg:text-sm text-justify">
                Dr. Evelyn Cindy Magara is an acclaimed film director hailing
                from Uganda, renowned for her innovative storytelling and
                compelling visual style. Raised in Kampala, Dr. Magara developed
                a passion for cinema early on, inspired by the rich cultural
                narratives of her homeland. She pursued her studies in film at
                Makerere University and later earned a doctorate in Film Studies
                from the University of California, Los Angeles (UCLA).
              </p>
            </div>
          </div>

          {/* Team Member 3 */}
          <div className="relative flex flex-col items-center group">
            {/* image div */}
            <div className="relative w-[220px] h-[220px] bg-[#66244A] flex flex-col items-center transition-all duration-100 ease-in-out group-hover:w-[310px]">
              <img
                src={Images[2].src}
                alt="Rogers Atukunda"
                className="w-[220px] h-[270px] object-cover absolute bottom-0"
              />
            </div>
            {/* caption 3 */}
            <div className="relative mt-2 text-center">
              <figcaption className="text-white">Rogers Atukunda</figcaption>
            </div>
            {/* Appear on Hover 3 */}
            <div className="absolute top-[230px] max-h-[300px] overflow-y-hidden hidden group-hover:block text-white bg-[#66244A] mt-[-32px] w-[310px] z-[3] p-5 transition-all duration-100 ease-in-out">
              <div className="mt-2 text-base text-center">
                <figcaption className="text-white">Rogers Atukunda</figcaption>
              </div>
              <p className="text-xs lg:text-sm text-justify">
                Dr. Evelyn Cindy Magara is an acclaimed film director hailing
                from Uganda, renowned for her innovative storytelling and
                compelling visual style. Raised in Kampala, Dr. Magara developed
                a passion for cinema early on, inspired by the rich cultural
                narratives of her homeland. She pursued her studies in film at
                Makerere University and later earned a doctorate in Film Studies
                from the University of California, Los Angeles (UCLA).
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
