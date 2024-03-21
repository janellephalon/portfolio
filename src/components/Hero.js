import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import RightArrow from '../assets/arrow-right-solid.svg';

function Hero() {

  // const sections = ['about', 'portfolio', 'contact'];

  return (
    <div className="hero wave">
    <div className="hero-content">
      <h1 className="hero-title">Hello, I'm Janelle</h1>

      <div className="typing-text-style light-weight">
        <TypeAnimation
          sequence={[
            'Developer Advocate',
            1000,
            'Front End Developer',
            1000,
            'Technical Writer',
            1000,
            'UI/UX Designer',
            1000
          ]}
          wrapper="span"
          speed={50}
          repeat={Infinity}
        />
      </div>

      <div>
        <button href="#contact" className="button-style">
          Let's Connect
          <img src={RightArrow} alt="Arrow" className="icon-style" style={{ width: '14px', height: '14px', marginLeft: '10px', color: 'white !important' }} />
        </button>
      </div>
    </div>
  </div>

);
}

export default Hero;
