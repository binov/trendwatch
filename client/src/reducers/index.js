import { combineReducers } from "redux";
import {
  fetchSportsTrends,
  fetchEventTrends,
  fetchMovieTrends
} from "./reducer_trends";
//import ErrorReducer from "./reducer_error";

const rootReducer = combineReducers({
  sportsTrends: fetchSportsTrends,
  movieTrends: fetchMovieTrends,
  eventTrends: fetchEventTrends
  //error: ErrorReducer
});

export default rootReducer;
