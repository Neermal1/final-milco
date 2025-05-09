import Button from "@/app/components/Button/Button";
import Link from "next/link";

const NewsInfo = ({ data }: any) => {
  return (
    <div className="layout component-padding">
      <div className="grid lg:grid-cols-8 lg:gap-[100px] gap-10">
        <div className="lg:col-span-5 flex flex-col gap-6">
          <div className="flex flex-col gap-6">
            <div className="text-[30px] text-primary font-semibold mb-3">
              {data?.detail?.title}
            </div>
            <div>
              <img
                src={data?.detail?.image_link}
                alt=""
                className="w-[100%] lg:h-[60vh] h-[40vh] object-cover"
              />
            </div>
            <div
              className="leading-[28px]"
              dangerouslySetInnerHTML={{
                __html: data?.detail?.description,
              }}
            />
          </div>
        </div>
        <div className="lg:col-span-3 sticky top-[80px]">
          <div className="bg-white drop-shadow-md p-6 sticky top-[140px]">
            <div className="flex flex-col gap-6">
              <div className="text-secondary text-[22px]">Related Blogs</div>
              <div className="flex flex-col gap-8">
                {data?.others?.map((data: any, index: number) => {
                  return (
                    <Link href={`/news/${data?.slug}`} key={index}>
                      <div className="flex items-center gap-4">
                        <div>
                          <img
                            src={data?.image_link}
                            alt=""
                            className="w-[10vh] object-cover rounded-[8px]"
                          />
                        </div>
                        <div>{data?.title}</div>
                      </div>
                    </Link>
                  );
                })}
              </div>
              <div className="flex items-center justify-center">
                <Link href="/news">
                  <Button>View More</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsInfo;
