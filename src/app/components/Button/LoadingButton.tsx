import { AntdContext } from "@/app/antdContext/AntdContext";
import { IButton } from "@/app/interface/interface";
import { Button } from "antd";
import { useContext } from "react";

const LoadingButton = ({ children }: IButton) => {
  //
  const { loading } = useContext(AntdContext);

  return (
    <Button
      htmlType="submit"
      loading={loading}
      style={{
        backgroundColor: "var(--secondary)",
        color: "white",
        fontSize: "20px",
      }}
      className="h-[6vh]"
    >
      {children}
    </Button>
  );
};

export default LoadingButton;
