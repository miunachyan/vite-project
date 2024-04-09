import { Button, Result } from "antd";
import { useNavigate } from "react-router-dom";

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <Result
      status="404"
      title="404"
      subTitle="啊哦，页面不见了"
      extra={
        <Button onClick={() => navigate("/")} type="primary">
          前往主页
        </Button>
      }
    />
  );
}
