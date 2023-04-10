import React from 'react';

function Sum(props) {
    
    const sum = props.numbers.reduce((total, num) => total + num, 0);
    return <h1>The sum of the numbers is: {sum}</h1>;
}

export default Sum;