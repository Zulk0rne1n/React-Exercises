import React from "react"
import { TodoList } from "./TodoList"
import { Welcome } from "./Welcome"






const items = ['Blue', 'Green', 'Yellow']

export class App extends React.Component {
    render() {
        return (
            <div>
                <Welcome name='Bernard'/>
                <TodoList />
            </div>)
    }
}