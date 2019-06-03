import React, { Component } from 'react';
import styles from '../styles.module.css';

/* eslint-disable */

class Controls extends Component {
    state = {
        value: '',
        name: '',
    };

    handleSubmit = e => {
        e.preventDefault();

        this.props.onButtonClick({ ...this.state });
    };

    setInputValue = e => this.setState({ value: e.target.value });
    setButtonName = e => this.setState({ name: e.target.name });

    render() {
        const { value, name } = this.state;

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
                        name="Deposit"
                        onClick={this.setButtonName}
                    >
                        Deposit
                    </button>
                    <button
                        className={styles.button}
                        type="submit"
                        name="Withdraw"
                        onClick={this.setButtonName}
                    >
                        Withdraw
                    </button>
                </form>
            </section>
        );
    }
}

export default Controls;
