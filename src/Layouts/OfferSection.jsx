import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";

const offer = [
  {
    id: 1,
    icon: "/pricetag.png",
    title: "Best prices & offers",
    des: "Orders $50 or more",
  },
  {
    id: 2,
    icon: "/service.png",
    title: "Free delivery",
    des: "24/7 amazing services",
  },
  {
    id: 3,
    icon: "/deal.png",
    title: "Great daily deal",
    des: "When you sign up",
  },
  {
    id: 4,
    icon: "/assortment.png",
    title: "Wide assortment",
    des: "Mega Discounts",
  },
  {
    id: 5,
    icon: "/return.png",
    title: "Easy returns",
    des: "Within 30 days",
  },
];

function OfferSection() {
  return (
    <section className="max-w-360 mx-auto px-4 md:px-6 lg:px-0 mt-4 md:mt-7 lg:mt-12 pb-5 md:pb-10">
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
            slidesPerView: 5,
            spaceBetween: 20,
          },
        }}
      >
        {offer.map((item) => (
          <SwiperSlide key={item.id} className="h-auto">
            <div className="flex items-center gap-x-3 md:gap-x-5 bg-bg px-2 md:px-4 py-2 md:py-3 rounded-[10px] shadow h-full min-h-17.5">
              <img
                src={item.icon}
                alt={item.title}
                className="w-8 h-8 md:w-12 md:h-12 object-contain shrink-0"
              />

              <div>
                <h3 className="text-black font-semibold text-sm md:text-[16px] lg:text-[18px] font-quicksand">
                  {item.title}
                </h3>

                <p className="text-xs md:text-sm font-lato font-normal text-secondary">
                  {item.des}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default OfferSection;
