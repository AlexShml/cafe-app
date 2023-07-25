import React from "react";
import "../App.css";
import Header from "./Header";
import HeroSection from "./HeroSection";
import MenuSection from "./MenuSection";
import AboutSection from "./AboutSection";
import ContactSection from "./ContactSection";
import Footer from "./Footer";

function MainPage() {
  return (
    <div className="MainPage">
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
