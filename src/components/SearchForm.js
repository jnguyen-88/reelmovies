import React from 'react';
import { connect } from 'react-redux';
import MovieList from './MovieList';
import { searchMovie, fetchMovies } from '../actions';

export class SearchForm extends React.Component {
  //Helper Functions
  onChange = e => {
    this.props.searchMovie(e.target.value);
  };

  onSubmit = e => {
    e.preventDefault();
    this.props.fetchMovies(this.props.text);
  };

  render() {
    return (
      <React.Fragment>
        <header className='masthead text-center text-white'>
          <div className='masthead-content'>
            <h1 className='masthead-heading mb-0'>Reel Movies</h1>
            <p>powered by omdb</p>
          </div>
          <form id='searchForm' onSubmit={this.onSubmit}>
            <input
              type='text'
              className='form-control'
              name='searchText'
              placeholder='Search by Title...'
              autoComplete='off'
              onChange={this.onChange}
            />
            <button
              type='submit'
              className='btn btn-primary btn-xl rounded-pill mt-5'
            >
              Search
            </button>
          </form>
          <div className='bg-circle-1 bg-circle'></div>
          <div className='bg-circle-2 bg-circle'></div>
          <div className='bg-circle-3 bg-circle'></div>
          <div className='bg-circle-4 bg-circle'></div>
        </header>
        <div className='container'>
          <MovieList />
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  text: state.movies.text
});

export default connect(
  mapStateToProps,
  { searchMovie, fetchMovies }
)(SearchForm);
