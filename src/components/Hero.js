import React from 'react';
import { TypeAnimation } from 'react-type-animation';

function Hero() {
  return (
    <div className="hero">
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
        <button href="#contact" className="button-style">Learn More</button>
      </div>
    </div>
  </div>
);
}

export default Hero;
