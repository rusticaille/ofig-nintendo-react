import React from 'react';

import './search.scss';

const Search = ({
  placeholder,
  emptyPlaceholder,
  onInputChange,
  value,
  backToWholeList,
  darkMode}) => (
  <div className="container">
    <form className={darkMode ? "form form__dark": "form"}>
          <input
            type="text"
            name={darkMode ? "search" : ""}
            className={darkMode ? "form-item form-item__dark form-item::placeholder" : "form-item"}
            value={value}
            placeholder={placeholder}
            onClick={emptyPlaceholder}
            onChange={(event) =>onInputChange(event.target.value)}
          />
    </form>
    <button
      className={darkMode ? "list-button list-button__dark" : "list-button"}
      onClick={backToWholeList}
    >Liste complète
    </button>
  </div>
)

export default Search;
