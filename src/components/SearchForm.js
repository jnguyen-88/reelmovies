import React from 'react';
import { connect } from 'react-redux';
import { searchMovie, fetchMovies } from '../actions';
import { Redirect } from 'react-router-dom';

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
        <button className='btn btn-primary btn-xl rounded-pill mt-5'>
          Search
        </button>
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

// Button does not redirect
{
  /* <button
          to={`/movies`}
          renderAs={Link}
          className='btn btn-primary btn-xl rounded-pill mt-5'
        >
          Search
        </button> */
}

// Link's enter does not work
{
  /* <Link to={`/movies`} type='submit'>
Click
</Link> */
}
