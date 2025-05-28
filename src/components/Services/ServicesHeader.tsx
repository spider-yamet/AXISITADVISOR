"use client";

import Link from "next/link";
import { ArrowRight2 } from "iconsax-react";
import Image from "next/image";

import pageBanner1 from "/public/images/page-banner1.png";

const ServicesHeader = () => {
  return (
    <>
      <div className="pt-[50px] md:pt-[60px] lg:pt-[80px] xl:pt-[100px]">
        <div className="pb-[50px] md:pb-[60px] lg:pb-[80px] xl:pb-[100px]">
          <div className="container mx-auto">
            <div className="grid items-center gap-[25px] grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
              <div className="lg:pr-[60px] xl:pr-[100px]">
                <h4 className="text-black uppercase text-[15px] md:text-[17px] font-medium mb-[15px]">
                  Spacesius Currency
                </h4>

                <h2 className="text-black font-semibold text-[25px] md:text-[30px] lg:text-[32px] xl:text-[36px] leading-[1.2] mb-[15px] md:mb-[30px]">
                  Rewriting the rules of finance
                  Putting environmental stepwardship at the heart of finanace 
                </h2>

                <p>
                  Transforming your brand's online presence and generating
                  meaningful results is our top priority at{" "}
                  <strong>AXIS IT ADVISOR</strong>. As a leading paid search ad agency.
                </p>

                <div className="mt-[30px] md:mt-[50px]">
                  <Link
                    href="/contact-us/"
                    className="bg-black text-white text-[14px] font-medium inline-block uppercase rounded-full py-[15px] px-[38px] transition duration-500 ease-in-out hover:bg-[#EF4335]"
                  >
                    get your free custom proposal{" "}
                    <ArrowRight2
                      className="inline-block relative -top-[2px]"
                      size={20}
                    />
                  </Link>
                </div>
              </div>

              <div>
                <Image src={pageBanner1} alt="Page Banner" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicesHeader;
