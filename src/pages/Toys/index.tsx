import NiceModal from "@ebay/nice-modal-react";
import { App, Button } from "antd";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ADrawer from "./ADrawer";
import AModal from "./AModal";
// import "./index.less";

export default function Toys() {
  const [a, setA] = useState(1);
  const dispatch = useDispatch();
  const { counter } = useSelector((store: any) => store.user);
  const { message } = App.useApp();

  return (
    <div className="toys">
      <Button onClick={() => NiceModal.show(ADrawer)}>open drawer</Button>
      <Button onClick={() => NiceModal.show(AModal)}>open modal</Button>
      <Button
        onClick={() => {
          setA((p) => p + 1);
        }}
      >
        +
      </Button>
      {a}
    </div>
  );
}
