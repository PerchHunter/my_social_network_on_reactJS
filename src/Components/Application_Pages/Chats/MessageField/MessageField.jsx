import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import "./MessageField.css";
import { messageListSelector } from "../../../Store/Messages/selectors";
import { initFirebaseMessagesListWithThunk } from "../../../Store/Messages/action";

export function MessageField({ chatId }) {
  const dispatch = useDispatch();
  const messages = useSelector(messageListSelector);

  useEffect(() => {
    dispatch(initFirebaseMessagesListWithThunk());
  }, [dispatch]);

  return (
    <div className="message-field">
      {messages[chatId]?.map((message) => (
        <div key={message.id} className="message">
          <div className="messageTime">
            <span>{message.author}</span>
            <span>{message.date}</span>
          </div>
          <p>{message.text}</p>
        </div>
      ))}
    </div>
  );
}
