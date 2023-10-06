export const setSearchResults = (results) => ({
    type: 'SET_SEARCH_RESULTS',
    payload: results,
  });
  
  export const incrementPage = () => ({
    type: 'INCREMENT_PAGE',
  });

  // 이 부분들 슬라이스로 옮겨야 함,,,, 