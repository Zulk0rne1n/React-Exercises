import React,  { useEffect, useState } from "react";

export function ClickCounter() {
    const [count, setCount] = useState(0)

    useEffect(() => {
        onCounterChange()
    }, [count])

    function onCounterChange() {
        console.log(`Count: ${count}`);
    }

    function handleUpdateCount() {
        setCount((c) => c + 1)
    }

    return (
        <div>
            <h4>Click Count:{count}</h4>
            <button onClick={handleUpdateCount}>Increment</button>
        </div>
    )
}
