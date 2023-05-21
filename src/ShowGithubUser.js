import React, { useState } from "react";
import { GithubUser } from "./GithubUser";
import { Link, useParams } from "react-router-dom";

export function ShowGithubUser() {

    return (
        <div>
            <GithubUser username='Zulk0rne1n' />
        </div>
    );
}
