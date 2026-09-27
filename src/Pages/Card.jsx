import React, { useEffect, useState } from "react";
import PageBreadcrumb from "../Components/PageBreadcrumb";
import { RiDeleteBin6Line } from "react-icons/ri";
import ProductCard from "../Components/ProductCard";

function Card() {
  let [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => setData(data.products));
  }, []);

  return (
    <section className="mb-4 md:mb-10 lg:mb-14">
      <PageBreadcrumb title="Card" />
      <div className="max-w-360 mx-auto px-4 md:px-6 lg:px-0 mt-4 md:mt-7 lg:mt-12 mb-5 md:mb-10 lg:mb-15">
        <div className=" bg-border2 mt-5 md:mt-10 lg:mt-14 rounded ">
          <div className="grid grid-cols-[2fr_1fr_1fr_1fr_50px] items-center p-2 md:p-5">
            {/* Product */}
            <div className="text-xs md:text-sm lg:text-[15px] text-capitalize font-semibold font-quicksand">
              Product
            </div>

            {/* Price */}
            <div className="text-xs md:text-sm lg:text-[15px] text-capitalize font-semibold font-quicksand">
              Price
            </div>

            {/* Quantity */}
            <div className="text-xs md:text-sm lg:text-[15px] text-capitalize font-semibold font-quicksand">
              Quantity
            </div>

            {/* Total */}
            <div className="text-xs md:text-sm lg:text-[15px] text-capitalize font-semibold font-quicksand">
              Total
            </div>

            {/* Action */}
            <div className="text-xs md:text-sm lg:text-[15px] text-capitalize font-semibold font-quicksand">
              Action
            </div>
          </div>

          <div className=" bg-bg mt-2 md:mt-5 lg:mt-10">
            <div className="p-2 md:p-5 flex flex-col gap-3 md:gap-7">
              <div className="grid grid-cols-[2fr_1fr_1fr_1fr_50px] items-center  ">
                <div className="flex items-center gap-3">
                  <img
                    src="/public/→ product-1-1.jpg.png"
                    className="w-10 h-10 object-contain"
                  />
                  <span className="text-xs md:text-sm text-secondary2">
                    This is prodcut
                  </span>
                </div>

                <div className="text-xs md:text-sm text-secondary2">
                  $ 10.225
                </div>

                <div>
                  <div className="flex items-center gap-2 md:gap-4 lg:gap-6 bg-white px-2  py-1 md:px-5 md:py-2 rounded w-fit">
                    <button className="cursor-pointer">-</button>
                    <span>1</span>
                    <button className="cursor-pointer">+</button>
                  </div>
                </div>

                <div className="text-xs md:text-sm text-secondary2">
                  $ 30.25
                </div>

                <div>
                  <RiDeleteBin6Line className="text-secondary2 cursor-pointer" />
                </div>
              </div>
              <div className="grid grid-cols-[2fr_1fr_1fr_1fr_50px] items-center ">
                <div className="flex items-center gap-3">
                  <img
                    src="/public/→ product-1-1.jpg.png"
                    className="w-10 h-10 object-contain"
                  />
                  <span className="text-xs md:text-sm text-secondary2">
                    This is prodcut
                  </span>
                </div>

                <div className="text-xs md:text-sm text-secondary2">
                  $ 10.225
                </div>

                <div>
                  <div className="flex items-center gap-2 md:gap-4 lg:gap-6 bg-white px-2  py-1 md:px-5 md:py-2 rounded w-fit">
                    <button className="cursor-pointer">-</button>
                    <span>1</span>
                    <button className="cursor-pointer">+</button>
                  </div>
                </div>

                <div className="text-xs md:text-sm text-secondary2">
                  $ 30.25
                </div>

                <div>
                  <RiDeleteBin6Line className="text-secondary2 cursor-pointer" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-5 md:mt-8 lg:mt-14">
        <h4 className="text-center text-cardtittle text-xl md:text-[26px] lg:text-[30px] font-bold tracnking-[0.48px]">
          Popular Products
        </h4>
        <p className="text-xs md:text-sm text-secondary2 text-center md:w-147.5 leading-5.5 mx-auto tracnking-[0.48px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et viverra maecenas accumsan lacus
          vel facilisis.
        </p>
      </div>
      <div className="mt-5 md:mt-10 lg:mt-16 flex justify-between">
        {data.slice(10, 15).map((items) => (
          <ProductCard
            className="md:w-66!"
            thumbnail={items.thumbnail}
            title={items.title}
            des={items.description}
            rating={items.rating}
            category={items.category}
            price={items.price}
            discountPercentage={items.discountPercentage}
          />
        ))}
      </div>
    </section>
  );
}

export default Card;
