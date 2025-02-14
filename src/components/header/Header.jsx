import React from 'react';
import { Button } from '../button/Button';
import './Header.css';

export const Header = () => {
  return (
    <header>
      <nav>
        <div className="logo">Bean Scene</div>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#menu">Menu</a></li>
          <li><a href="#about">About Us</a></li>
          <li><a href="#contact">Contact Us</a></li>
        </ul>
        <div className="cont0">
          <button className="b-no">Sign In</button>
          <Button title={"Sign Up"} />
        </div>
      </nav>
      <div className="cont1" id="home">
        <div className="t1">We`ve got your morning covered with</div>
        <div className="cof">Coffee</div>
        <div className="t2">
          It is best to start your day with a cup of coffee. Discover the best
          flavours coffee you will ever have. We provide the best for our
          customers.
        </div>
        <Button title={"Order Now"} />
      </div>
    </header>
  );
};