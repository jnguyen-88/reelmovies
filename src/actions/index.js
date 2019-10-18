import omdb from '../api/omdb';

export const fetchMovies = (term) => async dispatch => {
  const response = await omdb.get(`/?apikey=thewdb&s=${term}`);
 
  dispatch({ type: 'FETCH_MOVIES', payload: response.data });
};

export const fetchMovie = (id) => async dispatch => {
  const response = await  omdb.get(`/?apikey=thewdb&i=${id}`)

  dispatch({ type: 'FETCH_MOVIE', payload: response.data });
};

export const searchMovie = (term) => dispatch =>{
  dispatch({ type: 'SEARCH_MOVIE', payload: term })
};

export const setLoading = () => {
  return { type: 'LOADING' };
};
