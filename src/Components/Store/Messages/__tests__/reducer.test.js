import { messagesReducer } from "../reducer";
import { changeMessagesAction } from "../action";

describe("testing the messages section", () => {
  test("A list of messages for a specific chat should appear in the MessageList", () => {
    const chatId = "id2";
    const newMessage = {
      date: new Date().toLocaleTimeString(),
      author: "Сергей",
      message: "Новое сообщение в чате",
    };
    const payload = { [chatId]: [newMessage] };

    const expected = {
      messageList: { [chatId]: [newMessage] },
    };
    const received = messagesReducer(undefined, changeMessagesAction(payload));

    expect(received).toEqual(expected);
  });
});
