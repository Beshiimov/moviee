import { combineReducers, legacy_createStore as createStore } from "redux";
import homePageReducer from "./homePage-reducer";
import cinemaReducer from "./cinema-reducer";
import searchReducer from "./search-reducer";
// import libraryReducer from "./library-reducer";

const reducers = combineReducers({
  homePageReducer,
  cinemaReducer,
  searchReducer,
});
const store = createStore(reducers);

export default store;
