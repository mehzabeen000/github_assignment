import { AppContext } from '../AppContext';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

const MainButton = () => {
  const { setFollowers, setFollowerRepos }: any = useContext(AppContext);

  return (
    <div>
      <Link to="/" onClick={() => {
        setFollowers([])
        setFollowerRepos([])
      }}>
        <button>Go to Main Page</button>
      </Link>
    </div>
  );
};

export default MainButton;
