"use client";
import { createContext, useEffect, useState } from "react";
import { ICustomerInfoContext } from "../interface/interface";

const defaultValue: ICustomerInfoContext = {
  customer_name: "",
  set_customer_name: () => {},
};
export const CustomerInfoContext =
  createContext<ICustomerInfoContext>(defaultValue);

const CustomerInfoContextProvider = ({ children }: any) => {
  const customer =
    typeof window !== "undefined" &&
    window.localStorage &&
    localStorage.getItem("customer_name");

  const [customer_name, set_customer_name] = useState<any>(customer);

  useEffect(() => {
    if (typeof window !== undefined && window.localStorage) {
      const customer = localStorage?.getItem("customer_name");
      set_customer_name(customer);
    }
  }, [customer_name]);

  return (
    <CustomerInfoContext.Provider value={{ customer_name, set_customer_name }}>
      {children}
    </CustomerInfoContext.Provider>
  );
};
export default CustomerInfoContextProvider;
