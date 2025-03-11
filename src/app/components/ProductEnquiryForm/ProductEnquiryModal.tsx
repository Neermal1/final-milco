import { AntdContext } from "@/app/antdContext/AntdContext";
import ContactForm from "@/app/pageComponents/contactUs/ContactForm";
import { Modal } from "antd";
import { useContext } from "react";

const ProductEnquiryModal = () => {
  const { openEnquiryModal, setEnquiryModal } = useContext(AntdContext);
  return (
    <Modal
      open={openEnquiryModal}
      onCancel={() => {
        setEnquiryModal(!openEnquiryModal);
      }}
      footer={false}
    >
      <ContactForm
        data={{
          bg_status: false,
        }}
      />
    </Modal>
  );
};

export default ProductEnquiryModal;
