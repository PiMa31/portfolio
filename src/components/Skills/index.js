import React from 'react';
import './skills.scss';

const Skills = () => (
  <>
    <h2>Compétences</h2>
    <div className="skills">
      <div className="skills__langages">
        <h3>Langages/Technologies</h3>
        <ul className="skills__langages--ul">
          <li className="skills__items">HTML / CSS</li>
          <li className="skills__items">Javascript</li>
          <li className="skills__items">Node.js</li>
          <li className="skills__items">PHP (MVC, POO)</li>
          <li className="skills__items">MySQL / MongoDB</li>
        </ul>
      </div>
      <div className="skills__langages">
        <h3>Framework/Librairies</h3>
        <ul className="skills__langages--ul">
          <li className="skills__items">Bootstrap</li>
          <li className="skills__items">React JS</li>
          <li className="skills__items">Redux</li>
          <li className="skills__items">Express</li>
        </ul>
      </div>
    </div>
    <hr></hr>
  </>
);

export default Skills;
