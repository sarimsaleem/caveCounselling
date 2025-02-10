import React from 'react'
import { Category, HeroSection, Testimonials, FAQ, GetInTouchMap, AboutUs, AboutMe, Services, Values, MyLocation } from '../../Component'

function Home() {
  return (
    <>
      <HeroSection />
      <Category />
      <Services />
      <AboutMe />
      <AboutUs />
      <MyLocation />
      <GetInTouchMap />
      <Values />
      <Testimonials />
      <FAQ />
    </>
  )
}

export default Home