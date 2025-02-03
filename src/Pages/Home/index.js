import React from 'react'
import { Category, HeroSection, Testimonials, FAQ, GetInTouchMap, AboutUs, AboutMe, Services, Values, SubHeader } from '../../Component'
import { IoIosMail } from "react-icons/io";
import { FaPhone } from "react-icons/fa6";
function Home() {
  return (
    <>
      {/* <SubHeader /> */}
      <HeroSection />
      <Category />
      <Services />
      <AboutMe />
      <AboutUs />
      <GetInTouchMap />
      <Values />
      <Testimonials />
      <FAQ />
    </  >
  )
}

export default Home