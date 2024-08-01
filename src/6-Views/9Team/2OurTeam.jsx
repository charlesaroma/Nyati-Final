import React from "react";
import TeamImages from "../../1-Assets/data/web_metadata.json";

const obj = TeamImages;
const result = obj[Object.keys(obj)[2]];
const TeamImage = result.content;

const Images = [
  {
    title: "Dr. Evelyn Cindy Magara",
    src: TeamImage[0].file,
    description: "Dr. Evelyn Cindy Magara is an acclaimed film director hailing from Uganda, renowned for her innovative storytelling and compelling visual style. Raised in Kampala, Dr. Magara developed a passion for cinema early on, inspired by the rich cultural narratives of her homeland. She pursued her studies in film at Makerere University and later earned a doctorate in Film Studies from the University of California, Los Angeles (UCLA).",
    bg: "bg-[#AB4157]"
  },
  {
    title: "Wilfred Tusiime",
    src: TeamImage[1].file,
    description: "Wilfred Tusiime is an acclaimed film director hailing from Uganda, renowned for her innovative storytelling and compelling visual style. Raised in Kampala, Dr. Magara developed a passion for cinema early on, inspired by the rich cultural narratives of her homeland. She pursued her studies in film at Makerere University and later earned a doctorate in Film Studies from the University of California, Los Angeles (UCLA).",
    bg: "bg-[#F19E5B]"
  },
  {
    title: "Rogers Atukunda",
    src: TeamImage[2].file,
    description: "Rogers Atukunda is an acclaimed film director hailing from Uganda, renowned for her innovative storytelling and compelling visual style. Raised in Kampala, Dr. Magara developed a passion for cinema early on, inspired by the rich cultural narratives of her homeland. She pursued her studies in film at Makerere University and later earned a doctorate in Film Studies from the University of California, Los Angeles (UCLA).",
    bg: "bg-[#66244A]"
  },
];

const OurTeam = () => {
  return (
    <div className="bg-[#141118] min-h-[70vh] md:min-h-screen lg:min-h-[140vh] flex flex-col items-center justify-center px-4 sm:px-16 py-16 w-full overflow-hidden relative">
      <div className="w-full flex flex-col justify-center items-center gap-16 pb-40 lg:pb-0">
        {/* Sub heading and title */}
        <div className="flex flex-col gap-2 lg:gap-5 text-center pt-24 md:pt-10 lg:pt-10 lg:mt-[-140px]">
          <span className="font-semibold text-[18px] md:text-lg lg:text-2xl text-whites-50">
            Our Team
          </span>
          <div className="font-bold text-[27px] md:text-4xl capitalize text-whites-50">
            Meet the minds behind the Screen:{" "}
            <span className="block">Our exceptional team</span>
          </div>
        </div>
        {/* Team Images */}
        <div className="w-full flex flex-col md:flex-row flex-wrap justify-center gap-16">
          {/* Team Member */}
          {Images.map((image, index) => (
            <div key={index} className="relative flex flex-col items-center group">
              {/* image div */}
              <div className={`relative w-[220px] h-[220px] ${image.bg} flex flex-col items-center transition-all duration-100 ease-in-out group-hover:w-[310px] group-hover:h-[320px]`}>
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-[220px] h-[270px] object-cover absolute bottom-0"
                />
              </div>
              {/* caption */}
              <div className="relative mt-2 text-center">
                <figcaption className="text-white">{image.title}</figcaption>
              </div>
              {/* Appear on Hover */}
              <div className={`absolute top-[230px] max-h-[300px] lg:max-h-[400px] overflow-y-hidden hidden group-hover:block text-white ${image.bg} w-[310px] z-[3] p-5 transition-all duration-100 ease-in-out`}>
                <div className="mt-2 text-base text-center">
                  <figcaption className="text-white">{image.title}</figcaption>
                </div>
                <p className="text-xs lg:text-sm text-center">
                  {image.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
