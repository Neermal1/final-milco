import { AntdContext } from "@/app/antdContext/AntdContext";
import ContactForm from "@/app/pageComponents/contactUs/ContactForm";
import { Modal } from "antd";
import { useContext } from "react";

const ProductEnquiryModal = () => {
  const context = useContext(AntdContext);
  if (!context) return null; // Ensure context exists

  const { openEnquiryModal, setEnquiryModal } = context;

  return (
    <Modal
      open={openEnquiryModal}
      onCancel={() => setEnquiryModal(false)}
      footer={null}
    >
      <ContactForm data={{ bg_status: false }} />
    </Modal>
  );
};

export default ProductEnquiryModal;
