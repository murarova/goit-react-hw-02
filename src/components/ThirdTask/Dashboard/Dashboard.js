/* eslint-disable no-param-reassign */
/* eslint-disable no-return-assign */
import React, { Component } from 'react';
import shortid from 'shortid';
import TransactionHist from '../TransactionHistory/TransactionHistory';
import Balance from '../Balance/Balance';
import Controls from '../Controls/Controls';
import styles from '../styles.module.css';

class Dashboard extends Component {
    state = {
        history: [],
        balance: 0,
        deposit: 0,
        withdraw: 0,
    };

    onButton = operation => {
        const operationToAdd = {
            ...operation,
            id: shortid.generate(),
            date: new Date().toLocaleString(),
        };

        if (operationToAdd.name === 'deposit') {
            this.setState(state => ({
                history: [operationToAdd, ...state.history],
                deposit: (state.deposit += Number(operationToAdd.value)),
                balance: (state.balance += Number(operationToAdd.value)),
            }));
        } else {
            this.setState(state => ({
                history: [operationToAdd, ...state.history],
                withdraw: (state.withdraw += Number(operationToAdd.value)),
                balance: (state.balance -= Number(operationToAdd.value)),
            }));
        }
    };

    render() {
        const { balance, deposit, withdraw, history } = this.state;
        return (
            <div className={styles.dashboard}>
                <Controls
                    balance={balance}
                    getInputValue={this.setInputValue}
                    onButtonClick={this.onButton}
                />
                <Balance
                    balance={balance}
                    deposit={deposit}
                    withdraw={withdraw}
                />
                <TransactionHist history={history} />
            </div>
        );
    }
}

export default Dashboard;
