import React from 'react'
import { FaDatabase, FaAsterisk, FaAccusoft, FaFacebook, FaTwitter, FaGithub } from 'react-icons/fa'
import './Hero.css'

const Hero = () => {
  return (
    <div className='hero'>
        <div className="container">
            <div className="content">
                <div className="col-1">
                    <h1>Premium Tutorship to enrich your</h1>
                    <h1><span className='primary-color'>KNOWLEDGE</span></h1>
                    <p>Take our Online Courses and Learn from experienced and qualified
                        tutors virtually on our platform.
                    </p>
                    <div className="used-by">
                        <p>USED BY</p>
                        <div className="icons">
                            <i><FaDatabase className='icon'/>Civil Engineering Students</i>
                            <i><FaAsterisk className='icon'/>100 and 200 Level Engineering</i>
                            <i><FaAccusoft className='icon'/>Mechanical Engineering Students</i>
                        </div>
                    </div>
                </div>
                <div className="col-2">
                    <div className="form">
                        <div className="form-container">
                            <p className="sign-in-txt">Sign In with</p>
                            <div className="social-login">
                                <i><FaFacebook size={20}/></i>
                                <i><FaTwitter size={20}/></i>
                                <i><FaGithub size={20}/></i>
                            </div>
                            <div className="divider">
                                <p><span>OR</span></p>
                            </div>
                            <form action="">
                                <input type="text" placeholder='Name...' />
                                <input type="email" placeholder='Email...' />
                                <input type="password" placeholder='Password...' />
                                <button>Create an Account</button>
                            </form>
                        </div>
                        <div className="form-footer">
                            <p>By siging up, you agree to our 
                                <span className='primary-color'>Terms, Data, policy</span> and
                                <span className="primary-color">Cookie Policy</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero