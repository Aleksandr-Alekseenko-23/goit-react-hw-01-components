import React from 'react';
import userData from '../data/user.json';
import statistics from '../data/data.json';
import friends from '../data/friends.json';
import transactions from '../data/transactions.json';
import { Statistics } from './Statistics/Statistics';
import { User } from './Profile/Profile.jsx';
import { Friends } from './FriendList/FriendList.jsx';
import { TransactionHistory } from './TransactionHistory/TransactionHistory.jsx';

console.log(statistics);

export const App = () => {
  return (
    <>
      <User userData={userData} />
      <Statistics title="Upload stats" stats={statistics} />
      <Statistics stats={statistics} />
      <Friends friends={friends} />;
      <TransactionHistory items={transactions} />;
    </>
  );
};
