import React from "react";


export class ClickTracker extends React.Component {

    state = {
        clickedButton : ""
    }

    handleButtonClick = (event) => {
        this.setState({
            clickedButton: event.target.name
        })
    }

    render() {
        return (
            <div>
                <h1>Clicked Button : {this.state.clickedButton}</h1>
                <button name="Button 1" onClick={this.handleButtonClick}>Button 1</button>
                <button name="Button 2" onClick={this.handleButtonClick}>Button 2</button>
                <button name="Button 3" onClick={this.handleButtonClick}>Button 3</button>

            </div>

        )
    }
}