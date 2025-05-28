"use client";

import Link from "next/link";
import { ArrowRight2 } from "iconsax-react";

const ServicesCard = () => {
  return (
    <>
      <div className="pb-[50px] md:pb-[60px] lg:pb-[80px] xl:pb-[100px]">
        <div className="container mx-auto">
          {/* Section Header */}
          <div className="max-w-[536px] mx-auto text-center mb-[30px] lg:mb-[60px]">
            <h4 className="text-black uppercase text-[15px] md:text-[17px] font-medium mb-[15px]">
              Capabilities
            </h4>

            <h2 className="text-black font-semibold text-[25px] md:text-[30px] lg:text-[32px] xl:text-[36px] leading-[1.2]">
              Delivering tailored technology solutions to optimize business performance and efficiency
            </h2>
          </div>

          {/* Services Card */}
          <div className="grid gap-[25px] grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 2xl:grid-cols-4">
            <div className="bg-white rounded-[20px] py-[50px] px-[40px] hover:bg-[#FAF4F4] transition delay-100 duration-300 ease-in-out">
              <div className="bg-[#F2F2F8] w-[70px] h-[70px] leading-[70px] rounded-full text-center mb-[15px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  className="inline-block"
                >
                  <path
                    d="M1.37996 21.9998C0.971339 22.7083 0.731136 23.5013 0.677926 24.3174C0.624715 25.1336 0.759922 25.951 1.07309 26.7065C1.38626 27.4621 1.869 28.1355 2.48399 28.6747C3.09898 29.2139 3.82973 29.6044 4.61975 29.816C5.40976 30.0277 6.23788 30.0548 7.04005 29.8953C7.84223 29.7358 8.59697 29.394 9.24593 28.8962C9.89488 28.3984 10.4207 27.7581 10.7826 27.0246C11.1446 26.2912 11.333 25.4843 11.3333 24.6665C11.3338 23.492 10.9465 22.3503 10.2318 21.4184C9.51698 20.4866 8.5146 19.8167 7.38017 19.5127C6.24575 19.2088 5.04273 19.2878 3.9578 19.7375C2.87287 20.1872 1.96672 20.9824 1.37996 21.9998Z"
                    fill="#EF4335"
                  />
                  <path
                    d="M9.3866 8.1333L3.3866 18.5333C4.33816 18.1276 5.37108 17.9489 6.40364 18.0113C7.4362 18.0737 8.44007 18.3756 9.33583 18.893C10.2316 19.4104 10.9946 20.1291 11.5646 20.9924C12.1346 21.8556 12.4959 22.8396 12.6199 23.8666L15.2333 19.3333C10.2733 10.76 9.55326 9.93997 9.3866 8.1333Z"
                    fill="#EF4335"
                  />
                  <path
                    d="M30.62 21.9999C30.28 21.4266 20.5333 4.48655 20.34 4.23989C19.5377 3.1208 18.3336 2.35541 16.9797 2.1039C15.6259 1.85239 14.2273 2.13425 13.0765 2.8905C11.9258 3.64675 11.1121 4.81878 10.8058 6.16128C10.4996 7.50379 10.7244 8.91272 11.4333 10.0932C11.3667 10.0932 11.1 9.51989 21.38 27.3332C21.7302 27.9399 22.1965 28.4717 22.7522 28.8982C23.3079 29.3247 23.9422 29.6376 24.6188 29.819C25.2954 30.0004 26.0011 30.0467 26.6957 29.9554C27.3902 29.864 28.06 29.6367 28.6667 29.2866C29.2734 28.9364 29.8052 28.4701 30.2317 27.9144C30.6582 27.3587 30.9711 26.7244 31.1525 26.0478C31.3338 25.3711 31.3802 24.6654 31.2888 23.9709C31.1975 23.2763 30.9702 22.6066 30.62 21.9999Z"
                    fill="#EF4335"
                  />
                </svg>
              </div>

              <h3 className="text-black text-[20px] md:text-[22px] font-semibold mb-[10px]">
                Google Ads
              </h3>
              <p>
                Work closely with clients to understand their business goals,
                target audience, and budget. Develop a comprehensive
              </p>

              <Link
                href="/services/service-details/"
                className="text-black text-[14px] mt-[25px] font-medium inline-block uppercase transition duration-500 ease-in-out hover:text-[#EF4335]"
              >
                read more{" "}
                <ArrowRight2
                  className="inline-block relative -top-[2px]"
                  size={20}
                  color="#EF4335"
                />
              </Link>
            </div>

            <div className="bg-white rounded-[20px] py-[50px] px-[40px] hover:bg-[#FAF4F4] transition delay-100 duration-300 ease-in-out">
              <div className="bg-[#F2F2F8] w-[70px] h-[70px] leading-[70px] rounded-full text-center mb-[15px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  className="inline-block"
                >
                  <g clipPath="url(#clip0_126_236)">
                    <path
                      d="M0 17.5442V26.8651L13.307 28.776V17.5442H0Z"
                      fill="#EF4335"
                    />
                    <path
                      d="M13.307 3.22607L0 5.13692V14.4578H13.307V3.22607Z"
                      fill="#EF4335"
                    />
                    <path
                      d="M32 14.4579V0.384277L16.3955 2.62397V14.4579H32Z"
                      fill="#EF4335"
                    />
                    <path
                      d="M16.3955 29.3781L32 31.6156V17.5442H16.3955V29.3781Z"
                      fill="#EF4335"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_126_236">
                      <rect width="32" height="32" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>

              <h3 className="text-black text-[20px] md:text-[22px] font-semibold mb-[10px]">
                Microsoft Ads
              </h3>
              <p>
                Work closely with clients to understand their business goals,
                target audience, and budget. Develop a comprehensive
              </p>

              <Link
                href="/services/service-details/"
                className="text-black text-[14px] mt-[25px] font-medium inline-block uppercase transition duration-500 ease-in-out hover:text-[#EF4335]"
              >
                read more{" "}
                <ArrowRight2
                  className="inline-block relative -top-[2px]"
                  size={20}
                  color="#EF4335"
                />
              </Link>
            </div>

            <div className="bg-white rounded-[20px] py-[50px] px-[40px] hover:bg-[#FAF4F4] transition delay-100 duration-300 ease-in-out">
              <div className="bg-[#F2F2F8] w-[70px] h-[70px] leading-[70px] rounded-full text-center mb-[15px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  className="inline-block"
                >
                  <g clipPath="url(#clip0_127_274)">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M5.93614 19.663C2.78964 19.6622 0.215576 17.0876 0.215576 13.941C0.215576 10.7939 2.79045 8.21902 5.93758 8.21902L10.8628 8.21909C10.8628 11.987 10.9905 15.9433 10.8628 19.663H5.93614ZM10.9353 21.8292C11.0341 22.7781 11.2251 23.7182 11.5236 24.6155C11.9755 25.9733 12.7038 27.3045 13.7752 28.2725C13.9814 28.4589 14.0624 28.7202 14.0084 28.9915L13.5319 31.3871C13.4806 31.6451 13.3182 31.8423 13.074 31.9407C12.8225 32.042 12.575 32.013 12.3529 31.8585C10.589 30.6308 9.30083 28.8268 8.4587 26.8682C7.7737 25.2751 7.36895 23.5611 7.20858 21.8292H10.9353ZM13.029 7.96552V19.8717C19.117 21.1968 24.1798 24.8327 29.0173 27.8476C29.6029 28.2127 30.3388 27.9828 30.9066 27.6073C31.4745 27.2318 31.7845 26.6711 31.7845 26.019V1.9794C31.7845 1.32958 31.4767 0.770522 30.912 0.39471C30.3472 0.0189599 29.6553 -0.139103 29.03 0.146647C24.6363 2.15546 19.0411 6.38565 13.029 7.96552Z"
                      fill="#EF4335"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_127_274">
                      <rect width="32" height="32" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>

              <h3 className="text-black text-[20px] md:text-[22px] font-semibold mb-[10px]">
                Social Media Ads
              </h3>
              <p>
                Work closely with clients to understand their business goals,
                target audience, and budget. Develop a comprehensive
              </p>

              <Link
                href="/services/service-details/"
                className="text-black text-[14px] mt-[25px] font-medium inline-block uppercase transition duration-500 ease-in-out hover:text-[#EF4335]"
              >
                read more{" "}
                <ArrowRight2
                  className="inline-block relative -top-[2px]"
                  size={20}
                  color="#EF4335"
                />
              </Link>
            </div>

            <div className="bg-white rounded-[20px] py-[50px] px-[40px] hover:bg-[#FAF4F4] transition delay-100 duration-300 ease-in-out">
              <div className="bg-[#F2F2F8] w-[70px] h-[70px] leading-[70px] rounded-full text-center mb-[15px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  className="inline-block"
                >
                  <path
                    d="M5.09959 6.90894C5.00858 6.90864 4.92075 6.94244 4.85344 7.0037C4.78613 7.06496 4.74421 7.14921 4.73595 7.23985L2.55413 31.2398C2.55013 31.2902 2.55655 31.3408 2.57298 31.3885C2.58941 31.4362 2.6155 31.48 2.64962 31.5172C2.68374 31.5544 2.72516 31.5842 2.7713 31.6047C2.81744 31.6251 2.8673 31.6359 2.91777 31.6362H19.9687L22.216 6.90894H5.09959Z"
                    fill="#EF4335"
                  />
                  <path
                    d="M9.59636 5.35614C9.69709 4.18885 10.2332 3.10216 11.0982 2.31193C11.9632 1.5217 13.0938 1.08575 14.2655 1.09069C14.6443 1.09002 15.0217 1.13644 15.3891 1.22887C14.6998 1.6753 14.1217 2.27332 13.6988 2.97728C13.2759 3.68123 13.0195 4.47251 12.9491 5.29069L12.8691 6.1816H13.5964L13.6727 5.35614C13.7444 4.54932 14.0239 3.77485 14.4841 3.10824C14.9442 2.44162 15.5692 1.90562 16.2982 1.5525C17.1562 1.96474 17.8684 2.62847 18.34 3.45538C18.8116 4.2823 19.0203 5.2332 18.9382 6.1816H19.6691C19.7744 4.75689 19.3127 3.34825 18.3843 2.26238C17.456 1.17651 16.1363 0.501328 14.7126 0.38384C13.2888 0.266353 11.8763 0.716072 10.7825 1.63508C9.68878 2.5541 9.00236 3.86798 8.87272 5.29069L8.79272 6.1816H9.52L9.59636 5.35614Z"
                    fill="#EF4335"
                  />
                  <path
                    d="M18.3455 1.0908C18.9951 1.09081 19.6375 1.22584 20.2321 1.48731C20.8267 1.74878 21.3604 2.13098 21.7994 2.60967C22.2384 3.08836 22.5732 3.65308 22.7824 4.268C22.9916 4.88291 23.0707 5.5346 23.0146 6.18171H23.7419C23.7977 5.43892 23.6996 4.69262 23.4537 3.98949C23.2078 3.28637 22.8195 2.64156 22.3129 2.09543C21.8064 1.5493 21.1926 1.11359 20.5099 0.815583C19.8273 0.517576 19.0904 0.363679 18.3455 0.363525C18.0028 0.36349 17.6607 0.39514 17.3237 0.458071C17.6462 0.639523 17.9507 0.851396 18.2328 1.0908H18.3455Z"
                    fill="#EF4335"
                  />
                  <path
                    d="M27.2799 7.23984C27.2718 7.14942 27.2301 7.06532 27.163 7.00409C27.096 6.94285 27.0085 6.90891 26.9177 6.90894H25.4631V28.1784L29.4468 31.0755L27.2799 7.23984Z"
                    fill="#EF4335"
                  />
                  <path
                    d="M21.0833 31.6328C21.089 31.633 21.094 31.6364 21.0997 31.6364H28.9817L25.0961 28.8108L21.0833 31.6328Z"
                    fill="#EF4335"
                  />
                  <path
                    d="M24.7361 6.90894H22.9492L20.762 30.9693L24.7361 28.1744V6.90894Z"
                    fill="#EF4335"
                  />
                </svg>
              </div>
              <h3 className="text-black text-[20px] md:text-[22px] xl:text-[21px] 2xl:text-[22px] font-semibold mb-[10px]">
                Shopping Campaign
              </h3>
              <p>
                Work closely with clients to understand their business goals,
                target audience, and budget. Develop a comprehensive
              </p>

              <Link
                href="/services/service-details/"
                className="text-black text-[14px] mt-[25px] font-medium inline-block uppercase transition duration-500 ease-in-out hover:text-[#EF4335]"
              >
                read more{" "}
                <ArrowRight2
                  className="inline-block relative -top-[2px]"
                  size={20}
                  color="#EF4335"
                />
              </Link>
            </div>

            <div className="bg-white rounded-[20px] py-[50px] px-[40px] hover:bg-[#FAF4F4] transition delay-100 duration-300 ease-in-out">
              <div className="bg-[#F2F2F8] w-[70px] h-[70px] leading-[70px] rounded-full text-center mb-[15px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  className="inline-block"
                >
                  <g clipPath="url(#clip0_343_2552)">
                    <path
                      d="M31.344 0.00401357C25.0973 -0.107986 17.9733 3.15735 13.464 8.22268C9.15468 8.30401 4.95868 10.0707 1.86935 13.16C1.68935 13.3373 1.62535 13.6027 1.70401 13.8427C1.78401 14.084 1.99201 14.2587 2.24268 14.2947L7.38135 15.0307L6.74668 15.7413C6.51068 16.0053 6.52268 16.4067 6.77335 16.6573L15.3427 25.2267C15.472 25.356 15.6427 25.4213 15.8147 25.4213C15.9733 25.4213 16.132 25.3653 16.2587 25.252L16.9693 24.6173L17.7053 29.756C17.7413 30.0067 17.9387 30.1907 18.1773 30.2707C18.2387 30.2907 18.3027 30.3 18.368 30.3C18.5573 30.3 18.7507 30.2173 18.884 30.0853C21.9307 27.0387 23.6973 22.8427 23.7787 18.5333C28.8493 14.0147 32.1413 6.89335 31.996 0.65468C31.9867 0.300014 31.7 0.0133469 31.344 0.00401357ZM25.2 11.5133C24.5507 12.1627 23.6973 12.488 22.8427 12.488C21.988 12.488 21.1347 12.1627 20.4853 11.5133C19.1867 10.2133 19.1867 8.09868 20.4853 6.79868C21.7853 5.49868 23.9 5.49868 25.2 6.79868C26.5 8.09868 26.5 10.2147 25.2 11.5133Z"
                      fill="#EF4335"
                    />
                    <path
                      d="M3.63208 22.54C2.20541 23.9667 0.246743 30.412 0.0280765 31.1413C-0.0425901 31.376 0.0227432 31.6307 0.194743 31.804C0.322743 31.932 0.492077 32 0.666743 32C0.730743 32 0.794743 31.9907 0.858743 31.972C1.58808 31.7533 8.03341 29.7947 9.46008 28.368C11.0667 26.7613 11.0667 24.1467 9.46008 22.54C7.85208 20.9333 5.23874 20.9347 3.63208 22.54Z"
                      fill="#EF4335"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_343_2552">
                      <rect width="32" height="32" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <h3 className="text-black text-[20px] md:text-[22px] xl:text-[21px] 2xl:text-[22px] font-semibold mb-[10px]">
                Marketing Automation
              </h3>
              <p>
                Work closely with clients to understand their business goals,
                target audience, and budget. Develop a comprehensive
              </p>

              <Link
                href="/services/service-details/"
                className="text-black text-[14px] mt-[25px] font-medium inline-block uppercase transition duration-500 ease-in-out hover:text-[#EF4335]"
              >
                read more{" "}
                <ArrowRight2
                  className="inline-block relative -top-[2px]"
                  size={20}
                  color="#EF4335"
                />
              </Link>
            </div>

            <div className="bg-white rounded-[20px] py-[50px] px-[40px] hover:bg-[#FAF4F4] transition delay-100 duration-300 ease-in-out">
              <div className="bg-[#F2F2F8] w-[70px] h-[70px] leading-[70px] rounded-full text-center mb-[15px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  className="inline-block"
                >
                  <g clipPath="url(#clip0_343_2564)">
                    <path
                      d="M31.0621 5.6253H18.8117L24.0618 1.68766C24.4766 1.37729 24.5608 0.789549 24.2495 0.375741C23.9392 -0.0408162 23.3514 -0.122315 22.9376 0.188056L15.9998 5.39137L9.06202 0.188056C8.64821 -0.120503 8.06134 -0.0398787 7.7501 0.375741C7.43885 0.789549 7.52304 1.37729 7.93778 1.68766L13.1879 5.6253H0.937489C0.419308 5.6253 0 6.04461 0 6.56279V27.3126C0 27.8307 0.419308 28.25 0.937489 28.25H6.23674L4.08714 30.3996C3.72096 30.7658 3.72096 31.3591 4.08714 31.7253C4.45332 32.0915 5.04663 32.0915 5.41281 31.7253L8.88808 28.25H23.1115L26.5868 31.7253C26.953 32.0915 27.5463 32.0915 27.9125 31.7253C28.2787 31.3591 28.2787 30.7658 27.9125 30.3996L25.7628 28.25H31.0621C31.5803 28.25 31.9996 27.8307 31.9996 27.3125V6.56273C31.9996 6.04461 31.5803 5.6253 31.0621 5.6253ZM16.5198 16.7802L14.8865 17.8697L15.271 19.7931C15.3323 20.1008 15.2362 20.4184 15.0146 20.64C14.7931 20.8625 14.4736 20.9559 14.1678 20.8964L12.4228 20.5476L11.2574 23.815C11.1246 24.1886 10.7712 24.4376 10.3748 24.4376C9.97838 24.4376 9.62501 24.1886 9.49226 23.815L8.32684 20.5476L6.58186 20.8964C6.27424 20.9568 5.95749 20.8625 5.735 20.64C5.51344 20.4184 5.41731 20.1008 5.47862 19.7931L5.86312 17.8697L4.22983 16.7802C3.96889 16.6062 3.81233 16.3132 3.81233 16.0002C3.81233 15.6871 3.96889 15.3941 4.22983 15.2202L5.86312 14.1307L5.47862 12.2072C5.41731 11.8996 5.51344 11.5819 5.735 11.3604C5.95656 11.1388 6.2733 11.0436 6.58186 11.104L8.50534 11.4885L9.59482 9.85519C9.9427 9.33332 10.807 9.33332 11.1549 9.85519L12.2444 11.4885L14.1678 11.104C14.4745 11.0445 14.7931 11.1388 15.0147 11.3604C15.2363 11.5819 15.3324 11.8996 15.2711 12.2072L14.8866 14.1307L16.5199 15.2202C16.7808 15.3941 16.9374 15.6871 16.9374 16.0002C16.9373 16.3133 16.7807 16.6062 16.5198 16.7802ZM27.2497 20.6876H19.7498C19.2316 20.6876 18.8123 20.2683 18.8123 19.7501C18.8123 19.232 19.2316 18.8127 19.7498 18.8127H27.2497C27.7679 18.8127 28.1872 19.232 28.1872 19.7501C28.1872 20.2683 27.7679 20.6876 27.2497 20.6876ZM27.2497 16.9377H19.7498C19.2316 16.9377 18.8123 16.5184 18.8123 16.0002C18.8123 15.482 19.2316 15.0627 19.7498 15.0627H27.2497C27.7679 15.0627 28.1872 15.482 28.1872 16.0002C28.1872 16.5184 27.7679 16.9377 27.2497 16.9377ZM27.2497 13.1877H19.7498C19.2316 13.1877 18.8123 12.7684 18.8123 12.2502C18.8123 11.732 19.2316 11.3127 19.7498 11.3127H27.2497C27.7679 11.3127 28.1872 11.732 28.1872 12.2502C28.1872 12.7684 27.7679 13.1877 27.2497 13.1877Z"
                      fill="#EF4335"
                    />
                    <path
                      d="M12.9251 14.3788L13.1567 13.218L11.9958 13.4496C11.6186 13.5256 11.2423 13.3654 11.0318 13.0504L10.3744 12.0653L9.71704 13.0504C9.50648 13.3644 9.1238 13.5247 8.75299 13.4496L7.59213 13.218L7.82375 14.3788C7.89794 14.7515 7.74044 15.1323 7.42457 15.3429L6.43945 16.0003L7.42457 16.6576C7.74044 16.8682 7.89787 17.2491 7.82375 17.6217L7.59213 18.7825L8.75299 18.5509C9.19761 18.4594 9.66104 18.7089 9.81954 19.1552L10.3743 20.7097L10.9292 19.1552C11.0848 18.7166 11.5398 18.4548 11.9957 18.5509L13.1566 18.7825L12.9249 17.6217C12.8508 17.2491 13.0083 16.8682 13.3241 16.6576L14.3092 16.0003L13.3242 15.3428C13.0084 15.1323 12.8509 14.7514 12.9251 14.3788Z"
                      fill="#EF4335"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_343_2564">
                      <rect width="32" height="32" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <h3 className="text-black text-[20px] md:text-[22px] xl:text-[21px] 2xl:text-[22px] font-semibold mb-[10px]">
                Display Advertising
              </h3>
              <p>
                Work closely with clients to understand their business goals,
                target audience, and budget. Develop a comprehensive
              </p>

              <Link
                href="/services/service-details/"
                className="text-black text-[14px] mt-[25px] font-medium inline-block uppercase transition duration-500 ease-in-out hover:text-[#EF4335]"
              >
                read more{" "}
                <ArrowRight2
                  className="inline-block relative -top-[2px]"
                  size={20}
                  color="#EF4335"
                />
              </Link>
            </div>

            <div className="bg-white rounded-[20px] py-[50px] px-[40px] hover:bg-[#FAF4F4] transition delay-100 duration-300 ease-in-out">
              <div className="bg-[#F2F2F8] w-[70px] h-[70px] leading-[70px] rounded-full text-center mb-[15px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  className="inline-block"
                >
                  <g clipPath="url(#clip0_343_2577)">
                    <path
                      d="M12.5562 20.2413L12.0269 27.6867C12.7842 27.6867 13.1122 27.3613 13.5056 26.9707L17.0562 23.5773L24.4136 28.9653C25.7629 29.7173 26.7136 29.3213 27.0776 27.724L31.9069 5.09468L31.9082 5.09335C32.3362 3.09868 31.1869 2.31868 29.8722 2.80801L1.48557 13.676C-0.451763 14.428 -0.42243 15.508 1.15624 15.9973L8.41357 18.2547L25.2709 7.70668C26.0642 7.18135 26.7856 7.47201 26.1922 7.99735L12.5562 20.2413Z"
                      fill="#EF4335"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_343_2577">
                      <rect width="32" height="32" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <h3 className="text-black text-[20px] md:text-[22px] xl:text-[21px] 2xl:text-[22px] font-semibold mb-[10px]">
                Paid Social Media
              </h3>
              <p>
                Work closely with clients to understand their business goals,
                target audience, and budget. Develop a comprehensive
              </p>

              <Link
                href="/services/service-details/"
                className="text-black text-[14px] mt-[25px] font-medium inline-block uppercase transition duration-500 ease-in-out hover:text-[#EF4335]"
              >
                read more{" "}
                <ArrowRight2
                  className="inline-block relative -top-[2px]"
                  size={20}
                  color="#EF4335"
                />
              </Link>
            </div>

            <div className="bg-white rounded-[20px] py-[50px] px-[40px] hover:bg-[#FAF4F4] transition delay-100 duration-300 ease-in-out">
              <div className="bg-[#F2F2F8] w-[70px] h-[70px] leading-[70px] rounded-full text-center mb-[15px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  className="inline-block"
                >
                  <g clipPath="url(#clip0_343_2588)">
                    <path
                      d="M8.6488 5.45081H6.24707V7.6728C6.24707 8.33495 6.78578 8.87366 7.44793 8.87366C8.11009 8.87366 8.6488 8.33495 8.6488 7.6728V5.45081Z"
                      fill="#EF4335"
                    />
                    <path
                      d="M12.9252 7.67286V5.45081H10.5234V7.6728C10.5234 8.33495 11.0621 8.87366 11.7244 8.87366C12.3865 8.87372 12.9252 8.33502 12.9252 7.67286Z"
                      fill="#EF4335"
                    />
                    <path
                      d="M23.6145 19.2139V10.6014C23.1589 10.4553 22.7496 10.2055 22.4137 9.88007C21.8598 10.4167 21.1059 10.748 20.2756 10.748C19.4454 10.748 18.6914 10.4167 18.1376 9.88007C17.5838 10.4167 16.8299 10.748 15.9996 10.748C15.1694 10.748 14.4155 10.4167 13.8616 9.88007C13.3078 10.4167 12.5539 10.748 11.7237 10.748C10.8934 10.748 10.1395 10.4167 9.58563 9.88007C9.24971 10.2056 8.84038 10.4553 8.38477 10.6014V19.214H11.3157V14.2145C11.3157 13.697 11.7353 13.2774 12.2528 13.2774H19.7464C20.2639 13.2774 20.6835 13.697 20.6835 14.2145V19.214L23.6145 19.2139Z"
                      fill="#EF4335"
                    />
                    <path
                      d="M13.1904 15.1516H18.8098V19.2139H13.1904V15.1516Z"
                      fill="#EF4335"
                    />
                    <path
                      d="M17.2006 7.67286V5.45081H14.7988V7.6728C14.7988 8.33495 15.3375 8.87366 15.9998 8.87366C16.6618 8.87372 17.2006 8.33502 17.2006 7.67286Z"
                      fill="#EF4335"
                    />
                    <path
                      d="M24.5524 8.87372C25.2146 8.87372 25.7533 8.33502 25.7533 7.67286V5.45081H23.3516V7.6728C23.3515 8.33502 23.8902 8.87372 24.5524 8.87372Z"
                      fill="#EF4335"
                    />
                    <path
                      d="M25.5717 29.5189H21.5832V26.2356H10.5573V29.5189H6.42831C5.91078 29.5189 5.49121 29.9385 5.49121 30.456C5.49121 30.9735 5.91078 31.3931 6.42831 31.3931H25.5717C26.0893 31.3931 26.5088 30.9735 26.5088 30.456C26.5088 29.9385 26.0892 29.5189 25.5717 29.5189Z"
                      fill="#EF4335"
                    />
                    <path
                      d="M32 21.0881H0V23.4055C0 23.9334 0.427943 24.3614 0.955905 24.3614H31.0442C31.5721 24.3614 32.0001 23.9334 32.0001 23.4055L32 21.0881Z"
                      fill="#EF4335"
                    />
                    <path
                      d="M21.477 7.67286V5.45081H19.0752V7.6728C19.0752 8.33495 19.6139 8.87366 20.2761 8.87366C20.9383 8.87366 21.477 8.33502 21.477 7.67286Z"
                      fill="#EF4335"
                    />
                    <path
                      d="M31.0441 0.606934H0.955905C0.427943 0.606934 0 1.03488 0 1.56278V19.2139H6.51098V10.6014C5.27232 10.2041 4.37301 9.04178 4.37301 7.67286V4.75117C4.37301 4.10251 4.89885 3.57667 5.54751 3.57667H26.4525C27.1011 3.57667 27.627 4.10251 27.627 4.75123V7.67293C27.627 9.04184 26.7277 10.2042 25.489 10.6015V19.214H32V1.56278C32 1.03488 31.572 0.606934 31.0441 0.606934Z"
                      fill="#EF4335"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_343_2588">
                      <rect width="32" height="32" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <h3 className="text-black text-[20px] md:text-[22px] xl:text-[21px] 2xl:text-[22px] font-semibold mb-[10px]">
                Native Advertising
              </h3>
              <p>
                Work closely with clients to understand their business goals,
                target audience, and budget. Develop a comprehensive
              </p>

              <Link
                href="/services/service-details/"
                className="text-black text-[14px] mt-[25px] font-medium inline-block uppercase transition duration-500 ease-in-out hover:text-[#EF4335]"
              >
                read more{" "}
                <ArrowRight2
                  className="inline-block relative -top-[2px]"
                  size={20}
                  color="#EF4335"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicesCard;
