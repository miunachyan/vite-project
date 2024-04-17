import { GridContent } from "@ant-design/pro-components";
import { Card } from "antd";

export default function Welcome() {
  return (
    // <React.Suspense fallback={<NProgress />}>
    <GridContent>
      {Array.from({ length: 20 }, (_, k) => (
        <Card title={k + 1} key={k} />
      ))}
    </GridContent>
    // </React.Suspense>
  );
}
