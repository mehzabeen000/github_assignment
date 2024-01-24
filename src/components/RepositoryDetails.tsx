import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { AppContext } from '../AppContext';
import MainButton from './MainButton';

const RepositoryDetails = () => {
  const { repositories, followerRepos, followers }: any = useContext(AppContext);
  const { repoName, userName }: any = useParams();

  const isFollower = (username: string) => {
    return followers.some((follower: any) => follower.login === username) ? followerRepos : repositories;
  };

  const repo = isFollower(userName).find((r: any) => r.owner.login === userName && r.name === repoName);

  return (
    <div>
      <MainButton />
      < h2 > {repo?.name}</h2 >
      <p>{repo?.description}</p>
    </div >
  );
};

export default RepositoryDetails;
