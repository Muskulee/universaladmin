import Image from "next/image";
import React, { ReactNode } from "react";
import Head from "next/head";
import Link from "next/link";

type LayoutProps = {
  children: ReactNode;
};

const SigupLayout = ({ children }: LayoutProps) => {
  return (
    <>
      <div className="bg-white dark:bg-darkblack-500 min-h-screen">
        <div className="flex flex-col lg:flex-row justify-between">
          {/* Left */}
          <div className="lg:w-1/2 px-5 xl:pl-12 pt-10">
            <header>
              <Link href="/" className="">
                <img
                  src="assets/images/logo/logo-color.svg"
                  className="block dark:hidden"
                  alt="Logo"
                />
                <img
                  src="assets/images/logo/logo-white.svg"
                  className="hidden dark:block"
                  alt="Logo"
                />
              </Link>
            </header>

            {children}
          </div>
          {/* Right */}
          {/* <!-- Right --> */}
          <div className="lg:w-1/2 lg:block hidden bg-[#F6FAFF] dark:bg-darkblack-600 p-20 relative">
            <ul>
              <li className="absolute top-10 left-8">
                <img src="assets/images/shapes/square.svg" alt="" />
              </li>
              <li className="absolute right-12 top-14">
                <img src="assets/images/shapes/vline.svg" alt="" />
              </li>
              <li className="absolute bottom-7 left-8">
                <img src="assets/images/shapes/dotted.svg" alt="" />
              </li>
            </ul>
            <div className="mb-10">
              <img
                src="assets/images/illustration/signup.svg
            "
                alt=""
              />
            </div>
            <div>
              <div className="text-center max-w-lg px-1.5 m-auto">
                <h3 className="text-bgray-900 dark:text-white font-semibold font-popins text-4xl mb-4">
                  Speady, Easy and Fast
                </h3>
                <p className="text-bgray-600 dark:text-darkblack-300 text-sm font-medium">
                  BankCo. help you set saving goals, earn cash back offers, Go
                  to disclaimer for more details and get paychecks up to two
                  days early. Get a
                  <span className="text-success-300 font-bold">$20</span> bonus
                  when you receive qualifying direct deposits
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SigupLayout;
