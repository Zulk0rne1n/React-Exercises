import React, { createRef } from "react";



export class TodoList extends React.Component {
    state = {
        items: []
    }

    _inputRef = createRef()

    handleSubmit = () => {
        const item = this._inputRef.current.value
        if (item) {
            this.setState({
                items: [...this.state.items, item]
            })
        }
        this._inputRef.current.value = ""
    }

    render() {
        console.log(this.state.items);
        return (
            <div>
                <h3>Todo List</h3>
                <input ref={this._inputRef} type="text"></input>
                <button type='submit' onClick={this.handleSubmit}>Submit</button>
                <ul>
                    {this.state.items.map((item, index) => (
                        <li key={item + index}>{item}</li>
                    ))}
                </ul>
            </div>
        )
    }
}