import { Badge, Button, Card, Space } from 'antd';
import './index.less';

export default function CSSPg() {
  return (
    <>
      <Card>
        <div className="csspg-main">
          {Array.from({ length: 30 }, (_, i) => i).map((i) => (
            <Badge showZero count={i} key={i}>
              <div className="container">
                {/* <div className="corner">{i}</div> */}
                <div className="mask">
                  <Space direction="vertical">
                    <Button>查看</Button>
                    <Button>下载</Button>
                  </Space>
                </div>
              </div>
            </Badge>
          ))}
        </div>
      </Card>
    </>
  );
}
