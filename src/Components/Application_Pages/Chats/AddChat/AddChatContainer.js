import * as React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";

import { AddChat } from "./AddChat";

import { addChatFirebaseWithThunk } from "../../../Store/Chats/action";

export function AddChatContainer() {
  const [visible, setVisible] = useState(false);
  const [chatName, setChatName] = useState("");
  const dispatch = useDispatch();
  const handleToggleOpenClose = () => setVisible(!visible);
  const handleChange = (e) => setChatName(e.target.value);

  const addChat = () => {
    dispatch(addChatFirebaseWithThunk({ chatName }));
    setChatName("");
    handleToggleOpenClose();
  };

  return (
    <AddChat
      handleToggleOpenClose={handleToggleOpenClose}
      chatName={chatName}
      visible={visible}
      handleChange={handleChange}
      addChat={addChat}
    />
  );
}
