import React from "react";
import Navigation from "../../2-Components/Navigation/Navigation";
import HHero from "./HHero";
import HDiscoverSection from "./HDiscoverSection";
import HMovieSliderSection from "./HMovieSliderSection";
import HContentSection from "./HContentSection";
import FooterWatch from "../../2-Components/Footer/FooterWatch";
import ContactFooter from "../../2-Components/Footer/ContactFooter";
import Footer from "../../2-Components/Footer/Footer";

const HomePage = () => {
  let nextRef = React.useRef(null);

  const handleScrollTo = () => {
    if (nextRef.current) {
      nextRef.current.scrollIntoView({ behaviour: "smooth", block: "start" });
    }
  };
  return (
    <div className="relative px-0 w-full h-full bg-secondary-900 !overflow-x-hidden overflow-y-auto ">
      <Navigation />

      {/** page sections */}
      <div className="h-full w-full flex flex-col gap-0 space-y-0 !overflow-x-hidden">
        <HHero scrollFunc={handleScrollTo} />

        <HDiscoverSection nRef={nextRef} />
        <HMovieSliderSection />
        <HContentSection />
        <FooterWatch />
        <ContactFooter />
        <Footer />
      </div>
    </div>
  );
};

export default HomePage;
