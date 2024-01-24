import React, { useState, useContext } from 'react';
import { AppContext } from '../AppContext';

const UserSearch = () => {
  const { fetchUserData }: any = useContext(AppContext);
  const [username, setUsername] = useState('');

  const handleSubmit = (e: any) => {
    e.preventDefault();
    fetchUserData(username)
  };

  return (
    <div style={{ padding: '10px' }}>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter GitHub username"
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default UserSearch;
