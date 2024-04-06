import React from "react";
import "./Search.css";

function Search({ onClick ,onTextChange ,onSerachClick ,value}) {
   
  return (
    <div className="serach-container">
      <button onClick={onClick}>Top rated</button>
      <div className="search-bar">
        <input onChange={onTextChange} value={value}/>
        <button onClick={onSerachClick} >Search</button>
      </div>
    </div>
  );
}

export default Search;
