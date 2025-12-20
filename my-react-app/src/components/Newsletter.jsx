import React from 'react'

function Newsletter() {
    return (
        <div className='newsletter-section'>
            <div className='newsletter-container'>
                <div className='newsletter-text-col'>
                    <h1 className='newsletter-title'>Want tips & tricks to optimize your flow?</h1>
                    <p>Sign up to our newletter and story up to date.</p>
                </div>
                <div className='newsletter-form-col'>
                    <div className='newsletter-form'>
                        <input className='newsletter-input' type="email" placeholder='Enter Email' name="" id="" />
                        <button className="newsletter-btn">Nofigy Me</button>
                    </div>
                    <p>We care bout the protection of your data. Read our <span className='privacy-policy'>privacy policy.</span></p>
                </div>

            </div>
        </div>
    )
}

export default Newsletter