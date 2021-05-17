import React from 'react';

import './list.scss';

const List = ({characters, games, onGameClick, darkMode}) => (
  <section className="game">
    <ul className={darkMode ? "game-list__dark" : "game-list"}>
      {games.map((game) => (
        <li 
          key={game}
          className={darkMode ?"game-list--item game-list--item__dark" : "game-list--item"}
          onClick={(event) => onGameClick(game)}
        >{game}
        </li>
      ))
      }
    </ul>
    <div className={darkMode ? "game-cards__dark" : "game-cards"}>
      {characters.map((character) => (
        <div 
          className={darkMode ? "game-cards-item game-cards-item__dark" : "game-cards-item"}
          key={character.id}
        >
          <img src={character.image} alt={character.name}/>
          <h3>{character.name}</h3>
        </div>
      ))
      }
    </div>
  </section>
)

export default List;
