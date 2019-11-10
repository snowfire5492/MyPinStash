import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import pinStashsvg from '../../icons/PinStashsvg.svg';
import accountButton from '../../icons/round-account-button-with-user-inside.svg';

import classes from '../Header/Header.css';

class Header extends Component {

    // state = {
    //     test: true
    // }

    // onClickHandler = () => {
        
    //     console.log("checking");
    //     if(this.state.test){
    //         this.setState({test: false})
    //     }else{
    //         this.setState({test: true})
    //     }
    
    // }

    render(){

       

        // const image = 

        return (
            <div className={classes.Header}>
                <img 
                    className={classes.Image} 
                    src={pinStashsvg} 
                    alt="PinStash"
                    //onClick={this.onClickHandler}
                    />
                
                <h1 className={classes.Title}>
                    {/* <Link to="/" className={classes.Link}> */}
                        MyPinStash
                    {/* </Link> */}
                </h1>
                
                <div 
                    className={classes.AccountButton}
                    onClick={this.props.drawerToggleClicked}>
                    <img
                        className={classes.AccountFigure}
                        src={accountButton}
                        alt="User" 
                        onClick={this.props.drawerToggleClicked}
                        />
                </div>
               
                    
            </div>
        );
    }

}

export default Header;