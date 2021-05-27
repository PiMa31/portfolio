import React from 'react';
import './header.scss';

const Header = () => (
    <div className="header">
        <img className="header__picture"/>
        <h1 className="header__fullname">Pierre MASSET</h1>
        <h2 className="header__job">Développeur Web spécialisé en REACT</h2>
        <p className="header__p">Passionné d'informatique et de jeux vidéos depuis la sortie de la Nintendo 64 (depuis un long moment...), j'ai choisi de m'épanouir dans le milieu du développement. </p>
        <br></br>
        <p className="header__p">Suite à ma formation à l'école O'Clock et mon passage du titre professionnel, je suis à la recherche de toutes opportunités me permettant d'approfondir mes connaissances et d'évoluer.</p>
        <br></br>
        <p className="header__p">Vous cherchez quelqu'un de calme, réfléchi, capable de s'adapter en toutes circonstances et avec un fort esprit d'équipe, alors vous pouvez cliquer dessous et me contacter. Vous cherchez un autre profil, vous pouvez aussi cliquer et je m'adapterai 😁</p>
    </div>
);

export default Header;
