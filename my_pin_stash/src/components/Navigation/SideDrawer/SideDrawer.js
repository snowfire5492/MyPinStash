import React from 'react';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Aux from '../../../containers/hoc/Auxilliary';
import NavigationItems from '../NavigationItems/NavigationItems';
import backIcon from '../../../icons/left-arrow.svg';

import classes from './SideDrawer.css';
const sideDrawer = props => {

    let attachedClasses = [classes.SideDrawer, classes.Close];

    if(props.open){
        attachedClasses = [classes.SideDrawer, classes.Open];
    }

    return (
        <Aux>
            <Backdrop
                show={props.open}
                clicked={props.closed} />
            <div className={attachedClasses.join(' ')}>
                <nav>
                    <NavigationItems />
                </nav>
                {/* <img 
                    className={classes.BackIcon}
                    src={backIcon} 
                    alt="back"/> */}
            </div>

        </Aux>
    )
}

export default sideDrawer;