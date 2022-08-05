import React from 'react'
import Hero from './Hero'
import './Home.css'
import Navbar from './Navbar'
import Pricing from './Pricing'

const Home = () => {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <Pricing/>
    </div>
  )
}

export default Home