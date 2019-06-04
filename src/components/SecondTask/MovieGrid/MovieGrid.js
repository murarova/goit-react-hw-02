import React from 'react';
import PropTypes from 'prop-types';
import styles from '../styles.module.css';

const MovieGrid = ({ title, posterUrl, overview }) => (
    <div className={styles.movieCard}>
        <img src={posterUrl} alt="" />
        <div className={styles.content}>
            <h2>{title}</h2>
            <p>{overview}</p>
        </div>
    </div>
);

MovieGrid.propTypes = {
    title: PropTypes.string.isRequired,
    posterUrl: PropTypes.string.isRequired,
    overview: PropTypes.string.isRequired,
};

export default MovieGrid;
