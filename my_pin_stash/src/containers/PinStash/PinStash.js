import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import SearchBar from '../../components/UI/SearchBar/SearchBar';
import StickyButton from '../../components/UI/Button/StickyButtonHelper/StickyButtonHelper';
import Results from '../Results/Results';
import Aux from '../hoc/Auxilliary';

import rastaJerry from '../../images/RastaJerryJam.jpg';
import glacierFunk from '../../images/glacierFunk.jpg';
import bluesBear from '../../images/usbluesbeariant.jpg';
import sdsLockn from '../../images/SilverDeepSpaceLockn.jpg';
import polarWolf from '../../images/polarWolf.jpg';
import blackFunk from '../../images/blackNickelRawFunk.jpg';
import rainbowTotem from '../../images/RainbowRawTotemPole.jpg';


import classes from './PinStash.css';

class PinStash extends Component {

    state = {
        pins: [
            {
                image: rastaJerry, 
                name: "Jerry Jam",
                variant: "Rasta",
                edition: "LE 1/50"
            },
            {
                image: glacierFunk,
                name: "Fun in Funk",
                variant: "Glacier",
                edition: "LE 25/50"
            },
            {
                image: bluesBear, 
                name: "Grateful Beariant",
                variant: "U.S. Blues",
                edition: "AP Unnumbered"
            },
            {
                image: sdsLockn,
                name: "Lockn",
                variant: "Silver Deep Space",
                edition: "LE 25/25"
            },
            {
                image: polarWolf, 
                name: "Wolf",
                variant: "Polar",
                edition: "AP Unnumbered"
            },
            {
                image: blackFunk,
                name: "Fun in Funk",
                variant: "Raw Black Nickel",
                edition: "AP"
            }, 
            {
                image: rainbowTotem, 
                name: "ADK Fest",
                variant: "Rainbow Raw",
                edition: "AP Unnumbered"
            }
        ]
    }

   

    render(){
        return (
            <Aux>

                <div className={classes.PinStash} > 
                    <SearchBar />
                    <Results pins={this.state.pins}/>
                    <StickyButton />
                 </div>
            </Aux>
            
        );
    }



}


export default PinStash;