import {
  FETCH_SPORTS_TRENDS,
  FETCH_NEWS_TRENDS,
  FETCH_MOVIE_TRENDS
} from "../actions/action_types";

export const fetchSportsTrends = (state = [], action) => {
  switch (action.type) {
    case FETCH_SPORTS_TRENDS:
      return action.payload && action.payload.data
        ? [...action.payload.data]
        : [];
    default:
      break;
  }
  return state;
};

export const fetchNewsTrends = (state = [], action) => {
  switch (action.type) {
    case FETCH_NEWS_TRENDS:
      return action.payload && action.payload.data
        ? [...action.payload.data]
        : [];
    default:
      break;
  }
  return state;
};

export const fetchMovieTrends = (state = [], action) => {
  switch (action.type) {
    case FETCH_MOVIE_TRENDS:
      return action.payload && action.payload.data
        ? [...action.payload.data]
        : [];
    default:
      break;
  }
  return state;
};
