import React from "react";
import Navigation from "../../2-Components/Navigation/Navigation";
import Footer from "../../2-Components/Footer/Footer";
import AHeroSection from "./AHeroSection";
import AFounderSection from "./AFounderSection";
import AVisionSection from "./AVisionSection";
import AImpactSection from "./AImpactSection";
import ADonationSection from "./ADonationSection";
import AShowSection from "./AShowSection";

const AboutPage = () => {
  let nextRef = React.useRef(null);
  const handleScrollTo = () => {
    if (nextRef.current) {
      nextRef.current.scrollIntoView({ behaviour: "smooth", block: "start" });
    }
  };
  return (
    <div className="relative px-0 w-full h-full bg-secondary-900 !overflow-x-hidden overflow-y-auto ">
      <Navigation />

      <div className="h-full w-full flex flex-col gap-0 space-y-0 !overflow-x-hidden">
        <AHeroSection scrollFunc={handleScrollTo} />
        <AFounderSection nRef={nextRef}/>
        <AVisionSection />
        <AImpactSection />
        <ADonationSection />
        <AShowSection />
        <Footer />
      </div>
    </div>
  );
};

export default AboutPage;
