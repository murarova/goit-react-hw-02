import React from 'react';
import propTypes from 'prop-types';
import styles from '../styles.module.css';

const SearchBar = ({ value, onChangeFilter }) => (
    <input
        type="text"
        className={styles.input}
        value={value}
        onChange={onChangeFilter}
    />
);

SearchBar.defaultProps = {
    value: '',
    onChangeFilter: () => {},
};

SearchBar.propTypes = {
    value: propTypes.string,
    onChangeFilter: propTypes.func,
};

export default SearchBar;
