import React, { useState } from "react";
import './index.css'
import { Link } from "react-router-dom";


export function Welcome() {
    const [firstname, setFirstname] = useState('')

    function handleNameChange(event) {
        setFirstname(event.target.value)
    }

    return (
        <div>
            <input value={firstname} onChange={handleNameChange} />
            <h2>Hello, {firstname}</h2>
            
        </div>
    )
}


