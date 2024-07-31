import React from 'react'

const AImpactSection = () => {
  return (
    <div className="bg-[#141118]  flex flex-col items-center justify-center px-[30px] py-[54px] sm:px-16 sm:py-16 w-screen overflow-hidden relative">
      <div className="flex flex-col lg:flex-col justify-between items-center md:max-w-[743px] lg:max-w-[1000px] gap-[20px] md:gap-[20px] xl:gap-[26px]">
        {/* main title */}
        <h1 className="text-[#F2F2F2] w-full font-[Inter-Bold] text-center text-[30px] md:text-[38px] lg:text-[40px]">
          Our Impact
        </h1>

        {/* Paragraph */}
        <p className="w-full text-[#F2F2F2] font-[Inter-Regular] text-[14px] md:text-[18px] text-opacity-70 text-justify">
          Film is a very powerful and effective medium for the transmission of
          messages in society. In the last decade, Nyati Motion Pictures (NMP)
          has managed to produce educative and entertaining films that have
          affected our society positively.
        </p>
        <p className="w-full text-[#F2F2F2] font-[Inter-Regular] text-[14px] md:text-[18px] text-opacity-70 text-justify">
          The Nyati Motion Pictures is motivated by ‘art for man’s sake’. As a
          result, the Nyati team is committed to telling authentic African
          stories that bring the artistic reality close to the people. Our films
          are inspired by real-life experiences that are specific to the special
          and temporal setting, yet with universal themes. Our films represent
          Uganda’s culture and experience to the whole world with the primary
          purpose of contributing to the socio-economic development of our
          country and Africa at large.
        </p>
      </div>
    </div>
  );
}

export default AImpactSection