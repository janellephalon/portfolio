import React from 'react';

// Imports
import ComputerImage from '../assets/computer.svg';

function Certifications() {
  return (
    <div className="certifications">
      <h2>Certifications</h2>
      <div className="certification-content">
        <img src={ComputerImage} alt="Certification" className="certification-image" />
        <ul className="certification-list">
          <li>Certified React Developer</li>
          <li>Full Stack Web Development Certification</li>
          <li>UI/UX Design Specialist</li>
        </ul>
      </div>
    </div>
  );
}

export default Certifications;
