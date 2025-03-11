import Link from "next/link";
import { usePathname } from "next/navigation";

//constants

//react icons
import { RxCaretDown } from "react-icons/rx";

//antd
import { Popover } from "antd";
import { IHeaderItem, IHeaderMenu } from "@/app/interface/interface";

const HeaderMenu = ({ headerItems }: IHeaderMenu) => {
  const pathname = usePathname();

  return (
    <>
      {headerItems?.map((data, index) => {
        const link = data?.slug;
        const content = (
          <div>
            <div className="flex flex-col gap-2">
              {data?.subMenu?.map((data, index: number) => {
                return (
                  <Link
                    key={index}
                    href={`${link}/${data?.slug}`}
                    className="text-[16px] uppercase "
                  >
                    <div key={index}>{data?.name}</div>
                  </Link>
                );
              })}
            </div>
          </div>
        );
        return (
          <Popover
            content={data?.subMenu && content}
            key={index}
            trigger="hover"
          >
            <Link
              href={`${!data?.subMenu ? data?.slug : "#"}`}
              key={index}
              className={`lg:hover:bg-primary lg:hover:text-white flex px-2 items-center justify-center hover:cursor-pointer ${
                (pathname === data?.slug ||
                  pathname.startsWith(data?.slug + "/")) &&
                "text-white bg-primary hover:cursor-pointer"
              }`}
            >
              <div className="flex items-center hover:cursor-pointer uppercase  font-semibold">
                <div>{data?.name}</div>
                <div>
                  {data?.subMenu && (
                    <div>
                      <RxCaretDown />
                    </div>
                  )}
                </div>
              </div>
            </Link>
          </Popover>
        );
      })}
    </>
  );
};

export default HeaderMenu;
