import React from 'react'
import { Category, HeroSection, Testimonials, FAQ, GetInTouchMap, AboutUs, AboutMe, Services, Values, SubHeader } from '../../Component'

function Home() {
  return (
    <>
      <HeroSection />
      <Category />
      <Services />
      <AboutMe />
      <AboutUs />
      <GetInTouchMap />
      <Values />
      <Testimonials />
      <FAQ />
    </>
  )
}

export default Home