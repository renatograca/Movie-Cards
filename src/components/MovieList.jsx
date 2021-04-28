import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';

class MovieList extends Component {
  render() {
    const { movies } = this.props;

    const renderMovieCard = movies.map((movie) => (<MovieCard
      movie={ movie }
      key={ movie.title }
    />));
    return (
      <div className="movie-list">

        {renderMovieCard}
      </div>
    );
  }
}

MovieList.defaultProps = {
  movies: [],
};

MovieList.propTypes = {
  movies: PropTypes.arrayOf,
};

export default MovieList;
