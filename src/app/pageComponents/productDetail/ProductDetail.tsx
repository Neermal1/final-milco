"use client";
import SecondaryButton from "@/app/components/Button/SecondaryButton";
import Card from "@/app/components/Card/Card";
import ComponentHeader from "@/app/components/componentHeader/ComponentHeader";
import { IProductDetail } from "@/app/interface/interface";
import ProductReview from "./ProductReview";
import { useContext } from "react";
import { AntdContext } from "@/app/antdContext/AntdContext";
import ProductEnquiryModal from "@/app/components/ProductEnquiryForm/ProductEnquiryModal";

const ProductDetail = ({ product_detail }: IProductDetail) => {
  const { openEnquiryModal, setEnquiryModal } = useContext(AntdContext);

  return (
    <div className="layout component-padding">
      <div className="flex flex-col gap-[100px]">
        <div className=" grid lg:grid-cols-2 gap-20">
          <div>
            <img
              src={product_detail?.detail?.image_link}
              alt=""
              className="rounded-[8px] w-full h-[60vh] object-contain "
            />
          </div>
          <div className="flex flex-col gap-6">
            <div className="lg:text-[38px] text-[30px] font-semibold text-primary">
              {product_detail?.detail?.name}
            </div>
            <div className="flex flex-col gap-10 text-justify">
              <div
                dangerouslySetInnerHTML={{
                  __html: product_detail?.detail?.description || "",
                }}
              />
              <div className="flex items-center justify-center">
                <div className="w-[40%] hover:cursor-pointer">
                  <div
                    onClick={() => {
                      setEnquiryModal(!openEnquiryModal);
                    }}
                  >
                    <SecondaryButton>Enquiry</SecondaryButton>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {product_detail?.detail?.additional_information && (
          <div className="flex flex-col gap-4">
            <div className="text-[25px] font-semibold">
              Additional <span className="text-secondary">Information</span>
            </div>
            <div
              dangerouslySetInnerHTML={{
                __html: product_detail?.detail?.additional_information,
              }}
            />
          </div>
        )}

        <div>
          <ProductReview product_id={product_detail?.detail?.id} />
        </div>
        <div>
          <ComponentHeader
            data={{
              heading: "Related Products",
              subheading: "",
            }}
          />
          <div>
            <div className="grid lg:grid-cols-3 gap-[60px]">
              {product_detail?.relateds?.map((product) => {
                const {
                  name,
                  description,
                  product_category_id,
                  image_link,
                  slug,
                  id,
                } = product;
                return (
                  <div key={id}>
                    <Card
                      data={{
                        name,
                        description: "",
                        product_category_id,
                        image_link,
                        slug,
                      }}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <ProductEnquiryModal />
    </div>
  );
};

export default ProductDetail;
