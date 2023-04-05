import React from "react"
import { Counter } from "./Counter"
import { Hello } from "./Hello"
import { Welcome } from "./Welcome"
import { ClickCounter } from "./ClickCounter"
import { ClickTracker } from "./ClickTracker"


export class App extends React.Component {
    render() {
        return (
            <div>
                <Hello />
                <Welcome name="John" age={20} />
                <Counter incrementAmount={1} timeout={500} initialValue={20}/>
                <ClickCounter initialValue={0} incrementAmount={3}/>
                <ClickTracker />
            </div>)
    }
}