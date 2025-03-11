import { IGalleryList } from "@/app/interface/interface";
import Link from "next/link";

const Galleries = ({ gallery_list_data }: IGalleryList) => {
  return (
    <div>
      <div className="layout component-padding">
        <div className="grid lg:grid-cols-3 grid-cols-1 gap-10">
          {gallery_list_data?.map((data, index: any) => {
            return (
              <div key={data?.id}>
                <Link
                  href={`/gallery/${data?.slug}`}
                  className="hover:cursor-pointer group overflow-hidden rounded-[8px] flex flex-col gap-4"
                >
                  <div className="overflow-hidden rounded-[8px]">
                    <img
                      src={data?.image_link}
                      alt=""
                      className="object-cover h-[40vh]   w-[100%] transform transition duration-500 ease-in-out group-hover:scale-110"
                    />
                  </div>
                  <div className="text-[20px] font-semibold text-primary text-center">{data?.name}</div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Galleries;
