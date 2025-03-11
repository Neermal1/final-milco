import { useContext } from "react";

//axios instance
import axiosInstance from "@/app/utils/axiosInstance";

//antd
import { Modal } from "antd";

//context
import { AntdContext } from "@/app/antdContext/AntdContext";
import { CustomerInfoContext } from "@/app/context/CustomerInfoContext";

//components
import LoadingButton from "../Button/LoadingButton";

const LogoutModal = () => {
  const { openLogOutModal, setLogoutModal } = useContext(AntdContext);
  const { set_customer_name } = useContext(CustomerInfoContext);
  const { setIsLoading } = useContext(AntdContext);

  const handleLogout = async () => {
    try {
      setIsLoading(true);

      if (typeof window !== undefined && window?.localStorage) {
        localStorage?.removeItem("customer_name");
        localStorage?.removeItem("accessToken");
      }
      const response = await axiosInstance.post("/logout");
      setLogoutModal(false);
      set_customer_name("");
      setIsLoading(false);

      window.location.href = "/";
    } catch (e) {
      console.log("This is error", e);
      setIsLoading(false);
    }
  };
  return (
    <div>
      <Modal
        title="Logout"
        open={openLogOutModal}
        onCancel={() => {
          setLogoutModal(!openLogOutModal);
        }}
        footer={false}
      >
        <div className="flex flex-col gap-6">
          <div className="text-[20px] mt-2">
            {`
        Are you sure you want  to logout?
        `}
          </div>
          <div className="flex justify-end">
            <div
              onClick={() => {
                handleLogout();
              }}
              className="hover:cursor-pointer"
            >
              <LoadingButton>Logout</LoadingButton>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default LogoutModal;
