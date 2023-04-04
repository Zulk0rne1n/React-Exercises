import React from "react";
import { CounterDisplay } from "./CounterDisplay";


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
        </div>
    }
}

Counter.defaultProps = {
    initialValue: 0,
    incrementAmount: 1,
    timeout: 1000

}