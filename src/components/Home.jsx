import React from 'react'
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
    </div>
  )
}

export default Home