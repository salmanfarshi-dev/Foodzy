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
      </div>
    </section>
  );
}

export default Wishtlist;
