import { Button, Card } from 'antd';

export default function CheerioPC() {
  const start = async () => {};

  return (
    <Card
      extra={<Button onClick={() => start()}>start</Button>}
      style={{ display: 'flex', flexDirection: 'column', height: '100%' }}
    />
  );
}
