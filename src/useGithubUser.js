import { useState } from "react";
import useSWR from "swr";

const fetcher = url => fetch(url).then(response => response.json())

export function useGithubUser() {
  const [usernameInput, setUsernameInput] = useState("");
  const { data, error, mutate } = useSWR(usernameInput ? `https://api.github.com/users/${usernameInput}` : null, fetcher);
  
  function onMutate(username) {
    setUsernameInput(username)
    mutate()
  }

  return {
    data: data,
    error: error,
    loading: !error && !data,
    onFetch: onMutate,
  };
}