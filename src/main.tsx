import Routes from "@/router/index";
import NiceModal from "@ebay/nice-modal-react";
import { ConfigProvider } from "antd";
import zhCN from "antd/es/locale/zh_CN";
import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ConfigProvider locale={zhCN}>
      <NiceModal.Provider>
        <HashRouter>
          <Routes />
        </HashRouter>
      </NiceModal.Provider>
    </ConfigProvider>
  </StrictMode>
);
