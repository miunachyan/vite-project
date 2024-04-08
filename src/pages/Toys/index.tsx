import NiceModal, { ModalHolder, useModal } from "@ebay/nice-modal-react";
import { Button, Drawer } from "antd";
import { useState } from "react";
// import "./index.less";

export default function Toys() {
  const [a, setA] = useState(1);
  // const ref = useRef(1);
  const getA = () => a;
  const modalHandler = {};
  return (
    <div className="toys">
      <Button onClick={() => modalHandler.show(M)}>open</Button>
      <Button
        onClick={() => {
          setA((p) => p + 1);
          // ref.current = ref.current + 1;
        }}
      >
        +
      </Button>
      <ModalHolder modal={M} a={a} handler={modalHandler} />
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
