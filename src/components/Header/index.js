import React from 'react';
import Dark from 'src/components/Dark';
import './header.scss';

const Header = ({cardNumber, darkModeButton, darkMode}) => (
  <>
    <Dark 
      darkModeClick={darkModeButton}
      darkMode={darkMode}/>
    <h1 className={darkMode ? 'dark' : ""}>oFig - nintendo</h1>
    <h2 className={darkMode ? 'dark' : ""}>{cardNumber} jeux</h2>
  </>
)

export default Header;
