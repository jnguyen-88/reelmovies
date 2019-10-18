import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import SearchForm from './SearchForm';

import Movie from './Movie';

class App extends React.Component {
    
    render(){
        return(
            <div className="container">
                <Router>
                    <Route exact path="/" component={SearchForm} />
                    <Route exact path="/movie/:id" component={Movie} />
                </Router>
            </div>
        )
    }
};

export default App;