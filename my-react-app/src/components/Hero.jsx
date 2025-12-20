import React from 'react'
import { ReactTyped } from "react-typed";

const Hero = () => {
    return (
        <div className='hero-container'>
            <div className='hero-wrapper'>
                <p className='hero-subtitle'>GROWING WITH DATA ANALYTICS</p>
                <h1 className='hero-title'>Grow with data.</h1>

                <div className='hero-tagline-wrapper'>
                    <p className='hero-tagline'>Fast, flexiable financing for </p>
                    <ReactTyped className='hero-typed'
                        strings={["BTB", "BTC", "SASS"]}
                        typeSpeed={120}
                        backSpeed={140} loop />
                </div>
                <p className='hero-text'>Monitor Your data analytics to increase renvnue for BTB, BTC, & SASS platform.</p>

                <button className='hero-btn'>Get Started</button>
            </div>
        </div>
    )
}

export default Hero