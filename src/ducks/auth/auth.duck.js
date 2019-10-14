import { put, takeLatest, fork } from "redux-saga/effects";
import { clearAuthData } from "../../services/auth.service";

const LOGIN_REQUEST = "@@Auth/LOGIN_REQUEST";
const LOGOUT_REQUEST = "@@Auth/LOGOUT_REQUEST";
const LOGIN_SUCCESS = "@@Auth/LOGIN_SUCCESS";
const LOGOUT_SUCCESS = "@@Auth/LOGOUT_SUCCESS";
const INIT_USERDATA = "@@Auth/INIT_USERDATA";

// action creator
export const loginAction = (loginValues, handleEvents) => {
  return { type: LOGIN_REQUEST, payload: { loginValues, handleEvents } };
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
    case LOGIN_SUCCESS: {
      return {
        ...state,
        ...action.payload
      };
    }
    case LOGOUT_SUCCESS: {
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
  const adminUsername = process.env.REACT_APP_ADMIN_USERNAME;
  const adminPassword = process.env.REACT_APP_ADMIN_PASSWORD;
  const { loginValues, handleEvents } = action.payload;
  const { username, password } = loginValues;
  const { handleFail, handleSuccess } = handleEvents;
  try {
    if (username === adminUsername && password === adminPassword) {
      const authValues = {
        apiToken: "Fake Token KEKW",
        name: "le van thang",
        username: username,
        roles: ["admin", "user", "VIP"]
      };
      localStorage.setItem("auth", JSON.stringify(authValues));
      handleSuccess();
      yield put({
        type: LOGIN_SUCCESS,
        payload: authValues
      });
    } else {
      handleFail();
    }
  } catch (error) {
    console.log(error);
  }
}

function* watchLogout(action) {
  clearAuthData();
  yield put({
    type: LOGOUT_SUCCESS
  });
}

function* initUserData() {
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
  takeLatest(LOGOUT_REQUEST, watchLogout),
  fork(initUserData)
];
