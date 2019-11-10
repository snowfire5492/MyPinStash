import React from 'react';

import classes from './StickyButton.css';



const stickyButton = props => (
   
        <div className={classes.ButtonShadow}>
            <div className={classes.StickyButton}>
                
                <div className={classes.VerticalLine}></div>
                <div className={classes.HorizontalLine}></div>
            
            </div>
        </div>
    
);

export default stickyButton;