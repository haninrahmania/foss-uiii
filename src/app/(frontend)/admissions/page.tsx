import React from "react";

import NavBar from "@/(frontend)/components/Navbar";
import AdmissionsHero from "@/(frontend)/components/AdmissionsHero";
import ProgramsSection from "@/(frontend)/components/academic-program/ProgramsSection";
import FAQSection from "@/(frontend)/components/FAQSection";
import Footer from "@/(frontend)/components/Footer";

export default function AdmissionsPage() {
  return (
    <>
      <nav>
        <NavBar />
      </nav>
      <main>
        <AdmissionsHero />
        {/* <ProgramsSection /> */}
        <FAQSection />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
