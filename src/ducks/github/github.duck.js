import { getCommits } from "../../services/github.service";
import { put, fork, takeLatest } from "redux-saga/effects";

const GITHUB_FETCH_NEW_COMMITS_REQUEST =
  "@@GITHUB/GITHUB_FETCH_NEW_COMMITS_REQUEST";
const GITHUB_FETCH_NEW_COMMITS_SUCCESS =
  "@@GITHUB/GITHUB_FETCH_NEW_COMMITS_SUCCESS";

// action creator
export const fetchNewCommitsAction = () => {
  return { type: GITHUB_FETCH_NEW_COMMITS_REQUEST };
};

// reducer
const initialState = {
  commits: []
};

export const GitHubReducer = (state = initialState, action) => {
  switch (action.type) {
    case GITHUB_FETCH_NEW_COMMITS_SUCCESS: {
      return {
        ...state,
        commits: action.payload
      };
    }
    default: {
      return state;
    }
  }
};

//selector
export const selectCommits = state => state.GitHubReducer.commits;

//side effects
function* watchFetchCommits() {
  try {
    const commits = yield getCommits();

    yield put({
      type: GITHUB_FETCH_NEW_COMMITS_SUCCESS,
      payload: commits
    });
  } catch (error) {
    console.log(error);
  }
}

export const GitHubSaga = [
  fork(watchFetchCommits),
  takeLatest(GITHUB_FETCH_NEW_COMMITS_REQUEST, watchFetchCommits)
];
