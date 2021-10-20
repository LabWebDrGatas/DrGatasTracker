import React, { Component } from 'react';

import '../css/table.css';

const SearchBar = ({updateSearch, term}) => {
    return (  
        <React.Fragment>
            <div className="flex_parent">
                    <input
                    className="centerbar search_bar"
                    type="text"
                    value={term}
                    onChange={updateSearch}
                    placeholder="Busca..."
                    />
            </div>
        </React.Fragment>
    );
}
 
export default SearchBar;
