import React, { Fragment, Component } from 'react';
// import propTypes from 'prop-types';
import styles from './reader.module.css';

export default class Reader extends Component {
    // static defaultProps = {
    //     id: '',
    //     title: '',
    //     text: '',
    // };

    // static propTypes = {
    //     id: propTypes.string,
    //     title: propTypes.string,
    //     text: propTypes.string,
    // };

    state = {};

    render() {
        // const { items } = this.props;

        return (
            <Fragment>
                <div className={styles.reader}>
                    <article className={styles.publication}>
                        {/* <h2>{title}</h2>
                        <p>{text}</p> */}
                    </article>

                    <p className={styles.counter}>3/10</p>

                    <section className={styles.controls}>
                        <button type="button" className={styles.button}>
                            Назад
                        </button>
                        <button type="button" className={styles.button}>
                            Вперед
                        </button>
                    </section>
                </div>
            </Fragment>
        );
    }
}
