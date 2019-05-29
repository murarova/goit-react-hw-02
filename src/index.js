import React from 'react';
import ReactDOM from 'react-dom';
import Reader from './components/Reader/Reader';
import publications from './components/Reader/publication.json';

ReactDOM.render(
    <Reader items={publications} />,
    document.getElementById('root'),
);
