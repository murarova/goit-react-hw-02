import React from 'react';
import styles from '../styles.module.css';

/* eslint-disable */

const Controls = ({ onButtonClick }) => (
    <section className={styles.controls}>
        <input className={styles.input} type="number" />
        <button
            className={styles.button}
            type="button"
            name="Deposit"
            onClick={onButtonClick(12, 'Deposit')}
        >
            Deposit
        </button>
        <button
            className={styles.button}
            type="button"
            name="Withdraw"
            // onClick={onButtonClick}
        >
            Withdraw
        </button>
    </section>
);

export default Controls;
