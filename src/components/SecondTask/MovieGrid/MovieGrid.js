import React from 'react';
import styles from '../styles.module.css';

/* eslint-disable */

const MovieGrid = ({ id, title, posterUrl, overview }) => (
    <div className={styles.movieCard}>
        <img src={posterUrl} alt="" />
        <div className={styles.content}>
            <h2>{title}</h2>
            <p>{overview}</p>
        </div>
    </div>
);

export default MovieGrid;
