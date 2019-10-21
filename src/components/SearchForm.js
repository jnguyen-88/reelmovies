import React from 'react';
import { connect } from 'react-redux';
import MovieList from './MovieList';
import Download from './Download';
import { searchMovie, fetchMovies } from '../actions';
import { Link } from 'react-router-dom';

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
      <form id='searchForm' onSubmit={this.onSubmit}>
        <input
          type='text'
          className='form-control'
          name='searchText'
          placeholder='Search by Title...'
          autoComplete='off'
          onChange={this.onChange}
        />
        {/* <Link to={`/movies`} type='submit'> */}
        <button className='btn btn-primary btn-xl rounded-pill mt-5'>
          Search
        </button>
        {/* </Link> */}
      </form>
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
