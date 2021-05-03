import React from 'react';

import './styles.scss';

const Header = () => (
    <div className="header">
        <img className="header__picture"/>
        <h1 className="header__fullname">Pierre MASSET</h1>
        <h2 className="header__job">Développeur Front-end</h2>
        <p>Hello, je suis <strong id="person-firstname">Pierre MASSET</strong>, <strong id="person-position">Développeur full-stack</strong> spécialisé en <strong id="person-speciality">REACT JS</strong> actuellement <strong id="person-company">en recherche</strong> aux alentours de  <strong id="person-city">Toulouse</strong>.</p>
        <div>
            <a className="header__button" target="_blank" id="person-email" href="mailto:pierremasset31@gmail.com">M'envoyer un email</a>
            <span className="or"> ou </span>
            <a target="_blank" className="header__button" href="#">Voir mon CV</a>
        </div>
        <hr></hr>
    </div>
);

export default Header;