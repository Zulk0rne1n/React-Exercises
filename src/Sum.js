import React from 'react';

function Sum({ numbers = [0, 1, 2, 3, 4] }) {

    const sum = numbers.reduce((total, num) => total + num, 0);
    return <h1>The sum of the numbers is: {sum}</h1>;
}

export default Sum;