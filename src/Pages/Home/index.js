import React from 'react'
import { Category, HeroSection, Testimonials, FAQ, GetInTouchMap, AboutUs, AboutMe, Services, Values } from '../../Component'

function Home() {
  return (
    <div>
        <HeroSection />
        <Category />
        <Services />
        <AboutMe />
        <AboutUs />
        <GetInTouchMap />
        <Values />
        <Testimonials />
        <FAQ />
    </div>
  )
}

export default Home