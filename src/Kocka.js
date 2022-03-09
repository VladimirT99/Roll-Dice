import React, {Component} from "react";
import "./Kocka.css";

class Kocka extends Component{
    render()
    {
        let side = `Kocka fas fa-dice-${this.props.face} ${this.props.rolling && "shaking"}`;
        return(
            <i className={side}/>
        );
    }
}

export default Kocka;