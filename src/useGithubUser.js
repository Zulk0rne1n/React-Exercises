import { useState, useEffect } from 'react';

function useGithubUser(username) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch(`https://api.github.com/users/${username}`)
      .then((response) => response.json())
      .then((json) => {
        setData(json);
      })
      .catch((error) => {
        setError(true);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [username]);

  return { data, loading, error };
}

export default useGithubUser;
