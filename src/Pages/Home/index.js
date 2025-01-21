import React from 'react'
import { Category, HeroSection, Testimonials, FAQ, GetInTouchMap, AboutUs, AboutMe, Services } from '../../Component'

function Home() {
  return (
    <div>
        <HeroSection />
        <Category />
        <Services />
        <AboutMe />
        <AboutUs />
        <GetInTouchMap />
        <Testimonials />
        <FAQ />
    </div>
  )
}

export default Home