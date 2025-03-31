import Link from "next/link";  
import { usePathname } from "next/navigation";  
import { Popover } from "antd";  
import { RxCaretDown } from "react-icons/rx";  
import { IHeaderMenu } from "@/app/interface/interface";  

const capitalizeFirstLetter = (string: string) => {  
  return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();  
};  

const HeaderMenu = ({ headerItems }: IHeaderMenu) => {  
  const pathname = usePathname();  

  return (  
    <>  
      {headerItems?.map((data, index) => {  
        const link = data?.slug; // Base link for the header item  

        // Create content for sub-menu  
        const content = (  
          <div>  
            <div className="flex flex-col gap-2">  
              {data?.subMenu?.map((subItem, subIndex) => (  
                <Link  
                  key={subIndex}  
                  href={`${link}/${subItem?.slug}`}  
                  className="text-[16px]" // Remove lowercase class to let capitalize take effect  
                >  
                  <div>{capitalizeFirstLetter(subItem?.name)}</div>  
                </Link>  
              ))}  
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
              className={`lg:hover:bg-primary lg:hover:text-white flex px-2 items-center justify-center hover:cursor-pointer ${  
                (pathname === data?.slug || pathname.startsWith(data?.slug + "/")) &&   
                "text-white bg-primary"  
              }`}  
            >  
              <div className="flex items-center font-semibold">  {/* Removed lowercase class */}  
                <div>{capitalizeFirstLetter(data?.name)}</div>  
                {data?.subMenu && (  
                  <div>  
                    <RxCaretDown />  
                  </div>  
                )}  
              </div>  
            </Link>  
          </Popover>  
        );  
      })}  
    </>  
  );  
};  

export default HeaderMenu;  