import React from 'react';
import PropTypes from 'prop-types';

export const FriendsItem = ({ friend }) => {
  const { avatar, name, isOnline } = friend;
  return (
    <li class="item">
      <span class="status">{isOnline} </span>
      <img class="avatar" src={avatar} alt="User avatar" width="48" />
      <p class="name">{name}</p>
    </li>
  );
};

FriendsItem.propTypes = {
  friend: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
  }).isRequired,
};
