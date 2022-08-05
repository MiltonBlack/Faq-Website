import React from 'react'
import Contact from './Contact'
import Faq from './Faq'
import Hero from './Hero'
import './Home.css'
import Navbar from './Navbar'
import Pricing from './Pricing'
import Testimonial from './Testimonial'

const Home = () => {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <Pricing/>
        <Testimonial/>
        <Faq/>
        <Contact/>
    </div>
  )
}

export default Home