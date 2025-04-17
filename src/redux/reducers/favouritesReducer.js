import { ADD_TO_FAVOURITES, REMOVE_FROM_FAVOURITES } from "../actionTypes";

const initialState = [];

const favouritesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_FAVOURITES:
      return [...state, action.payload];
    case REMOVE_FROM_FAVOURITES:
      return state.filter((company) => company !== action.payload);
    default:
      return state;
  }
};

export default favouritesReducer;
