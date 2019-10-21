import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import Landing from './Landing';
import MovieList from './MovieList';
import Movie from './Movie';

class App extends React.Component {
  render() {
    return (
      <div>
        <Router>
          <Route exact path='/' component={Landing} />
          {/* <Route exact path='/movies' component={MovieList} /> */}
          <Route exact path='/movies/:id' component={Movie} />
        </Router>
      </div>
    );
  }
}

export default App;
