import { getBlogList, getBlogDetail } from "../services/hashnode.service";
import { put, takeLatest } from "redux-saga/effects";

const FETCH_BLOG_LIST_REQUEST = "@@Blog/FETCH_BLOG_LIST_REQUEST";
const FETCH_BLOG_LIST_SUCCESS = "@@Blog/FETCH_BLOG_LIST_COMPLETE";

const FETCH_BLOG_DETAILS_REQUEST = "@@Blog/FETCH_BLOG_DETAILS_REQUEST";
const FETCH_BLOG_DETAILS_SUCCESS = "@@Blog/FETCH_BLOG_DETAILS_COMPLETE";

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
      console.log("complete");
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
  const { handleNoDataFromComp, handleErrorFromComp } = action.payload;
  try {
    const blogs = yield getBlogList();
    if (blogs.length === 0) {
      handleNoDataFromComp();
    }

    console.log(blogs);
    yield put({
      type: FETCH_BLOG_LIST_SUCCESS,
      payload: blogs
    });
  } catch (error) {
    handleErrorFromComp();
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
  takeLatest(FETCH_BLOG_LIST_REQUEST, watchFetchBlogList),
  takeLatest(FETCH_BLOG_DETAILS_REQUEST, watchFetchBlogDetail)
];
