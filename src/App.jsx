import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./6-Views/1Home/HomePage";
import './App.css'
import { StyledEngineProvider } from "@mui/material/styles";
import AboutPage from "./6-Views/2AboutNyati/AboutPage.jsx";
import ServicesPage from "./6-Views/3Services/ServicesPage.jsx";
import ProdDetailPage from "./6-Views/4ProdDetails/ProdDetailPage.jsx";
import ContactUsPage from "./6-Views/5ContactUs/ContactUsPage.jsx";
import DonatePage from "./6-Views/6Donate/DonatePage.jsx";
import FilmPage from "./6-Views/7Films/FilmPage.jsx";
import FilmDetailPage from "./6-Views/8FilmDetail/FilmDetailPage.jsx";
import Team from "./6-Views/9Team/1Team.jsx";
import Archive from "./6-Views/10InternetArchive/1InternetArchive.jsx";
import Collections from "./6-Views/10InternetArchive/4MoreCollections.jsx";

function App() {
  return (
    <StyledEngineProvider injectFirst>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/services/conquerordie" element={<ProdDetailPage />} />
          <Route path="/contact" element={<ContactUsPage />} />
          <Route path="/donate" element={<DonatePage />} />
          <Route path="/film" element={<FilmPage />} />
          <Route path="/film/:filmid" element={<FilmDetailPage />} />
          <Route path="/team" element={<Team />} />
          <Route path="/internetarchive" element={<Archive/>}/>
          <Route path="/Morecollections" element={<Collections/>}/>
        </Routes>
      </BrowserRouter>
    </StyledEngineProvider>
  );
}

export default App;
