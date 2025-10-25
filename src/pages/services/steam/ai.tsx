import AIActivities from "@/components/AIActivites";
import AIHero from "@/components/AIHero";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { aiTestimonials, TestimonialsSection } from "@/components/Parents";
import Image from "next/image";
import React from "react";
import agentv from "@/bg/agentv.jpg";
import HeroSteam from "../../../components/herosteam";

export default function aforai() {
  return (
    <main className="min-h-screen bg-blue-50">
      <Navbar />
      <HeroSteam src="/masscot/agentvirtual.png" name="Agent Virtual" heading='A is for AI' para='AI is a part of kids LIVES, Especially Generation Alpha ("AI NATIVES"). They Trust AI tools like chatGPT alot. We meed to  guide them on AI basics and ethics for a balanced understanding'  />
      

      <div className="max-w-full mx-auto px-6 ">
        <section className="mb-12 py-12">
          <AIActivities />
        </section>

        <section className="px-10 md:px-20 lg:px-36">
          <h2 className="text-4xl text-blue-600 font-bold  mb-6 border-b border-slate-200 text-center">
            Learning Outcomes
          </h2>

          <div className="">
            <p className="text-slate-700 leading-relaxed">
              Students will acquire prompt engineering skills to effectively
              utilize ChatGPTs. They will gain an understanding of the three
              fundamental components of AI applications, which will help set
              realistic expectations and alleviate unnecessary fears.
              Additionally, this knowledge will enable them to build safeguards
              against AI biases and ethical challenges.
            </p>
          </div>
        </section>
      </div>
      <TestimonialsSection testimonials={aiTestimonials} />
      <Footer />
    </main>
  );
}
