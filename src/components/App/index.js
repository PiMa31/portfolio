// == Import npm
import React from 'react';

// == Import
import './styles.scss';

// == Import Composant
import Main from 'src/components/Main';

import skills from 'src/data/skills';
// == Composant
const App = () => (
  <div className="app">
    <Main skills={skills}/>
  </div>
);

// == Export
export default App;
