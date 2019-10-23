import React from 'react';
import { connect } from 'react-redux';
import MovieCard from './MovieCard';
import SearchFormSm from './SearchFormSm';

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
    return (
      <div className='container mt-5 pt-4'>
        <div className='mb-5 mt-5'>
          <SearchFormSm />
        </div>
        <div className='row'>{content}</div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  movies: state.movies.moviesArr
});

export default connect(mapStateToProps)(MoviesList);
