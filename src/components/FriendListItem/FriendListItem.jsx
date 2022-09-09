import React from 'react';
import PropTypes from 'prop-types';
import css from './FriendListItem.module.css';

export const FriendsItem = ({ friend }) => {
  const { avatar, name, isOnline } = friend;
  return (
    <li className={css.item}>
      <span className={isOnline ? css.statusYes : css.statusNo}>
        {isOnline}{' '}
      </span>
      <img className={css.avatar} src={avatar} alt="User avatar" width="70" />
      <p className={css.name}>{name}</p>
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
