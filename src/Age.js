import React from "react";
import { Welcome } from "./Welcome";


export class Age extends React.Component {
    render() {
        return <p>Your age is {this.props.age}</p>
        
    }
}