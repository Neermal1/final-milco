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
                        name: name || "Unnamed Product",
                        description: description || "No description available.",
                        product_category_id: product_category_id ?? 0,
                        image_link: image_link || "/default-product.jpg",
                        slug: slug || "#",
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
