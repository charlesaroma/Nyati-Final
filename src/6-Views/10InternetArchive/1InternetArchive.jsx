import React from 'react'
import Footer from '../../2-Components/Footer/Footer';
import Navigation from '../../2-Components/Navigation/Navigation';
import InternetArchiveHeroSection from './2InternetArchiveHeroSection';
import InternetArchivesSection from './3InternetArchivesSection';

const InternetArchive = () => {
  return (
    <div className="relative px-0 w-full h-full bg-secondary-900 overflow-x-hidden">
    <Navigation />

    <div className="flex flex-col w-full h-full gap-0 space-0">
      <InternetArchiveHeroSection/>
      <InternetArchivesSection/>
      </div>
    <Footer />
  </div>
  )
}

export default InternetArchive