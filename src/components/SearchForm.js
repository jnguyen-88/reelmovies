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
                <div className="jumbotron jumbotron-fluid mt-5 text-center">
                    <div className="container">
                        <h1 className="display-4 mb-3">
                            Reel Movies
                        </h1>
                        <p>powered by omdb</p>
                        <form id="searchForm" onSubmit={this.onSubmit}>
                        <input
                            type="text"
                            className="form-control"
                            name="searchText"
                            placeholder="Search by Title..."
                            autoComplete="off"
                            onChange={this.onChange}
                        />
                        <button type="submit" className="btn btn-primary btn-bg mt-3">
                            Search
                        </button>
                        </form>
                    </div>
                </div>
                <MovieList />
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
