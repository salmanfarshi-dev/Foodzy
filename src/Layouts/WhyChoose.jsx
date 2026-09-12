import React from "react";

const whychoose = [
  {
    id: 1,
    title: "Convenient and Reliable",
    des: "Whether you dine in, take out, or order delivery, our service is convenient, fast, and reliable, making mealtime hassle-free.",
    icon: "/delivery.png",
  },
  {
    id: 2,
    title: "Variety of Options",
    des: "From hearty meals to light snacks, we offer a wide range of options to suit every taste and craving.",
    icon: "/menu.png",
  },
  {
    id: 3,
    title: "Eat Burger",
    des: "Our burgers are grilled to perfection, with juicy patties and flavorful toppings that make every bite a delicious experience.",
    icon: "/eat.png",
  },
];
function WhyChoose() {
  return (
    <section className="bg-gray-100">
      <div className="max-w-360 mx-auto px-4 md:px-6 lg:px-0 pt-4 md:pt-7 lg:pt-12 pb-5 md:pb-10 lg:pb-20">
        <div className="flex flex-col md:flex-row gap-5 md:gap-16 lg:gap-20 justify-center">
          <div className="md:w-100 h-100 overflow-hidden rounded-[29px]">
            <img
              src="/left.png"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <div className="">
            <h3 className="text-xl md:text-[30px] lg:text-[40px] font-bold text-[#2D2D2D] font-quicksand">
              Why People Choose us?
            </h3>

            <div className="mt-5 md:mt-7 lg:mt-9 flex flex-col gap-y-4 md:gap-y-7 lg:gap-y-9">
              {whychoose.map((item) => (
                <div
                  className="md:w-157.5 rounded-[18px] shadow px-2 md:px-4 py-2 md:py-4 hover:shadow-xl duration-300"
                  key={item.id}
                >
                  <div className="flex items-center gap-x-3 md:gap-x-5 lg:gap-x-6">
                    <div className="w-14 h-14 md:w-18 md:h-18 rounded-full shadow flex justify-center items-center">
                      <img src={item.icon} alt="" className="w-8 md:w-fit" />
                    </div>
                   <div className="">
                     <h3 className="text-[18px] md:text-[22px] lg:text-[28px] font-semibold text-black">{item.title}</h3>
                    <p className="text-sm md:text-[16px] lg:text-xl text-secondary w-60 md:w-121.75 flex-wrap">{item.des}</p>
                   </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyChoose;
