import Initial from "@/components/Initial";
import Routes from "@/router/index";
import store from "@/store";
import NiceModal from "@ebay/nice-modal-react";
import { App, ConfigProvider, theme } from "antd";
import zhCN from "antd/es/locale/zh_CN";
import { StrictMode, memo } from "react";
import ReactDOM from "react-dom/client";
import { Provider, useSelector } from "react-redux";
import { HashRouter } from "react-router-dom";
import "./index.css";

const AppProvider = memo(() => {
  const { dark } = useSelector((store: any) => store.overall);
  return (
    <ConfigProvider
      locale={zhCN}
      theme={{
        algorithm: dark ? theme.darkAlgorithm : theme.defaultAlgorithm,
        token: {
          colorPrimary: "#39c5bb",
        },
        hashed: false,
      }}
    >
      <Initial>
        <App>
          <NiceModal.Provider>
            <HashRouter>
              <Routes />
            </HashRouter>
          </NiceModal.Provider>
        </App>
      </Initial>
    </ConfigProvider>
  );
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <AppProvider />
    </Provider>
  </StrictMode>
);
