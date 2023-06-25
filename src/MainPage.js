import React from "react";
import "./App.css";
import Header from "./Components/Header";
import HeroSection from "./Components/HeroSection";
import MenuSection from "./Components/MenuSection";
import AboutSection from "./Components/AboutSection";
import ContactSection from "./Components/ContactSection";
import Footer from "./Components/Footer";

function MainPage() {
  return (
    <div className="MainPage" /* style={MainPageStyle} */>
      <Header />
      <main>
        <HeroSection />
        <MenuSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default MainPage;
