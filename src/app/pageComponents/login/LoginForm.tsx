"use client";
import { useContext } from "react";

//context
import { CustomerInfoContext } from "@/app/context/CustomerInfoContext";

//utils
import axiosInstance from "@/app/utils/axiosInstance";

//antd
import LoadingButton from "@/app/components/Button/LoadingButton";
import ComponentHeader from "@/app/components/componentHeader/ComponentHeader";
import { Form, Input, notification } from "antd";
import Link from "next/link";
import { AntdContext } from "@/app/antdContext/AntdContext";

const LoginForm = () => {
  const [form] = Form.useForm();
  const { set_customer_name } = useContext(CustomerInfoContext);
  const { setIsLoading } = useContext(AntdContext);

  const handleContactSubmit = async (values: any) => {
    try {
      const payload = {
        email: values?.email,
        password: values?.password,
      };
      if (payload) {
        setIsLoading(true);

        const response = await axiosInstance.post("/login", payload);

        if (response?.data?.status === 200) {
          notification.success({
            message: response?.data?.authorization?.message,
          });
          localStorage.setItem(
            "accessToken",
            response?.data?.authorization?.token
          );
          localStorage.setItem("customer_name", response?.data?.user?.name);
          localStorage.setItem("customer_id", response?.data?.user?.id);
          set_customer_name(response?.data?.user?.name);
          form.resetFields();
          setIsLoading(false);

          window.location.href = "/";
        } else {
          notification.error({
            message: response?.data?.message,
          });
          form.resetFields();
          setIsLoading(false);
        }
      }
    } catch (e: any) {
      notification.error({
        message: e?.response?.data?.message,
      });
      setIsLoading(false);
    }
  };
  return (
    <div className="flex items-center flex-col justify-center gap-10">
      <div>
        <ComponentHeader
          data={{
            heading: "Login Form",
            subheading: "",
          }}
        />
      </div>
      <div
        className={`border-t-[4px]  border-t-secondary bg-white  drop-shadow-md  p-4 md:p-8 lg:p-20 rounded-[8px]`}
      >
        <Form
          form={form}
          layout="vertical"
          className="flex flex-col gap-4"
          onFinish={handleContactSubmit}
        >
          <div className="flex flex-col gap-4">
            <div className="">
              <div className="text-[16px] font-medium">Email Address</div>
            </div>

            <Form.Item
              hasFeedback
              name="email"
              rules={[
                {
                  required: true,
                  message: "Please provide your email address",
                },
                {
                  pattern: /^[a-z][a-z0-9._]*@[a-z][a-z0-9]*.[a-z]+/,
                  message:
                    "Please provide your email address in correct format",
                },
              ]}
              className=""
            >
              <Input
                className="lg:w-[380px] w-[300px]"
                size="large"
                placeholder="Enter your email address here"
              />
            </Form.Item>
          </div>
          <div className="flex flex-col gap-4">
            <div className="">
              <div className="text-[16px] font-medium">Password</div>
            </div>
            <Form.Item
              hasFeedback
              name="password"
              rules={[
                {
                  required: true,
                  message: "Please provide your password",
                },
              ]}
              className="form-label"
            >
              <Input
                className="lg:w-[380px] w-[300px]"
                size="large"
                placeholder="Enter your password here"
              />
            </Form.Item>
          </div>

          <Form.Item className="">
            <div className="flex items-center justify-center">
              <LoadingButton>Login</LoadingButton>
            </div>
          </Form.Item>
        </Form>
        <div className="flex lg:justify-end items-end">
          <Link href="/get-reset-link" className="text-[14px] text-primary">
            Forgot Password??
          </Link>
        </div>
      </div>
    </div>
  );
};
export default LoginForm;
