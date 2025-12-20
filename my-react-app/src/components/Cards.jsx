import React from 'react'
import Single from '../assets/single.png'
import Double from '../assets/double.png'
import Triple from '../assets/triple.png'

function Cards() {
  return (
    <div className='cards-section'>
      <div className='cards-container'>
        <div className='card'>
          <img className='card-img' src={Single} alt="" />
          <h2 className='card-title'>Single User</h2>
          <p className='card-price'>$149</p>
          <div className='card-features'>
            <p className='feature-item first'>500 GB Storage</p>
            <p className='feature-item'>1 Granted User</p>
            <p className='feature-item'>Send up to 2 GB</p>
          </div>
          <button className='card-btn'>Start Trial</button>
        </div>

        <div className='card'>
          <img className='card-img transparent' src={Double} alt="" />
          <h2 className='card-title'>Parnership</h2>
          <p className='card-price'>$199</p>
          <div className='card-features'>
            <p className='feature-item first'>1 TB Storage</p>
            <p className='feature-item'>3 Users Allowed</p>
            <p className='feature-item'>Send up to 10 GB</p>
          </div>
          <button className='card-btn black'>Start Trial</button>
        </div>

        <div className='card'>
          <img className='card-img' src={Triple} alt="" />
          <h2 className='card-title'>Group Account</h2>
          <p className='card-price'>$299</p>
          <div className='card-features'>
            <p className='feature-item first'>5 Tb Storage</p>
            <p className='feature-item'>10 User Allowed</p>
            <p className='feature-item'>Send up to 20 GB</p>
          </div>
          <button className='card-btn'>Start Trial</button>
        </div>
      </div>
    </div>
  )
}

export default Cards