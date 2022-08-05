import React from 'react'
import './Contact.css'
import { FaPhone, FaEnvelope } from 'react-icons/fa'

function Contact() {
  return (
    <div className='contact'>
        <div className="container">
            <div className="col-1">
                <div className="content">
                    <div><h2>Get in touch</h2>
                    <p>Need Assistance? Get in touch with any of our Support Centers</p>
                    </div>
                    <div className="address">
                        <p>No. _, ***, Ogbia, Bayelsa State</p>
                        <p>Main Campus - 334433</p>
                    </div>
                    <div className="icons">
                        <FaPhone style={{marginRight: '1rem'}}/>
                        <p>+234 567 890</p>
                    </div>
                    <div className="icons">
                        <FaEnvelope style={{marginRight: '1rem'}}/>
                        <p>arzidrey@gmail.com</p>
                    </div>
                    <div className="careers">
                        <p>Looking for Careers? <span>View all job opportunities</span></p>
                    </div>
                </div>
            </div>
            <div className="col-2">
                <form action="">
                    <input type="text" placeholder='Full name...' />
                    <input type="email" placeholder='email...' />
                    <input type="phone" placeholder='phone no...' />
                    <textarea name="message" id="" cols="30" rows="10" placeholder='message...'></textarea>
                    <div className="checkbox">
                        <input type="checkbox" />
                        <p>By checking this ox, you agree to the <span>Privacy Policy, </span>and <span>Cookie Policy</span></p>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Contact