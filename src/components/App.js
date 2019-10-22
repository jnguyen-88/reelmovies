import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import Landing from './Landing';
import MovieList from './MovieList';
import Movie from './Movie';
import SearchForm from './SearchForm';
import history from '../history';

class App extends React.Component {
  render() {
    return (
      <div>
        <Router history={history}>
          <Switch>
            <Route exact path='/' component={Landing} />
            {/* <Route exact path='/movies' component={MovieList} /> */}
            <Route exact path='/movies/:id' component={Movie} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
