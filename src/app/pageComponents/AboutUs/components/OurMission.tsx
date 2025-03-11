import { ICompanyData } from "@/app/interface/interface";

const OurMission = ({ data }: ICompanyData) => {
  return (
    <div className="layout component-padding">
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-10">
      <div className="flex lg:justify-end hidden lg:block overflow-hidden   sticky top-[150px]">
          <img
            src="https://t4.ftcdn.net/jpg/06/13/33/21/360_F_613332177_rdl36d2CnlqC1tqGQE3CizEJdu9G2Ltj.jpg"
            alt="loading"
            className="xl:h-[50vh] lg:h-[25vh] 3xl:h-[40vh] w-[100%] object-cover rounded-[8px] hover:scale-110 transition-all duration-700"
          />
        </div>
        <div className="flex flex-col gap-6">
          <div className="lg:text-[38px] text-[30px] font-semibold">
            Our Mission{" "}
            <span
              style={{
                color: "var(--accent-color)",
              }}
            >
              and Vision
            </span>
          </div>
          <div
            className="text-[18px] text-justify"
            dangerouslySetInnerHTML={{
              __html: data?.mission,
            }}
          ></div>

          <div
            className="text-[18px] text-justify"
            dangerouslySetInnerHTML={{
              __html: data?.vision,
            }}
          ></div>
        </div>
        <div className="flex lg:justify-end lg:hidden sm:block overflow-hidden   sticky top-[150px]">
          <img
            src="https://t4.ftcdn.net/jpg/06/13/33/21/360_F_613332177_rdl36d2CnlqC1tqGQE3CizEJdu9G2Ltj.jpg"
            alt="loading"
            className="xl:h-[50vh] lg:h-[25vh] 3xl:h-[40vh] w-[100%] object-cover rounded-[8px] hover:scale-110 transition-all duration-700"
          />
        </div>
      </div>
    </div>
  );
};

export default OurMission;
