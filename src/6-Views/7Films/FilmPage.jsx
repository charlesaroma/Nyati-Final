import React from "react";
import Navigation from "../../2-Components/Navigation/Navigation";
import FHeroSection from "./FHeroSection";
import FooterWatch from "../../2-Components/Footer/FooterWatch";
import Footer from "../../2-Components/Footer/Footer";
import FilmsWatchList from "./FilmsWatchList";
import watchJSON from "../../1-Assets/data/watchlist_metadata.json";
import FilmsGenre from "./FilmsGenre";
import EventsSection from './FEventsSection'

const FilmPage = () => {
  return (
    <div className="relative px-0 w-full min-h-[100vh] h-full bg-secondary-800 !overflow-x-hidden overflow-y-auto">
      <Navigation />

      <div className="h-full w-full flex flex-col gap-0 space-y-0 !overflow-x-hidden">
        <FHeroSection />

        <FilmsWatchList />

        {watchJSON.length > 0 && (
          <>
            {watchJSON.map((data, index) => {
              return (
                <FilmsGenre
                  key={index}
                  title={data?.name}
                  watchData={data.watchlists}
                />
              );
            })}
          </>
        )}
        
        <EventsSection/>

        <FooterWatch />
      </div>
      <Footer />
    </div>
  );
};

export default FilmPage;
