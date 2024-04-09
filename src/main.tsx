import Routes from "@/router/index";
import store from "@/store";
import NiceModal from "@ebay/nice-modal-react";
import { ConfigProvider } from "antd";
import zhCN from "antd/es/locale/zh_CN";
import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { HashRouter } from "react-router-dom";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <ConfigProvider
        locale={zhCN}
        theme={{
          token: {
            colorPrimary: "#39c5bb",
          },
          hashed: false,
        }}
      >
        <NiceModal.Provider>
          <HashRouter>
            <Routes />
          </HashRouter>
        </NiceModal.Provider>
      </ConfigProvider>
    </Provider>
  </StrictMode>
);
