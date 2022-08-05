import React from 'react'
import './Testimonial.css'
import { FaDatabase } from 'react-icons/fa'

function Testimonial() {
  return (
    <div className='testimonial'>
        <div className="container">
            <div className="outline">
                <div className="content">
                    <i><FaDatabase/>EdTutor</i>
                    <p className='body'>
                        This is an educational website that enrolls you on a course of your choice.
                        for better Understanding give it a trial.
                    </p>
                    <div className="name">
                        <p>Sonia Seipolou</p>
                        <p>CEO, Edtutor</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Testimonial