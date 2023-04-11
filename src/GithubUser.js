import useGithubUser from './useGithubUser';

export function GithubUser({ username }) {
    const { data, loading, error } = useGithubUser(username);

    return (
        <div>
            {loading && <p>Loading...</p>}
            {error && <p>Error loading user data</p>}
            {data && (
                <div>
                    <h3>Username: {data.login}</h3>
                    <h3>Full Name: {data.name}</h3>
                </div>
            )}
        </div>
    );
}
