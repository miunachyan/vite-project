import BasicLayout from "@/layouts/BasicLayout";

export interface routeType {
  path: string;
  component?: any;
  children?: Array<routeType>;
  meta?: {
    title?: string;
    needLogin?: boolean;
  };
  redirect?: string;
}

const routes: routeType[] = [
  {
    path: "/",
    component: <BasicLayout />,
    children: [
      {
        path: "/home",
        component: () => import("@/pages/Home"),
        meta: {
          title: "首页",
        },
      },
      {
        path: "/me",
        component: () => import("@/pages/Me"),
        meta: {
          title: "我的",
        },
      },
      {
        path: "/toys",
        component: () => import("@/pages/Toys"),
        meta: {
          title: "测试页",
        },
      },
      {
        path: "/cheeriopc",
        component: () => import("@/pages/CheerioPC"),
        meta: {
          title: "cheerio",
        },
      },
      {
        path: "/codeEditor",
        component: () => import("@/pages/CodeEditor"),
        meta: {
          title: "codeEditor",
        },
      },
    ],
  },
];

export default routes;
