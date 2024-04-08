import { MenuDataItem } from "@ant-design/pro-components";

export async function getMenuConfig(params = {}): Promise<MenuDataItem[]> {
  return [
    {
      path: "/home",
      name: "今日概览",
    },
    {
      path: "/me",
      name: "me",
    },
  ];
}
