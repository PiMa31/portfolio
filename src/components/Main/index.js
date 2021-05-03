import React from 'react';

import './main.scss'

import Header from 'src/components/Header';
import Skills from 'src/components/Skills';

const Main = ({skills}) => 
(
    <div className="main">
        <Header />
        <Skills skills={skills.langages}/>
    </div>
);

export default Main;