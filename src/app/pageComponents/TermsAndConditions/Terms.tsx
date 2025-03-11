import React from "react";
import { TbPointFilled } from "react-icons/tb";

const Terms = () => {
  return (
    <div>
      <div className="max-w-5xl mx-auto bg-white rounded-[8px] p-8 drop-shadow-md mt-[-60px] mb-20">
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-4">
            <div className="main-text">1. Introduction</div>
            <div className="medium-text">
              Welcome to MahaDeals! By accessing and using our platform, you
              agree to comply with these Terms of Use. Please read them
              carefully.
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div className="main-text">2. User Responsibilities:</div>
            <div className="">
              <div className="flex gap-2 ">
                <div className="translate-y-[3px]">
                  <TbPointFilled />
                </div>
                <div className="medium-text">
                  Use the platform responsibly and follow all applicable laws.
                </div>
              </div>
            </div>
            <div className="">
              <div className="flex gap-2 ">
                <div className="translate-y-[3px]">
                  <TbPointFilled />
                </div>
                <div className="medium-text">
                  Respect the rights and privacy of others, including businesses
                  and fellow users.
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div className="main-text">3. Account Creation:</div>
            <div className="">
              <div className="flex gap-2 ">
                <div className="translate-y-[3px]">
                  <TbPointFilled />
                </div>
                <div className="medium-text">
                  You may need to create an account to access certain features.
                </div>
              </div>
            </div>

            <div className="">
              <div className="flex gap-2 ">
                <div className="translate-y-[3px]">
                  <TbPointFilled />
                </div>
                <div className="medium-text">
                  Keep your account information secure and accurate.
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div className="main-text">4. Content and Use:</div>
            <div className="">
              <div className="flex gap-2 ">
                <div className="translate-y-[3px]">
                  <TbPointFilled />
                </div>
                <div className="medium-text">
                  Content on our platform is for informational purposes only.
                </div>
              </div>
            </div>
            <div className="">
              <div className="flex gap-2 ">
                <div className="translate-y-[3px]">
                  <TbPointFilled />
                </div>
                <div className="medium-text">
                  Users are responsible for their interactions and any content
                  they post.
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div className="main-text">5.Deals and Discounts:</div>
            <div className="">
              <div className="flex gap-2 ">
                <div className="translate-y-[3px]">
                  <TbPointFilled />
                </div>
                <div className="medium-text">
                  Deals and discounts are subject to availability and terms set
                  by businesses
                </div>
              </div>
            </div>

            <div className="">
              <div className="flex gap-2 ">
                <div className="translate-y-[3px]">
                  <TbPointFilled />
                </div>
                <div className="medium-text">
                  We are not responsible for business services or the
                  fulfillment of deals.
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div className="main-text">6. Intellectual Property:</div>
            <div className="">
              <div className="flex gap-2 ">
                <div className="translate-y-[3px]">
                  <TbPointFilled />
                </div>
                <div className="medium-text">
                  Respect intellectual property rights when using our platform
                </div>
              </div>
            </div>
            <div className="">
              <div className="flex gap-2 ">
                <div className="translate-y-[3px]">
                  <TbPointFilled />
                </div>
                <div className="medium-text">
                  You may not use our content without permission.
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div className="main-text">7. Privacy:</div>
            <div className="medium-text">
              We collect and use data in accordance with our Privacy Policy.
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div className="main-text">8. Termination:</div>
            <div className="medium-text">
              We reserve the right to terminate or suspend accounts for
              violations.
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div className="main-text">9. Limitation of Liability:</div>
            <div className="medium-text">
              We are not liable for any damages arising from platform use.
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div className="main-text">10. Change to Terms:</div>
            <div className="medium-text">
              We may update these Terms of Use; check periodically for changes.
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div className="main-text">11. Governing Law:</div>
            <div className="medium-text">
              These terms are governed by the laws of Nepal.
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div className="main-text">12. Contact Us</div>
            <div className="medium-text">
              If you have questions or concerns, please contact us at +977
              986-2617867.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Terms;
