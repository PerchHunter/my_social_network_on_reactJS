import { GET_USER_INFO_ACTION } from "./constants";

const initialState = {
  currentUser: {},
};

export const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USER_INFO_ACTION: {
      return {
        ...state,
        currentUser: {
          ...action.payload,
        },
      };
    }
    default:
      return state;
  }
};
