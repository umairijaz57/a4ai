import Footer from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import PieChart from "@/components/PieChart";
import SteamHero from "@/components/SteamHero";
import TourActivities from "@/components/TourActivities";
import Image from "next/image";
import React from "react";
import steamtour from "@/bg/steamtour.jpg"

export default function stemtour() {
  return (
    <main className="min-h-screen bg-blue-50">
      <Navbar />
 <section className="w-full h-[600px] relative flex items-center justify-center bg-white">
                     
                    {/* Background Image using Next.js Image component */}
                    <Image
                      src={steamtour}
                      draggable={false}
                      alt="STEAM Background"
                      fill
                      priority
                    />
                    </section>

      <div className="flex flex-col md:flex-row justify-around py-20">
        <div className="bg-blue-50 font-bold border-l-blue-600 border-l-4 p-4 rounded-l-lg">
          <h1 className="text-xl text-blue-900">Why STEM?</h1>
          <p>
            96% of jobs are generated from STEM
          </p>
        </div>
        <div className="bg-blue-50 font-bold border-l-blue-600 border-l-4 p-4 rounded-l-lg">
          <h1 className="text-xl text-blue-900">Why STEM Tour</h1>
          <p className="">
            A short three hour tour of NUST labs transformed the opinion <br /> of 45% percent of grade 5 students
          </p>
        </div>
      </div>

      <div className="max-w-full mx-auto px-6">
        <section className="mb-12 py-12">
          <TourActivities />
        </section>
      </div>
      {/* <ParentsTestimonials /> */}
          <PieChart />
      <Footer />
    </main>
  );
}
