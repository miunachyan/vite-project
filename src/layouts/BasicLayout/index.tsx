import logo from "@/assets/react.svg";
import { getMenuConfig } from "@/services/menu/menu";
import { setDarkTheme } from "@/store/modules/overall";
import { GithubOutlined, MoonOutlined, SunOutlined } from "@ant-design/icons";
import { PageContainer } from "@ant-design/pro-components";
import ProLayout, { DefaultFooter } from "@ant-design/pro-layout";
import { Space, Switch } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import "./index.less";

const defaultFooterDom = (
  <DefaultFooter
    copyright={`${new Date().getFullYear()} 蚂蚁集团体验技术部出品`}
    links={[
      {
        key: "github",
        title: <GithubOutlined />,
        href: "https://github.com/ant-design/ant-design-pro",
        blankTarget: true,
      },
    ]}
  />
);

export default function BasicLayout(props) {
  const navigate = useNavigate();
  const location = useLocation();

  const dispatch = useDispatch();
  const { dark } = useSelector((store: any) => store.overall);

  return (
    <ProLayout
      {...props}
      logo={logo}
      className="basic-layout"
      layout="mix"
      title="all-in-one"
      avatarProps={{
        title: "游客",
        size: "small",
        icon: <img src="/vite.svg" />,
        render(_avatarProps, defaultDom) {
          return (
            <Space>
              {defaultDom}
              <Switch
                size="small"
                checked={dark}
                checkedChildren={<MoonOutlined />}
                unCheckedChildren={<SunOutlined />}
                onChange={(checked) => {
                  dispatch(setDarkTheme(checked));
                }}
              />
            </Space>
          );
        },
      }}
      onMenuHeaderClick={() => navigate("/")}
      menu={{
        request: async () => await getMenuConfig(),
      }}
      location={{
        pathname: location.pathname,
      }}
      menuItemRender={(menuItemProps, defaultDom) => {
        if (menuItemProps.isUrl || !menuItemProps.path || location.pathname === menuItemProps.path) {
          return defaultDom;
        }
        return <div onClick={() => navigate(menuItemProps.path!)}>{defaultDom}</div>;
      }}
      breadcrumbRender={(routers = []) => [
        {
          path: "/",
          breadcrumbName: "主页",
          onClick: () => navigate("/"),
        },
        ...routers,
      ]}
      footerRender={() => defaultFooterDom}
      // rightContentRender={() => <RightContent />}
    >
      <PageContainer header={{ title: undefined }}>
        <Outlet />
      </PageContainer>
    </ProLayout>
  );
}
