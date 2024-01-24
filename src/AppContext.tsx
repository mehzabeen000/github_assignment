import React, { useState, createContext } from "react";
import "./App.css";
import App from "./App";
import axios from "axios";

const AppContext = createContext({});

function AppContextProvider() {
  const [user, setUser] = useState<any>(null);
  const [followerRepos, setFollowerRepos] = useState([]);
  const [repositories, setRepositories] = useState([]);
  const [followers, setFollowers] = useState([]);

  const fetchUserData = async (username: string) => {
    // Fetch user data
    if (!user) {
      const userResponse = await axios.get(`https://api.github.com/users/${username}`);
      setUser(userResponse.data);
    }
    // Fetch user repositories
    if (!repositories.length) {
      const reposResponse = await fetchRepos(username)
      setRepositories(reposResponse)
    }
  };

  const fetchFollowers = async (username: string) => {
    const followersResponse = await axios.get(`https://api.github.com/users/${username}/followers`);
    return followersResponse.data
  }

  const fetchRepos = async (username: string) => {
    const reposResponse = await axios.get(`https://api.github.com/users/${username}/repos`);
    return reposResponse.data
  }

  // useEffect(() => {
  //   // Fetch initial data when component mounts
  //   if (user) {
  //     fetchUserData(user.login);
  //   }
  // }, [user]);

  return (
    <AppContext.Provider
      value={{
        user,
        setUser,
        repositories,
        setRepositories,
        followers,
        setFollowers,
        fetchUserData,
        setFollowerRepos,
        followerRepos,
        fetchFollowers,
        fetchRepos
      }}
    >
      <App />
    </AppContext.Provider>
  );
}

export { AppContext, AppContextProvider };