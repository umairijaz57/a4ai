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
      <div className="max-w-full bg-[url(/jolly/bg.jpg)] bg-no-repeat bg-cover bg-center  w-full flex flex-col-reverse sm:flex-row gap-8 lg:gap-12">
        <div className="">
          <div className="relative flex flex-col w-full max-w-md">
            <img
              src="/masscot/bytebuddyR.png"
              alt="Friendly robot character speaking"
              className="w-full h-auto flip transform -scale-x-100"
            />
          </div>
        </div>

        <div className="flex justify-center lg:justify-start items-start sm:mt-2 md:mt-6 lg:mt-12">
          <div className=" rounded-full shadow-lg opacity-60 bg-blue-900 p-8 md:p-12 max-w-3xl border ">
            <div className="text-center space-y-auto text-white">
              <h1 className="text-3xl md:text-4xl font-bold  text-balance">STEAM TOUR: A day at NUST</h1>
              <p className="text-base md:text-lg leading-relaxed capitalize">
                Join us and discover the wonders of No.1 ranked university in Pakistan.
              </p>
            </div>
          </div>
        </div>
      </div>

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
