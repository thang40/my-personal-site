import { getBlogList, getBlogDetail } from "../../services/hashnode.service";
import {
  put,
  takeLatest,
  take,
  cancel,
  cancelled,
  fork
} from "redux-saga/effects";

const FETCH_BLOG_LIST_REQUEST = "@@Blog/FETCH_BLOG_LIST_REQUEST";
const FETCH_BLOG_LIST_SUCCESS = "@@Blog/FETCH_BLOG_LIST_SUCCESS";
const FETCH_BLOG_LIST_CANCELLED = "@@Blog/FETCH_BLOG_LIST_CANCELLED";

const FETCH_BLOG_DETAILS_REQUEST = "@@Blog/FETCH_BLOG_DETAILS_REQUEST";
const FETCH_BLOG_DETAILS_SUCCESS = "@@Blog/FETCH_BLOG_DETAILS_SUCCESS";

// action creator
export const fetchBlogListAction = (
  handleNoDataFromComp,
  handleErrorFromComp
) => {
  return {
    type: FETCH_BLOG_LIST_REQUEST,
    payload: { handleNoDataFromComp, handleErrorFromComp }
  };
};

export const cancelFetchBlogListAction = () => {
  return { type: FETCH_BLOG_LIST_CANCELLED };
};

export const fetchBlogDetailAction = (
  blogId,
  handleSuccessFromComp,
  handleErrorFromComp
) => {
  return {
    type: FETCH_BLOG_DETAILS_REQUEST,
    payload: { blogId, handleSuccessFromComp, handleErrorFromComp }
  };
};
// reducer
const initialState = {
  blogs: [],
  blogDetail: undefined
};

export const BlogReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_BLOG_LIST_SUCCESS: {
      return {
        ...state,
        blogs: [...action.payload]
      };
    }
    case FETCH_BLOG_DETAILS_SUCCESS: {
      return {
        ...state,
        blogDetail: action.payload
      };
    }
    default: {
      return state;
    }
  }
};

// selector
export const selectBlogList = state => state.BlogReducer.blogs;
export const selectBlogDetail = state => state.BlogReducer.blogDetail;

// side effect
function* watchFetchBlogList(action) {
  while (yield take(FETCH_BLOG_LIST_REQUEST)) {
    const { handleNoDataFromComp, handleErrorFromComp } = yield take(
      FETCH_BLOG_LIST_REQUEST
    ).payload;
    const fetchTask = yield fork(function* fetchBlogList() {
      try {
        const blogs = yield getBlogList();
        if (blogs.length === 0) {
          handleNoDataFromComp();
        }

        yield put({
          type: FETCH_BLOG_LIST_SUCCESS,
          payload: blogs
        });
      } catch (error) {
        console.log("error");
        handleErrorFromComp();
      } finally {
        if (yield cancelled()) {
        }
      }
    });

    yield take(FETCH_BLOG_LIST_CANCELLED);
    yield cancel(fetchTask);
  }
}

function* watchFetchBlogDetail(action) {
  const { blogId, handleSuccessFromComp, handleErrorFromComp } = action.payload;
  try {
    const detail = yield getBlogDetail(blogId);

    yield put({
      type: FETCH_BLOG_DETAILS_SUCCESS,
      payload: detail
    });

    handleSuccessFromComp();
  } catch (error) {
    handleErrorFromComp();
  }
}

export const BlogSaga = [
  fork(watchFetchBlogList),
  takeLatest(FETCH_BLOG_DETAILS_REQUEST, watchFetchBlogDetail)
];
