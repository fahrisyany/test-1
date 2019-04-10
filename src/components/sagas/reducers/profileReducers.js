import { PROFILE } from "../constants/profileConstant";

const initialState = {
  data: [],
  loading: false,
  error: null
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case PROFILE.LOAD:
      return {
        ...state,
        loading: true
      };
    case PROFILE.LOAD_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    case PROFILE.LOAD_SUCCESS:
      console.log(action.payload);
      return {
        ...state,
        data: action.payload,
        loading: false
      };
    default:
      return state;
  }
};

export default profileReducer;

