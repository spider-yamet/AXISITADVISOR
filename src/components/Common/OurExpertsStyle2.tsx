"use client";

import Link from "next/link";
import { ArrowRight2 } from "iconsax-react";
import Image from "next/image";

import ourExperts from "/public/images/our-experts.png";

const OurExpertsStyle2 = () => {
  return (
    <>
      <div className="bg-[#F2F2F8] pt-[50px] md:pt-[60px] lg:pt-[80px] xl:pt-[100px]">
        <div className="pb-[50px] md:pb-[60px] lg:pb-[80px] xl:pb-[100px]">
          <div className="container mx-auto">
            <div className="grid items-center gap-[25px] grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
              <div>
                <Image src={ourExperts} alt="Our Experts" />
              </div>

              <div className="lg:pl-[60px] xl:pl-[100px]">
                <div className="mb-[20px] md:mb-[20px] lg:md:mb-[50px]">
                  <h4 className="text-black uppercase text-[15px] md:text-[17px] font-medium mb-[15px]">
                    our experts
                  </h4>

                  <h2 className="text-black font-semibold text-[25px] md:text-[30px] lg:text-[32px] xl:text-[36px] leading-[1.2] mb-[15px] md:mb-[30px]">
                    Beyond the Glow of Screens: Unraveling the Timeless Spell of
                    Offline Advertising Magic
                  </h2>

                  <p>
                    Transforming your brand's online presence and generating
                    meaningful results is our top priority at{" "}
                    <strong>AXIS IT ADVISOR</strong>. As a leading paid search ad agency.
                  </p>
                </div>

                <div className="mt-[30px] md:mt-[50px]">
                  <Link
                    href="/team"
                    className="bg-black text-white text-[14px] font-medium inline-block uppercase rounded-full py-[15px] px-[38px] transition duration-500 ease-in-out hover:bg-[#EF4335]"
                  >
                    meet the team{" "}
                    <ArrowRight2
                      className="inline-block relative -top-[2px]"
                      size={20}
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurExpertsStyle2;
