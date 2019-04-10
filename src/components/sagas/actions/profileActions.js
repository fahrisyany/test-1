import { PROFILE } from "../constants/profileConstant";

const loadProfile = id => ({
  type: PROFILE.LOAD,
  payload: id
});

const setProfile = profile => ({
  type: PROFILE.LOAD_SUCCESS,
  payload: profile
});

const setError = error => ({
  type: PROFILE.LOAD_FAIL,
  payload: error
});

export { loadProfile, setProfile, setError };
