import { put, takeLatest } from "redux-saga/effects";

const LOGIN_REQUEST = "@@Login/LOGIN_AUTHENTICATION_REQUEST";
const LOGIN_FINISH = "@@Login/LOGIN_AUTHENTICATION_FINISH";

// action creator
export const authAction = loginValues => {
  return { type: LOGIN_REQUEST, payload: loginValues };
};
// reducer
const initialState = {
  searchData: []
};

export const LoginReducer = (state = initialState, action) => {
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
function* watchLogin(action) {
  const { username, password } = action.payload;
  if (username === "thang40" && password === "thang40") {
    const authValues = {
      apiToken:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6InRoYW5nIGxlIiwiaWF0IjoxNTE2MjM5MDIyfQ.RwCuXkEg2S1027iFOO3k59f8LFPXNdPrKjvAlLSzIo4",
      userData: {
        name: "le van thang",
        roles: ["admin", "user"]
      }
    };
    localStorage.setItem("auth", JSON.stringify(authValues));
  }

  yield put({
    type: LOGIN_FINISH
  });
}

export const LoginSaga = [takeLatest(LOGIN_REQUEST, watchLogin)];
