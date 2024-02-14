import Image from "next/image";
import React, { ReactNode } from "react";

type LayoutProps = {
  children: ReactNode;
};

const LoginLayout = ({ children }: LayoutProps) => {
  return (
    <>
      <div className="bg-white dark:bg-darkblack-500 min-h-screen">
        <div className="flex flex-col lg:flex-row justify-between">
          {/* Left */}
          <div className="lg:w-1/2 px-5 xl:pl-12 pt-10">
            <header>
              <a href="index.html" className="">
                <Image
                  src="/assets/images/logo/logo-color.svg"
                  className="block dark:hidden"
                  alt="Logo"
                  width={120} // Set the actual width here
                  height={40} // Set the actual height here
                />
                <Image
                  src="/app/assets/images/logo-color.svg"
                  className="hidden dark:block"
                  alt="Logo"
                  width={120} // Set the actual width here
                  height={40} // Set the actual height here
                />
              </a>
            </header>
            <div className="max-w-[450px] m-auto pt-24 pb-16">
              <header className="text-center mb-8">
                <h2 className="text-bgray-900 dark:text-white text-4xl font-semibold font-poppins mb-2">
                  Sign in to Bankco.
                </h2>
                <p className="font-urbanis text-base font-medium text-bgray-600 dark:text-bgray-50">
                  Send, spend and save smarter
                </p>
              </header>
              {children}
            </div>
          </div>
          {/* Right */}
          {/* <!-- Right --> */}
          <div className="lg:w-1/2 lg:block hidden bg-[#F6FAFF] dark:bg-darkblack-600 p-20 relative">
            <ul>
              <li className="absolute top-10 left-8">
                <img src="/assets/images/shapes/square.svg" alt="" />
              </li>
              <li className="absolute right-12 top-14">
                <img src="/assets/images/shapes/vline.svg" alt="" />
              </li>
              <li className="absolute bottom-7 left-8">
                <img src="/assets/images/shapes/dotted.svg" alt="" />
              </li>
            </ul>
            <div className="">
              <img src="/assets/images/illustration/signin.svg" alt="" />
            </div>
            <div>
              <div className="text-center max-w-lg px-1.5 m-auto">
                <h3 className="text-bgray-900 dark:text-white font-semibold font-popins text-4xl mb-4">
                  Speady, Easy and Fast
                </h3>
                <p className="text-bgray-600 dark:text-bgray-50 text-sm font-medium">
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

export default LoginLayout;
