import React, { useState } from 'react'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'

function Navbar() {
    const [nav, setNav] = useState(false)

    const handleNav = () => {
        setNav(!nav)
    }
    return (
        <div className="navbar-container">
            <h1 className="nav-logo">REACT.</h1>

            <ul className="nav-menu">
                <li className="nav-item">Home</li>
                <li className="nav-item">Company</li>
                <li className="nav-item">Resources</li>
                <li className="nav-item">About</li>
                <li className="nav-item">Contact</li>
            </ul>

            <div onClick={handleNav} className='nav-icon'>
                {
                    nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />
                }
            </div>

            <div className={nav ? 'mobile-menu open' : 'mobile-menu closed'}>
                <h1 className="mobile-nav-logo">REACT.</h1>
                <ul className='mobile-nav-list'>
                    <li className="mobile-nav-item">Home</li>
                    <li className="mobile-nav-item">Company</li>
                    <li className="mobile-nav-item">Resources</li>
                    <li className="mobile-nav-item">About</li>
                    <li className="mobile-nav-item">Contact</li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar