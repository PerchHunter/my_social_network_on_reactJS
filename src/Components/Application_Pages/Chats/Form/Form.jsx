import React from "react";

import { Button } from "@material-ui/core";
import TextField from "@mui/material/TextField";
import SendIcon from "@mui/icons-material/Send";

import "./Form.css";

export function Form({ addMessage, changeMessage, message, inputRef }) {
  return (
    <form id="submit-message" action="#" onSubmit={addMessage}>
      <TextField
        fullWidth
        autoFocus
        label="Введите сообщение..."
        id="fullWidth"
        color="info"
        onChange={changeMessage}
        value={message}
        inputRef={inputRef}
      />
      <Button
        className="button-chat"
        variant="contained"
        size={"small"}
        endIcon={<SendIcon />}
        type="submit"
        form="submit-message"
        disabled={!message}
        style={{ backgroundColor: "whitesmoke", marginLeft: "15px" }}
        onClick={addMessage}
      >
        Отправить
      </Button>
    </form>
  );
}
