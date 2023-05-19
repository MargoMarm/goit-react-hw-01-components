import { Profile } from './Profile/Profile';
import user from '../configs/user.json';

export const App = () => {
  return (
    <Profile
      username={user.username}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats}
    ></Profile>
  );
};
