import React from 'react';
import PropTypes from 'prop-types';
import styles from '../styles.module.css';

const TransactionHist = ({ history }) => (
    <table className={styles.history}>
        <thead className={styles.head}>
            <tr className={styles.row}>
                <th className={styles.tableCells}>Transaction</th>
                <th className={styles.tableCells}>Amount</th>
                <th className={styles.tableCells}>Date</th>
            </tr>
        </thead>
        <tbody className={styles.body}>
            {history.map(trancaction => (
                <tr key={trancaction.id} className={styles.row}>
                    <td className={styles.transactionName}>
                        {trancaction.name}
                    </td>
                    <td>{trancaction.value} $</td>
                    <td>{trancaction.date}</td>
                </tr>
            ))}
        </tbody>
    </table>
);

TransactionHist.propTypes = {
    history: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default TransactionHist;
