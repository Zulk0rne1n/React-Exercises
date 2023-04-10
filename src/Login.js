import React, { useState } from "react";


export function Login() {
    const [userInfo, setInfo] = useState({
        username: '',
        password: '',
        remember: false
    })

    function handleInputChange(event) {
        const { name, type, value, checked } = event.target

        setInfo(userInfo => {
            return {
                ...userInfo,
                [name]: type === 'checkbox' ? checked : value
            }
        })

    }

    console.log(userInfo);

    return (
        <form>
            <input onChange={handleInputChange} value={userInfo.name} name="username" />
            <input onChange={handleInputChange} value={userInfo.password} type='password' name="password" />
            <input onChange={handleInputChange} checked={userInfo.remember} type="checkbox" name="remember" />
        </form>
    )
}


// export class Login extends React.Component {
//     state = {
//         username: "",
//         password: "",
//         remember: false
//     }

//     handleLogin = () => {
//         const { onLogin } = this.props;
//         const { username, password, remember } = this.state;
//         onLogin({ username, password, remember });
//     }

//     handleInputChange = (event) => {
//         const name = event.target.name
//         const type = event.target.type
//         const value = event.target.value
//         const checked = event.target.checked

//         this.setState({
//             [name]: type === 'checkbox' ? checked : value
//         })

//     }


//     render() {
//         const isDisabled = !this.state.username || !this.state.password

//         return (
//             <div>
//                 <input name="username" type="text" value={this.state.username} onChange={this.handleInputChange} />
//                 <input name="password" type="password" value={this.state.password} onChange={this.handleInputChange} />
//                 <input name="remember" type="checkbox" checked={this.state.remember} onChange={this.handleInputChange} />
//                 <button onClick={this.handleLogin} disabled={isDisabled}>login</button>
//             </div>
//         )
//     }
// }