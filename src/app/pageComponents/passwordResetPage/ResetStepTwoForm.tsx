"use client";
import { AntdContext } from "@/app/antdContext/AntdContext";
import LoadingButton from "@/app/components/Button/LoadingButton";
import { IResetStepTwoForm } from "@/app/interface/interface";
import axiosInstance from "@/app/utils/axiosInstance";
import { Form, Input, notification } from "antd";
import { useContext } from "react";

const ResetStepTwoForm = ({ data }: IResetStepTwoForm) => {
  const [form] = Form.useForm();
  const { setIsLoading } = useContext(AntdContext);

  const handleReset = async (values: any) => {
    try {
      const payload = {
        token: data?.token,
        email: data?.email,
        password: values?.password,
        password_confirmation: values?.password_confirmation,
      };
      if (payload) {
        setIsLoading(true);

        const response = await axiosInstance.post("/password/reset", payload);

        if (response?.status === 200) {
          notification.success({
            message: response?.data?.message,
          });
          form.resetFields();
          window.location.href = "/login";
          setIsLoading(false);
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
        message: e?.response?.data?.errors?.password,
      });
      setIsLoading(false);
    }
  };
  return (
    <div className="layout component-padding">
      <div className="flex items-center flex-col justify-center gap-10">
        <div className="text-[22px]">Change Password</div>
        <div>
          <Form
            form={form}
            layout="vertical"
            className="flex flex-col gap-4 "
            onFinish={handleReset}
          >
            <div className="flex flex-col gap-4">
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
                  placeholder="Password"
                />
              </Form.Item>
            </div>

            <div className="flex flex-col gap-4">
              <Form.Item
                hasFeedback
                name="password_confirmation"
                rules={[
                  {
                    required: true,
                    message: "Please provide your password again",
                  },
                ]}
                className="form-label"
              >
                <Input
                  className="lg:w-[380px] w-[300px]"
                  size="large"
                  placeholder="Confirm Password"
                />
              </Form.Item>
            </div>

            <Form.Item className="flex items-center justify-center">
              <div className="flex items-center justify-center">
                <LoadingButton>Reset Password</LoadingButton>
              </div>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default ResetStepTwoForm;
