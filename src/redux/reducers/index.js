import { combineReducers } from "redux";
import userReducer from "./userReducer";

export const Reducer = combineReducers({
  userStatus: userReducer,
});
export default Reducer;
