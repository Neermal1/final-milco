"use client";
import { AntdContext } from "@/app/antdContext/AntdContext";
import LoadingButton from "@/app/components/Button/LoadingButton";
import axiosInstance from "@/app/utils/axiosInstance";
import { Form, Input, message, notification } from "antd";
import { useContext } from "react";

const ResetStepOneForm = () => {
  const [form] = Form.useForm();
  const { setIsLoading } = useContext(AntdContext);

  const handleResetSubmit = async (values: any) => {
    try {
      const payload = {
        email: values?.email,
      };
      if (payload) {
        setIsLoading(true);

        const response = await axiosInstance.post("/password/email", payload);

        if (response?.status === 200) {
          form.resetFields();
          setIsLoading(false);

          window.location.href = `/password/reset?token=${response?.data?.token}&email=${values?.email}`;
        } else {
          notification.error({
            message: "Sorry Something went wrong",
          });
          form.resetFields();
          setIsLoading(false);
        }
      }
    } catch (e: any) {
      console.log(e);
      message?.error({
        content: e?.response?.data?.message,
      });
      setIsLoading(false);
    }
  };
  return (
    <div className="layout component-padding">
      <div className="flex items-center flex-col justify-center gap-10">
        <div className="text-[22px]">
          Enter Your Email To Get The Reset Link
        </div>
        <div>
          <Form
            form={form}
            layout="vertical"
            className="flex flex-col gap-4"
            onFinish={handleResetSubmit}
          >
            <div className="flex flex-col gap-4">
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

            <div className="flex items-center justify-center">
              <LoadingButton>Send Reset Link</LoadingButton>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default ResetStepOneForm;
