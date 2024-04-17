import NiceModal, { useModal } from "@ebay/nice-modal-react";
import { Modal } from "antd";

export default NiceModal.create(({ a }: any) => {
  const modal = useModal();

  return (
    <Modal
      title="一个弹窗"
      destroyOnClose
      // getContainer={() => document.querySelector(".toys")!}
      onCancel={modal.hide}
      open={modal.visible}
      mask={false}
    >
      {a}
    </Modal>
  );
});
