import React from "react";
import Breadcrumb from "./Breadcrumb";

function PageBreadcrumb({ title }) {
  return (
    <div className="bg-primary">
      <div className="max-w-360 mx-auto px-4 w-full flex justify-between items-center py-1 md:py-1">
      
      <h2 className="text-sm text-white font-bold md:text-[16px] lg:text-[18px]">
        {title}
      </h2>

      <Breadcrumb />

    </div>
    </div>
  );
}

export default PageBreadcrumb;