import { all } from "redux-saga/effects";
import profileSagas from "./profileSagas";

export default function* rootSaga() {
  yield all([profileSagas()]);
}
