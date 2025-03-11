"use client";
import Link from "next/link";

//utils
import axiosInstance from "@/app/utils/axiosInstance";

//antd
import { Button, Form, Input, notification } from "antd";
import ComponentHeader from "@/app/components/componentHeader/ComponentHeader";
import LoadingButton from "@/app/components/Button/LoadingButton";
import { useContext } from "react";
import { AntdContext } from "@/app/antdContext/AntdContext";

const SignUpForm = () => {
  //states
  const [form] = Form.useForm();
  const { setIsLoading } = useContext(AntdContext);

  const handleSignUp = async (values: any) => {
    try {
      const payload = {
        name: values?.name,
        email: values?.email,
        phone: values?.phone_number,
        password: values?.password,
      };
      if (payload) {
        setIsLoading(true);

        const response = await axiosInstance.post("/register", payload);
        if (response?.status === 200) {
          notification.success({
            message: response?.data?.message,
          });
          form.resetFields();
          setIsLoading(false);

          window.location.href = "/login";
        } else {
          notification.error({
            message: "Sorry!! Something went wrong",
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
    <div className="flex items-center flex-col justify-center gap-10 my-20">
      <div>
        <ComponentHeader
          data={{
            heading: "Sign Up",
            subheading: "",
          }}
        />
      </div>
      <div
        className={`border-t-[4px]  border-t-secondary bg-white  drop-shadow-md flex flex-col items-center justify-center p-4 md:p-8 lg:p-20 rounded-[8px]`}
      >
        <Form
          form={form}
          layout="vertical"
          className="flex flex-col gap-4 "
          onFinish={handleSignUp}
        >
          <div className="grid lg:grid-cols-2 gap-10">
            <div className="flex flex-col gap-4">
              <div className="">
                <div className="text-[16px] font-medium">Your Name</div>
              </div>
              <Form.Item
                hasFeedback
                name="name"
                rules={[
                  {
                    required: true,
                    message: "Please provide your full name",
                  },
                ]}
                className="form-label"
              >
                <Input
                  className="lg:w-[380px] w-[300px]"
                  size="large"
                  placeholder="Enter your full name here"
                />
              </Form.Item>
            </div>

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
          </div>

          <div className="grid lg:grid-cols-2 gap-10">
            <div className="flex flex-col gap-4">
              <div className="">
                <div className="text-[16px] font-medium ">Phone Number</div>
              </div>

              <Form.Item
                hasFeedback
                name="phone_number"
                rules={[
                  {
                    required: true,
                    message: "Please provide your valid phone number",
                  },
                  {
                    pattern: /^[0-9]{10}$/,
                    message: "Mobile number must be 10 digits",
                  },
                ]}
                className=""
              >
                <Input
                  className="lg:w-[380px] w-[300px]"
                  size="large"
                  placeholder="Enter your phone number here"
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
          </div>

          <Form.Item className="flex items-center justify-center">
            <div className="flex items-center justify-center">
              <LoadingButton>Register</LoadingButton>
            </div>
          </Form.Item>
        </Form>
        <div className="flex items-center gap-2">
          <div>Already have an account ??</div>
          <Link href="/login" className="text-secondary">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};
export default SignUpForm;
