import React, { Component } from 'react';
import Result from '../Result/Result';
import pinStashsvg from '../../icons/PinStashsvg.svg';

import classes from './Results.css';

class Results extends Component {
    state = {
        isEmpty: false
    }


    render() {


        let results = (
            <div>
                {/* <img src={pinStashsvg} 
                    className={classes.PinStashIcon} 
                    alt="PinStash"/> */}
                <Result 
                    image={this.props.pins[0].image} 
                    name="Please Add Your Pins!"
                    variant="Simply Click The Button"
                    edition="Now... Stash Your Pins!"/>
            </div>
        );

        if (!this.props.pins.isEmpty) {
            results = (
                <div>
                    <Result 
                        image={this.props.pins[0].image} 
                        name={this.props.pins[0].name}
                        variant={this.props.pins[0].variant}
                        edition={this.props.pins[0].edition}/> 
                    <Result 
                        image={this.props.pins[1].image} 
                        name={this.props.pins[1].name}
                        variant={this.props.pins[1].variant}
                        edition={this.props.pins[1].edition}/>
                    <Result 
                        image={this.props.pins[2].image} 
                        name={this.props.pins[2].name}
                        variant={this.props.pins[2].variant}
                        edition={this.props.pins[2].edition}/>
                    <Result 
                        image={this.props.pins[3].image} 
                        name={this.props.pins[3].name}
                        variant={this.props.pins[3].variant}
                        edition={this.props.pins[3].edition}/>
                    <Result 
                        image={this.props.pins[4].image} 
                        name={this.props.pins[4].name}
                        variant={this.props.pins[4].variant}
                        edition={this.props.pins[4].edition}/>
                    <Result 
                        image={this.props.pins[5].image} 
                        name={this.props.pins[5].name}
                        variant={this.props.pins[5].variant}
                        edition={this.props.pins[5].edition}/>
                </div>
            );
        }


        return (
            <div className={classes.Results}>
                
                {results}
                
            </div>
        );
    }
}

export default Results;