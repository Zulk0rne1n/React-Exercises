import React from "react"
import { GithubUser } from "./GithubUser"
import { Link, Route, Routes } from "react-router-dom"
import { ShowGithubUser } from "./ShowGithubUser"


export default function App() {


    return (
        <div>
            <Routes>
                <Route path='/users' element={<GithubUser />}>
                    <Route path='/users/:username' />
                </Route>
            </Routes>
        </div>
    )
}
