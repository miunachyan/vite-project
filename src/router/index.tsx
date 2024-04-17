import NProgress from "@/components/NProgress";
import _ from "lodash";
import React from "react";
import { Navigate, RouteObject, useRoutes } from "react-router-dom";
import routes, { RouteType } from "./routes";

export default function Routes() {
  return useRoutes(renderRoutes(routes));
}

function renderRoutes(routes: Array<RouteType>) {
  return _.map(routes, (item: RouteType) => {
    let res: RouteObject = { ...item };

    // component
    if (item?.component) {
      if (item.path === "/") {
        res.element = item.component;
      } else {
        const Component = React.lazy(item.component);
        res.element = (
          <React.Suspense fallback={<NProgress />}>
            <BeforeEach route={item}>
              <Component />
            </BeforeEach>
          </React.Suspense>
        );
      }
    }

    // children
    if (item?.children) {
      res.children = renderRoutes(item.children);
    }

    // 重定向
    if (item?.redirect) {
      res.element = <Navigate to={item.redirect} replace />;
    }

    return res;
  });
}

function BeforeEach(props: { route: RouteType; children: any }) {
  if (props?.route?.meta?.title) {
    document.title = props.route.meta.title;
  }

  if (props?.route?.meta?.needLogin) {
    // 看是否登录
    // const navigate = useNavigate();
    // navigate('/login');
  }

  return <div style={{ height: "100%" }}>{props.children}</div>;
}
