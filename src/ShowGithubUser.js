import React, { useState } from "react";
import { GithubUser } from "./GithubUser";
import { Link, useNavigate, useParams } from "react-router-dom";

export function ShowGithubUser() {
    const [userInput, setUserInput] = useState('')
    const [username, setUsername] = useState('')
    const navigate = useNavigate()
    const { users } = useParams()

    function handleInputChange(e) {
        setUserInput(e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault();
        setUsername(userInput)
        navigate('/users/:user')
        setUserInput('')
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input onChange={handleInputChange} type="text" value={userInput} />
                <button type="submit">Submit </button>
            </form>
            {username && <GithubUser userX={username}/>}
            <Link to='/'>Back</Link>

        </div>
    );
}