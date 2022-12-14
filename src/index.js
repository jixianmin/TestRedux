import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import store from "./redux/store";
import { addTodo, completeTodo } from "./redux/actions";

const subscribe = store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(addTodo("할일"));
store.dispatch(completeTodo(0));

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
