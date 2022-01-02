import {
  GET_CAT_REQUEST_ACTION,
  GET_CAT_SUCCESS_ACTION,
  GET_CAT_FAILURE_ACTION,
  GET_PREVIOUS_CAT_ACTION,
} from "./constants";

const initialState = {
  cat: "",
  browsingHistory: [],
  loading: true,
  error: false,
};

export const catsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CAT_REQUEST_ACTION: {
      return {
        ...state,
        loading: true,
        error: false,
      };
    }
    case GET_CAT_SUCCESS_ACTION: {
      return {
        ...state,
        loading: false,
        cat: action.payload.urlCat,
        browsingHistory: [...state.browsingHistory, action.payload.urlCat],
      };
    }
    case GET_CAT_FAILURE_ACTION: {
      return {
        ...state,
        loading: false,
        error: true,
      };
    }
    case GET_PREVIOUS_CAT_ACTION: {
      const previousCat = state.browsingHistory.lastIndexOf(state.cat);

      if (previousCat === 1) return state;

      return {
        ...state,
        cat: state.browsingHistory[previousCat - 1],
      };
    }
    default:
      return state;
  }
};
