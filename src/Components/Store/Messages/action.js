import firebase from "firebase/app";
import faker from "faker";
import { GET_MESSAGES_ACTION } from "./constants.js";

export const changeMessagesAction = (payload) => ({
  type: GET_MESSAGES_ACTION,
  payload,
});

export const deleteChatMessagesFirebaseWithThunk =
  ({ chatId }) =>
  () => {
    firebase.database().ref("messages").child(chatId).remove();
  };

export const addMessageFirebaseWithThunk =
  ({ chatId, message, userName }) =>
  async () => {
    const newMessage = {
      date: new Date().toLocaleTimeString(),
      author: userName,
      message: message,
    };
    const newBotMessage = {
      date: new Date().toLocaleTimeString(),
      author: "БОТ",
      message: faker.lorem.sentence(),
    };

    await firebase.database().ref("messages").child(chatId).push(newMessage);

    setTimeout(() => {
      firebase.database().ref("messages").child(chatId).push(newBotMessage);
    }, 1300);
  };

const getPayloadFromSnapshot = (snapshot) => {
  let messages = [];

  snapshot.forEach((mes) => {
    let newMessage = {
      author: mes.val().author,
      date: mes.val().date,
      text: mes.val().message,
    };
    messages.push(newMessage);
  });

  return { [snapshot.key]: messages };
};

export const initFirebaseMessagesListWithThunk =
  () => async (dispatch, getState) => {
    firebase
      .database()
      .ref("messages")
      .on("child_changed", (snapshot) => {
        const payload = getPayloadFromSnapshot(snapshot);
        dispatch(changeMessagesAction(payload));
      });

    firebase
      .database()
      .ref("messages")
      .on("child_added", (snapshot) => {
        const payload = getPayloadFromSnapshot(snapshot);
        dispatch(changeMessagesAction(payload));
      });
  };
