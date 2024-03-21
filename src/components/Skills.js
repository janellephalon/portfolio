import React from 'react';
import { TagCloud } from 'react-tagcloud';

const data = [
  { value: 'JavaScript', count: 75 },
  { value: 'React', count: 65 },
  { value: 'Node.js', count: 70 },
  { value: 'Express.js', count: 50 },
  { value: 'HTML', count: 80 },
  { value: 'MongoDB', count: 30 },
  { value: 'CSS', count: 80 },
  { value: 'Bootstrap', count: 60 },
  { value: 'Git', count: 45 },
  { value: 'GitHub', count: 90 },
  { value: 'VS Code', count: 85 },
  { value: 'SQL', count: 40 },
  { value: 'TypeScript', count: 30 },
  { value: 'Angular', count: 35 },
  { value: 'Adobe', count: 45 },
  { value: 'Microsoft 365', count: 60 },
  { value: 'REST APIs', count: 70 },
  { value: 'jQuery', count: 30 },
  { value: 'Chrome Dev Tools', count: 60 },
  { value: 'Java', count: 20 },
  { value: 'Figma', count: 30 },
]

function Skills() {
  return (
    <section className="skills-section">
      <div className="container">
        <div className="text-content">
          <h2><span className="highlight">Skills</span> and Tools</h2>
          <h5 className='light-weight'>Creating intuitive and responsive web experiences.</h5>
          <hr className='line'/>
          <button className='button-style-skills'>View My Github</button>
        </div>

        <div className="word-cloud">
          <TagCloud
            minSize={12}
            maxSize={35}
            tags={data}
            disableRandomColor={true}
            shuffle={true}
            className='tag-cloud-style'
          />
        </div>
      </div>
    </section>
  );
}

export default Skills;
