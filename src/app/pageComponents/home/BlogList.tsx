"use client";
import ComponentHeader from "@/app/components/componentHeader/ComponentHeader";
import { IBlogs } from "@/app/interface/interface";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { CiClock2 } from "react-icons/ci";

const BlogList = ({ blog_data }: IBlogs) => {
  const pathname = usePathname();
  return (
    <div className="bg-[#F5F7FA]">
      <div className="flex flex-col gap-10 layout component-padding">
        {pathname !== "/news" && (
          <div className="flex items-center justify-center ">
            <ComponentHeader
              data={{
                heading: "Latest Blogs",
                subheading: "",
              }}
            />
          </div>
        )}
        <div className="grid lg:grid-cols-3 gap-10">
          {blog_data?.slice(0, 6)?.map((blog_data, index: number) => {
            return (
              <Link
                href={`/blogs/${blog_data?.slug}`}
                key={index}
                className="bg-white group   hover:drop-shadow-md"
              >
                <div className="">
                  <div className="flex flex-col gap-6">
                    <div className="overflow-hidden">
                      <img
                        src={blog_data?.image_link}
                        alt=""
                        className="h-[40vh] w-[100%] object-cover transform transition duration-500 ease-in-out group-hover:scale-110"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex gap-2 items-center italic">
                        <div className="ml-[4px]">
                          <CiClock2 size={20} />
                        </div>
                        <div>
                          {new Date(blog_data?.created_at).toLocaleDateString(
                            "en-US",
                            {
                              year: "numeric",
                              month: "long",
                              day: "numeric",
                            }
                          )}
                        </div>
                      </div>
                      <div className="flex flex-col gap-4">
                        <div className="lg:text-[20px] text-primary  font-semibold mt-3">
                          {blog_data?.title}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default BlogList;
