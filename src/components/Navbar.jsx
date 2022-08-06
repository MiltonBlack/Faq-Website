import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import {FaBars, FaTimes} from 'react-icons/fa'
import './Navbar.css'

const Navbar = () => {
    const [open, setOpen] = useState(false)
    const openMenu = () => {
        setOpen(!open)
    }
  return (
    <header className=' w-full h-24 header'>
        <nav className='navbar'>
            <div className='logo'>
                <Link to='/'><h1 className="logo-item">Logo</h1></Link>
            </div>
            <ul className={open ? 'nav-menu active' : 'nav-menu'}>
                <li className='nav-item'>
                    <Link to='/' className='nav-link'>Home</Link>
                </li>
                <li className='nav-item'>
                    <Link to='/pricing' className='nav-link'>Pricing</Link>
                </li>
                <li className='nav-item'>
                    <Link to='/faq' className='nav-link'>FAQ</Link>
                </li>
                <li className='nav-item'>
                    <Link to='/contact' className='nav-link'>Contact</Link>
                </li>
            </ul>
            <div className="hamburger" onClick={openMenu}>
                {open ? <FaTimes size={20} style={{color:'#fff'}}/> : <FaBars size={20} style={{color:'#fff'}}/>}  
            </div>
        </nav>
    </header>
  )
}

export default Navbar