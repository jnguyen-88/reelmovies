const initialState = {
  text: '',
  movies: [],
  loading: false,
  movie: []
};


export default (state = initialState, action) => {
    switch (action.type) {
      case 'FETCH_MOVIES':
        return { ...state, movies: action.payload };
      case 'SEARCH_MOVIE':
            return { ...state, text: action.payload };
      case 'FETCH_MOVIE':
          return { ...state, movie: action.payload, loading: false };
      case 'LOADING':
          return { ...state, loading: true };
      default:
        return state;
    }
};