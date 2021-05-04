import React from 'react';

import './main.scss'

import Header from 'src/components/Header';
import Skills from 'src/components/Skills';
import Realisations from 'src/components/Realisations';

const Main = () => 
(
    <div className="main">
        <Header />
        <Skills />
        <Realisations />
    </div>
);

export default Main;