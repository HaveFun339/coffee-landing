import React from 'react';
import { Button } from '../button/Button';
import "./Section0.css";
import { motion } from "motion/react"
import 'animate.css';
export const Section0 = () => {
  return (
    
    <div className="section-container" id='about'> 
      <div className="c1">
        <div className="text-content"> 
          <div className="dscof">Discover the best coffee</div>
          
          <div  className="dscof1">
            Bean Scene is a coffee shop that provides you with quality coffee that helps boost your productivity and helps build your mood. Having a cup of coffee is good, but having a cup of real coffee is greater. There is no doubt that you will enjoy this coffee more than others you have ever tasted.
          </div>
           <div className="btt0"> 
            <Button title={"Learn More"} />
          </div>
        </div>
        <img className='ccc' src="./assets/images/ccoof3.webp" alt="" />
      </div>
    </div>
   
  );
}