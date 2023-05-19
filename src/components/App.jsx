import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import { FriendList } from './FriendList/FriendList';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';
import user from '../configs/user.json';
import data from '../configs/data.json';
import friends from '../configs/friends.json';
import transactions from '../configs/transactions.json';

export const App = () => {
  return (
    <>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      ></Profile>
      <Statistics title="Upload stats" stats={data}></Statistics>
      <FriendList friends={friends}></FriendList>
      <TransactionHistory items={transactions}></TransactionHistory>
    </>
  );
};
