import { combineReducers } from "redux";
import favouritesReducer from "./favouritesReducer";
import searchReducer from "./searchReducer";

const rootReducer = combineReducers({
  favourites: favouritesReducer,
  search: searchReducer,
});

export default rootReducer;
