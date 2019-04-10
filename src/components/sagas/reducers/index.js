import { combineReducers } from "redux";

import profileReducer from "./profileReducers";

const rootReducer = combineReducers({
  profile: profileReducer
});

export default rootReducer;
