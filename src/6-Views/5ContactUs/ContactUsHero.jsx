import React from 'react'
import styled from "styled-components";

import HeroBg from "../../1-Assets/Hero2.svg";
import Buttons from '../../2-Components/Buttons/Buttons';
import { Icon } from "@iconify/react";

const ContactUsHero = ({ scrollfunc }) => {
  return (
    <HeroContent className="flex justify-center items-center h-[60vh] md:h-[70vh]">
      <div spacing={"54px"} className="flex flex-col text-center items-center ">
        <h1 className="text-[#F2F2F2] text-[34px] max-w-[300px] md:max-w-full  lg:text-[60px] text-center select-none capitalize font-[Inter-Bold]">
          Connect with us
        </h1>
      </div>
      <Buttons
        onClick={() => scrollfunc()}
        variant="ghost"
        className="text-whites-40 absolute left-0 right-0 w-[121px] mx-auto flex flex-col items-center bottom-1 space-y-1"
      >
        <p className="font-[Inter-Regular] text-sm lg:text-base">Scroll Down</p>
        <Icon
          onClick={scrollfunc}
          icon="solar:round-alt-arrow-down-broken"
          width="2rem"
          height="2rem"
          style={{ color: "#E8CFD2" }}
        />
      </Buttons>
    </HeroContent>
  );
};

export default ContactUsHero

const HeroContent = styled.section`
  height: 100vh;
  display: flex;

  background: linear-gradient(
      to top,
      rgba(20, 17, 24, 1),
      rgba(20, 17, 24, 0.729)
    ),
    url(${HeroBg}) center/cover no-repeat;

  overflow: hidden;
  position: relative;

  .custombtn {
    background: transparent;
    backdrop-filter: blur(30px);
    -webkit-backdrop-filter: blur(30px);
  }
`;