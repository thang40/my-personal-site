const HOME_FETCH_SEARCH_REQUEST = "@@Home/FETCH_SEARCH_REQUEST";

// action creator
export const searchRequestAction = searchText => {
  return { type: HOME_FETCH_SEARCH_REQUEST, payload: searchText };
};
// reducer
const initialState = {
  searchData: []
};

export const HomeReducer = (state = initialState, action) => {
  switch (action.type) {
    default: {
      return state;
    }
  }
};
