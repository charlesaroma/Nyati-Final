import React from "react";
import Navigation from "../../2-Components/Navigation/Navigation";
import Footer from "../../2-Components/Footer/Footer";
import DHelpSection from "./DHelpSection";
import DWorkSection from "./DWorkSection";
import DProjectSection from "./DProjectSection";
import DonatePrices from "../../2-Components/Modals/DonatePrices";
import DonateModal from "../../2-Components/Modals/DonateModal";

const DonatePage = () => {
  const [openAmountModal, setOpenAmountModal] = React.useState(false);

  React.useEffect(() => {
    if (openAmountModal) {
      if (typeof window != "undefined" && window.document) {
        document.body.style.overflow = "hidden";
      } else {
         document.body.style.overflow = "unset";
      }
    }

  },[openAmountModal])

  const handleAmountOpen = () => {
    setOpenAmountModal(() => true);
     if (typeof window != "undefined" && window.document) {
       document.body.style.overflow = "hidden";
     }
  }
  const handleAmountClose = () => {
    setOpenAmountModal(() => false);
     document.body.style.overflow = "unset";
  };
  return (
    <>
      <div className="relative  px-0 w-full h-full bg-secondary-800 overflow-x-hidden  ">
        <Navigation />

        <div className="flex flex-col w-full h-full gap-0 space-0">
          <DHelpSection handleAmountOpen={handleAmountOpen} />
          <DWorkSection />
          <DProjectSection handleAmountOpen={handleAmountOpen} />
        </div>
        <Footer />

        {/** popup content */}
      </div>

      {openAmountModal && (
        
          <DonateModal visible={openAmountModal} onClose={handleAmountClose} />
     
      )}
    </>
  );
};

export default DonatePage;
