"use client";

import Link from "next/link";
import { ArrowRight2 } from "iconsax-react";
import Image from "next/image";

import diagramIcon from "/public/images/diagram.png";
import bullhornIcon from "/public/images/bullhorn.png";
import auctionIcon from "/public/images/auction.png";
import speedometerIcon from "/public/images/speedometer.png";

const WhatWeDo = () => {
  return (
    <>
      <div className="py-[50px] md:py-[60px] lg:py-[80px] xl:py-[100px]">
        <div className="container mx-auto">
          <div className="grid gap-5 grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3">
            <div
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-duration="600"
              data-aos-once="true"
            >
              <h4 className="text-black uppercase text-[15px] md:text-[17px] font-medium mb-[15px]">
                What We Do
              </h4>

              <h2 className="text-black font-semibold text-[25px] md:text-[30px] lg:text-[32px] xl:text-[36px] leading-[1.2]">
                Custom software, web & mobile apps, cloud, cybersecurity, consulting!
              </h2>

              <Link
                href="/about-us/"
                className="font-medium text-black uppercase transition duration-500 ease-in-out inline-block hover:text-[#EF4335] mt-[20px] lg:mt-[40px] xl:mt-[60px]"
              >
                Know More About Us{" "}
                <ArrowRight2
                  className="inline-block relative -top-[2px]"
                  size={18}
                  color="#EF4335"
                />
              </Link>
            </div>

            <div className="lg:col-span-2 xl:pl-[130px]">
              <div 
                className="mb-[30px] md:mb-[40px] lg:mb-[40px] xl:mb-[60px]"
                data-aos="fade-up"
                data-aos-delay="100"
                data-aos-duration="600"
                data-aos-once="true"
              >
                <p>
                  Transforming your brand's online presence and generating
                  meaningful results is our top priority at{" "}
                  <strong>AXIS IT ADVISOR</strong>. As a leading paid search ad agency, we
                  bring together a unique blend of creativity and data-driven
                </p>
              </div>

              <div className="grid gap-6 sm:gap-10 grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
                <div 
                  data-aos="fade-up"
                  data-aos-delay="100"
                  data-aos-duration="600"
                  data-aos-once="true"
                >
                  <Image
                    src={diagramIcon}
                    alt="diagram"
                    className="mb-[20px] w-[70px] h-[70px] rounded-full"
                  />

                  <h3 className="text-[22px] text-black font-semibold mb-[10px]">
                    Campaign Strategy
                  </h3>
                  <p>
                    Work closely with clients to understand their business
                    goals, target audience, and budget. Develop a comprehensive
                    paid search strategy
                  </p>
                </div>

                <div
                  data-aos="fade-up"
                  data-aos-delay="200"
                  data-aos-duration="600"
                  data-aos-once="true"
                >
                  <Image
                    src={bullhornIcon}
                    alt="diagram"
                    className="mb-[20px] w-[70px] h-[70px] rounded-full"
                  />

                  <h3 className="text-[22px] text-black font-semibold mb-[10px]">
                    Campaign Optimization
                  </h3>
                  <p>
                    Work closely with clients to understand their business
                    goals, target audience, and budget. Develop a comprehensive
                    paid search strategy
                  </p>
                </div>

                <div
                  data-aos="fade-up"
                  data-aos-delay="300"
                  data-aos-duration="600"
                  data-aos-once="true"
                >
                  <Image
                    src={auctionIcon}
                    alt="diagram"
                    className="mb-[20px] w-[70px] h-[70px] rounded-full"
                  />

                  <h3 className="text-[22px] text-black font-semibold mb-[10px]">
                    Bid Management
                  </h3>
                  <p>
                    Work closely with clients to understand their business
                    goals, target audience, and budget. Develop a comprehensive
                    paid search strategy
                  </p>
                </div>

                <div
                  data-aos="fade-up"
                  data-aos-delay="400"
                  data-aos-duration="600"
                  data-aos-once="true"
                >
                  <Image
                    src={speedometerIcon}
                    alt="diagram"
                    className="mb-[20px] w-[70px] h-[70px] rounded-full"
                  />

                  <h3 className="text-[22px] text-black font-semibold mb-[10px]">
                    Performance Tracking
                  </h3>
                  <p>
                    Work closely with clients to understand their business
                    goals, target audience, and budget. Develop a comprehensive
                    paid search strategy
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhatWeDo;
