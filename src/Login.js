import React from "react";


export class Login extends React.Component {
    state = {
        username: "",
        password: "",
        remember: false
    }

    handleLogin = () => {
        const { onLogin } = this.props;
        const { username, password, remember } = this.state;
        onLogin({ username, password, remember });
    }

    handleReset = () => {
        this.setState({
            username : "",
            password : "",
            remember : false
        })
    }

    handleInputChange = (event) => {
        const name = event.target.name
        const type = event.target.type
        const value = event.target.value
        const checked = event.target.checked

        this.setState({
            [name]: type === 'checkbox' ? checked : value
        })

    }


    render() {
        const isDisabled = !this.state.username || !this.state.password

        return (
            <div>
                <input name="username" type="text" value={this.state.username} onChange={this.handleInputChange} />
                <input name="password" type="password" value={this.state.password} onChange={this.handleInputChange} />
                <input name="remember" type="checkbox" checked={this.state.remember} onChange={this.handleInputChange} />
                <button onClick={this.handleLogin} disabled={isDisabled}>login</button>
                <button onClick={this.handleReset}>Reset</button>
            </div>
        )
    }
}