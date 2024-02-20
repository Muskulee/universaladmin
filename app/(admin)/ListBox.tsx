import React from "react";

type ListBoxProp = {
  children: React.ReactNode;
};

export const ListboxWrapper = ({ children }: ListBoxProp) => (
  <div className="w-full max-w-[260px] border-small px-1 py-2  border-default-200 dark:border-default-100 ">
    {children}
  </div>
);
