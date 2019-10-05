// import { getBlogList, getBlogDetail } from "../../services/hashnode.service";
// import { put, takeLatest, take, cancel, fork } from "redux-saga/effects";
// import { API_ERROR } from "../../consts/common.const";

// const FETCH_BLOG_LIST_REQUEST = "@@Blog/FETCH_BLOG_LIST_REQUEST";
// const FETCH_BLOG_LIST_SUCCESS = "@@Blog/FETCH_BLOG_LIST_SUCCESS";
// const FETCH_BLOG_LIST_CANCELLED = "@@Blog/FETCH_BLOG_LIST_CANCELLED";

// const FETCH_BLOG_DETAILS_REQUEST = "@@Blog/FETCH_BLOG_DETAILS_REQUEST";
// const FETCH_BLOG_DETAILS_SUCCESS = "@@Blog/FETCH_BLOG_DETAILS_SUCCESS";

// // action creator
// export const fetchBlogListAction = handleErrorFromComp => {
//   return {
//     type: FETCH_BLOG_LIST_REQUEST,
//     payload: { handleErrorFromComp }
//   };
// };

// export const cancelFetchBlogListAction = () => {
//   return { type: FETCH_BLOG_LIST_CANCELLED };
// };

// export const fetchBlogDetailAction = (
//   blogId,
//   handleSuccessFromComp,
//   handleErrorFromComp
// ) => {
//   return {
//     type: FETCH_BLOG_DETAILS_REQUEST,
//     payload: { blogId, handleSuccessFromComp, handleErrorFromComp }
//   };
// };
// // reducer
// const initialState = {
//   blogs: [],
//   blogDetail: undefined
// };

// export const BlogReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case FETCH_BLOG_LIST_SUCCESS: {
//       return {
//         ...state,
//         blogs: [...action.payload]
//       };
//     }
//     case FETCH_BLOG_DETAILS_SUCCESS: {
//       return {
//         ...state,
//         blogDetail: action.payload
//       };
//     }
//     default: {
//       return state;
//     }
//   }
// };

// // selector
// export const selectBlogList = state => state.BlogReducer.blogs;
// export const selectBlogDetail = state => state.BlogReducer.blogDetail;

// // side effect
// function* watchFetchBlogList() {
//   while (true) {
//     const action = yield take(FETCH_BLOG_LIST_REQUEST);
//     const { handleErrorFromComp } = action.payload;
//     const fetchTask = yield fork(function*() {
//       try {
//         const blogs = yield getBlogList();
//         yield put({
//           type: FETCH_BLOG_LIST_SUCCESS,
//           payload: blogs
//         });
//       } catch (error) {
//         if (error === API_ERROR) {
//           //handle API error
//           handleErrorFromComp();
//         }
//         throw error;
//       }
//     });

//     yield take(FETCH_BLOG_LIST_CANCELLED);
//     yield cancel(fetchTask);
//   }
// }

// function* watchFetchBlogDetail(action) {
//   const { blogId, handleSuccessFromComp, handleErrorFromComp } = action.payload;
//   try {
//     const detail = yield getBlogDetail(blogId);

//     yield put({
//       type: FETCH_BLOG_DETAILS_SUCCESS,
//       payload: detail
//     });

//     handleSuccessFromComp();
//   } catch (error) {
//     handleErrorFromComp();
//   }
// }

// export const BlogSaga = [
//   fork(watchFetchBlogList),
//   takeLatest(FETCH_BLOG_DETAILS_REQUEST, watchFetchBlogDetail)
// ];
