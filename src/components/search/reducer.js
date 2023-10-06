const initialState = {
    searchResults: [], // 검색 결과 데이터 배열
    currentPage: 1,   // 현재 페이지 번호
    totalPages: 0,    // 전체 페이지 수
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