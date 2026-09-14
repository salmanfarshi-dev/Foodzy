import React from "react";
import PageBreadcrumb from "../Components/PageBreadcrumb";
import { Checkbox } from "@heroui/react";

function ProductsDetails() {
  return (
    <>
      <PageBreadcrumb title="Productdetails" />

      <section className="max-w-360 mx-auto px-4 md:px-6 lg:px-0 py-4 md:py-16 lg:py-20">
        <div className="grid grid-cols-12 gap-2 md:gap-3">
          <div className="col-span-3">
            <div className="bg-bg p-2 md:p-4 lg:p-6 rounded">
              <h5 className="text-sm md:text-[16px] font-semibold text-cardtittle border-b pb-3 border-border1 tracking-[0.48px] ">
                Product Category
              </h5>

              <div className="flex flex-col gap-2 md:gap-3 mt-2 md:mt-4">
                <div className="flex items-center justify-between">
                  <Checkbox
                    value="milk"
                    classNames={{
                      wrapper: "group-data-[selected=true]:bg-blue-500",
                      label: "tracking-[0.48px] text-xs md:text-sm text-[#7A7A7A]"
                    }}
                  >
                    Juice & Drinks
                  </Checkbox>

                  <span className="tracking-[0.48px] text-xs md:text-sm text-[#7A7A7A]">[ 20 ]</span>
                </div>
                <div className="flex items-center justify-between">
                  <Checkbox
                    value="milk"
                    classNames={{
                      wrapper: "group-data-[selected=true]:bg-blue-500",
                      label: "tracking-[0.48px] text-xs md:text-sm text-[#7A7A7A]"
                    }}
                  >
                    Dairy & Milk
                  </Checkbox>

                  <span className="tracking-[0.48px] text-xs md:text-sm text-[#7A7A7A]">[ 54 ]</span>
                </div>
                <div className="flex items-center justify-between">
                  <Checkbox
                    value="milk"
                    classNames={{
                      wrapper: "group-data-[selected=true]:bg-blue-500",
                      label: "tracking-[0.48px] text-xs md:text-sm text-[#7A7A7A]"
                    }}
                  >
                  Snack & Spice
                  </Checkbox>

                  <span className="tracking-[0.48px] text-xs md:text-sm text-[#7A7A7A]">[ 64 ]</span>
                </div>
              </div>

 <h5 className="text-sm md:text-[16px] font-semibold text-cardtittle border-b pb-3 border-border1 tracking-[0.48px] mt-2 md:mt-4 lg:mt-6 ">
                Filter By Price
              </h5>

            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ProductsDetails;
