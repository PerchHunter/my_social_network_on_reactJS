import { GET_CHATS_ACTION } from "./constants";

const initialState = {
  chatList: [],
};

export const chatsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CHATS_ACTION: {
      return {
        ...state,
        chatList: action.payload.newChatList,
      };
    }
    default:
      return state;
  }
};
