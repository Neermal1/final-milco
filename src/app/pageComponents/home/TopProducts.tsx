"use client";
import Card from "@/app/components/Card/Card";
import ProductEnquiryModal from "@/app/components/ProductEnquiryForm/ProductEnquiryModal";
import { IProduct } from "@/app/interface/interface";
import ComponentHeader from "../../components/componentHeader/ComponentHeader";

const TopProducts = ({ product_data }: IProduct) => {
  return (
    <div className="layout component-padding">
      <div className="flex-col-layout">
        <ComponentHeader
          data={{
            heading: "Our Top Products",
            subheading: "",
          }}
        />
      <div className="grid lg:grid-cols-3 gap-[60px]">
  {product_data?.map((product) => {
    const { name, product_category_id, image_link, slug, id } = product;
    return (
      <div key={id}>
        <Card
          data={{
            name,
            product_category_id,
            image_link,
            slug,
            description: "", // Empty string to avoid errors
          }}
        />
      </div>
    );
  })}
</div>

      </div>
      <ProductEnquiryModal />
    </div>
  );
};

export default TopProducts;
