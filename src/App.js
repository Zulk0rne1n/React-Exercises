import { Link, Route, Routes } from "react-router-dom";
import { Welcome } from './Welcome'
import { Counter } from "./Counter";
import { GithubUser } from "./GitHubUser";


export function App() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Welcome />} />
                <Route path="/counter" element={<Counter />} />
                <Route path='/users/:user' element={<GithubUser />} />
                <Route path='*' element={<h3>Not Found</h3>} />
            </Routes>
            <div>
                <Link to='/counter'>Counter</Link>
            </div>
            <div>
                <Link to='/users/:user'>GitHubUser</Link>
            </div>
        </div>
    )
}