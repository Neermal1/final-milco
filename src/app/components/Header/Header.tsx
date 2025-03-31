"use client";  
import Link from "next/link";  
import { useContext } from "react";  

// Context  
import { AntdContext } from "@/app/antdContext/AntdContext";  
import { CustomerInfoContext } from "@/app/context/CustomerInfoContext";  
import { IoIosMenu } from "react-icons/io";  

// Interface  
import { IHeader } from "@/app/interface/interface";  

// Components  
import SecondaryButton from "../Button/SecondaryButton";  
import AfterLoginHeader from "./AfterLoginHeader";  
import HeaderMenu from "./HeaderMenu";  
import RibbonBar from "./RibbonBar";  
import SmallScreenHeader from "./SmallScreenHeader";  

const Header = ({ header_data }: IHeader) => {  
  const { setOpenDrawer } = useContext(AntdContext);  
  const { customer_name } = useContext(CustomerInfoContext);  
  const { companyProfile, headerItems } = header_data;  

  return (  
    <>  
      <RibbonBar ribbon_bar_data={companyProfile} />  
      <div className="sticky top-0 z-50">  
        <div className="bg-white drop-shadow-md text-black">  
          <div className="layout lg:px-4 px-6 lg:py-0 py-4 lg:items-stretch items-center flex lg:gap-6 gap-20 justify-between">  
            <Link href="/" className="flex items-center my-4">  
              <img  
                src={companyProfile?.logo_link}  
                alt="Company Logo"  
                className="lg:w-[10vh] w-[6vh] object-contain"  
              />  
            </Link>  
            
            {/* Desktop Header Menu */}  
            <div className="lg:flex gap-6 hidden">  
              <HeaderMenu headerItems={headerItems} />  
              <div className="flex items-center justify-center">  
                {customer_name ? (  
                  <AfterLoginHeader />  
                ) : (  
                  <Link href="/sign-up" className="my-6">  
                    <SecondaryButton>  
                      <div>Login/Signup</div>  
                    </SecondaryButton>  
                  </Link>  
                )}  
              </div>  
            </div>  

            {/* Mobile Header Menu */}  
            <div className="lg:hidden flex items-center gap-4">  
              {customer_name && <AfterLoginHeader />}  
              <div  
                onClick={() => {  
                  setOpenDrawer(true);  
                }}  
              >  
                <IoIosMenu size={30} />  
              </div>  
            </div>  
          </div>  
        </div>  
        
        {/* Small Screen Header */}  
        <SmallScreenHeader  
          header_data={{  
            companyProfile,  
            headerItems,  
          }}  
        />  
      </div>  
    </>  
  );  
};  

export default Header;  