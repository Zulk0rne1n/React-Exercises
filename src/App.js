import { Link, Route, Routes } from "react-router-dom";
import { Welcome } from './Welcome'
import { Counter } from "./Counter";
import { GithubUser } from "./GithubUser";
import { ShowGithubUser } from "./ShowGithubUser";


export function App() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Welcome />} />
                <Route path="/counter" element={<Counter />} />
                <Route path='/users' element={
                    <div>
                        <h3>Add a user and select it</h3>
                        <ShowGithubUser />
                    </div>
                } >
                    <Route path='/users/:user' element={<GithubUser />}> </Route>
                </Route>
                <Route path='*' element={<h3>Not Found</h3>} />
            </Routes>
            <div>
                <Link to='/counter'>Counter</Link>
            </div>
            <div>
                <Link to='/users/'>GitHubUser</Link>
            </div>
        </div>
    )
}