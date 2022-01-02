import React, { useEffect, useState } from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Switch, Route, Redirect, Link } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import { Fragment } from "react";
import { Alert, Button, LinearProgress, Box } from "@mui/material";

import { Menu } from "./Components/Menu";
import { Profile } from "./Components/Application_Pages/Profile";
import { Home } from "./Components/Application_Pages/Home";
import { Chats } from "./Components/Application_Pages/Chats";
import { Cats } from "./Components/Application_Pages/Cats/index";
import { ROUTES } from "./constants.js";
import { persistor, store } from "./Components/Store";
import "./App.css";
import logo from "./logo.svg";
import { ChatListContainer } from "./Components/Application_Pages/Chats/ChatList";
import { AddChatContainer } from "./Components/Application_Pages/Chats/AddChat";
import { Auth } from "./Components/Auth";
import { PrivateRoute } from "./Components/PrivateRoute";
import { PublicRoute } from "./Components/PublicRoute";

import firebase from "firebase/app";

function App() {
  const [auth, setAuth] = useState(false);
  const [loading, setLoading] = useState(true);

  const handleInitFirebaseAuth = async () => {
    await firebase.auth().onAuthStateChanged((user) => {
      user ? setAuth(true) : setAuth(false);
      setLoading(false);
    });
  };

  useEffect(() => {
    handleInitFirebaseAuth();
  }, []);

  if (loading) {
    return (
      <Box sx={{ width: "100%" }}>
        <LinearProgress />
      </Box>
    );
  }

  return (
    <Provider store={store}>
      <PersistGate loading={""} persistor={persistor}>
        <BrowserRouter>
          <div className="App">
            <header className="App-header">
              <div className="header-logo">
                <img src={logo} className="logo" alt="logo" />
              </div>
              <div className="header-link">
                <Link to={ROUTES.SIGN_IN}>
                  <Button variant="outlined" size="medium">
                    Войти
                  </Button>
                </Link>
                <Link to={`${ROUTES.SIGN_IN}/sign-up`}>
                  <Button variant="outlined" size="medium">
                    Зарегистрироваться
                  </Button>
                </Link>
              </div>
            </header>
            <main className="App-main">
              <Menu />

              <Switch>
                <Route
                  exact
                  auth={auth}
                  path={ROUTES.HOME}
                  render={() => <Home />}
                />
                <PrivateRoute
                  exact
                  auth={auth}
                  path={ROUTES.PROFILE}
                  render={() => <Profile />}
                />
                <PrivateRoute
                  auth={auth}
                  path={ROUTES.CHAT}
                  render={() => <Chats />}
                />
                <PrivateRoute
                  exact
                  auth={auth}
                  path={ROUTES.CATS}
                  render={() => <Cats />}
                />
                <PublicRoute
                  auth={auth}
                  path={ROUTES.SIGN_UP}
                  render={() => <Auth />}
                />
                <PrivateRoute
                  auth={auth}
                  path={ROUTES.NO_CHAT}
                  render={() => (
                    <Fragment>
                      <Alert severity="info" color="info">
                        Такого чата не существует. Выберите нужный чат из списка
                        или добавьте новый
                      </Alert>
                      <ChatListContainer />
                      <AddChatContainer />
                    </Fragment>
                  )}
                />
                <Route
                  path={ROUTES.NOT_FOUND}
                  render={() => <h1>404 Страница не найдена</h1>}
                />
                <Route>
                  <Redirect to={ROUTES.NOT_FOUND}></Redirect>
                </Route>
              </Switch>
            </main>
          </div>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
}

export default App;
