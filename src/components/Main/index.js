import React from 'react';

import './main.scss'

import Header from 'src/components/Header';
import Skills from 'src/components/Skills';
import Realisations from 'src/components/Realisations';
import Parcours from 'src/components/Parcours';
import Contact from 'src/components/Contact';

const Main = () => 
(
    <div className="main">
        <Header />
        <Contact />
        <Skills />
        <Realisations />
        <Parcours />
    </div>
);

export default Main;