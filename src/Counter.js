import React, { useState, useEffect } from 'react';

export function Counter(props) {
  const [count, setCount] = useState(props.initialValue);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCount(count => count + 1);
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div>
      <h1>Count: {count}</h1>
    </div>
  );
}





// export class Counter extends React.Component {
//     state = {
//         count: this.props.initialValue,
//     }

//     constructor(props) {
//         super(props)

//         setInterval(() => {
//             this.setState((state) => {
//                 return {
//                     count: state.count + 1
//                 }
//             })
//         }, 1000);
//     }

//     render() {
//         return <div>
//             <h1>Count: {this.state.count}</h1>
//         </div>
//     }
// }

// Counter.defaultProps = {
//     initialValue: 0,

// }