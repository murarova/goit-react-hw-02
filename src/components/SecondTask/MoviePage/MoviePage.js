import React, { Component, Fragment } from 'react';
import MovieGridItems from '../MovieGridItems/MovieGridItems';
import SearchBar from '../SearchBar/SearchBar';
import movies from '../movies.json';

function filteredItems(items, filter) {
    return items.filter(item =>
        item.title.toLowerCase().includes(filter.toLowerCase()),
    );
}

class MoviePage extends Component {
    state = {
        filter: '',
    };

    changeFilter = e => {
        this.setState({ filter: e.target.value });
    };

    render() {
        const { filter } = this.state;

        const filteredMovies = filteredItems(movies, filter);

        return (
            <Fragment>
                <SearchBar value={filter} onChangeFilter={this.changeFilter} />
                <MovieGridItems items={filteredMovies} />
            </Fragment>
        );
    }
}

export default MoviePage;
