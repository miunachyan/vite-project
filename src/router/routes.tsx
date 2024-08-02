import BasicLayout from '@/layouts/BasicLayout';

export interface RouteType {
  path: string;
  component?: any;
  children?: Array<RouteType>;
  meta?: {
    title?: string;
    needLogin?: boolean;
  };
  redirect?: string;
}

const routes: RouteType[] = [
  {
    path: '/',
    component: <BasicLayout />,
    // redirect: "/home",
    children: [
      {
        path: '',
        component: () => import('@/components/Welcome'),
        meta: {
          title: '概览',
        },
      },
      {
        path: '/home',
        component: () => import('@/pages/Home'),
        meta: {
          title: '首页',
        },
      },
      {
        path: '/me',
        component: () => import('@/pages/Me'),
        meta: {
          title: '我的',
        },
      },
      {
        path: '/toys',
        component: () => import('@/pages/Toys'),
        meta: {
          title: '表单表格',
        },
      },
      {
        path: '/csspg',
        component: () => import('@/pages/CSSPg'),
        meta: {
          title: 'csspg',
        },
      },
      {
        path: '/categories',
        component: () => import('@/pages/Categories'),
        meta: {
          title: '分类',
        },
      },
      {
        path: '/codeEditor',
        component: () => import('@/pages/CodeEditor'),
        meta: {
          title: 'codeEditor',
        },
      },
      {
        path: '*',
        component: () => import('@/components/NotFound'),
        meta: {
          title: '404',
        },
      },
    ],
  },
];

export default routes;
