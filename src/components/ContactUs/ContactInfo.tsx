"use client";

const ContactInfo = () => {
  return (
    <>
      <div className="bg-black rounded-[20px] lg:rounded-l-[20px] lg:rounded-r-[0] space-y-[30px] py-[30px] md:py-[60px] lg:py-[90px] px-[20px] md:px-[50px]">
        <div className="border border-[#585858] rounded-[20px] px-[30px] py-[35px]">
          <h3 className="text-[18px] md:text-[22px] font-semibold text-white mb-[20px] leading-none">
            Office Address
          </h3>
          <div className="flex items-center text-white space-x-[15px]">
            <div className="shrink-0 bg-[#4C4C4C] text-[#EF4335] w-[48px] h-[48px] leading-[50px] text-[25px] inline-block text-center rounded-full">
              <i className="bx bxs-map"></i>
            </div>
            <p>2750 Quadra Street Victoria Road, New York, USA</p>
          </div>
        </div>

        <div className="border border-[#585858] rounded-[20px] px-[30px] py-[35px]">
          <h3 className="text-[18px] md:text-[22px] font-semibold text-white mb-[20px] leading-none">
            Phone Number
          </h3>
          <div className="flex items-center text-white space-x-[15px]">
            <div className="shrink-0 bg-[#4C4C4C] text-[#EF4335] w-[48px] h-[48px] leading-[50px] text-[25px] inline-block text-center rounded-full">
              <i className="bx bxs-phone"></i>
            </div>
            <div>
              <a href="tel:14697300152" className="block hover:text-[#EF4335]">
                (+1) 469-730-0152
              </a>
              <a href="tel:12815947203" className="block hover:text-[#EF4335]">
                (+1) 281-594-7203
              </a>
            </div>
          </div>
        </div>


        import React from 'react';

          <div className="border border-[#585858] rounded-[20px] px-[30px] py-[35px]">
          <h3 className="text-[18px] md:text-[22px] font-semibold text-white mb-[20px] leading-none">
            Email Us
          </h3>
          <div className="flex items-center text-white space-x-[15px]">
            <div className="shrink-0 bg-[#4C4C4C] text-[#EF4335] w-[48px] h-[48px] leading-[50px] text-[25px] inline-block text-center rounded-full">
              <i className="bx bxs-envelope"></i>
            </div>
            <div>
              <a
                href="mailto:support@axisitadvisor.tech"
                className="block hover:text-[#EF4335]"
              >
                support@axisitadvisor.tech
              </a>
              <a
                href="mailto:osytnyk@axisitadvisor.tech"
                className="block hover:text-[#EF4335]"
              >
                osytnyk@axisitadvisor.tech
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactInfo;
