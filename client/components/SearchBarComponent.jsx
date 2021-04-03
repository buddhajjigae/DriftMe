import React from 'react';

const SearchBarComponent = (props) => (
  <div className="search-center">
    <input type="text" id="searchBox" className="search-bar" />
    <button className="search-button" onClick={() => props.handleSubmit(document.getElementById('searchBox').value)}>Search for Random Videos</button>
  </div>
);

export default SearchBarComponent;
