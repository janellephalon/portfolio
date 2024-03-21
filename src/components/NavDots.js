import React from 'react';

const NavigationDots = ({ sections }) => {
  return (
    <div className="navigation-dots">
      {sections.map((section, index) => (
        <a key={index} href={`#${section}`} className="dot"></a>
      ))}
    </div>
  );
};

export default NavigationDots;
