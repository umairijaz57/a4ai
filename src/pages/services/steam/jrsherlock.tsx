import AIActivities from "@/components/AIActivites";
import AIHero from "@/components/AIHero";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { aiTestimonials, cyberTestimonials, TestimonialsSection } from "@/components/Parents";
import SherlockActivities from "@/components/SherlockActivities";
import Sherlockhero from "@/components/sherlockhero";
import Image from "next/image";
import React from "react";
import sherlock from "@/bg/sherlock.jpg"
import HeroSteam from "../../../components/herosteam";

export default function jrsherlock() {
  return (
    <main className="min-h-screen bg-blue-50">
      <Navbar />
      <HeroSteam src="/masscot/cyberninja.png" name="Cyber Ninja" heading='Juninor Sherlock Holmes' para='Immersive advanture into the mysterious world of the information security where history, puzzles and codes reveal the secrets of data hiding and the roots of the modern cyberSecurity'  />


      <div className="max-w-full mx-auto px-6 ">
        <section className="mb-12 py-12">
          <SherlockActivities />
        </section>

        <section className="px-10 md:px-20 lg:px-36">
          <h2 className="text-4xl text-blue-600 font-bold  mb-6 border-b border-slate-200 text-center">
            Learning Outcomes
          </h2>

          <div className="">
            <p className="text-slate-700 leading-relaxed">
              Students will learn how to hide and encode messages, practice breaking simple codes, explore historical techniques of secret communication, understand the basics of cryptography, and discover how these skills connect to modern cybersecurity and career opportunities.
            </p>
          </div>
        </section>
      </div>
      <TestimonialsSection testimonials={cyberTestimonials} />
      <Footer />
    </main>
  );
}
