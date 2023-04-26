import React, { useEffect, useRef, useState } from "react";
import './index.css'
import { DisplayLanguage } from "./DisplayLanguage";

export function Welcome() {
    const [name, setName] = useState('World')
    const inputRef = useRef()

    useEffect(() => {
        inputRef.current.focus()
    }, [])

    function handleNameChange(event) {
        setName(event.target.value)
    }

    return (
        <div>
            <DisplayLanguage />
            <h2>Hello, {name}</h2>
            <input ref={inputRef} value={name} onChange={handleNameChange} />
        </div>
    )
}