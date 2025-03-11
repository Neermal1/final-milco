"use client";
import { createContext, useState } from "react";

//interface
import { IDefaultAntdContext } from "../interface/interface";

const defaultValue: IDefaultAntdContext = {
  openDrawer: false,
  setOpenDrawer: () => {},
  openLogOutModal: false,
  setLogoutModal: () => {},
  openEnquiryModal: false,
  setEnquiryModal: () => {},
  loading: false,
  setIsLoading: () => {},
};

export const AntdContext = createContext<IDefaultAntdContext>(defaultValue);

const AntdContextProvider = ({ children }: any) => {
  const [openDrawer, setOpenDrawer] = useState<boolean>(false);
  const [openLogOutModal, setLogoutModal] = useState<boolean>(false);
  const [openEnquiryModal, setEnquiryModal] = useState<boolean>(false);
  const [loading, setIsLoading] = useState<boolean>(false);

  return (
    <AntdContext.Provider
      value={{
        openDrawer,
        setOpenDrawer,
        openLogOutModal,
        setLogoutModal,
        openEnquiryModal,
        setEnquiryModal,
        loading,
        setIsLoading,
      }}
    >
      {children}
    </AntdContext.Provider>
  );
};
export default AntdContextProvider;
