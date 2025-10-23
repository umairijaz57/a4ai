import Footer from "@/components/Footer";
// import HomeHero from '@/components/HomeHero'
import HomeNews from "@/components/HomeNews";
import MissionVision from "@/components/MissionVision";
import { Navbar } from "@/components/Navbar";
import Patners from "@/components/Partners";
import Testimonials from "@/components/Testimonials";
import React from "react";
import { HiEnvelope } from "react-icons/hi2";

export default function Home() {
  return (
    <div>
      <div className="bg-white">
        <Navbar />
        {/* <HomeHero /> */}
        <MissionVision />
        <HomeNews />
        <Testimonials />
        <Patners />
      </div>

      <Footer />
    </div>
  );
}
