import React, { useEffect, useState } from "react";
import PageBreadcrumb from "../Components/PageBreadcrumb";
import ProductCard from "../Components/ProductCard";
import { RiDeleteBinLine } from "react-icons/ri";

function Wishtlist() {
  let [data, setData] = useState([]);
  const [show, setShow] = useState(12);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => setData(data.products));
  }, []);

  return (
    <section>
      <PageBreadcrumb title="Wishlist" />
      <div className="max-w-360 mx-auto px-4 md:px-6 lg:px-0 ">
        <div className="mt-3 md:mt-8 lg:mt-11 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-6">
          {data.slice(0, show).map((item) => (
            <ProductCard
              deleteicon={
                <RiDeleteBinLine className="text-white cursor-pointer" />
              }
              thumbnail={item.thumbnail}
              title={item.title}
              des={item.description}
              rating={item.rating}
              category={item.category}
              price={item.price}
              discountPercentage={item.discountPercentage}
            />
          ))}
        </div>

         <div className="mt-5 md:mt-8 lg:mt-14">
          <h4 className="text-center text-cardtittle text-xl md:text-[26px] lg:text-[30px] font-bold tracnking-[0.48px]">
            Popular Products
          </h4>
          <p className="text-xs md:text-sm text-secondary2 text-center md:w-147.5 leading-5.5 mx-auto tracnking-[0.48px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et viverra maecenas accumsan
            lacus vel facilisis.
          </p>
        </div>

        <div className="mt-5 md:mt-10 lg:mt-16 mb-4 md:mb-10 lg:mb-16 flex justify-between flex-wrap">
          {data.slice(20, 25).map((items) => (
            <ProductCard
               className="w-full sm:w-[calc(50%-8px)] md:w-[calc(33.33%-14px)] lg:w-[calc(20%-20px)]"
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
      </div>
    </section>
  );
}

export default Wishtlist;
