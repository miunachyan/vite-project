import { GridContent } from "@ant-design/pro-components";
import { Card } from "antd";

export default function Welcome() {
  return (
    <GridContent>
      {Array.from({ length: 20 }, (_, k) => (
        <Card title={k + 1} />
      ))}
    </GridContent>
  );
}
