import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AppContext } from '../AppContext';
import MainButton from './MainButton';

const UserFollowers = () => {
  const { user, followers, setFollowers, fetchFollowers, fetchRepos, setFollowerRepos }: any = useContext(AppContext);

  useEffect(() => {
    if (!followers.length) {
      fetchFollowers(user.login).then((data: any) => setFollowers(data))
    }
  }, [followers, fetchFollowers, setFollowers, user.login])

  return (
    <div>
      <MainButton />
      <h2>Followers of {user.login}</h2>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', justifyContent: 'center' }}>
        {followers.map((follower: any) => (
          <div key={follower.id} style={{ display: 'flex', width: '40%', border: '1px solid #ccc', padding: '10px', borderRadius: '2px', textAlign: 'left', gap: 5 }}>
            <img width={60} height={50} style={{ borderRadius: '50%', border: '3px solid grey' }} src={user.avatar_url} alt="User Avatar" />
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'left' }} >
              <Link to={`/follower/repositories/${follower.login}`} onClick={async () => {
                const data = await fetchRepos(follower.login)
                setFollowerRepos(data)
              }} >{follower.login}</Link>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserFollowers;
