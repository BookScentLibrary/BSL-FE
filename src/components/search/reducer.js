const initialState = {
    searchResults: [], 
    currentPage: 1,  
    totalPages: 0,   
  };
  
  export const searchReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_SEARCH_RESULTS':
        return {
          ...state,
          searchResults: action.payload,
        };
      case 'INCREMENT_PAGE':
        return {
          ...state,
          currentPage: state.currentPage + 1,
        };
      default:
        return state;
    }
  };