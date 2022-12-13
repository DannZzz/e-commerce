import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./app/store";
import App from "./App/App";
import { ConfigProvider } from "antd";
import { AntdThemeToken } from "./style-config/ant-theme-token";

const container = document.getElementById("root")!;
const root = createRoot(container);

root.render(
  <ConfigProvider theme={{ token: AntdThemeToken }}>
    <Provider store={store}>
      <App />
    </Provider>
  </ConfigProvider>
);
