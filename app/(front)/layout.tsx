"use client";

import { ReactNode } from "react";
import GeneralNav from "../_lib/smalls/GeneralNav";
type LayoutProps = {
  children?: ReactNode;
  style?: React.CSSProperties;
  closed?: boolean;
};

const FrontLayout = ({ children }: LayoutProps) => {
  return (
    <div>
      <GeneralNav />        

      <div className="px-8 mt-2 bg-[#F6FAFF]">{children}</div>
    </div>
  );
};

export default FrontLayout;
