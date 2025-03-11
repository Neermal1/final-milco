import ComponentHeader from "@/app/components/componentHeader/ComponentHeader";
import { ICompanyData } from "@/app/interface/interface";

const CoreValues = ({ data }: ICompanyData) => {
  return (
    <div className="layout component-padding flex flex-col gap-10">
      <ComponentHeader
        data={{
          heading: "Our Core Values",
          subheading: "",
        }}
      />
      <div className="grid lg:grid-cols-12 gap-10">
        <div className="flex flex-col gap-12 lg:col-span-7">
          <div
            dangerouslySetInnerHTML={{
              __html: data?.introduction,
            }}
          />
        </div>
        <div className="lg:col-span-5 ">
          <div className="sticky top-[140px]">
            <img src={data?.image_link} alt="" className="rounded-[8px]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoreValues;
