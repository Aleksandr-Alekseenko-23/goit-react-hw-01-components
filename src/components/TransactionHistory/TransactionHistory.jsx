import React from 'react';
import PropTypes from 'prop-types';
import css from './TransactionHistory.module.css';

export const TransactionHistory = ({ items }) => {
  console.log(items);
  return (
    <table className={css.transactionHistory} rules="all">
      <thead className={css.table}>
        <tr className={css.tableTitle}>
          <th className={css.title}>Type</th>
          <th className={css.title}>Amount</th>
          <th className={css.title}>Currency</th>
        </tr>
      </thead>
      <tbody className={css.tableItems}>
        {items.map(({ id, type, amount, currency }) => (
          <tr key={id} className={css.tableItem}>
            <td className={css.item}>{type}</td>
            <td className={css.item}>{amount}</td>
            <td className={css.item}>{currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }).isRequired
  ),
};
