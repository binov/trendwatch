import { combineReducers } from "redux";
import {
  fetchSportsTrends,
  fetchNewsTrends,
  fetchMovieTrends
} from "./reducer_trends";
//import ErrorReducer from "./reducer_error";

const rootReducer = combineReducers({
  sportsTrends: fetchSportsTrends,
  movieTrends: fetchMovieTrends,
  newsTrends: fetchNewsTrends
  //error: ErrorReducer
});

export default rootReducer;
