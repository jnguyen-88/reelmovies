import React from 'react';
import { connect } from 'react-redux';
import { searchMovie, fetchMovies, setRedirect } from '../actions';
import { Redirect } from 'react-router-dom';

export class SearchForm extends React.Component {
  //Helper Functions
  onChange = e => {
    this.props.searchMovie(e.target.value);
  };

  onSubmit = e => {
    e.preventDefault();
    this.props.fetchMovies(this.props.text);
    this.props.setRedirect();
  };

  renderRedirect = () => {
    if (this.props.redirect) {
      return <Redirect to='/movies' />;
    }
  };

  render() {
    return (
      <div>
        {this.renderRedirect()}
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
      </div>
    );
  }
}

const mapStateToProps = state => ({
  redirect: state.movies.redirect,
  text: state.movies.text
});

export default connect(
  mapStateToProps,
  { searchMovie, fetchMovies, setRedirect }
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
