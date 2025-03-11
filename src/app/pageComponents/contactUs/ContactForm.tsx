"use client";
import { AntdContext } from "@/app/antdContext/AntdContext";
import LoadingButton from "@/app/components/Button/LoadingButton";
import ComponentHeader from "@/app/components/componentHeader/ComponentHeader";
import { IContactForm } from "@/app/interface/interface";
import axiosInstance from "@/app/utils/axiosInstance";
import { Form, Input, notification } from "antd";
import { useContext, useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const ContactForm = ({ data }: IContactForm) => {
  // States
  const [form] = Form.useForm();
  const { TextArea } = Input;
  const { openEnquiryModal, setEnquiryModal } = useContext(AntdContext);
  const { setIsLoading } = useContext(AntdContext);
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleContactSubmit = async (values: any) => {
    try {
      const payload = {
        name: values?.name,
        email: values?.email,
        phone: phoneNumber, // Phone number with country code
        message: values?.message,
      };

      setIsLoading(true);
      const response = await axiosInstance.post("/contact/store", payload);

      if (response?.status === 200) {
        notification.success({
          message: response?.data?.message,
        });
        form.resetFields();
        setPhoneNumber(""); // Reset phone number state
        setIsLoading(false);
        setEnquiryModal(!openEnquiryModal);
      } else {
        notification.error({
          message: "Sorry, something went wrong",
        });
        setIsLoading(false);
      }
    } catch (e) {
      console.log(e);
      setIsLoading(false);
    }
  };

  return (
    <div className="">
      <div
        className={`${
          data?.bg_status &&
          "bg-white drop-shadow-md p-10 rounded-[8px] border-t-[4px] border-t-secondary"
        } flex flex-col items-center justify-center`}
      >
        {!data?.bg_status && (
          <ComponentHeader
            data={{
              heading: "Enquiry Form",
              subheading: "",
            }}
          />
        )}

        <Form
          form={form}
          layout="vertical"
          className="flex flex-col gap-4"
          onFinish={handleContactSubmit}
        >
          {/* Name Field */}
          <Form.Item
            label="Your Name"
            name="name"
            rules={[{ required: true, message: "Please provide your full name" }]}
          >
            <Input size="large" placeholder="Enter your full name" />
          </Form.Item>

          {/* Email Field */}
          <Form.Item
            label="Email Address"
            name="email"
            rules={[
              { required: true, message: "Please provide your email address" },
              {
                pattern: /^[a-z][a-z0-9._]*@[a-z][a-z0-9]*.[a-z]+/,
                message: "Please provide a valid email address",
              },
            ]}
          >
            <Input size="large" placeholder="Enter your email address" />
          </Form.Item>

          {/* Phone Number with Country Code */}
          <Form.Item
            label="Phone Number"
            name="phone_number"
            rules={[{ required: true, message: "Please provide a valid phone number" }]}
          >
            <PhoneInput
              country={"au"} // Default country (Australia)
              enableSearch={true}
              value={phoneNumber}
              onChange={(phone) => setPhoneNumber(phone)}
              inputStyle={{ width: "100%", height: "40px" }}
            />
          </Form.Item>

          {/* Message Field */}
          <Form.Item
            label="Message"
            name="message"
            rules={[{ required: true, message: "Please provide your message" }]}
          >
            <TextArea rows={4} placeholder="Enter your message here" />
          </Form.Item>

          {/* Submit Button */}
          <Form.Item className="text-center">
            <LoadingButton>Submit</LoadingButton>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default ContactForm;
