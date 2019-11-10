import React, { Component } from 'react';

import classes from './Layout.css';

class Layout extends Component {

    render() {
        return (
            <div className={classes.Wrapper}>
                <p>Header</p>
                <p>Footer</p>
            </div>
        )
    }
}

export default Layout;