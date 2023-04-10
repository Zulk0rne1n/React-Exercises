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

    handleReset = () => {
        this.setState({
            items: []
        })
    }

    handleRemove = (indexToRemove) => {
        const filteredItems = this.state.items.filter((_, index) => index !== indexToRemove);
        this.setState({ items: filteredItems });
    }

    render() {
        console.log(this.state.items);

        return (
            <div>
                <h3>Todo List</h3>
                <input ref={this._inputRef} type="text"></input>
                <button type='submit' onClick={this.handleSubmit}>Add</button>
                <button onClick={this.handleReset} >Reset</button>
                {this.props.render(this.state.items, this.handleRemove)}
            </div>
        )
    }
}