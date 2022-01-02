import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteChatFirebaseWithThunk,
  initFirebaseChatListWithThunk,
} from "../../../Store/Chats/action";

import { chatListSelector } from "../../../Store/Chats/selectors";
import { deleteChatMessagesFirebaseWithThunk } from "../../../Store/Messages/action";
import { ChatList } from "./ChatList";

export function ChatListContainer({ chatId }) {
  const chats = useSelector(chatListSelector);
  const [open, setOpen] = useState(true);
  const dispatch = useDispatch();

  const handleClick = () => {
    setOpen(!open);
  };

  const deleteChatAndItsMessages = (chatId) => {
    dispatch(deleteChatFirebaseWithThunk({ chatId }));
    dispatch(deleteChatMessagesFirebaseWithThunk({ chatId }));
  };

  useEffect(() => {
    dispatch(initFirebaseChatListWithThunk());
  }, [dispatch]);

  return (
    <ChatList
      chats={chats}
      handleClick={handleClick}
      deleteChatAndItsMessages={deleteChatAndItsMessages}
      open={open}
      chatId={chatId}
    />
  );
}
