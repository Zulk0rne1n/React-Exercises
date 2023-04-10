import React from "react"
import { Counter } from "./Counter"
import { Hello } from "./Hello"
import { Welcome } from "./Welcome"
import { ClickCounter } from "./ClickCounter"
import { ClickTracker } from "./ClickTracker"
import { InteractiveWelcome } from "./InteractiveWelcome"
import { Login } from "./Login"
import { UncontrolledLogin } from "./UncontrolledLogin"
import { TodoList } from "./TodoList"
import { Colors } from "./Colors"
import { DisplayLanguage } from "./DisplayLanguage"
import { LanguageContext } from "./LanguageContext"





const items = ['Blue', 'Green', 'Yellow']

export class App extends React.Component {

    state = {
        language: 'en'
    }

    handleLanguageChange = (event) => {
        this.setState({
            language: event.target.value
        })
    }
    render() {
        return (
            <div>
                <Welcome name='Bernard' />
            </div>)
    }
}