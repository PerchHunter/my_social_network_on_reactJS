import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { Alert, AlertTitle, Box, TextField, Button } from "@mui/material";

import { ROUTES } from "../../constants";
import {
  handleSignInWithThunk,
  handleSignUpWithThunk,
} from "../Store/UserAuth/action";
import { authUserSelector } from "../Store/UserAuth/selectors";

export function Auth() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signUp } = useParams();
  const dispatch = useDispatch();
  const currentUser = useSelector(authUserSelector);

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  const handleSignUp = () => {
    dispatch(handleSignUpWithThunk(email, password));
  };

  const handleSignIn = () => {
    dispatch(handleSignInWithThunk(email, password));
  };

  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          id="outlined-email"
          label="Введите email"
          type="email"
          value={email}
          onChange={handleEmailChange}
        />
        <TextField
          id="outlined-password-input"
          label="Введите пароль"
          type="password"
          value={password}
          onChange={handlePasswordChange}
        />
      </div>

      {signUp ? (
        <>
          <Button variant="outlined" size="medium" onClick={handleSignUp}>
            Зарегистрироваться
          </Button>
          <div>
            Уже зарегистрированы? <Link to={ROUTES.SIGN_IN}>Войдите!</Link>
          </div>
        </>
      ) : (
        <>
          <Button variant="outlined" size="medium" onClick={handleSignIn}>
            Войти
          </Button>
          <div>
            Не зарегистрированы?
            <Link to={`${ROUTES.SIGN_IN}/sign-up`}>Зарегистрироваться!</Link>
          </div>
        </>
      )}

      {currentUser.loginOrRegistartionError && (
        <Alert
          severity="error"
          standardError
          style={{ maxWidth: "350px", textAlign: "left", margin: "10px auto" }}
        >
          <AlertTitle>Ошибка:</AlertTitle>
          {currentUser.errorMessage}
        </Alert>
      )}
    </Box>
  );
}
