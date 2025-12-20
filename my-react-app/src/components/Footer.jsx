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
        <div className='max-w-full mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300'>
            <div>
                <h1 className="w-full text-3xl font-bold text-[#00df98]">REACT.</h1>
                <p className='py-4'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas, fuga harum! Saepe, ab quis quam omnis repudiandae quidem neque nobis cupiditate facilis consequatur, architecto incidunt nostrum totam rerum ullam quod.</p>
                <div className='flex justify-between md:w-[75%] my-6'>
                    <FaFacebook size={30} />
                    <FaInstagram size={30} />
                    <FaTwitter size={30} />
                    <FaGithubSquare size={30} />
                    <FaDribbbleSquare size={30} />
                </div>
            </div>

            <div className='lg:col-span-2 flex justify-between mt-6'>
                <div>
                    <h6 className='font-medium text-gray-400'>Solutions</h6>
                    <ul>
                        <li className='py-4 text-sm'>Analytics</li>
                        <li className='py-4 text-sm'>Marketing</li>
                        <li className='py-4 text-sm'>Commerice</li>
                        <li className='py-4 text-sm'>Insights</li>
                    </ul>
                </div>

                <div>
                    <h6 className='font-medium text-gray-400'>Support</h6>
                    <ul>
                        <li className='py-4 text-sm'>Pricing</li>
                        <li className='py-4 text-sm'>Documentation</li>
                        <li className='py-4 text-sm'>Guides</li>
                        <li className='py-4 text-sm'>API Status</li>
                    </ul>
                </div>

                <div>
                    <h6 className='font-medium text-gray-400'>Company</h6>
                    <ul>
                        <li className='py-4 text-sm'>About</li>
                        <li className='py-4 text-sm'>Blog</li>
                        <li className='py-4 text-sm'>Jobs</li>
                        <li className='py-4 text-sm'>Press</li>
                        <li className='py-4 text-sm'>Careers</li>
                    </ul>
                </div>

                <div>
                    <h6 className='font-medium text-gray-400'>Legal</h6>
                    <ul>
                        <li className='py-4 text-sm'>Claim</li>
                        <li className='py-4 text-sm'>Policies</li>
                        <li className='py-4 text-sm'>Terms</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Footer