import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
//обязательно импортируем firebase сюда, чтобы при инициализации он знал куда отправлять данные
import "./Services/firebase";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
