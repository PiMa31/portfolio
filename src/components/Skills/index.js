import React from 'react';

import './skills.scss';

const Skills = ({ skills }) =>
(
    <div className="skills">
        Compétences
        <ul className="skills__langages">
            {
                skills.map((skill) => (
                    <li key={skill}>{skill}</li>
                ),
                )
            }
        </ul>


    </div>
);

export default Skills;