import { AntdContext } from "@/app/antdContext/AntdContext";
import { CustomerInfoContext } from "@/app/context/CustomerInfoContext";
import { IHeader } from "@/app/interface/interface";
import { Drawer } from "antd";
import Link from "next/link";
import { useContext } from "react";
import SecondaryButton from "../Button/SecondaryButton";
import HeaderMenu from "./HeaderMenu";

const SmallScreenHeader = ({ header_data }: IHeader) => {
  const { openDrawer, setOpenDrawer } = useContext(AntdContext);
  const { headerItems } = header_data;
  const { customer_name } = useContext(CustomerInfoContext);

  return (
    <div>
      <Drawer
        placement="right"
        onClose={() => {
          setOpenDrawer(false);
        }}
        open={openDrawer}
        className="lg:hidden "
      >
        <div className="flex justify-between flex-col h-[100%]">
          <div className="flex flex-col  gap-6 ">
            <HeaderMenu headerItems={headerItems} />
          </div>
          <div>
            {customer_name ? (
              <div className="flex items-center justify-center"></div>
            ) : (
              <Link href="/sign-up" className="my-6">
                <SecondaryButton>
                  <div>Login/Signup</div>
                </SecondaryButton>
              </Link>
            )}
          </div>
        </div>
      </Drawer>
    </div>
  );
};

export default SmallScreenHeader;
