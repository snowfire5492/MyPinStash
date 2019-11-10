import React from 'react';
import NavigationItem from '../NavigationItem/NavigationItem';

import classes from './NavigationItems.css';

const navigationItems = props => (
    <ul className={classes.navigationItems}>
        <NavigationItem link="/accountInfo">Account</NavigationItem>
        <NavigationItem link="/">Home</NavigationItem>
    </ul>
)

export default navigationItems;