// app/internee/page.tsx
"use client";
import React from "react";
import Image from "next/image";
import { Quote } from "lucide-react";
import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function InterneePage() {
  // ✅ JSON array of project images
  const projectImages = [
    { id: 1, src: "/Internee/image-1.jpg", alt: "Dataset Preparation" },
    { id: 2, src: "/Internee/image-2.jpg", alt: "Model Training" },
    { id: 3, src: "/Internee/image-3.jpg", alt: "Real-time Tracking" },
    { id: 4, src: "/Internee/image-4.jpg", alt: "Final Deployment" },
  ];

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gradient-to-br from-blue-200 via-blue-300 to-blue-500 py-16 px-6 flex flex-col items-center relative overflow-hidden">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 bg-[url('/patterns/grid.svg')] opacity-10 pointer-events-none" />

        <section className="max-w-5xl w-full space-y-20 relative z-10">
          {/* Mentor Testimonial */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl shadow-xl p-10 relative hover:shadow-2xl transition-shadow"
          >
            <Quote className="absolute top-6 left-6 w-10 h-10 text-blue-300 opacity-50" />
            <div className="flex flex-col md:flex-row md:items-center md:space-x-6">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6 }}
                className="relative w-20 h-20 rounded-full overflow-hidden shadow-md border-2 border-blue-500"
              >
                <Image
                  src="/team/DrNazia.jpg"
                  alt="Mentor"
                  fill
                  className="object-cover"
                />
              </motion.div>
              <div>
                <h2 className="text-2xl font-bold text-gray-800">
                  Dr. Nazia Perwaiz
                </h2>
                <p className="text-sm text-gray-500">
                  Supervisor & CEO, Murabbi
                </p>
              </div>
            </div>
            <p className="mt-6 text-gray-700 text-lg leading-relaxed">
              “Another exciting example of First-Year Brilliance at NUST SEECS
              (BSAI program)! Under my mentorship during the Summer internship,
              our first-year students developed a custom person tracker that
              leverages temporal and facial features for more reliable tracking.
              This shows what’s possible when we trust young minds and give them
              the right guidance and space to explore.”
            </p>
          </motion.div>

          {/* Student Testimonial */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl shadow-xl p-10 relative hover:shadow-2xl transition-shadow"
          >
            <Quote className="absolute top-6 left-6 w-10 h-10 text-green-300 opacity-50" />
            <div className="flex flex-col md:flex-row md:items-center md:space-x-6">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6 }}
                className="relative w-20 h-20 rounded-full overflow-hidden shadow-md border-2 border-green-500"
              >
                <Image
                  src="/Internee/FatimaAhmad.jpg"
                  alt="Student"
                  fill
                  className="object-cover"
                />
              </motion.div>
              <div>
                <h2 className="text-2xl font-bold text-gray-800">
                  Fatima Ahmad
                </h2>
                <p className="text-sm text-gray-500">
                  BS Artificial Intelligence, NUST
                </p>
              </div>
            </div>
            <p className="mt-6 text-gray-700 text-lg leading-relaxed">
              “I, along with my teammates Esha Rehman, Muhammad Ali Imran and
              Zohaa Mahmood, successfully completed our Summer Internship
              (AI/ML) at Murabbi under the supervision of Ma’am Nazia Perwaiz,
              PhD. This project gave us hands-on experience in dataset creation,
              model fine-tuning, feature extraction, similarity matching, and
              real-time deployment. I’m truly grateful for this opportunity.”
            </p>

            {/* Highlights */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              viewport={{ once: true }}
              className="mt-6 bg-green-50 p-5 rounded-xl border border-green-100 shadow-sm"
            >
              <h3 className="text-lg font-semibold text-green-700 mb-2">
                Internship Highlights
              </h3>
              <ul className="list-disc list-inside space-y-1 text-gray-700 text-base">
                <li>Custom face dataset creation & MTCNN face alignment</li>
                <li>
                  Fine-tuned VGG16 model –{" "}
                  <span className="font-semibold text-green-700">
                    95% training / 93% testing accuracy
                  </span>
                </li>
                <li>
                  Used as feature extractor after removing classification head
                </li>
                <li>
                  Integrated with YOLO + cosine similarity for person tracking
                </li>
              </ul>
            </motion.div>
          </motion.div>

          {/* Project Gallery */}
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="text-3xl font-bold text-white text-center mb-10 drop-shadow-lg"
            >
              Project Snapshots 📸
            </motion.h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              {projectImages.map((img) => (
                <motion.div
                  key={img.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: img.id * 0.1 }}
                  viewport={{ once: true }}
                  className="relative w-full h-56 rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition-transform"
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover"
                  />
                </motion.div>
              ))}
            </div>
          </div>

          {/* Closing Note */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <p className="text-xl text-white font-semibold drop-shadow-lg">
              ⭐ This success story is a testament to what’s possible when
              mentors guide and students explore with passion. ⭐
            </p>
          </motion.div>
        </section>
      </main>
      <Footer />
    </>
  );
}
