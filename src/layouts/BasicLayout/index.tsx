import Welcome from "@/components/MonacoEditor/Welcome";
import { getMenuConfig } from "@/services/menu/menu";
import { GithubOutlined } from "@ant-design/icons";
import { PageContainer, type MenuDataItem } from "@ant-design/pro-components";
import ProLayout, { DefaultFooter } from "@ant-design/pro-layout";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
// import logo from '../assets/logo.svg';

const menuDataRender = (menuList: MenuDataItem[]): MenuDataItem[] =>
  menuList.map((item) => {
    return {
      ...item,
      children: item.children ? menuDataRender(item.children) : undefined,
    };
  });

const defaultFooterDom = (
  <DefaultFooter
    copyright={`${new Date().getFullYear()} 蚂蚁集团体验技术部出品`}
    links={[
      {
        key: "Ant Design Pro",
        title: "Ant Design Pro",
        href: "https://pro.ant.design",
        blankTarget: true,
      },
      {
        key: "github",
        title: <GithubOutlined />,
        href: "https://github.com/ant-design/ant-design-pro",
        blankTarget: true,
      },
      {
        key: "Ant Design",
        title: "Ant Design",
        href: "https://ant.design",
        blankTarget: true,
      },
    ]}
  />
);

export default function BasicLayout(props) {
  const navigate = useNavigate();
  const location = useLocation();

  // const { formatMessage } = useIntl();

  return (
    <ProLayout
      // logo={logo}
      // formatMessage={formatMessage}
      {...props}
      // onCollapse={handleMenuCollapse}
      // onMenuHeaderClick={() => history.push('/')}
      // layout="mix"
      menu={{
        request: async () => await getMenuConfig(),
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
      location={{
        pathname: location.pathname,
      }}
      footerRender={() => defaultFooterDom}
      // rightContentRender={() => <RightContent />}
    >
      {location.pathname === "/" ? (
        <Welcome />
      ) : (
        <PageContainer>
          <Outlet />
        </PageContainer>
      )}
    </ProLayout>
  );
}
