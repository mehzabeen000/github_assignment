import React, { useContext } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import UserSearch from './components/UserSearch';
import UserRepositoryList from './components/RepositoryList';
import RepositoryDetails from './components/RepositoryDetails';
import UserFollowers from './components/Followers';
import { AppContext } from './AppContext';

function App() {
  const { user, repositories, followerRepos }: any = useContext(AppContext);

  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <UserSearch />
              <UserRepositoryList user={user} repositories={repositories}
              />
            </div>
          }
        />
        <Route
          path="follower/repositories/:userName"
          element={<UserRepositoryList user={followerRepos?.[0]?.owner} repositories={followerRepos} />}
        />
        <Route
          path="/repositories/:userName/:repoName"
          element={<RepositoryDetails />}
        />
        <Route
          path="/followers"
          element={<UserFollowers />}
        />
      </Routes>
    </div>
  );
}

export default App;
