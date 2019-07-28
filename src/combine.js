import { combineReducers } from "redux";
import { HomeReducer, BlogReducer } from "./ducks";
import { all } from "redux-saga/effects";

export const RootReducer = combineReducers({
  HomeReducer,
  BlogReducer
});

// export function* rootSaga() {
//   yield all([
//     ...HomeSaga,
//     ...UserSaga,
//     ...UserEducationSaga,
//     ...UserExperienceSaga,
//     ...UserCertificationSaga,
//     ...LoginSaga,
//     ...RegisterSaga,
//     ...AuthSaga,
//     ...LocationSaga,
//     ...ContactSaga,
//     ...InterestSaga,
//     ...UserPdfSaga
//   ]);
// }
