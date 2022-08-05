import React from 'react'
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
    </div>
  )
}

export default Home