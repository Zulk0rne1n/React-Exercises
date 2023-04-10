import React from "react"
import { Counter } from "./Counter"
import { Hello } from "./Hello"
import { Welcome } from "./Welcome"
import { GithubUser } from "./GithubUser"
import { GithubUserList } from "./GithubUserList"
import { UltForm } from "./Form"


export class App extends React.Component {
    render() {
        return (
            <div>
                {/* <Hello />
                <Welcome name="John" age={17} />
                <Counter initialValue={0} /> */}
                {/* <GithubUser username='Zulk0rne1n'/> */}
                <GithubUserList />
                {/* <UltForm /> */}
            </div>)
    }
}