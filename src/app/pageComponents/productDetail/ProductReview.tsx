"use client";
import { AntdContext } from "@/app/antdContext/AntdContext";
import LoadingButton from "@/app/components/Button/LoadingButton";
import useFetchData from "@/app/hooks/useFetchData";
import axiosInstance from "@/app/utils/axiosInstance";
import { Form, Input, message, notification, Rate } from "antd";
import { useParams } from "next/navigation";
import { useContext, useState } from "react";

const ProductReview = ({ product_id }: any) => {
  const [form] = Form.useForm();
  const { TextArea } = Input;
  const params = useParams();
  const { product_name } = params;
  const [rating, setRating] = useState<any>(null);
  const desc = ["terrible", "bad", "normal", "good", "wonderful"];

  const { fetchedData: product_detail, refetchData } = useFetchData(
    `/products/${product_name}`
  );

  const { setIsLoading } = useContext(AntdContext);

  const handleProductReview = async (values: any) => {
    try {
      const accessToken =
        typeof window !== "undefined" &&
        window.localStorage &&
        localStorage.getItem("accessToken");

      const user_id =
        typeof window !== "undefined" &&
        window.localStorage &&
        localStorage.getItem("customer_id");

      const payload = {
        product_id,
        user_id,
        ratings: rating,
        message: values?.review,
      };

      if (!rating) {
        message?.error({
          content: "Please give some stars",
        });
        return;
      }

      if (payload) {
        if (!accessToken) {
          setIsLoading(true);

          message?.error({
            content: "Please login to give the product review",
          });
          setIsLoading(false);
        } else {
          setIsLoading(true);
          const response = await axiosInstance.post("/product/review", payload);

          if (response?.status === 200) {
            setIsLoading(false);

            form.resetFields();
            refetchData();
            setRating(null);
          } else {
            notification.error({
              message: "Sorry Something went wrong",
            });
            form.resetFields();
            setIsLoading(false);
          }
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
    <div className="grid lg:grid-cols-2 gap-10">
      <div className="lg:sticky lg:top-[150px]">
        <Form
          form={form}
          layout="vertical"
          className="flex flex-col gap-4  lg:w-[100%] sticky top-[150px]"
          onFinish={handleProductReview}
        >
          <div className="flex flex-col gap-6 mb-4">
            <div className="text-[25px] font-semibold">
              How would you rate this product ??
            </div>
            <Rate tooltips={desc} onChange={setRating} value={rating} />
          </div>
          <Form.Item
            hasFeedback
            name="review"
            rules={[{ required: true, message: "Please provide your review" }]}
            className=""
          >
            <TextArea
              rows={4}
              cols={10}
              className="w-[100%]"
              placeholder="Enter your review please"
              autoSize={false}
            />
          </Form.Item>

          <Form.Item className="flex items-center justify-start">
            <LoadingButton>Submit</LoadingButton>
          </Form.Item>
        </Form>
      </div>
      <div className="flex flex-col gap-6">
        <div className="text-[25px] font-semibold">
          Review and <span className="text-secondary">Rating</span>
        </div>
        <div className="flex flex-col gap-2 w-[100%]">
          {product_detail?.detail?.reviews?.map((data: any, index: any) => {
            return (
              <div
                key={index}
                className="bg-white hover:drop-shadow-md lg:p-4 px-0 py-2 rounded-[20px]" style={{ boxShadow: "1px 1px 1px 1px grey" }}
              >
                <div className="flex items-start gap-6">
                  <div className="flex items-center ">
                    <div className="bg-secondary text-white ml-6 hover:cursor-pointer w-[35px] h-[35px] p-2 rounded-full flex items-center justify-center">
                      <div className="text-[20px]">
                        {data?.user?.name?.slice(0, 1)?.toUpperCase()}
                      </div>
                    </div>
                  </div>
                  <div>
                    <div>
                      <div className="test-[18px] font-semibold">
                        {data?.user?.name}
                      </div>
                      <Rate value={data?.ratings} disabled />
                    </div>
                    <div>{data?.message}</div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProductReview;
