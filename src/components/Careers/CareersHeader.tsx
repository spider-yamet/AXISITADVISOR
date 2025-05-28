"use client";

import Link from "next/link"; 
import { ArrowRight2 } from "iconsax-react";

import Image from "next/image";

import pageBanner5 from "/public/images/page-banner5.jpg";
import brand from "/public/images/brand-white-lg.png";
import shapeImg from "/public/images/shape1.png"; 

const CareersHeader = () => {
  return (
    <>
      <div className="pt-[50px] md:pt-[60px] lg:pt-[80px] xl:pt-[100px]">
        <div className="container mx-auto">
          <div className="grid items-center gap-[30px] grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
            <div className="lg:pr-[60px] xl:pr-[120px]">
              <h4 className="text-black uppercase text-[15px] md:text-[17px] font-medium mb-[15px]">
                Award Winning Agency
              </h4>

              <h2 className="text-black font-semibold text-[25px] md:text-[30px] lg:text-[32px] xl:text-[36px] leading-[1.2] mb-[15px] md:mb-[30px]">
                Delivering tailored technology solutions to optimize business performance and efficiency
              </h2>

              <p>
                Transforming your brand's online presence and generating
                meaningful results is our top priority at{" "}
                <strong>AXIS IT ADVISOR</strong>. As a leading paid search ad agency,
              </p>

              <Link
                href="/about-us/"
                className="bg-black text-white text-[14px] font-medium inline-block uppercase rounded-full py-[15px] px-[38px] mt-[20px] md:mt-[30px] lg:mt-[40px] transition duration-500 ease-in-out hover:bg-[#EF4335]"
              >
                know more about us{" "}
                <ArrowRight2
                  className="inline-block relative -top-[2px]"
                  size={20}
                />
              </Link>
            </div>

            <div className="lg:pl-[40px] xl:pl-[60px] 2xl:pl-[100px]">
              <div className="relative pr-[14px] before:content-[''] before:absolute before:bg-[#EF4335] before:w-[98%] before:h-full before:top-[14px] before:right-0 before:rounded-[20px] before:z-[0]">
                <Image
                  src={pageBanner5}
                  alt="About"
                  className="rounded-[20px] relative"
                />

                <Image
                  src={brand}
                  alt="brand"
                  className="absolute bottom-[25px] right-[40px]"
                />
                <Image
                  src={shapeImg}
                  alt="shape"
                  className="absolute top-0 left-[-78px] hidden lg:block"
                />
              </div> 
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CareersHeader;
