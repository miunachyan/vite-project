import { setCounter } from "@/store/modules/user";
import NiceModal, { useModal } from "@ebay/nice-modal-react";
import { Button, Drawer, message } from "antd";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import "./index.less";

export default function Toys() {
  const [a, setA] = useState(1);
  const dispatch = useDispatch();
  const { counter } = useSelector((store: any) => store.user);
  // const ref = useRef(1);
  const getA = () => a;
  const modalHandler = {};
  useEffect(() => {
    message.info(counter);
  }, [counter]);
  return (
    <div className="toys">
      <Button onClick={() => dispatch(setCounter({ counter: 2 }))}>open</Button>
      <Button
        onClick={() => {
          setA((p) => p + 1);
          // ref.current = ref.current + 1;
        }}
      >
        +
      </Button>
    </div>
  );
}

const M = NiceModal.create(({ a, getA }: any) => {
  // useEffect(() => {
  //   console.log(ref.current);
  // }, [ref]);
  const modal = useModal();
  return (
    <Drawer
      destroyOnClose
      getContainer={() => document.querySelector(".toys")!}
      onClose={modal.hide}
      open={modal.visible}
      mask={false}
    >
      {a}
    </Drawer>
  );
});
