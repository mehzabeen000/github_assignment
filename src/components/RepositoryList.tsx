import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import MainButton from './MainButton';

const UserRepositoryList = ({ repositories, user }: any) => {
  const navigate = useNavigate()

  return (
    user ?
      <div style={{ display: 'flex', flexDirection: 'column', padding: '5px', justifyContent: 'center' }} >
        {!user?.name ? <MainButton /> : <></>}
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '5px', gap: 2 }} >
          <div>
            <img width={200} height={180} style={{ borderRadius: '50%', border: '3px solid grey' }} src={user.avatar_url} alt="User Avatar" />
          </div>
          <div style={{ fontSize: '16px' }} >{user.login}
          </div>
          {user?.name ? <><div style={{ fontSize: '20px', fontWeight: 700 }}>
            {user.name}
          </div>
            <div >
              {user.bio}
            </div>
            <div>
              <span style={{ fontWeight: 600 }} >{user.followers}</span> Followers · <span style={{ fontWeight: 600 }} >{user.following}</span> Following
            </div>
            <div>
              <button onClick={() => {
                navigate(`/followers`)
              }}>Show Followers</button>
            </div></> : <></>}
        </div>


        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', justifyContent: 'center', }}>
          {repositories.map((repo: any) => (
            <div key={repo.id} style={{ display: 'flex', width: '40%', border: '1px solid #ccc', padding: '10px', borderRadius: '2px', textAlign: 'left', gap: 5 }}>
              <img width={60} height={50} style={{ borderRadius: '50%', border: '3px solid grey' }} src={user.avatar_url} alt="User Avatar" />
              <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'left' }} >
                <Link to={`/repositories/${user.login}/${repo.name}`}>{repo.name}</Link>
                <div>{repo.description}</div>
              </div>
            </div>
          ))}
        </div>

      </div> : <></>
  );
};

export default UserRepositoryList;
