import React from 'react';

import './dark.scss';

const Dark = ({darkModeClick, darkMode}) => (
    <button
      className={darkMode ? "darkmode-button darkmode-button__dark": "darkmode-button"}
      onClick={darkModeClick}
    >darkmode</button>
)

export default Dark;
