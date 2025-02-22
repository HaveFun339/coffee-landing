// import React from 'react'
// import { Button } from '../button/Button'
// import "./Section1.css"
// export const Section1 = () => {
  
//   return (
//     <>
//     <div className="s1g">
// <div className="enj">Enjoy a new blend of coffee style

// </div>
//     <div className="expl">Explore all flavours of coffee with us. There is always a new cup worth experiencing</div>
//     <img className='i1' src="./assets/images/Cappucino.jpg" alt="" />
//     </div>
//     </>
//   )
// }

import React from 'react';
import { Button } from '../button/Button';
import "./Section1.css";

export const Section1 = () => {
    const coffeeCards = [
        {
            image: "./assets/images/Cappucino.jpg",
            name: "Cappuccino",
            description: "Coffee 50% / Milk 50%",
            price: "$8.50",
        },
        {
            image: "./assets/images/Latte.jpg",
            name: "Chai Latte",
            description: "Coffee 50% / Milk 50%",
            price: "$8.50",
        },
        {
            image: "./assets/images/Macchiato.jpg",
            name: "Macchiato",
            description: "Coffee 50% / Milk 50%",
            price: "$8.50",
        },
        {
            image: "./assets/images/Espresso.jpg",
            name: "Expresso",
            description: "Coffee 50% / Milk 50%",
            price: "$8.50",
        },
    ];

    return (
        <div className="section-container" id="menu">
        <div className="s1g">
            <div className="header-content">
                <div className="enj">Enjoy a new blend of coffee style</div>
                <div className="expl">Explore all flavours of coffee with us. There is always a new cup worth experiencing</div>
            </div>
            <div className="coffee-cards-container">
                {coffeeCards.map((card, index) => (
                    <div key={index} className="coffee-card">
                        <img className='coffee-image' src={card.image} alt={card.name} />
                        <div className="coffee-details">
                            <div className="coffee-name">{card.name}</div>
                            <div className="coffee-description">{card.description}</div>
                            <div className="coffee-price">{card.price}</div>
                            <div className="bbb">
                            <Button className={"bta"} title={"Order Now"} />
                            </div>
                            
                        </div>
                    </div>
                ))}
            </div>
        </div>
        </div>
    );
};