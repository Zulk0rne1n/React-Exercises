import React from "react"
import { ClickCounter } from "./ClickCounter"


export class App extends React.Component {
    render() {
        return (
            <div>

                <ClickCounter initialValue={0} incrementAmount={3}/>
            </div>)
    }
}