import { FireOutlined, SettingOutlined } from '@ant-design/icons';
import { MenuDataItem } from '@ant-design/pro-components';

async function getMenuConfig(params = {}): Promise<MenuDataItem[]> {
  return [
    {
      path: '/hot',
      name: '热门',
      icon: <FireOutlined />,
    },
    {
      path: '/categories',
      name: '分类',
    },
    {
      path: '/toys',
      name: 'toys',
    },
    {
      path: '/csspg',
      name: 'csspg',
    },
    {
      path: '/settings',
      name: '设置',
      icon: <SettingOutlined />,
    },
  ];
}

export { getMenuConfig };
