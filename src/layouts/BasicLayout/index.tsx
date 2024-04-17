import logo from "@/assets/react.svg";
import { getMenuConfig } from "@/services/menu/menu";
import { CheckOutlined, GithubOutlined } from "@ant-design/icons";
import { PageContainer, ProConfigProvider } from "@ant-design/pro-components";
import ProLayout, { DefaultFooter } from "@ant-design/pro-layout";
import { Outlet, useLocation, useNavigate } from "react-router-dom";

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

  return (
    <ProConfigProvider>
      <ProLayout
        {...props}
        logo={logo}
        layout="mix"
        title="all-in-one"
        avatarProps={{
          title: "游客",
          size: "small",
          icon: <CheckOutlined />,
          render(avatarProps, defaultDom, props) {
            return defaultDom;
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
        {/* {location.pathname === "/" ? (
          <Welcome />
        ) : ( */}

        <PageContainer>
          <Outlet />
        </PageContainer>

        {/* )} */}
      </ProLayout>
    </ProConfigProvider>
  );
}
