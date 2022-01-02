import firebase from "firebase/app";
import { GET_CHATS_ACTION } from "./constants.js";

export const addChatFirebaseWithThunk =
  ({ chatName }) =>
  async () => {
    const db = firebase.database();
    db.ref("chats").push({
      name: chatName,
    });
  };

export const deleteChatFirebaseWithThunk =
  ({ chatId }) =>
  async () => {
    firebase.database().ref("chats").child(chatId).remove();
  };

export const initFirebaseChatListWithThunk =
  () => async (dispatch, getState) => {
    await firebase
      .database()
      .ref("chats")
      .on("value", (snapshot) => {
        let newChatList = [];
        let i = 0;
        snapshot.forEach((snap) => {
          const chat = {
            id: snap.key,
            name: snap.val().name,
            avatar: `/img/${++i}.jpg`,
          };

          newChatList.push(chat);
        });

        dispatch({
          type: GET_CHATS_ACTION,
          payload: { newChatList },
        });
      });
  };
