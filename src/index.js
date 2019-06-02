import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import Reader from './components/FirstTask/Reader/Reader';
import publications from './components/FirstTask/Reader/publication.json';
import MoviePage from './components/SecondTask/MoviePage/MoviePage';

ReactDOM.render(
    <Fragment>
        <Reader items={publications} />
        <MoviePage />
    </Fragment>,
    document.getElementById('root'),
);
