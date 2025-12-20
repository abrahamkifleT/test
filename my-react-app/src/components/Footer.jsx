import React from 'react'
import {
    FaFacebook,
    FaInstagram,
    FaTwitter,
    FaYoutube,
    FaGithubSquare,
    FaDribbbleSquare,
} from 'react-icons/fa'

function Footer() {
    return (
        <div className='footer-container'>
            <div>
                <h1 className="footer-logo">REACT.</h1>
                <p className='footer-desc'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas, fuga harum! Saepe, ab quis quam omnis repudiandae quidem neque nobis cupiditate facilis consequatur, architecto incidunt nostrum totam rerum ullam quod.</p>
                <div className='footer-social'>
                    <FaFacebook size={30} />
                    <FaInstagram size={30} />
                    <FaTwitter size={30} />
                    <FaGithubSquare size={30} />
                    <FaDribbbleSquare size={30} />
                </div>
            </div>

            <div className='footer-links-container'>
                <div>
                    <h6 className='footer-section-title'>Solutions</h6>
                    <ul className='footer-list'>
                        <li className='footer-item'>Analytics</li>
                        <li className='footer-item'>Marketing</li>
                        <li className='footer-item'>Commerice</li>
                        <li className='footer-item'>Insights</li>
                    </ul>
                </div>

                <div>
                    <h6 className='footer-section-title'>Support</h6>
                    <ul className='footer-list'>
                        <li className='footer-item'>Pricing</li>
                        <li className='footer-item'>Documentation</li>
                        <li className='footer-item'>Guides</li>
                        <li className='footer-item'>API Status</li>
                    </ul>
                </div>

                <div>
                    <h6 className='footer-section-title'>Company</h6>
                    <ul className='footer-list'>
                        <li className='footer-item'>About</li>
                        <li className='footer-item'>Blog</li>
                        <li className='footer-item'>Jobs</li>
                        <li className='footer-item'>Press</li>
                        <li className='footer-item'>Careers</li>
                    </ul>
                </div>

                <div>
                    <h6 className='footer-section-title'>Legal</h6>
                    <ul className='footer-list'>
                        <li className='footer-item'>Claim</li>
                        <li className='footer-item'>Policies</li>
                        <li className='footer-item'>Terms</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Footer