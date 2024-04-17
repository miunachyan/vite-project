import NiceModal, { useModal } from "@ebay/nice-modal-react";
import { Drawer } from "antd";

export default NiceModal.create(({ a }: any) => {
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
