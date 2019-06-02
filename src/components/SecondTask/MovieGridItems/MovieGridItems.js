import React from 'react';
import propTypes from 'prop-types';
import MovieGrid from '../MovieGrid/MovieGrid';
import styles from '../styles.module.css';

const MovieGridItems = ({ items }) =>
    items.length > 0 ? (
        <div className={styles.movieGrid}>
            {items.map(grid => (
                <MovieGrid key={grid.id} {...grid} />
            ))}
        </div>
    ) : (
        <p className={styles.text}>No matching results</p>
    );

MovieGridItems.propTypes = {
    items: propTypes.arrayOf(propTypes.object).isRequired,
};

export default MovieGridItems;
