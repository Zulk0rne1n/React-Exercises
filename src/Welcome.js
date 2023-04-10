import React from "react";
import { Age } from "./Age";
import './index.css'

// export class Welcome extends React.Component {
//     render() {
//         return (
//             <div className="welcome">
//                 <p>Welcome {this.props.name}</p>
//                 {this.props.name === "John" && <Age age={this.props.age}  />}
//             </div>
//         )
//     }
// }

export function Welcome({ name = 'World' }) {
    return (
        <h2>Hello, {name}</h2>
    )
}


// Welcome.defaultProps = {
//     name: "Arda"
// }