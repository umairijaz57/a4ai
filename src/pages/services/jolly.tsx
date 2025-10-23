import Footer from '@/components/Footer'
import JollyActivities from '@/components/JollyActivities'
import Hero from '@/components/Hero'
import { Navbar } from '@/components/Navbar'
import { jollyTestimonials, TestimonialsSection } from '@/components/Parents'
import React from 'react'
import HomeHero from '@/components/HomeHero'

import Image from 'next/image'
import sherlock from '@/bg/sherlock.jpg'
import paintboy from '@/bg/paintboy.jpg'
import HeroSteam from './steam/herosteam'

export default function jolly() {
  return (
    <main className="min-h-screen bg-blue-50">
      <Navbar />
      <HomeHero/>
      <HeroSteam src='/masscot/jolly.png' heading="Jolly Phonics" para='FUN AND ENGAGING PHONIC LEARNING FOR KIDS! ORKSHEET, VIDEOS, TIPS TO BUILD STRONG READING SKILLS' />
      <div className="max-w-full mx-auto px-x ">
        <section className="pt-12">
          <JollyActivities />
        </section>
      <TestimonialsSection testimonials={jollyTestimonials} />
      </div>
      <Footer />
    </main>
  )
}
