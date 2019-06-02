import React from 'react';
import propTypes from 'prop-types';
import styles from '../reader.module.css';

const Controls = ({ nextIndex, prevIndex }) => (
    <section className={styles.controls}>
        <button onClick={prevIndex} type="button" className={styles.button}>
            Назад
        </button>
        <button onClick={nextIndex} type="button" className={styles.button}>
            Вперед
        </button>
    </section>
);

Controls.propTypes = {
    nextIndex: propTypes.func,
    prevIndex: propTypes.func,
};

Controls.defaultProps = {
    nextIndex: () => {},
    prevIndex: () => {},
};

export default Controls;
