import React from 'react'
import "./Section2.css"
import { Button } from '../button/Button'
export const Section2 = () => {
  return (
    <>
    <div className="dif">Why are we different?</div>
    <div className="dif2">We don’t just make your coffee, we make your day!</div>
<div className="conta1">
   
    <img className='beans' src="./assets/images/beans.png" alt="" />
    <div className="beanstext1">Supreme Beans</div>
    <div className="beanstext2">Beans that provides
    great taste</div>
    <img className='badge' src="./assets/images/badge.png" alt="" />
    <div className="badgetext1">High Quality</div>
    <div className="badgetext2">We provide the highest quality</div>
    <img className='coffee-cup' src="./assets/images/coffee-cup.png" alt="" />
    <div className="coffee-cuptext1">Extraordinary</div>
    <div className="coffee-cuptext2">Coffee like you have
    never tasted</div>
    <img className='price' src="./assets/images/price.png" alt="" />
    <div className="pricetext1">Affordable Price</div>
    <div className="pricetext2">Our Coffee prices are
    easy to afford</div>
    <div className="idea4">
    <div className="idea0">
    <div className="idea">Great ideas start with great coffee, Lets help you achieve that</div>
    <div className="idea2">Get started today.</div>
    </div>
    <Button className="bt0" title={"Join Us"}/>
    </div>
</div>

</>
  )
}
