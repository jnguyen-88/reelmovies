import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import reduxThunk from 'redux-thunk';

import App from './components/App';
import reducers from './reducers';

// Redux debugger config
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore( reducers, composeEnhancers(applyMiddleware(reduxThunk)));

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById('root')
);


// const url = 'http://www.omdbapi.com/?apikey=thewdb&t=short'

// const moviedb = async () => {
//     const res = await fetch(url);
//     const data = await res.json()
//     console.log(data)
// }

// moviedb();

// http://www.omdbapi.com/?i=tt3896198&apikey=thewdb


// http://www.omdbapi.com/?apikey=thewdb&