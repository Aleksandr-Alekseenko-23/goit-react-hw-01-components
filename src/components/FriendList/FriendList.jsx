import React from 'react';
import { FriendsItem } from '../FriendListItem/FriendListItem';
import PropTypes from 'prop-types';
import css from './FriendList.module.css';

export const Friends = ({ friends }) => {
  return (
    <ul className={css.friendList}>
      {friends.map(friend => (
        <FriendsItem friend={friend} key={friend.id} />
      ))}
    </ul>
  );
};

Friends.propTypes = {
  friends: PropTypes.array.isRequired,
};
