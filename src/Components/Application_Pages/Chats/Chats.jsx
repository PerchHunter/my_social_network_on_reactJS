import React, { Fragment } from "react";
import { useParams, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

import Grid from "@mui/material/Grid";
import { Alert } from "@mui/material";

import { MessageField } from "./MessageField";
import { FormContainer } from "./Form";
import { ChatListContainer } from "./ChatList";
import { AddChatContainer } from "./AddChat";
import { ROUTES } from "../../../constants.js";
import { chatListSelector } from "../../Store/Chats/selectors";

export function Chats() {
  const chats = useSelector(chatListSelector);
  const { chatId } = useParams();

  //если чата с таким параметром не находит,то возвращает currentChat == undefined
  const currentChat = chats.find((chat) => chat.id === chatId);

  if (chatId && !currentChat) {
    return <Redirect to={ROUTES.NO_CHAT} />;
  }

  return (
    <div>
      <Grid
        container
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        style={{ height: "100%" }}
      >
        <Grid item xs={3}>
          <ChatListContainer chatId={chatId} />
          <AddChatContainer />
        </Grid>
        <Grid item xs={9}>
          {chatId ? (
            <Fragment>
              <MessageField chatId={chatId} />
              <FormContainer chatId={chatId} />
            </Fragment>
          ) : (
            <Alert severity="info" color="info" style={{ textAlign: "center" }}>
              Выберите нужный чат из списка или добавьте новый
            </Alert>
          )}
        </Grid>
      </Grid>
    </div>
  );
}
