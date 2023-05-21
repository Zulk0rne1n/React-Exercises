import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";


export function GithubUser() {
    const [data, setData] = useState(null)
    const [userInput, setUserInput] = useState('')
    const navigate = useNavigate()
    const { username } = useParams();

    useEffect(() => {
        fetch(`https://api.github.com/users/${username}`)
            .then(response => {
                return response.json()
            })
            .then(json => {
                console.log(json);

                setData(json)
            })
    }, [username])

    function handleInputChange(e) {
        setUserInput(e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault();
        navigate(userInput)
    }

    return (
        <div>
            {data && <div>
                <h2>Username: {data.login}</h2>
                <h1>Full Name: {data.name}</h1>
                <img style={{ width: '150px', height: '150px' }} src={data.avatar_url}></img>
            </div>}
            <form onSubmit={handleSubmit}>
                <input onChange={handleInputChange} type="text" value={userInput} />
                <button type="submit">Submit </button>
            </form>

        </div>
    )
}