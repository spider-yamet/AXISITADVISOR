"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight2 } from "iconsax-react";
import Image from "next/image";

import logo from "/public/images/logo.png";

const Navbar: React.FC = () => {
  const currentRoute = usePathname();

  // Sticky Navbar
  useEffect(() => {
    let elementId = document.getElementById("navbar");
    document.addEventListener("scroll", () => {
      if (window.scrollY > 170) {
        elementId?.classList.add("isSticky");
      } else {
        elementId?.classList.remove("isSticky");
      }
    });

    return () => {
      document.removeEventListener("scroll", () => {
        if (window.scrollY > 170) {
          elementId?.classList.add("isSticky");
        } else {
          elementId?.classList.remove("isSticky");
        }
      });
    };
  }, []);

  // Toggle active class
  const [isActive, setActive] = useState<boolean>(false);
  const handleToggleSearchModal = () => {
    setActive(!isActive);
  };

  return (
    <>
      <div
        id="navbar"
        className="navbar-area bg-transparent relative z-[2] py-[20px] lg:py-[25px] xl:py-0"
      >
        <div className="container mx-auto">
          <nav
            className={`navbar relative flex flex-wrap ${
              isActive ? "active" : ""
            }`}
          >
            <div className="self-center">
              <Link href="/">
                <Image src={logo} className="inline" alt="logo"/>
              </Link>
            </div>

            {/* Toggle button */}
            <button
              className="navbar-toggler absolute ml-auto right-0 top-[4px] xl:hidden"
              type="button"
              onClick={handleToggleSearchModal}
            >
              <span className="burger-menu text-black cursor-pointer leading-none text-[30px]">
                <i className="bx bx-menu"></i>
              </span>
            </button>

            <div className="navbar-collapse flex self-center grow basis-auto">
              <ul className="navbar-nav self-center flex-row mx-auto xl:flex">
                <li className="xl:mx-[10px] 2xl:mx-[18px] py-[10px] lg:py-[15px] xl:py-[35px] 2xl:py-[41.5px] relative group last:mr-0 first:ml-0">
                  <Link
                    href="/"
                    className={`uppercase text-[14px] font-medium transition-all hover:text-[#EF4335] ${
                      currentRoute === "/"
                        ? "text-[#EF4335]"
                        : "text-black"
                    }`}
                  >
                    Home
                  </Link>
                </li>

                <li className="xl:mx-[10px] 2xl:mx-[18px] py-[10px] lg:py-[15px] xl:py-[35px] 2xl:py-[41.5px] relative group last:mr-0 first:ml-0">
                  <a
                    href="#"
                    className="text-black uppercase text-[14px] font-medium transition-all hover:text-[#EF4335] dropdown-toggle"
                    onClick={(e) => e.preventDefault()}
                  >
                    About Us
                  </a>

                  <ul className="absolute bg-white border left-0 w-[270px] top-[100%] shadow-dropdown py-[15px] opacity-0 invisible transition-all group-hover:opacity-100 group-hover:visible">
                    <li className="py-[7px] px-[22px]">
                      <Link
                        href="/about-us/"
                        className={`block font-medium text-[15px] transition-all hover:text-[#EF4335] ${
                          currentRoute === "/about-us/"
                            ? "text-[#EF4335]"
                            : "text-black"
                        }`}
                      >
                        Who we are
                      </Link>
                    </li>

                    <li className="py-[7px] px-[22px]">
                      <Link
                        href="/team/"
                        className={`block font-medium text-[15px] transition-all hover:text-[#EF4335] ${
                          currentRoute === "/team/"
                            ? "text-[#EF4335]"
                            : "text-black"
                        }`}
                      >
                        Team
                      </Link>
                    </li>
                  </ul>
                </li>

                <li className="xl:mx-[10px] 2xl:mx-[18px] py-[10px] lg:py-[15px] xl:py-[35px] 2xl:py-[41.5px] relative group last:mr-0 first:ml-0">
                  <Link
                    href="/careers/"
                    className={`uppercase text-[14px] font-medium transition-all hover:text-[#EF4335] ${
                      currentRoute === "/careers/"
                        ? "text-[#EF4335]"
                        : "text-black"
                    }`}
                  >
                    CAREERS
                  </Link>
                </li>

                <li className="xl:mx-[10px] 2xl:mx-[18px] py-[10px] lg:py-[15px] xl:py-[35px] 2xl:py-[41.5px] relative group last:mr-0 first:ml-0">
                  <Link
                    href="/contact-us/"
                    className={`uppercase text-[14px] font-medium transition-all hover:text-[#EF4335] ${
                      currentRoute === "/contact-us/"
                        ? "text-[#EF4335]"
                        : "text-black"
                    }`}
                  >
                    Contact
                  </Link>
                </li>
              </ul>

              {/* Other options */}
              <div className="other-options self-center border-t border-[#eeeeee] pt-[20px] xl:pt-[0] pb-[10px] xl:pb-[0] xl:border-none xl:ml-[20px] 2xl:ml-[15px]">
                <Link
                  href="/contact-us/"
                  className="bg-black text-white text-[14px] font-medium inline-block uppercase rounded-full py-[15px] px-[30px] transition duration-500 ease-in-out hover:bg-[#EF4335]"
                >
                  get a proposal{" "}
                  <ArrowRight2
                    className="inline-block relative -top-[2px]"
                    size={20}
                  />
                </Link>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Navbar;
