import React from "react";
import { CounterDisplay } from "./CounterDisplay";
import { Link } from "react-router-dom";


export class Counter extends React.Component {
    state = {
        count: this.props.initialValue,
    }

    componentDidMount() {

        setInterval(() => {
            this.setState((state) => {
                return {
                    count: state.count + (this.props.incrementAmount)
                }
            })
        }, this.props.timeout);
    }

    render() {
        return <div>
            <CounterDisplay count={this.state.count} />
            <Link to='/'>Back</Link>
        </div>
    }
}

Counter.defaultProps = {
    initialValue: 0,
    incrementAmount: 1,
    timeout: 1000

}