"use client";
import { ICompanyData } from "@/app/interface/interface";
import { FaAddressBook, FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import ContactForm from "./ContactForm";

const ContactDetail = ({ data: companyProfile }: ICompanyData) => {
  return (
    <div>
      <div className="layout component-padding">
        <div className="grid lg:grid-cols-8 gap-20">
          <div className="lg:col-span-5 flex flex-col gap-6 ">
            <div className="sticky top-[140px] flex flex-col gap-10">
              <div className="grid lg:grid-cols-2 gap-6 ">
                <div className="flex gap-4">
                  <div className="translate-y-[5px]">
                    <FaAddressBook size={20} className="text-primary" />
                  </div>
                  <div>
                    <div className="text-primary text-xl w-fit">Address</div>
                    <div>{companyProfile?.company_address}</div>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="translate-y-[5px]">
                    <FaPhoneAlt size={20} className="text-primary" />
                  </div>
                  <div>
                    <div className="text-primary text-xl w-fit">Phone</div>
                    <a href={`tel:${companyProfile?.company_phone}`}>
                      {companyProfile?.company_phone}
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="translate-y-[5px]">
                    <MdEmail size={20} className="text-primary" />
                  </div>
                  <div>
                    <div className="text-primary text-xl w-fit">Email</div>
                    <a href={`mailto:${companyProfile?.company_email}`}>
                      {companyProfile?.company_email}
                    </a>
                  </div>
                </div>
              </div>
              <div>
                <div className="w-[40vh] lg:w-[100%] h-[55vh] overflow-x-scroll">
                  <div
                    className=""
                    dangerouslySetInnerHTML={{ __html: companyProfile?.map }}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-3">
            <ContactForm
              data={{
                bg_status: true,
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactDetail;
