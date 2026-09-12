import React from "react";
import PageBreadcrumb from "../Components/PageBreadcrumb";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";

const offer = [
  {
    id: 1,
    icon: "/pricetag.png",
    title: "Product Packing",
    des: "Lorem ipsum dolor sit amet, consectetur adipisicing.",
  },
  {
    id: 2,
    icon: "/service.png",
    title: "24X7 Support",
    des: "Lorem ipsum dolor sit amet, consectetur adipisicing.",
  },
  {
    id: 3,
    icon: "/deal.png",
    title: "Payment Secure",
    des: "Lorem ipsum dolor sit amet, consectetur adipisicing.",
  },
  {
    id: 4,
    icon: "/assortment.png",
    title: "Payment Secure",
    des: "Lorem ipsum dolor sit amet, consectetur adipisicing.",
  },
];
function AboutUs() {
  return (
    <>
      <PageBreadcrumb title="About us" />

      <div className="max-w-360 mx-auto px-4 md:px-6 lg:px-0 py-4 md:py-16 lg:py-20">
        <div className="flex flex-col md:flex-row gap-5 items-center justify-between">
          <div className="md:w-[40%]">
            <h3 className="text-xl md:text-[28px] lg:text-[32px] font-bold tracking-[0.48px] text-[#212529] mb-3 md:mb-5">
              About The Carrot
            </h3>
            <p className="text-xs md:text-sm text-[#7A7A7A] tracking-[0.48px] md:leading-[24.5px] leading-4.5 flex-wrap">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione,
              recusandae necessitatibus quasi incidunt alias adipisci pariatur
              earum iure beatae assumenda rerum quod. Tempora magni autem a
              voluptatibus neque.
            </p>
            <p className="text-xs md:text-sm text-[#7A7A7A] tracking-[0.48px] md:leading-[24.5px] leading-4.5  flex-wrap py-3 md:py-5 lg:py-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut vitae
              rerum cum accusamus magni consequuntur architecto, ipsum deleniti
              expedita doloribus suscipit voluptatum eius perferendis amet!.
            </p>
            <p className="text-xs md:text-sm text-[#7A7A7A] tracking-[0.48px] md:leading-[24.5px] leading-4.5  flex-wrap">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Accusantium, maxime amet architecto est exercitationem optio ea
              maiores corporis beatae, dolores doloribus libero nesciunt qui
              illum? Voluptates deserunt adipisci voluptatem magni sunt sed
              blanditiis quod aspernatur! Iusto?
            </p>

            <div className="bg-bg w-full py-3 md:py-4 lg:py-6 rounded-[5px] mt-3 md:mt-5 flex justify-evenly items-center">
              <div className="flex flex-col items-center">
                <h4 className="text-xl md:text-[30px] lg:text-[40px] font-bold text-primary font-quicksand">
                  0.1{" "}
                  <span className="text-xs md:text-[16px] lg:text-xl text-secondary2">
                    k
                  </span>
                </h4>
                <p className="text-[#212529] text-xs md:text-sm lg:text-[16px] tracking-[0.48px] ">
                  Vendors
                </p>
              </div>
              <div className="flex flex-col items-center">
                <h4 className="text-xl md:text-[30px] lg:text-[40px] font-bold text-primary font-quicksand">
                  23{" "}
                  <span className="text-xs md:text-[16px] lg:text-xl text-secondary2">
                    k
                  </span>
                </h4>
                <p className="text-[#212529] text-xs md:text-sm lg:text-[16px] tracking-[0.48px] ">
                  Customers
                </p>
              </div>
              <div className="flex flex-col items-center">
                <h4 className="text-xl md:text-[30px] lg:text-[40px] font-bold text-primary font-quicksand">
                  2{" "}
                  <span className="text-xs md:text-[16px] lg:text-xl text-secondary2">
                    k
                  </span>
                </h4>
                <p className="text-[#212529] text-xs md:text-sm lg:text-[16px] tracking-[0.48px] ">
                  Products
                </p>
              </div>
            </div>
          </div>

          <div className=" md:w-[43%]">
            <img src="/aboutbanner.png" alt="" className="h-full w-full" />
          </div>
        </div>

        <div className="mt-6 md:mt-16 lg:mt-20 ">
          <Swiper
            pagination={{
              dynamicBullets: true,
            }}
            modules={[Pagination]}
            slidesPerView={2}
            spaceBetween={12}
            className="mySwiper pb-6! [&_.swiper-pagination]:bottom-0! [&_.swiper-pagination-bullet]:bg-gray-700!
    [&_.swiper-pagination-bullet-active]:bg-primary!"
            breakpoints={{
              768: {
                slidesPerView: 4,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 20,
              },
            }}
          >
            {offer.map((item) => (
              <SwiperSlide key={item.id} className="h-auto">
                <div className="flex gap-x-3 md:gap-x-5 bg-bg py-2 md:py-5 rounded-[10px] shadow h-full min-h-17.5">
                  <div className="text-center flex flex-col justify-center">
                    <div className="flex justify-center items-center">
                      <img
                        src={item.icon}
                        alt=""
                        className="w-8 h-8 md:w-12 md:h-12 object-contain shrink-0"
                      />
                    </div>
                    <h3 className="text-black font-semibold text-sm md:text-[16px] lg:text-[18px] font-quicksand mt-1 md:mt-2">
                      {item.title}
                    </h3>

                    <p className="text-xs md:text-sm font-lato mt-2 md:mt-4 font-normal text-secondary px-3 md:px-[20%]">
                      {item.des}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
}

export default AboutUs;
