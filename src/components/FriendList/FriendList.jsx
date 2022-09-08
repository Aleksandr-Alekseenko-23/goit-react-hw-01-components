import React from 'react';
import { FriendsItem } from '../FriendListItem/FriendListItem';
import PropTypes from 'prop-types';

export const Friends = ({ friends }) => {
  return (
    <ul class="friend-list">
      {friends.map(friend => (
        <FriendsItem friend={friend} key={friend.id} />
      ))}
    </ul>
  );
};

Friends.propTypes = {
  friends: PropTypes.array.isRequired,
};
