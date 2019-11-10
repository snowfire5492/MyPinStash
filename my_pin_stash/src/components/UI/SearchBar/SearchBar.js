import React from 'react';
import searchIcon from '../../../icons/icons8-search.svg';

import classes from './SearchBar.css';

const searchBar = props => {
    return (

        <div className={classes.SearchBar}>
            <img 
                className={classes.SearchIcon}
                src={searchIcon}
                alt="" />
            <input 
            className={classes.SearchField}
            type="text"
            placeholder="" />
        </div>

        
        



    );
}

export default searchBar;