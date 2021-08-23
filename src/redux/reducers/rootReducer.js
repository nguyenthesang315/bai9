import { combineReducers } from "redux";
// import popupReducer from "../reducers/popupReducer";
import userReducer from "../reducers/userReducer";

const rootReducer = combineReducers({
  // popup: popupReducer,
  user: userReducer,
});

export default rootReducer;
