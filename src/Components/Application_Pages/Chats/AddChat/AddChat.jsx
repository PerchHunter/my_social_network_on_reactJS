import * as React from "react";
import { Fragment } from "react";

import Dialog from "@mui/material/Dialog";
import { Button } from "@material-ui/core";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import AccountCircle from "@mui/icons-material/AccountCircle";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";

export function AddChat({
  handleToggleOpenClose,
  chatName,
  visible,
  handleChange,
  addChat,
}) {
  return (
    <Fragment>
      <Fab
        color="primary"
        aria-label="add"
        onClick={handleToggleOpenClose}
        style={{
          position: "absolute",
          bottom: "50px",
          left: "50px",
          borderRadius: "50%",
          backgroundColor: "#1565c0",
        }}
        variant={"circular"}
      >
        <AddIcon />
      </Fab>

      <Dialog open={visible} onClose={handleToggleOpenClose}>
        <Box sx={{ "& > :not(style)": { m: 1 } }}>
          <Box sx={{ display: "flex", alignItems: "flex-end" }}>
            <AccountCircle sx={{ color: "action.active", mr: 1, my: 0.5 }} />
            <TextField
              id="input-with-sx"
              label="Название нового чата"
              variant="standard"
              style={{ color: "#1565c0" }}
              value={chatName}
              onChange={handleChange}
            />
          </Box>
        </Box>
        <Button
          style={{ color: "#1565c0" }}
          onClick={addChat}
          disabled={!chatName}
        >
          Добавить чат
        </Button>
      </Dialog>
    </Fragment>
  );
}
