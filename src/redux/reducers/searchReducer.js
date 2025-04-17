import {
  FETCH_JOBS_REQUEST,
  FETCH_JOBS_SUCCESS,
  FETCH_JOBS_FAILURE,
} from "../actionTypes";

const initialState = {
  jobs: [],
  isLoading: false,
  error: null,
};

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_JOBS_REQUEST:
      return { ...state, isLoading: true, error: null };
    case FETCH_JOBS_SUCCESS:
      return { ...state, jobs: action.payload, isLoading: false };
    case FETCH_JOBS_FAILURE:
      return { ...state, isLoading: false, error: action.payload };
    default:
      return state;
  }
};

export default searchReducer;
