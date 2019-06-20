import axios from "axios";
import {
  FETCH_SPORTS_TRENDS,
  FETCH_EVENT_TRENDS,
  FETCH_MOVIE_TRENDS
} from "./action_types";

export const fetchSportsTrends = () => async dispatch => {
  const url = "/api/trends/sports";
  let response;
  let error = null;
  try {
    response = await axios.get(url);
  } catch (err) {
    error = err;
  }
  console.log("Response:", JSON.stringify(response, null, 4));
  if (response && response.status === 204) {
    error = { response: { data: "", status: 204, statusText: "No Content" } };
  }
  dispatch({ type: FETCH_SPORTS_TRENDS, payload: response, error });
};

export const fetchEventTrends = () => async dispatch => {
  const url = "/api/trends/events";
  let response;
  let error = null;
  try {
    response = await axios.get(url);
  } catch (err) {
    error = err;
  }
  console.log("Response:", JSON.stringify(response, null, 4));
  if (response && response.status === 204) {
    error = { response: { data: "", status: 204, statusText: "No Content" } };
  }
  dispatch({ type: FETCH_EVENT_TRENDS, payload: response, error });
};

export const fetchMovieTrends = () => async dispatch => {
  const url = "/api/trends/movies";
  let response;
  let error = null;
  try {
    response = await axios.get(url);
  } catch (err) {
    error = err;
  }
  console.log("Response:", JSON.stringify(response, null, 4));
  if (response && response.status === 204) {
    error = { response: { data: "", status: 204, statusText: "No Content" } };
  }
  dispatch({ type: FETCH_MOVIE_TRENDS, payload: response, error });
};
