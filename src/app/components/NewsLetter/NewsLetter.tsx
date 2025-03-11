"use client";
import axiosInstance from "@/app/utils/axiosInstance";
import { Button, Form, Input, notification } from "antd";
import React, { useRef, useState } from "react";

const NewsLetter = () => {
  const emailref: any = useRef();
  const [isLoading, setIsLoading] = useState(false);

  const submitEmail = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    const email_regex = /^[a-z][a-z0-9._]*@[a-z][a-z0-9]*.[a-z]+/;
    const checking_email = email_regex.test(emailref.current.value);

    const postRequestFunc = async () => {
      try {
        const payload = {
          email: emailref?.current?.value,
        };

        const response = await axiosInstance.post(
          `subscription/store`,
          payload
        );
        if (response.data.status == "failed") {
          notification.error({
            message: response.data.message,
            duration: 2,
          });
        } else {
          notification.success({
            message: response.data.message,
            duration: 2,
          });
        }
        emailref.current.value = " ";
      } catch (e) {
        console.log(e);
      }
    };
    if (checking_email == true) {
      postRequestFunc();
    } else {
      notification.error({
        message: "Please enter valid email address",
        duration: 2,
      });
    }
  };

  return (
    <div className="layout component-padding">
      <div className="rounded-[8px] flex lg:flex-row flex-col items-center gap-10 justify-between bg-[#f2f4fb] lg:p-12 p-4 ">
        <div className="text-black lg:text-[30px] text-[20px]">
          Subscribe our Newsletters
        </div>
        <div className="bg-white flex lg:flex-row flex-col lg:items-center gap-4 w-fit py-3 px-4">
          <input
            ref={emailref}
            type="email"
            placeholder="Enter your email"
            className="lg:w-[80%] w-[100%] py-2 rounded-[8px] px-6 outline-none text-black"
          />
          <div>
            <Button
              onClick={submitEmail}
              loading={isLoading}
              style={{
                backgroundColor: "var(--secondary)",
                color: "white",
                fontSize: "20px",
              }}
              className="h-[5vh]"
            >
              Subscribe
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
