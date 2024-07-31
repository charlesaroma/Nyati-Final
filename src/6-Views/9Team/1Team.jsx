import React from "react";
import Navigation from "../../2-Components/Navigation/Navigation";
import OurTeam from "./2OurTeam";
import ContentSection from "../9Team/3ContentSection";
import ContactFooter from "../../2-Components/Footer/ContactFooter";
import Footer from "../../2-Components/Footer/Footer";

const Team = () => {
  return (
    <div className="relative px-0 w-full h-full bg-secondary-900 !overflow-x-hidden overflow-y-auto ">
      <Navigation />
      <div className="h-full w-full flex flex-col gap-0 space-y-0 !overflow-x-hidden">
        <OurTeam />
        <ContentSection />
        <ContactFooter />
        <Footer />
      </div>
    </div>
  );
};

export default Team;
