import { useGithubUser } from "./useGithubUser";
import { useState } from "react";

export function GithubUser() {
    const [usernameInput, setUsernameInput] = useState("");
    const { data, error, loading, onFetch } = useGithubUser(usernameInput);

    function onInputChange(event) {
        setUsernameInput(event.target.value)
    }

    return (
        <div>
            <hr />
            <h1>Github Username Fetcher!</h1>
            <input type="text" name="usernameInput" placeholder="username" value={usernameInput} onChange={onInputChange} />
            <button onClick={() => onFetch(usernameInput)}>Fetch</button>
            {loading && <p>Loading...</p>}
            {error && <p>Error: {error.message}</p>}
            {data && <div>
                <h2>Username: {data.login}</h2>
                <h1>Full Name: {data.name}</h1>
                <img style={{ width: '150px', height: '150px' }} src={data.avatar_url}></img>
            </div>}
            <hr />
        </div>
    );
}

// import { useEffect, useState } from "react";
// import { Link, useNavigate, useParams } from "react-router-dom";


// export function GithubUser({ userX }) {
//     const [data, setData] = useState(null)
//     const navigate = useNavigate()
//     const { user } = useParams();


//     useEffect(() => {
//         fetch(`https://api.github.com/users/${userX}`)
//             .then(response => {
//                 return response.json()
//             })
//             .then(json => {
//                 console.log(json);

//                 setData(json)
//             })
//     }, [userX])



//     return (
//         <div>
//             {data && <div>
//                 <h2>Username: {data.login}</h2>
//                 <h1>Full Name: {data.name}</h1>
//                 <img style={{ width: '150px', height: '150px' }} src={data.avatar_url}></img>
//             </div>}

//             <Link to='/'>Back</Link>
//         </div>
//     )
// }