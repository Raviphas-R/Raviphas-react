import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
//Image
import searchIcon from "../../images/search-icon.svg";
//styles
/* import { Wrapper, Content } from "./SearchBar.styles"; */
import "./styles.css"; // style from style.css that use class to apply css.

const SearchBar = ({ setSearchTerm }) => {
  const [state, setState] = useState("");
  const initial = useRef(true);

  useEffect(() => {
    if (initial.current) {
      initial.current = false;
      return;
    }

    const timer = setTimeout(() => {
      setSearchTerm(state);
    }, 500);

    return () => clearTimeout(timer);
  }, [setSearchTerm, state]);

  return (
    <div className="Wrapper">
      <div className="Content">
        <img src={searchIcon} alt="search-icon" />
        <input
          type="text"
          placeholder="Seach Movie"
          onChange={(event) => setState(event.currentTarget.value)}
          value={state}
        />
      </div>
    </div>
  );
};

SearchBar.propTypes = {
  callback: PropTypes.func,
};

export default SearchBar;
