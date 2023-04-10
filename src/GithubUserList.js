import { useState } from "react";
import { GithubUser } from "./GithubUser";

export function GithubUserList() {

    const [users, setUsers] = useState([]);

    const handleSubmit = (event) => {
        event.preventDefault();

        setUsers(oldUsers => [...oldUsers, event.target.elements.username.value])
        event.target.elements.username.value = ""
        console.log(event.target.elements.username.value);
    }

    return (
        <div>
            {users.map((user, index) => {
                return <GithubUser key={user + index} username={user} />
            })}
            <form onSubmit={handleSubmit}>
                <input type="text" name="username"></input>
                <button>Add User</button>
            </form>
        </div>
    )
}