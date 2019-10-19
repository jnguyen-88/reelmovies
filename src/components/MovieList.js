import React from 'react';
import { connect } from 'react-redux';
import { fetchMovies } from '../actions';
import MovieCard from './MovieCard';

export class MoviesList extends React.Component {
  render() {
    const { movies } = this.props;
    let content = '';

    content =
      movies.Response === 'True'
        ? movies.Search.map((movie, index) => (
            <MovieCard key={index} movie={movie} />
          ))
        : null;
    return <div className='row'>{content}</div>;
  }
}

const mapStateToProps = state => ({
  movies: state.movies.movies
});

export default connect(mapStateToProps)(MoviesList);
