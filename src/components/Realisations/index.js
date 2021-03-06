import React from 'react';
import Fade from 'react-reveal/Fade';
import './realisations.scss';

const Realisations = () => (
  <>
    <h2>Réalisations</h2>
    <div className="realisations">
      <Fade left delay={300}>
        <div className="realisation" >
          <div className="realisation__picture" id="nidbijoux"></div>
          <div className="realisation__content">
            <span className="realisation__content--badge">Site vitrine</span>
            <p className="realisation__content--title">Le Nid à Bijoux</p>
            <p className="realisation__content--description">Site vitrine d'une créatrice de bijoux pouvant se transformer en e-commerce</p>
            <div className="realisation__content--footer">
              <a href="https://www.youtube.com/watch?v=ohbX2C00bL8" target="_blank">Présentation Youtube</a>
            </div>
          </div>
        </div>
      </Fade>
      <Fade right delay={300}>
        <div className="realisation" >
          <div className="realisation__picture" id="todolist"></div>
          <div className="realisation__content">
            <span className="realisation__content--badge">App</span>
            <p className="realisation__content--title">Todo List</p>
            <p className="realisation__content--description">Réalisé en formation, application de gestions de tâches</p>
            <div className="realisation__content--footer">
              <a href="https://todolist-pierre-masset.netlify.app/" target="_blank">Voir l'app</a>
            </div>
          </div>
        </div>
      </Fade>
      <Fade left delay={300}>
        <div className="realisation" >
          <div className="realisation__picture" id="meteo"></div>
          <div className="realisation__content">
            <span className="realisation__content--badge">App</span>
            <p className="realisation__content--title">Météo</p>
            <p className="realisation__content--description">Application météo</p>
            <div className="realisation__content--footer">
              <a href="#" target="_blank">En cours de dev</a>
            </div>
          </div>
        </div>
      </Fade>
      <Fade right delay={300}>
        <div className="realisation" >
          <div className="realisation__picture" id="github"></div>
          <div className="realisation__content">
            <span className="realisation__content--badge">App</span>
            <p className="realisation__content--title">Repo Github</p>
            <p className="realisation__content--description">Application de recherche de repository grâce à l'API de Github</p>
            <div className="realisation__content--footer">
              <a href="#" target="_blank">En cours de dev</a>
            </div>
          </div>
        </div>
      </Fade>
    </div>
    <hr></hr>
  </>
);

export default Realisations;
