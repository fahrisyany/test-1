import { put, call, takeEvery } from "redux-saga/effects";

import { setProfile } from "../sagas/actions/profileActions";
import { PROFILE } from "../sagas/constants/profileConstant";
import { get } from "../../api-handler";
import { errorHandler } from "../../api-handler/ErrorHandler";

export function* handleProfileLoad(params) {
  try {
    const response = yield call(get);

    yield put(setProfile(response.data));
  } catch (error) {
    const errorMessage = yield errorHandler(error);

    yield put({ type: PROFILE.LOAD_FAIL, payload: errorMessage });
  }
}

export default function* watchProfileLoad() {
  yield takeEvery(PROFILE.LOAD, handleProfileLoad);
}
