import {
  GET_CAT_REQUEST_ACTION,
  GET_CAT_SUCCESS_ACTION,
  GET_CAT_FAILURE_ACTION,
  GET_PREVIOUS_CAT_ACTION,
} from "./constants.js";

export const getCatRequestAction = () => ({
  type: GET_CAT_REQUEST_ACTION,
});

export const getCatSuccessAction = ({ urlCat }) => ({
  type: GET_CAT_SUCCESS_ACTION,
  payload: { urlCat },
});

export const getCatFailureAction = ({ error }) => ({
  type: GET_CAT_FAILURE_ACTION,
  payload: { error },
});

export const getPreviousCatAction = () => ({
  type: GET_PREVIOUS_CAT_ACTION,
});

export const getCatActionWithThunk = () => async (dispatch, getState) => {
  dispatch(getCatRequestAction());

  try {
    const response = await fetch("https://api.thecatapi.com/v1/images/search");
    if (!response.ok) {
      throw new Error(`Что-то пошло не так. ${response.status}`);
    }

    const result = await response.json();
    // console.log(result[0].url);
    const urlCat = result[0].url;
    dispatch(getCatSuccessAction({ urlCat }));
  } catch (error) {
    console.log(error);
    dispatch(getCatFailureAction(error));
  }
};
