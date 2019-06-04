import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import Reader from './components/FirstTask/Reader/Reader';
import publications from './components/FirstTask/Reader/publication.json';
import MoviePage from './components/SecondTask/MoviePage/MoviePage';
import Dashboard from './components/ThirdTask/Dashboard/Dashboard';

ReactDOM.render(
    <Fragment>
        <Reader items={publications} />
        <MoviePage />
        <Dashboard />
    </Fragment>,
    document.getElementById('root'),
);
