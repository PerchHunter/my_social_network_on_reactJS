import { ERROR_AUTH_ACTION, SIGN_IN_ACTION } from "./constants";

const initialState = {
  authorizedUser: {},
  loginOrRegistartionError: false,
  errorMessage: null,
};

export const authUserReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGN_IN_ACTION: {
      return {
        ...state,
        authorizedUser: {
          email: action.payload.email,
          password: action.paylaod.password,
        },
      };
    }
    case ERROR_AUTH_ACTION: {
      if (action.payload === undefined) {
        return {
          ...state,
          loginOrRegistartionError: false,
        };
      }
      return {
        ...state,
        loginOrRegistartionError: !state.loginOrRegistartionError,
        errorMessage: action.payload.errorMessage,
      };
    }
    default:
      return state;
  }
};
