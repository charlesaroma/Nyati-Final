import React from 'react'
import ServicesHeroSection from './ServicesHeroSection'
import Footer from '../../2-Components/Footer/Footer';
import Navigation from '../../2-Components/Navigation/Navigation';
import ServicesIntroSection from './ServicesIntroSection';
import ServicesOfferSection from './ServicesOfferSection';
import SChooseSection from './SChooseSection';
import SDiscoverSection from './SDiscoverSection';
import SPreProduction from './SPreProduction';
import SScriptSection from './SScriptSection';
import ContactFooter from '../../2-Components/Footer/ContactFooter';

const ServicesPage = () => {
  return (
    <div className="relative px-0 w-full h-full bg-secondary-900 overflow-x-hidden">
      <Navigation />
      <div className="flex flex-col w-full h-full gap-0 space-0">
        <ServicesHeroSection />
        <ServicesIntroSection />
        <ServicesOfferSection />
        <SChooseSection />
        <SDiscoverSection />
        <SPreProduction />
        <SScriptSection />
        <ContactFooter />
        <Footer />
      </div>
    </div>
  );
}

export default ServicesPage