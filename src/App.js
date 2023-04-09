import React from "react"
import { Counter } from "./Counter"
import { Hello } from "./Hello"
import { Welcome } from "./Welcome"
import { ClickCounter } from "./ClickCounter"
import { ClickTracker } from "./ClickTracker"
import { InteractiveWelcome } from "./InteractiveWelcome"
import { Login } from "./Login"
import { Container } from "./Container"



export class App extends React.Component {
    handleLogin = (loginInfo) => {
        console.log("Logging in with user data:", loginInfo);
    };
    render() {
        return (
            <Container title='Composition 02'>
                {/* <Hello />
                <Welcome name="John" age={20} /> */}
                <Counter incrementAmount={1} timeout={500} initialValue={20}/>
                {/* <ClickCounter initialValue={0} incrementAmount={3}/>
                <ClickTracker />
                <InteractiveWelcome /> */}
                {/* <Login onLogin={this.handleLogin} /> */}
            </Container >)
    }
}