import firebase from "firebase/app";

import { SIGN_IN_ACTION, ERROR_AUTH_ACTION } from "./constants.js";

export const signInAction = ({ email, password }) => ({
  type: SIGN_IN_ACTION,
  payload: { email, password },
});

export const errorAuthAction = (payload) => ({
  type: ERROR_AUTH_ACTION,
  payload,
});

export const handleSignUpWithThunk =
  (email, password) => async (dispatch, getState) => {
    try {
      dispatch(errorAuthAction());
      await firebase.auth().createUserWithEmailAndPassword(email, password);
    } catch (e) {
      const errorMessage = e.message;
      dispatch(errorAuthAction({ errorMessage }));
    }
  };

export const handleSignInWithThunk =
  (email, password) => async (dispatch, getState) => {
    try {
      dispatch(errorAuthAction());
      await firebase.auth().signInWithEmailAndPassword(email, password);
      dispatch(signInAction({ email, password }));
    } catch (e) {
      const errorMessage = e.message;
      dispatch(errorAuthAction({ errorMessage }));
    }
  };
