import React from 'react';

import classes from './Result.css';

const result = props => {
    return (
        <div className={classes.Result}>
            <img
                className={classes.Image}
                src={props.image} />
            <div className={classes.TextGroup}>
                <h3 className={classes.Name}>{props.name}</h3>
                <h3 className={classes.Variant}>{props.variant}</h3>
                <p className={classes.Edition}><strong>{props.edition}</strong></p>
            </div>
        </div>
    );
}

export default result;