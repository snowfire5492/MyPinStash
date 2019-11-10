import React, { Component } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

import classes from './Layout.css';

class Layout extends Component {

    state = {
        showSideDrawer: false
    }

    sideDrawerClosedHandler = () => {
        this.setState({ showSideDrawer: false})
    }

    sideDrawerOpenHandler = () => {
        this.setState({ showSideDrawer: true})
        // console.log("Button Works");
        // this.setState((prevState) => {
        //     //  return ({showSideDrawer: !prevState.showSideDrawer});
        //     return ({showSideDrawer: true})
        // })
    }


    render() {
        return (
            <div className={classes.Wrapper}>
                <Header drawerToggleClicked={this.sideDrawerOpenHandler} />
                {/* <SideDrawer 
                    open={this.state.showSideDrawer}
                    closed={this.sideDrawerClosedHandler}/> */}
                <div className={classes.Layout}>
                    {this.props.children}
                </div>
                <Footer />
            </div>
        )
    }
}

export default Layout;