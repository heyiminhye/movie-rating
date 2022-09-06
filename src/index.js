import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./features/store";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* 리액트 앱 트리 최상단에서 store를 렌더할 수 있게 해주는 react-redux 컴포넌트*/}
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
