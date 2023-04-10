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





const items = ['Blue', 'Green', 'Yellow']

export class App extends React.Component {
    render() {
        return (
            <div>
                {/* <UncontrolledLogin /> */}
                <TodoList
                    render={(items, handleRemove) => {
                        return (
                            items.map((item, index) => (
                                <li key={item + index}>
                                    {item}
                                    <button
                                        style={{ marginLeft: "20px" }}
                                        onClick={() => handleRemove(index)}>
                                        Remove
                                    </button>
                                </li>
                            ))
                        )
                    }}
                >
                </TodoList>
            </div>)
    }
}