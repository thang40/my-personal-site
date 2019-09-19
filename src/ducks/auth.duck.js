import { put, takeLatest } from "redux-saga/effects";
import { clearAuthData } from "../services/auth.service";

const LOGIN_REQUEST = "@@Auth/LOGIN_REQUEST";
const LOGOUT_REQUEST = "@@Auth/LOGOUT_REQUEST";
const LOGIN_FINISH = "@@Auth/LOGIN_FINISH";
const LOGOUT_FINISH = "@@Auth/LOGOUT_FINISH";
const INIT_USERDATA = "@@Auth/INIT_USERDATA";

// action creator
export const loginAction = loginValues => {
  return { type: LOGIN_REQUEST, payload: loginValues };
};
export const logoutAction = () => {
  return { type: LOGOUT_REQUEST };
};
// reducer
const initialState = {
  username: null,
  name: null,
  roles: []
};

export const AuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_FINISH: {
      return {
        ...state,
        ...action.payload
      };
    }
    case LOGOUT_FINISH: {
      return {
        ...state,
        username: null,
        name: null,
        roles: []
      };
    }
    case INIT_USERDATA: {
      const { username, name, roles } = action.payload;
      return {
        ...state,
        username,
        name,
        roles
      };
    }
    default: {
      return state;
    }
  }
};

// selector
export const selectUsername = state => state.AuthReducer.username;
export const selectUserRoles = state => state.AuthReducer.roles;
// side effect
function* watchLogin(action) {
  const { username, password } = action.payload;
  let userData;
  if (username === "admin" && password === "admin") {
    userData = {
      username: "admin",
      name: "le van thang",
      roles: ["admin", "user", "VIP"]
    };
    const authValues = {
      apiToken:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6InRoYW5nIGxlIiwiaWF0IjoxNTE2MjM5MDIyfQ.RwCuXkEg2S1027iFOO3k59f8LFPXNdPrKjvAlLSzIo4",
      ...userData
    };
    localStorage.setItem("auth", JSON.stringify(authValues));
  }

  if (username === "thang40" && password === "thang40") {
    userData = {
      username: "thang40",
      name: "le van thang",
      roles: ["user", "VIP"]
    };
    const authValues = {
      apiToken:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6InRoYW5nIGxlIiwiaWF0IjoxNTE2MjM5MDIyfQ.RwCuXkEg2S1027iFOO3k59f8LFPXNdPrKjvAlLSzIo4",
      ...userData
    };
    localStorage.setItem("auth", JSON.stringify(authValues));
  }

  yield put({
    type: LOGIN_FINISH,
    payload: userData
  });
}

function* watchLogout(action) {
  clearAuthData();
  yield put({
    type: LOGOUT_FINISH
  });
}

export function* initUserData() {
  const userData = JSON.parse(localStorage.getItem("auth"));
  if (userData) {
    yield put({
      type: INIT_USERDATA,
      payload: userData
    });
  }
}

export const AuthSaga = [
  takeLatest(LOGIN_REQUEST, watchLogin),
  takeLatest(LOGOUT_REQUEST, watchLogout)
];
