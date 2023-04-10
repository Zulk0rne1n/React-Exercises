import React from "react"
import { Counter } from "./Counter"
import { Hello } from "./Hello"
import { Welcome } from "./Welcome"
import { GithubUser } from "./GithubUser"


export class App extends React.Component {
    render() {
        return (
            <div>
                {/* <Hello />
                <Welcome name="John" age={17} />
                <Counter initialValue={0} /> */}
                <GithubUser username='Zulk0rne1n'/>
            </div>)
    }
}