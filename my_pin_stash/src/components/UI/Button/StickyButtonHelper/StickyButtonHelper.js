
import React from 'react';
import { Link } from 'react-router-dom';
import StickyButton from '../StickyButton/StickyButton';


import classes from './StickyButtonHelper.css';

const stickyButtonHelper = props => {
    return (
        // <Link to="/add-pin">
        <div 
            className={classes.StickyButton}
            // onClick={props.addPinClicked}>
            >
            <StickyButton />
        </div>
        // </Link>
    )
}

export default stickyButtonHelper;