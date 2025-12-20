import React from 'react'
import Laptop from '../assets/laptop.jpg'

function Analytics() {
    return (
        <div className='analytics-section'>
            <div className='analytics-container'>
                <img className='analytics-img' src={Laptop} alt="" />
                <div className='analytics-content'>
                    <p className='analytics-tag'>DATA ANALYTICS DASHBOARD</p>
                    <h1 className='analytics-title'>Manage Data Analytics Centrally</h1>
                    <p className='analytics-text'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus, dolorem quos? Perferendis, at quis, quas id error consectetur consequuntur exercitationem repellendus eligendi delectus quibusdam odio accusamus sit nesciunt enim ex.</p>
                    <button className='analytics-btn'>Get Started</button>
                </div>
            </div>
        </div>
    )
}

export default Analytics 