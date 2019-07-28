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

// selector
export const selectSearchResult = state => state.HomeReducer.searchData;
export const selectJobOpeningsList = state => state.HomeReducer.jobs;
export const selectVideoList = state => state.HomeReducer.videoList;

// side effect
// function* watchFetchSearchRequest(action) {
//   yield call(delay, 700);
//   const searchText = action.payload;
//   let searchResult = [];
//   if (searchText.trim() !== "") {
//     searchResult = yield fetch(
//       `https://5ba1fe9bee710f0014dd76ce.mockapi.io/api/v1/JobOpennings?search=${searchText}`
//     ).then(res => {
//       return res.json();
//     });
//   }

//   yield put({
//     type: HomeActionTypes.FETCH_SEARCH_SUCCESS,
//     payload: searchResult
//   });
// }

// function* watchFetchJobOpeningData() {
//   yield call(delay, 700);
//   const data = yield fetch(
//     "https://5ba1fe9bee710f0014dd76ce.mockapi.io/api/v1/JobOpennings"
//   ).then(result => result.json());

//   yield put({
//     type: HomeActionTypes.FETCH_JOB_OPENINGS_SUCCESS,
//     payload: data
//   });
// }

// function* watchFetchVideoList() {
//   yield call(delay, 300);
//   const data = [
//     {
//       videoItem: {
//         title: "Youtube video",
//         videoSource: "http://techslides.com/demos/sample-videos/small.mp4",
//         showTitle: false,
//         backgroundImage: "/images/blog-1.jpg"
//       },
//       postTitle: "Stuff I like to do on",
//       postDetail: "This is detail of component video list item"
//     },
//     {
//       videoItem: {
//         title: "Youtube video",
//         videoSource: "http://techslides.com/demos/sample-videos/small.mp4",
//         showTitle: false,
//         backgroundImage: "/images/blog-1.jpg"
//       },
//       postTitle: "Stuff I like to do on",
//       postDetail: "This is detail of component video list item"
//     }
//   ];
//   yield put({
//     type: HomeActionTypes.FETCH_VIDEO_LIST_SUCCESS,
//     payload: data
//   });
// }

// export const HomeSaga = [
//   takeLatest(HomeActionTypes.FETCH_SEARCH_REQUEST, watchFetchSearchRequest),
//   takeLatest(HomeActionTypes.FETCH_VIDEO_LIST_REQUEST, watchFetchVideoList),
//   takeLatest(
//     HomeActionTypes.FETCH_JOB_OPENINGS_REQUEST,
//     watchFetchJobOpeningData
//   )
// ];
