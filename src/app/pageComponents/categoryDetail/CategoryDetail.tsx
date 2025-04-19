"use client";
import Card from "@/app/components/Card/Card";
import ComponentHeader from "@/app/components/componentHeader/ComponentHeader";
import ProductEnquiryModal from "@/app/components/ProductEnquiryForm/ProductEnquiryModal";
import { ICategoryDetail } from "@/app/interface/interface";

const CategoryDetail = ({ category_detail }: ICategoryDetail) => {
  return (
    <div>
      <div>
        <div className="layout component-padding">
          <div className="flex-col-layout">
            <ComponentHeader
              data={{
                heading: "Our Category Products",
                subheading: "",
              }}
            />
            <div className="grid lg:grid-cols-3 gap-[60px]">
              {category_detail?.products?.map((product) => {
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
                        description,
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

export default CategoryDetail;
