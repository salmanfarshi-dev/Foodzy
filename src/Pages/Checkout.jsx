import React from "react";
import PageBreadcrumb from "../Components/PageBreadcrumb";
import { FaStar } from "react-icons/fa6";

function Checkout() {
  return (
    <section>
      <PageBreadcrumb title="Checkout" />

      <div className="max-w-360 mx-auto px-4 md:px-6 lg:px-0 ">
        <div className="my-7 md:my-16 lg:my-25 grid grid-cols-12 gap-5 md:gap-10 lg:gap-16">
          <div className="col-span-12 md:col-span-4 border border-border2 rounded p-2 md:p-4 lg:p-6 shadow">
            <h5 className="text-sm md:text-[16px] lg:text-xl font-semibold">
              Summery
            </h5>

            <div className="mt-3 md:mt-5 flex flex-col gap-2 md:gap-3 lg:gap-5 border-b border-border2 pb-2 md:pb-6">
              <div className="flex justify-between items-center">
                <h6 className="text-xs md:text-sm text-secondary2 capitalize">
                  subtotal
                </h6>
                <span className="text-xs md:text-sm text-cardtittle">
                  $ 10.56
                </span>
              </div>
              <div className="flex justify-between items-center">
                <h6 className="text-xs md:text-sm text-secondary2 capitalize">
                  delivery charges
                </h6>
                <span className="text-xs md:text-sm text-cardtittle">$ 10</span>
              </div>
            </div>
            <div className="flex justify-between items-center mt-2 md:mt-5">
              <h6 className=" text-sm md:text-[16px] text-cardtittle font-semibold capitalize">
                total ammount
              </h6>
              <span className="text-xs md:text-sm text-cardtittle font-semibold">
                $ 100
              </span>
            </div>

            <div className="mt-4 md:mt-7 lg:mt-9">

              <div className="flex items-center gap-4">
               <div className="bg-bg flex justify-center items-center  w-20 h-20 rounded">
                 <img src="/→ product-1-1.jpg.png" alt="" className=" w-14 h-14"/>
                 
               </div>
               <div className="flex flex-col gap-1 md:gap-2 ">
                  <h3 className="text-sm md:text-[16px] tracking-[0.48px] capitalize text-cardtittle" >
                    this is my product
                  </h3>
                   <div className="flex items-center gap-x-1 md:gap-x-2">
                            <FaStar className="text-yellow-400"/>
                            <FaStar className="text-yellow-400"/>
                            <FaStar className="text-yellow-400"/>
                            <FaStar className="text-yellow-400"/>
                            <FaStar className="text-yellow-400"/>
                          </div>
                          <div className="flex gap-1 md:gap-4 lg:md-6">
                            <h3 className="text-sm md:text-[16px] font-bold text-success md:tracking-[0.48px]">$ 120.25</h3>
                            <span className="text-xs md:text-sm font-normal text-secondary2 md:tracking-[0.48px] line-through"> $ 12.25</span>
                          </div>
                 </div>
              </div>
            </div>
          </div>













          <div className="col-span-12 md:col-span-8 border border-border2 rounded p-2 md:p-4 lg:p-6 shadow"></div>
        </div>
      </div>
    </section>
  );
}

export default Checkout;
