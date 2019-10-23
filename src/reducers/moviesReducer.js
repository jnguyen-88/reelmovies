const initialState = {
  text: '',
  moviesArr: [],
  loading: false,
  movie: [],
  redirect: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_MOVIES':
      return { ...state, moviesArr: action.payload, redirect: false };
    case 'SEARCH_MOVIE':
      return { ...state, text: action.payload };
    case 'FETCH_MOVIE':
      return { ...state, movie: action.payload, loading: false };
    case 'LOADING':
      return { ...state, loading: true };
    case 'REDIRECT':
      return { ...state, redirect: true };
    default:
      return state;
  }
};
