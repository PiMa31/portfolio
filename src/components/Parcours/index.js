import React from 'react';

import './parcours.scss';

const Parcours = () => (
    <>
        <h2>Parcours</h2>
        <div className="parcours">
                <div className="parcours__step">
                    <p className="parcours__step--title">Projet de fin de formation -- Février 2020</p>
                    <p>Réalisation de la partie front-end du site "Le Nid à Bijoux" en React / Redux</p>
                </div>
                <div className="parcours__step">
                    <p className="parcours__step--title">Formation Ecole O'Clock -- Septembre 2019/Mars 2020</p>
                    <p>Formation en téléprésentiel de 750h : <br></br>
                    - 3 mois de socle (HTML / CSS / JS / PHP) <br></br>
                    - 1 mois de spécialisation en REACT JS <br></br>
                    - 1 mois de projet
                    </p>
                </div>
                <div className="parcours__step">
                    <p className="parcours__step--title">Tennis club Fenouillet (31) -- 2009/2020</p>
                    <p>Enseignant de tennis (2009/2014) puis Directeur Sportif (2014/2020)</p>
                </div>
                <div className="parcours__step">
                    <p className="parcours__step--title">Tennis club Fenouillet (31) -- 2008/2009</p>
                    <p>Apprentissage - Dîplome d'Etat de la Jeunesse, de l'Education Populaire et du sport mention Tennis</p>
                </div>
        </div>
    </>
);

export default Parcours;