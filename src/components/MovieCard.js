import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class MovieCard extends React.Component {
    render(){
        // movie is name of prop given by
        // parent. Title and Poster are from DB
        const { movie } = this.props
        const { Title, Poster } = this.props.movie 

        return(
            <div className="col-sm-6 col-md-3">
                <div className="card" style={{width: "100%"}}>
                    <img 
                        alt={Title} 
                        src={Poster}
                        className="card-img-top"
                    />
                    <div className="card-body">
                        <h5 className="card-title">{Title}</h5>
                    </div>
                    <Link className="btn btn-primary" to={'/movie/' + movie.imdbID}>
                        Movie Details
                        <i className="fas fa-chevron-right" />
                    </Link>
                </div>
            </div>
        )
    }   
}

export default MovieCard;
