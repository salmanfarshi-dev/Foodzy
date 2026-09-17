import React from "react";
import PageBreadcrumb from "../Components/PageBreadcrumb";
import { Button, Checkbox } from "@heroui/react";
import { FaStar } from "react-icons/fa";

function ProductsDetails() {
  return (
    <>
      <PageBreadcrumb title="Productdetails" />

      <section className="max-w-360 mx-auto px-4 md:px-6 lg:px-0 py-4 md:py-16 lg:py-20">
        <div className="flex flex-col md:flex-row justify-between gap-2 md:gap-3">
          <div className="md:w-[50%]">
            <div className="md:w-117.5 md:h-117.5 bg-bg rounded flex justify-center items-center border border-border1">
              <img
                src="/public/→ product-1-1.jpg.png"
                alt=""
                className="md:w-70"
              />
            </div>
            <div className="flex items-center gap-x-2 md:gap-x-4 mt-2 md:mt-4 ">
              <div className="w-20 h-20 bg-bg rounded  flex justify-center items-center border border-border1">
                <img
                  src="/public/→ product-1-1.jpg.png"
                  alt=""
                  className="w-10 h-10 object-cover"
                />
              </div>
            </div>
          </div>

          <div className="md:w-[50%]">
            <h4 className="text-[18px] md:text-[22px] font-quicksand font-semibold text-cardtittle">
              Product Name
            </h4>

            <p className="pt-2 md:pt-4 pb-3 md:pb-5 tracking-[0.48px] md:leading-6.2 md:w-116.5 text-secondary border-b border-border2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. In, iure
              minus error doloribus saepe natus?
            </p>

            <div className="flex items-center gap-2 md:gap-5 my-3 md:my-5">
              <div className="flex items-center gap-x-1 md:gap-x-2">
                        <FaStar className="text-yellow-400"/>
                        <FaStar className="text-yellow-400"/>
                        <FaStar className="text-yellow-400"/>
                        <FaStar className="text-yellow-400"/>
                        <FaStar className="text-yellow-400"/>
                      </div>
                      <p className="text-xs md:text-sm text-secondary2">( 40 review )</p>
            </div>
            <div className="mt-3 md:mt-6 flex flex-col gap-2 md:gap-4">
              
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ProductsDetails;
