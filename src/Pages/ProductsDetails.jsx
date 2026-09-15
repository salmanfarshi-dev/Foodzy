import React from "react";
import PageBreadcrumb from "../Components/PageBreadcrumb";
import { Button, Checkbox } from "@heroui/react";

function ProductsDetails() {
  return (
    <>
      <PageBreadcrumb title="Productdetails" />

      <section className="max-w-360 mx-auto px-4 md:px-6 lg:px-0 py-4 md:py-16 lg:py-20">
        <div className="flex  justify-between items-center gap-2 md:gap-3">
          <div className="md:w-[50%]">
            <div className="md:w-117.5 md:h-117.5 bg-bg rounded flex justify-center items-center">
              <img src="/public/→ product-1-1.jpg.png" alt="" className="md:w-70"/>
            </div>
            <div className="flex items-center gap-x-2 md:gap-x-4 mt-2 md:mt-4 ">
              <div className="w-20 h-20 bg-bg rounded  flex justify-center items-center">
                <img src="/public/→ product-1-1.jpg.png" alt="" className="w-10 h-10 object-cover"/>

              </div>
              <div className="w-20 h-20 bg-bg rounded  flex justify-center items-center">
                <img src="/public/→ product-1-1.jpg.png" alt="" className="w-10 h-10 object-cover"/>

              </div>
              <div className="w-20 h-20 bg-bg rounded  flex justify-center items-center">
                <img src="/public/→ product-1-1.jpg.png" alt="" className="w-10 h-10 object-cover"/>

              </div>
              <div className="w-20 h-20 bg-bg rounded  flex justify-center items-center">
                <img src="/public/→ product-1-1.jpg.png" alt="" className="w-10 h-10 object-cover"/>

              </div>
              <div className="w-20 h-20 bg-bg rounded  flex justify-center items-center">
                <img src="/public/→ product-1-1.jpg.png" alt="" className="w-10 h-10 object-cover"/>

              </div>
            </div>
            
          </div>
        </div>
      </section>
    </>
  );
}

export default ProductsDetails;
