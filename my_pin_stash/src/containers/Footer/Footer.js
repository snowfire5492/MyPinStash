import React from 'react';
import { Link } from 'react-router-dom';
import PinStashsvg from '../../icons/PinStashsvg.svg';

import classes from './Footer.css';

const footer = (props) => (
    <div className={classes.Footer}>
        <div className={classes.FooterOptions}>
            {/* <Link className={classes.Links} to="/contact"> */}
                    <p className={classes.FooterOption}>
                        Contact
                    </p>
            {/* </Link>
            <Link
                className={classes.Links}
                to="/about"> */}
                    <p className={classes.FooterOption}>
                        About
                    </p>
            {/* </Link>
            <Link   
                className={classes.Links}
                to="/pinbase"> */}
                    <p className={classes.FooterOption}>
                        PinBase
                    </p>
            {/* </Link> */}
            
        </div>
        <p className={classes.FooterTag}>MyPinStash.com was made for fun, enjoy!</p>
    </div>
);

export default footer;