"use client";
import { useContext } from "react";
import Link from "next/link"; // ✅ Import Next.js Link
import { AntdContext } from "@/app/antdContext/AntdContext";
import Card from "@/app/components/Card/Card";
import ComponentHeader from "../../components/componentHeader/ComponentHeader";
import { IProduct } from "@/app/interface/interface";
import ProductEnquiryModal from "@/app/components/ProductEnquiryForm/ProductEnquiryModal";

const TopProducts = ({ product_data }: IProduct) => {
  const context = useContext(AntdContext);
  if (!context) return null; // Ensure context exists

  const { setEnquiryModal } = context;

  return (
    <div className="layout component-padding">
      <div className="flex flex-col items-center space-y-6">
        <ComponentHeader data={{ heading: "Our Top Products", subheading: "" }} />
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {product_data?.map((product) => (
            <div key={product.id} className="flex flex-col items-center bg-white shadow-md rounded-lg p-4 w-full max-w-[320px]">
              
              {/* ✅ Clickable Image & Title -> Goes to Product Description Page */}
              <Link href={`/product/${product.slug}`} passHref>
                <div className="cursor-pointer">
                  <img
                    src={product.image_link}
                    alt={product.name}
                    className="w-full h-40 object-contain"
                  />
                  <h3 className="text-lg font-semibold text-center mt-2">{product.name}</h3>
                </div>
              </Link>

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

      {/* Product Enquiry Modal */}
      <ProductEnquiryModal />
    </div>
  );
};

export default TopProducts;
