"use client";
import { useContext } from "react";
import SecondaryButton from "@/app/components/Button/SecondaryButton";
import Card from "@/app/components/Card/Card";
import ComponentHeader from "@/app/components/componentHeader/ComponentHeader";
import { IProductDetail } from "@/app/interface/interface";
import ProductReview from "./ProductReview";
import { AntdContext } from "@/app/antdContext/AntdContext";
import ProductEnquiryModal from "@/app/components/ProductEnquiryForm/ProductEnquiryModal";

const ProductDetail = ({ product_detail }: IProductDetail) => {
  const { openEnquiryModal, setEnquiryModal } = useContext(AntdContext);

  return (
    <div className="layout component-padding">
      <div className="flex flex-col gap-[100px]">
        {/* Product Section */}
        <div className="grid lg:grid-cols-2 gap-20">
          {/* Image Container */}
          <div className="w-full lg:w-[80%] mx-auto flex items-start">
            <img
              src={product_detail?.detail?.image_link}
              alt={product_detail?.detail?.name}
              className="rounded-[8px] w-full h-auto object-contain"
            />
          </div>

          {/* Product Details */}
          <div className="flex flex-col gap-6">
            <h1 className="lg:text-[38px] text-[30px] font-semibold text-primary">
              {product_detail?.detail?.name}
            </h1>

            <div className="flex flex-col gap-10 text-justify">
              <div
                dangerouslySetInnerHTML={{
                  __html: product_detail?.detail?.description || "",
                }}
              />
              <div className="flex items-center justify-center">
                <div className="w-[40%] hover:cursor-pointer">
                  <div
                    onClick={() => setEnquiryModal(!openEnquiryModal)}
                  >
                    <SecondaryButton>Enquiry</SecondaryButton>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Information */}
        {product_detail?.detail?.additional_information && (
          <div className="flex flex-col gap-4">
            <h2 className="text-[25px] font-semibold">
              Additional <span className="text-secondary">Information</span>
            </h2>
            <div
              dangerouslySetInnerHTML={{
                __html: product_detail?.detail?.additional_information,
              }}
            />
          </div>
        )}

        {/* Product Review Section */}
        <ProductReview product_id={product_detail?.detail?.id} />

        {/* Related Products Section */}
        {product_detail?.relateds?.length > 0 && (
          <div className="flex flex-col items-center space-y-6">
            <ComponentHeader data={{ heading: "Related Products", subheading: "" }} />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
              {product_detail.relateds.map((product) => (
                <div
                  key={product.id}
                  className="flex flex-col items-center bg-white shadow-md rounded-lg p-4 w-full max-w-[320px]"
                >
                  {/* Clickable Image & Title */}
                  <a href={`/product/${product.slug}`} className="cursor-pointer">
                    <img
                      src={product.image_link}
                      alt={product.name}
                      className="w-full h-40 object-contain"
                    />
                    <h3 className="text-lg font-semibold text-center mt-2">{product.name}</h3>
                  </a>

                  {/* Make Enquiry Button */}
                  <button
                    onClick={() => setEnquiryModal(true)}
                    className="bg-primary text-white px-4 py-2 rounded-md text-sm w-full mt-2"
                  >
                    Make Enquiry
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Product Enquiry Modal */}
      <ProductEnquiryModal />
    </div>
  );
};

export default ProductDetail;
