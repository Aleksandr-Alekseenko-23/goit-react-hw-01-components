import React from 'react';
import PropTypes from 'prop-types';

export const Statistics = ({ stats, title }) => {
  return (
    <section>
      {title && <h2 class="title">{title}</h2>}
      <ul class="stat-list">
        {stats.map(item => {
          const { id, label, percentage } = item;
          return (
            <li key={id} class="item">
              <span class="label">{label}</span>
              <span class="percentage">{percentage}</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }).isRequired
  ),
};
