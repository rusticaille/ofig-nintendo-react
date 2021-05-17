// == Import npm
import React, {useState} from 'react';

import Header from 'src/components/Header';
import Search from 'src/components/Search';
import List from 'src/components/List';
import Dark from 'src/components/Dark';

// == Import
import './app.scss';

import fullCharactersList from 'src/data/characters-full';
import gameList from 'src/data/games';

// == Composant
const App = () => {

  const [characters, setCharacters] = useState(fullCharactersList);
  const [counter, setCounter] = useState(fullCharactersList.length);
  const [placeholder, setPlaceholder] = useState("Rechercher...");
  const[inputText, setInputText] = useState("");
  const[darkMode, setDarkMode] = useState(false);

  const handleGameClick = (selectedGame) => {
    const filteredCharacters = fullCharactersList.filter((character) => character.game === selectedGame);
    setCharacters(filteredCharacters);
    setCounter(filteredCharacters.length);
  };

  const handleEmptyPlaceholder = () => {
    setPlaceholder("");
  };

  const handleInputChange = (inputText) => {
    console.log(inputText);
    setInputText(inputText);
    const searchResult = fullCharactersList.filter((character) => character.game.toLowerCase().startsWith(inputText));
    setCharacters(searchResult);
    setCounter(searchResult.length);
  };

  const handleFullList = () => {
    console.log('cliqué');
    setCharacters(fullCharactersList);
    setInputText("");
    setPlaceholder("Rechercher...");
  };

  const handleDarkMode = () => {
    console.log("cliqué");
    setDarkMode(!darkMode);
    console.log(darkMode);
  }

  return (
  <div className={darkMode ? 'app app__dark' : 'app'}>
    <Header
    cardNumber={counter}
    darkModeButton={handleDarkMode}
    darkMode={darkMode}
    />
    <Search
    placeholder={placeholder}
    emptyPlaceholder={handleEmptyPlaceholder}
    onInputChange={handleInputChange}
    value={inputText}
    backToWholeList={handleFullList}
    darkMode={darkMode}
    />
    <List 
      characters={characters}
      games={gameList}
      onGameClick={handleGameClick}
      darkMode={darkMode}
    />
  </div>
  );
  };

// == Export
export default App;
