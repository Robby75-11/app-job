import {
  ADD_TO_FAVOURITES,
  REMOVE_FROM_FAVOURITES,
  FETCH_JOBS_REQUEST,
  FETCH_JOBS_SUCCESS,
  FETCH_JOBS_FAILURE,
} from "../actionTypes";

// Favourites
export const addToFavourites = (company) => ({
  type: ADD_TO_FAVOURITES,
  payload: company,
});

export const removeFromFavourites = (company) => ({
  type: REMOVE_FROM_FAVOURITES,
  payload: company,
});

// Async fetch for jobs
export const fetchJobs = (query) => {
  return async (dispatch) => {
    dispatch({ type: FETCH_JOBS_REQUEST });

    try {
      const response = await fetch(
        `https://strive-benchmark.herokuapp.com/api/jobs?search=${query}&limit=20`
      );
      if (!response.ok) throw new Error("Errore nel recupero dei dati");
      const { data } = await response.json();
      dispatch({ type: FETCH_JOBS_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: FETCH_JOBS_FAILURE, payload: error.message });
    }
  };
};
