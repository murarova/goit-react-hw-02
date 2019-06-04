/* eslint-disable no-alert */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from '../styles.module.css';

class Controls extends Component {
    state = {
        value: '',
        name: '',
    };

    handleSubmit = e => {
        e.preventDefault();

        if (
            this.state.name === 'withdraw' &&
            Number(this.state.value) > this.props.balance
        ) {
            alert('На счету недостаточно средств для проведения операции!');
            this.setState({
                value: '',
                name: '',
            });
            return false;
        }

        if (Number(this.state.value) === 0) {
            alert('Введите сумму для проведения операции!');
            this.setState({
                value: '',
                name: '',
            });
            return false;
        }

        if (Number(this.state.value) < 0) {
            alert('Введите положительное число!');
            this.setState({
                value: '',
                name: '',
            });
            return false;
        }

        this.props.onButtonClick({ ...this.state });

        return this.setState({
            value: '',
            name: '',
        });
    };

    setInputValue = e => this.setState({ value: e.target.value });

    setButtonName = e => this.setState({ name: e.target.name });

    render() {
        const { value } = this.state;

        return (
            <section className={styles.controls}>
                <form onSubmit={this.handleSubmit}>
                    <input
                        className={styles.input}
                        type="number"
                        value={value}
                        onChange={this.setInputValue}
                    />
                    <button
                        className={styles.button}
                        type="submit"
                        name="deposit"
                        onClick={this.setButtonName}
                    >
                        Deposit
                    </button>
                    <button
                        className={styles.button}
                        type="submit"
                        name="withdraw"
                        onClick={this.setButtonName}
                    >
                        Withdraw
                    </button>
                </form>
            </section>
        );
    }
}

Controls.propTypes = {
    onButtonClick: PropTypes.func.isRequired,
    balance: PropTypes.number.isRequired,
};

export default Controls;
