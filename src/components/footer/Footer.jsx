import React from 'react'
import { Button } from '../button/Button'
import "./Footer.css"

export const Footer = () => {
  return (
    <div className="secton-container" id="contact">
    <div className="foot">
        
    <div className="foot1">Subscribe to get the Latest News </div>
    <div className="foot2">Don’t miss out on our latest news, updates, tips and special offers</div>
    <input className='in1' placeholder='Enter your mail' type="text" /> <input type="button" className='bti' value="Subscribe" />
    
    </div>
    </div>
  )
}