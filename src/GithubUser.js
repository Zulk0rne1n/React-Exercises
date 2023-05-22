import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";


export function GithubUser({ userX }) {
    const [data, setData] = useState(null)
    const navigate = useNavigate()
    const { user } = useParams();


    useEffect(() => {
        fetch(`https://api.github.com/users/${userX}`)
            .then(response => {
                return response.json()
            })
            .then(json => {
                console.log(json);

                setData(json)
            })
    }, [userX])



    return (
        <div>
            {data && <div>
                <h2>Username: {data.login}</h2>
                <h1>Full Name: {data.name}</h1>
                <img style={{ width: '150px', height: '150px' }} src={data.avatar_url}></img>
            </div>}

            <Link to='/'>Back</Link>
        </div>
    )
}