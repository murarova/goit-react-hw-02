import React, { Component } from 'react';
import shortid from 'shortid';
import TransactionHist from '../TransactionHistory/TransactionHistory';
import Balance from '../Balance/Balance';
import Controls from '../Controls/Controls';
import styles from '../styles.module.css';

/* eslint-disable */

const transaction = {
    id: shortid.generate(),
    type: '',
    amount: null,
    date: new Date().toLocaleString(),
};

class Dashboard extends Component {
    state = {
        history: [],
        // balance: null,
    };

    onButton = obj => {
        // const newTask = {
        //     id: shortid.generate(),
        //     type: buttonName,
        //     amount: value,
        //     date: new Date().toLocaleString(),
        // };

        console.log(obj);
    };

    render() {
        return (
            <div className={styles.dashboard}>
                <Controls
                    getInputValue={this.setInputValue}
                    onButtonClick={this.onButton}
                />
                <Balance />
                <TransactionHist />
            </div>
        );
    }
}

export default Dashboard;
