import React from 'react';
import PropTypes from 'prop-types';
import styles from '../styles.module.css';

const Balance = ({ balance, deposit, withdraw }) => (
    <section className={styles.balance}>
        <span className={styles.indicators}>
            <span className={styles.deposite}>⬆</span> {deposit}$
        </span>
        <span className={styles.indicators}>
            <span className={styles.withdraw}>⬇</span>
            {withdraw}$
        </span>
        <span className={styles.indicators}>Balance: {balance}$</span>
    </section>
);

Balance.propTypes = {
    balance: PropTypes.number.isRequired,
    deposit: PropTypes.number.isRequired,
    withdraw: PropTypes.number.isRequired,
};

export default Balance;
