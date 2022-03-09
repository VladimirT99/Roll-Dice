import React, {Component} from "react";
import Kocka from "./Kocka";
import "./RollDice.css";

class RollDice extends Component{
    constructor(props){
        super();
        this.state = {
            kocka1 : "one",
            kocka2 : "one",
            rolling : false
        };
        this.roll = this.roll.bind(this);
    }
    
    static defaultProps = {sides: ['one', 'two', 'three', 'four', 'five', 'six']};

    roll(){
        let number1 = Math.floor(Math.random()*6);
        let number2 = Math.floor(Math.random()*6);
        this.setState({kocka1: this.props.sides[number1]});
        this.setState({kocka2: this.props.sides[number2]});
        this.setState({rolling : true});
        setTimeout(() => {
            this.setState({rolling : false});
        }, 1000);
    }

    render()
    {
        return(
            <div className="RollDice">
                <div className="RollDice-container">
                    <Kocka face = {this.state.kocka1} rolling = {this.state.rolling}/>
                    <Kocka face = {this.state.kocka2} rolling = {this.state.rolling}/>
                </div>
                <button onClick={this.roll} disabled ={this.state.rolling}>{this.state.rolling ? "Rolling..." : "Roll Dice"}</button>
            </div>
        )
    }
}

export default RollDice;