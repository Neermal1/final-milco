import React, { useContext } from "react";
import Link from "next/link";

//context
import { CustomerInfoContext } from "@/app/context/CustomerInfoContext";
import { AntdContext } from "@/app/antdContext/AntdContext";

//antd
import { Popover } from "antd";

//react icons
import { FaUserCircle } from "react-icons/fa";
import { TbLogout2 } from "react-icons/tb";

//components
import LogoutModal from "./LogoutModal";

const AfterLoginHeader = () => {
  const { customer_name } = useContext(CustomerInfoContext);
  const { setLogoutModal } = useContext(AntdContext);
  return (
    <div>
      <Popover
        content={
          <div className="w-[25vh] ">
            <div className="flex flex-col gap-4">
              <div
                className="text-[18px] hover:cursor-pointer flex items-center gap-4"
                onClick={() => {
                  setLogoutModal(true);
                }}
              >
                <div>
                  <TbLogout2 />
                </div>
                <div className="text-[16px] font-medium">Logout</div>
              </div>

              <Link
                href="/my-profile"
                className="text-[18px] hover:cursor-pointer flex items-center gap-4"
              >
                <div>
                  <FaUserCircle />
                </div>
                <div className="text-[16px] font-medium">My Profile</div>
              </Link>
            </div>
          </div>
        }
      >
        {customer_name && (
          <div className="flex items-center ">
            <div className="bg-secondary text-white lg:ml-6 hover:cursor-pointer w-[25px] h-[25px] lg:w-[35px] lg:h-[35px] p-2 rounded-full flex items-center justify-center">
              <div className="lg:text-[20px] text-[16px]">
                {customer_name?.slice(0, 1)?.toUpperCase()}
              </div>
            </div>
          </div>
        )}
      </Popover>
      <LogoutModal />
    </div>
  );
};

export default AfterLoginHeader;
