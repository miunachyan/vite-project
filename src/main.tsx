import Routes from "@/router/index";
import NiceModal from "@ebay/nice-modal-react";
import { ConfigProvider } from "antd";
import "antd/dist/antd.css";
import zhCN from "antd/es/locale/zh_CN";
import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ConfigProvider locale={zhCN}>
      <NiceModal.Provider>
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </NiceModal.Provider>
    </ConfigProvider>
  </StrictMode>
);
