import React from 'react';

import './contact.scss';

const Contact = () => (
    <>
        <div className="contact">
            <a className="contact__button" target="_blank" id="person-email" href="mailto:pierremasset31@gmail.com">M'envoyer un email</a>
        </div>
        <h3>Ou retrouvez moi sur les réseaux</h3>
        <div className="social">
            <a target="_blank" href="https://github.com/PiMa31"><div className="social__github"></div></a>
            <a target="_blank" href="https://www.linkedin.com/in/masset-pierre"><div className="social__linkedin"></div></a>
        </div>
        <hr></hr>
    </>
);

export default Contact;