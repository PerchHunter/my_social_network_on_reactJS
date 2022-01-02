import { GET_MESSAGES_ACTION } from "./constants";

const initialState = {
  messageList: {},
};

export const messagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MESSAGES_ACTION: {
      return {
        ...state,
        messageList: {
          ...state.messageList,
          ...action.payload,
        },
      };
    }
    default:
      return state;
  }
};
