import React from "react"
import Sum from "./Sum"


export class App extends React.Component {

    render() {
        const numArr = [0, 5, 13, 29, 56]

        return (
            <div>
                <Sum numbers={numArr} />
            </div>)
    }
}